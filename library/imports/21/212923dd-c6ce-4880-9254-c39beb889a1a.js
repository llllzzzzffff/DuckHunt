"use strict";
cc._RF.push(module, '21292Pdxs5IgJJUw5vriJoa', 'bullet');
// game/script/bullet.js

"use strict";

var mvs = require("Matchvs");
var GLB = require("Glb");
cc.Class({
    extends: cc.Component,
    properties: {
        _bType: BulletType.Normal,
        bType: {
            get: function get() {
                return this._bType;
            },
            set: function set(value) {
                this._bType = value;
            },

            type: BulletType
        },
        speed: 0,
        boomPrefab: cc.Prefab
    },

    initData: function initData(parent, pos) {
        this.node.parent = parent.parent;
        this.node.position = pos;
        this.node.rotation = parent.rotation;

        var radY = (parent.rotation + 90) * Math.PI / 180;
        var radX = (parent.rotation - 90) * Math.PI / 180;

        this.speedY = this.speed * Math.sin(radY);
        this.speedX = this.speed * Math.cos(radX);

        this.hostplayer = parent.getComponent('player');
        if (this.hostplayer.playerId !== GLB.userInfo.id) {
            this.node.opacity = 50;
        } else {
            this.node.opacity = 255;
        }
    },

    onCollisionEnter: function onCollisionEnter(other) {
        if (this.hostplayer && this.hostplayer.playerId === GLB.userInfo.id) {
            var group = cc.game.groupList[other.node.groupIndex];
            if (group === "duck") {
                var duck = other.node.getComponent('duck');
                if (duck && duck.duckState !== DuckState.Dead) {
                    if (this.bType === BulletType.Normal) {
                        duck.hurt(1);
                    } else if (this.bType === BulletType.Special) {
                        duck.dead();
                    }
                    var boom = cc.instantiate(this.boomPrefab);
                    if (boom) {
                        boom.parent = this.node.parent;
                        var worldPos = other.node.convertToWorldSpaceAR(cc.v2(0, 0));
                        var localPos = this.node.parent.convertToNodeSpaceAR(worldPos);
                        boom.position = localPos;
                    }
                    Game.BulletManager.recycleBullet(this);
                }
            }
        }
    },

    update: function update(dt) {
        this.node.x += dt * this.speedX;
        this.node.y += dt * this.speedY;

        if (Math.abs(this.node.position.x) > 640 || Math.abs(this.node.position.y) > 360) {
            Game.BulletManager.recycleBullet(this);
        }
    }

});

cc._RF.pop();