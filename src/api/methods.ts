import { instance } from './index';
import URLS from './urls';

export const getFansCount = async (id: string = '672342685'): Promise<any> => {
    const data = await instance.get(URLS.FANS_COUNT.replace('${id}', id))
    return data;
}

export const getFirstSpace = async (id: string = '672342685'): Promise<any> => {
    const data = await instance.get(URLS.SPACE.replace('${id}', id))
    return data;
}