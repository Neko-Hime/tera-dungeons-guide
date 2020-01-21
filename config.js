const ITEM_FOR_TYPE_ITEM = 2;
const ITEM_FOR_LINE = 553;
const ITEM_FOR_CIRCLE = 553;

module.exports = {
    EVENT_MESSAGE_TYPE: 42,
    DUNGEONS: [
        {zoneName: 'RK', zoneID: [735, 935], bosses: {
            1000: [
                {id: 103, msg: 'AoE Bomb [I]', spawns: [], timeout: 0},
                {id: 104, msg: 'Front Stun [I]', spawns: [], timeout: 0},
                {id: 108, msg: 'AoE Spinning [B, I]', spawns: [], timeout: 0},
                {id: 306, msg: 'Time Bomb - Bleed', spawns: [], timeout: 0},
                {id: 307, msg: 'Pull Attack [I]', spawns: [], timeout: 0},
                {id: 309, msg: 'Jump Jump Jump', spawns: [], timeout: 12000}
            ],
            2000: [
                {id: 102, msg: 'Front Attack [I]', spawns: [], timeout: 0},
                {id: 105, msg: 'AoE Spinning [B, I]', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 5000, intervalDegrees: 8, radius: 278}
                ], timeout: 0},
                {id: 108, msg: 'Back Push [I]', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 60, intervalRadius: 50, maxRadius: 500},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 300, intervalRadius: 50, maxRadius: 500}
                ], timeout: 0},
                {id: 302, msg: 'AoE Attack [I]', spawns: [], timeout: 0},
                {id: 304, msg: 'AoE Explode (GO AWAY)', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 4000, intervalDegrees: 8, radius: 400}
                ], timeout: 0}
            ],
            3000: [
                {id: 116, msg: 'S-Bomb Right Hand (AVOID)', spawns: [
                    {type: 'item', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_TYPE_ITEM, time: 3000, degrees: 10, radius: 200},
                    {type: 'item', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_TYPE_ITEM, time: 3000, degrees: 190, radius: 200}
                ], timeout: 0},
                {id: 118, msg: 'S-Bomb Left Hand (AVOID)', spawns: [
                    {type: 'item', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_TYPE_ITEM, time: 3000, degrees: 170, radius: 200},
                    {type: 'item', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_TYPE_ITEM, time: 3000, degrees: 350, radius: 200}
                ], timeout: 0},
                {id: 128, msg: 'Front Triple Attack [BIB]', spawns: [], timeout: 0},
                {id: 131, msg: 'Back Wave (AVOID)', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 60, intervalRadius: 50, maxRadius: 1200},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 300, intervalRadius: 50, maxRadius: 1200}
                ], timeout: 0},
                {id: 303, msg: 'AoE Radar [I]', spawns: [], timeout: 0},
                {id: 321, msg: 'Shield (BREAK IT)', spawns: [], timeout: 0},
                {id: 323, msg: 'AoE Radar (GO AWAY)', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 5000, intervalDegrees: 8, radius: 300}
                ], timeout: 0},
                {id: 324, msg: 'AoE Stun [I]', spawns: [], timeout: 0}
            ]
        }},
        {zoneName: 'GV', zoneID: [3101, 3201], bosses: {
            1000: [
                {id: 124, msg: 'Front Stun', spawns: [], timeout: 0},
                {id: 127, msg: 'Back Kick', spawns: [
                    {type: 'line', pointDegrees: 90, pointRadius: 140, item: ITEM_FOR_LINE, time: 3000, degrees: 7, intervalRadius: 50, maxRadius: 500},
                    {type: 'line', pointDegrees: 270, pointRadius: 140, item: ITEM_FOR_LINE, time: 3000, degrees: 353, intervalRadius: 50, maxRadius: 500}
                ], timeout: 0},
                {id: 131, msg: 'Back Wave', spawns: [
                    {type: 'line', pointDegrees: 180, pointRadius: 100, item: ITEM_FOR_LINE, time: 3000, degrees: 70, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 180, pointRadius: 100, item: ITEM_FOR_LINE, time: 3000, degrees: 290, intervalRadius: 50, maxRadius: 800}
                ], timeout: 0},
                {id: 132, msg: 'Side Attack', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 20, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 160, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 200, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 340, intervalRadius: 50, maxRadius: 800}
                ], timeout: 0},
                {id: 133, msg: 'Jump', spawns: [], timeout: 0},
                {id: 138, msg: 'Jump', spawns: [], timeout: 0},
                {id: 139, msg: 'Back + Front Attack', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 70, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 110, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 250, intervalRadius: 50, maxRadius: 800},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 290, intervalRadius: 50, maxRadius: 800}
                ], timeout: 0},
                {id: 148, msg: 'Front Right Hand Attack', spawns: [
                    {type: 'circle', pointDegrees: 150, pointRadius: 140, item: ITEM_FOR_CIRCLE, time: 3000, intervalDegrees: 10, radius: 320}
                ], timeout: 0},
                {id: 149, msg: 'Front Left Hand Attack', spawns: [
                    {type: 'circle', pointDegrees: 200, pointRadius: 140, item: ITEM_FOR_CIRCLE, time: 3000, intervalDegrees: 10, radius: 320}
                ], timeout: 0},
                {id: 313, msg: 'Out & In', spawns: [
                    {type: 'circle', pointDegrees: 180, pointRadius: 88, item: ITEM_FOR_CIRCLE, time: 4000, intervalDegrees: 10, radius: 300}
                ], timeout: 0}
            ],
            2000: [
                {id: 108, msg: 'Back Attack', spawns: [
                    {type: 'line', pointDegrees: 90, pointRadius: 80, item: ITEM_FOR_LINE, time: 4000, degrees: 15, intervalRadius: 50, maxRadius: 1000},
                    {type: 'line', pointDegrees: 270, pointRadius: 80, item: ITEM_FOR_LINE, time: 4000, degrees: 345, intervalRadius: 50, maxRadius: 1000}
                ], timeout: 0},
                {id: 228, msg: 'Team Up', spawns: [], timeout: 0},
                {id: 230, msg: 'AoE', spawns: [], timeout: 0},
                {id: 235, msg: 'Debuffs', spawns: [], timeout: 0},
                {id: 231, msg: 'Out Safe', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 3000, intervalDegrees: 10, radius: 300}
                ], timeout: 0},
                {id: 232, msg: 'In Safe', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 3000, intervalDegrees: 10, radius: 300}
                ], timeout: 0}
            ]
        }}
    ]
};
