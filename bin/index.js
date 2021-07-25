#!/usr/bin/env node
const Controller = require('../dist/controller/index').Controller;
const { program } = require('commander');
const app = new Controller();


program
    .version('0.0.3')
    .option('-c, --count', '获取A-Soul实时的粉丝数目')
    .option('-s, --space', '查看A-Soul最新一条动态')
    .parse(process.argv);

const options = program.opts();

const countCheck = async () => {
    if (options.count) {
        console.log('🚀正在查询中，请稍等\n')
        const result = await app.getASoulFollowersCount();
        console.log(result);
    }
}

const spaceCheck = async () => {
    if (options.space) {
        console.log('🚀开始查询动态,请稍等\n')
        app.getASoulFirstSpace();
    }
}


countCheck();
spaceCheck();
