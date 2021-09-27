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
    price: number;
    size?: string;
}

export interface IContactEmailAddress {
    email: string;
}

export interface IOpenHours {
    text: string;
}