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
export declare class Controller {
    getASoulFollowersCount(): Promise<ASoulCommonResponse<number>>;
    getASoulFirstSpace(): Promise<ASoulCommonResponse<ASoulFirstSpaceResponse>>;
}
export {};
