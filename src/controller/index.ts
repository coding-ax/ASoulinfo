import * as request from './../api/methods';
import { ASoulIDs } from '../config'
interface ASoulCommonResponse<T> {
    AvA?: T;
    Bella?: T;
    Coral?: T;
    Diana?: T;
    Eileen?: T;
}

interface ASoulFirstSpaceResponse {
    title?: string;
    link?: string;
    desc?: string;
    isVideo?: boolean;
    pubDate?: string;
}

export class Controller {
    public async getASoulFollowersCount(): Promise<ASoulCommonResponse<number>> {
        let response: ASoulCommonResponse<number> = {};
        // 获取粉丝数目
        let fanSum = 0;
        for (const [key, value] of Object.entries(ASoulIDs)) {
            const res = await request.getFansCount(value as string);
            console.log(res);
            response[key] = res?.follower;
            fanSum += response[key];
            console.log(`${key}的粉丝数为：${response[key]} (查询于${new Date().toLocaleString()})`)
        }
        console.log(`截止到${new Date().toLocaleString()}，A-Soul B站的总粉丝数量为${fanSum}`)
        return response;
    }

    public async getASoulFirstSpace(): Promise<ASoulCommonResponse<ASoulFirstSpaceResponse>> {
        const result = {}
        for (const [key, value] of Object.entries(ASoulIDs)) {
            const res = await request.getFirstSpace(value as string);
            const firstCardInfo = res?.cards?.[0];
            const userName = firstCardInfo?.desc?.['user_profile']?.info?.uname;
            const currentCard = JSON.parse(firstCardInfo.card || '{}');
            result[key] = {
                title: currentCard?.title || currentCard?.item?.content,
                desc: currentCard?.desc || '',
                isVideo: currentCard?.title ? true : false,
                link: currentCard?.short_link || `https://space.bilibili.com/${value}/dynamic'`,
            }
            const checkVideo = result[key].isVideo ? `\n视频详情： ${result[key].desc}` : '\n'
            console.log(`${userName}:\n最近动态内容：${result[key].title} ${checkVideo}\n链接：${result[key].link}\n`)
            console.log('*********************************************************\n')
        }
        return result as ASoulCommonResponse<ASoulFirstSpaceResponse>;
    }
}