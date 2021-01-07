export interface IBook {
    id: number;
    title: string;
    author: string;
    price: number;
    coverImage: string;
}

export type TTheme = 'light' | 'dark';