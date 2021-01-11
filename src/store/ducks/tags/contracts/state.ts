export enum LoadingStatus {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export type Tag = {
    _id: string;
    name: string;
    count: number;

}

export type TagsState = {
    items: Tag[],
    LoadingStatus: LoadingStatus;
}