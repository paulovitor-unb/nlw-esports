export interface GameParams {
    id: string;
    title: string;
    boxArtUrl: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: GameParams;
        }
    }
}
