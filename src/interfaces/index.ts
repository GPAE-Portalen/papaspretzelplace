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

export interface IPrezelPost {
    name: string;
    prices: IPrice[];
    image?: string; 
}

export interface IPrice {
    ammount: number;
    name: string;
}