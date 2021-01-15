export enum LoadingStatus {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export type Tweet = {
    _id: string;
    text: string;
    createdAt: string;
    images?: string[];
	user: {
		fullname: string;
		username: string;
		avatarUrl: string;
    },
}

export type TweetsState = {
    items: Tweet[],
    LoadingStatus: LoadingStatus;
    addFormState: AddFormState;
}