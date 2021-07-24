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
exports.getFirstSpace = exports.getFansCount = void 0;
const index_1 = require("./index");
const urls_1 = require("./urls");
const getFansCount = (id = '672342685') => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield index_1.instance.get(urls_1.default.FANS_COUNT.replace('${id}', id));
    return data;
});
exports.getFansCount = getFansCount;
const getFirstSpace = (id = '672342685') => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield index_1.instance.get(urls_1.default.SPACE.replace('${id}', id));
    return data;
});
exports.getFirstSpace = getFirstSpace;
