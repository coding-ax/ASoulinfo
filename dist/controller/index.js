"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const request = require("./../api/methods");
const config_1 = require("../config");
class Controller {
    getASoulFollowersCount() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = {};
            // 获取粉丝数目
            let fanSum = 0;
            for (const [key, value] of Object.entries(config_1.ASoulIDs)) {
                const res = yield request.getFansCount(value);
                console.log(res);
                response[key] = res === null || res === void 0 ? void 0 : res.follower;
                fanSum += response[key];
                console.log(`${key}的粉丝数为：${response[key]} (查询于${new Date().toLocaleString()})`);
            }
            console.log(`截止到${new Date().toLocaleString()}，A-Soul B站的总粉丝数量为${fanSum}`);
            return response;
        });
    }
    getASoulFirstSpace() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const result = {};
            for (const [key, value] of Object.entries(config_1.ASoulIDs)) {
                const res = yield request.getFirstSpace(value);
                const firstCardInfo = (_a = res === null || res === void 0 ? void 0 : res.cards) === null || _a === void 0 ? void 0 : _a[0];
                const userName = (_d = (_c = (_b = firstCardInfo === null || firstCardInfo === void 0 ? void 0 : firstCardInfo.desc) === null || _b === void 0 ? void 0 : _b['user_profile']) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.uname;
                const currentCard = JSON.parse(firstCardInfo.card || '{}');
                result[key] = {
                    title: (currentCard === null || currentCard === void 0 ? void 0 : currentCard.title) || ((_e = currentCard === null || currentCard === void 0 ? void 0 : currentCard.item) === null || _e === void 0 ? void 0 : _e.content),
                    desc: (currentCard === null || currentCard === void 0 ? void 0 : currentCard.desc) || '',
                    isVideo: (currentCard === null || currentCard === void 0 ? void 0 : currentCard.title) ? true : false,
                    link: (currentCard === null || currentCard === void 0 ? void 0 : currentCard.short_link) || `https://space.bilibili.com/${value}/dynamic'`,
                };
                const checkVideo = result[key].isVideo ? `\n视频详情： ${result[key].desc}` : '\n';
                console.log(`${userName}:\n最近动态内容：${result[key].title} ${checkVideo}\n链接：${result[key].link}\n`);
                console.log('*********************************************************\n');
            }
            return result;
        });
    }
}
exports.Controller = Controller;
