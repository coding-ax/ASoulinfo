"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const axios_1 = require("axios");
const instance = axios_1.default.create({
    headers: {
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3100.0 Safari/537.36'
    }
});
exports.instance = instance;
instance.interceptors.response.use(res => {
    var _a;
    if (res.status === 200) {
        return Promise.resolve((_a = res.data) === null || _a === void 0 ? void 0 : _a.data);
    }
}, err => {
    console.error(JSON.stringify(err, null, 2));
    return Promise.reject(err);
});
