const Vec3 = require('tera-vec3');

const {
    EVENT_MESSAGE_TYPE,
    DUNGEONS
} = require('./config');

module.exports = function DungeonsGuide(mod) {
    let debug = false;
    let bossInfo = null;
    let bossCurrentPos = null;
    let UID = 999999999;

    mod.hook('S_BOSS_GAGE_INFO', 3, event => {
        let bossHP = (Number(event.curHp) / Number(event.maxHp));
        bossInfo = event;
        if (bossHP <= 0 || bossHP == 1) {
            bossInfo = null;
        }
    });

    mod.hook('S_ACTION_STAGE', 9, event => {
        if (!bossInfo || bossInfo.templateId != event.templateId || event.stage != 0) return;

        let skillID = event.skill.id % 1000;
        bossCurrentPos = {x: event.loc.x, y: event.loc.y, z: event.loc.z, w: event.w};

        DUNGEONS.forEach(dungeon => {
            if (dungeon.zoneID.includes(bossInfo.huntingZoneId)) {
                let bossSkillID = dungeon.bosses[bossInfo.templateId].find(obj => obj.id == skillID);
                if (bossSkillID) {
                    showMessage(bossSkillID.msg, bossSkillID.timeout);
                    spawnsItems(bossSkillID.spawns);
                }
            }
        });

        if (debug)
        {
            mod.command.message("Boss-Skill: [" + bossInfo.huntingZoneId + "] " + event.templateId + " - " + event.skill.id + "_" + event.stage);
        }
    });

    function showMessage (msg, timeout) {
        if (!msg) return;

        if (Number(timeout) == 0) {
            sendMessage(EVENT_MESSAGE_TYPE, msg);
        } else if (Number(timeout) > 0) {
            mod.setTimeout(() => {
                sendMessage(EVENT_MESSAGE_TYPE, msg);
            }, timeout);
        }
    }

    function sendMessage (type, msg) {
        mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
            type: type,
            chat: false,
            channel: 0,
            message: msg
        });
    }

    function spawnsItems (spawns) {
        spawns.forEach(item => {
            let point = getPoint(item.pointDegrees, item.pointRadius);
            switch (item.type) {
                case 'item':
                    spawnItem(point, item.item, item.time, item.degrees, item.radius);
                    break;
                case 'line':
                    spawnLine(point, item.item, item.time, item.degrees, item.intervalRadius, item.maxRadius);
                    break;
                case 'circle':
                    spawnCircle(point, item.item, item.time, item.intervalDegrees, item.radius);
                    break;
            }
        });
    }

    function spawnLine (point, item, time, degrees, intervalRadius, maxRadius) {
        for (let radius = intervalRadius; radius <= maxRadius; radius += intervalRadius) {
            spawnItem(point, item, time, degrees, radius);
        }
    }

    function spawnCircle (point, item, time, intervalDegrees, radius) {
        for (let degrees = 0; degrees < 360; degrees += intervalDegrees) {
            spawnItem(point, item, time, degrees, radius);
        }
    }

    function getPoint (degrees, radius) {
        if (bossCurrentPos && Number(degrees) > 0 && Number(radius) > 0) {
            let finalrad = (bossCurrentPos.w - Math.PI) - (degrees * Math.PI / 180);
            let spawnx = bossCurrentPos.x + radius * Math.cos(finalrad);
            let spawny = bossCurrentPos.y + radius * Math.sin(finalrad);
            return {x: spawnx, y: spawny, z: bossCurrentPos.z, w: bossCurrentPos.w};
        }
        else {
            return bossCurrentPos;
        }
    }

    function spawnItem (point, item, time, degrees, radius) {
        if (!point) return;
        let finalrad = (point.w - Math.PI) - (degrees * Math.PI / 180);
        let spawnx = point.x + radius * Math.cos(finalrad);
        let spawny = point.y + radius * Math.sin(finalrad);
        mod.send('S_SPAWN_COLLECTION', 4, {
            gameId : UID,
            id : item,
            amount : 1,
            loc : new Vec3(spawnx, spawny, point.z),
            w : point.w - Math.PI
        });
        setTimeout(Despawn, time, UID);
        UID--;
    }

    function Despawn (UID_ARG) {
        mod.send('S_DESPAWN_COLLECTION', 2, {
            gameId : UID_ARG
        });
    }

    mod.command.add('debug', () => {
        debug = !debug;
        mod.command.message('DEBUG: ' + (debug ? 'enabled' : 'disabled'));
    });
};
