export interface IProduct {
    name: string;
    description: string;
    image: {
        name: string;
        type: string;
        width: string;
        height: string;
    };
    tags?: [string];
}

export interface IBlogPost {
    title: string;
    date: Date;
}

export interface IDictionary<T> {
    [key: string]: T;
}

export interface IMenu {
    pretzels: IDictionary<IMenuItem>; 
    iceCreams: IDictionary<IMenuItem>;
    waterIce: IDictionary<IMenuItem>;
    dips: IDictionary<IMenuItem>;
    drinks: IDictionary<IMenuItem>;
}

export interface IMenuItem {
    display: boolean;
    name: string;
    description?: string;
    image?: string; 
    prices: IPrice[];
}

export interface IPrice {
    ammount: number;
    size?: string;
}