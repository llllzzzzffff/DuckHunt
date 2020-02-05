"use strict";
cc._RF.push(module, '27c7bfdkgdEMoYQr2pit3ne', 'Glb');
// common/script/basic/Glb.js

"use strict";

var obj = {
    RANDOM_MATCH: 1, // 随机匹配
    PROPERTY_MATCH: 2, // 属性匹配
    MAX_PLAYER_COUNT: 3,
    PLAYER_COUNTS: [1, 2, 3],
    COOPERATION: 1,
    COMPETITION: 2,
    GAME_START_EVENT: "gameStart",
    GAME_TIME: "gameTime",
    PLAYER_FIRE_EVENT: "playerFire",
    PLAYER_ROTATION_EVENT: "playerRotation",
    GAME_OVER_EVENT: "gameOver",
    SCORE_EVENT: "score",
    ROUND_START: "roundStart",
    READY: "ready",
    IP: "wxrank.matchvs.com",
    PORT: "3010",

    gameVersion: 1,

    gameId: 201331,
    appKey: '17ffc6d5f1e14a04b99c4bf17addc411',
    secret: '4cc0d042cd5547e98860728bb3207650',

    channel: 'MatchVS',
    platform: 'alpha',
    // gameID: 218204,
    // appKey:    '9170668fd6d94115871f5bd93a9f9add#C',
    // secretKey: 'ba64a885f4e14171802c483d4bd3eb08',

    gameType: 1,
    matchType: 1,
    tagsInfo: { "title": "A" },
    userInfo: null,
    playerUserIds: [],
    playerSet: new Set(),
    isRoomOwner: false,
    events: {},

    syncFrame: true,
    FRAME_RATE: 5,
    roomId: 0,
    playertime: 180,
    isGameOver: false
};
module.exports = obj;

cc._RF.pop();