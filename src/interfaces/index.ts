export interface IDictionary<T> {
    [key: string]: T;
}

export interface IBaseInformation {
    address: IAddress;
    openHours: IOpenHours;
    contacts: IContacts;
    socialMedia: ISocialMedia;
}

export interface IMenu {
    pretzels: IDictionary<IMenuItem>; 
    iceCream: IDictionary<IMenuItem>;
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

export interface IOpenHours {
    text: string;
}

export interface IContacts {
    phoneNumber: string;
    emailAddress: string;
}

export interface IAddress {
    street: string;
    city: string;
    state: string;
}

export interface ISocialMedia {
    facebook: string;
    instagram: string;
}