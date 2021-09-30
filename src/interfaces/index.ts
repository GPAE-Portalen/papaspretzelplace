export interface IDictionary<T> {
    [key: string]: T;
}

export interface IBaseInformation {
    contacts: IContacts;
    address: IAddress;
    socials: ISocials;
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

export interface IContactEmailAddress {
    email: string;
}

export interface IOpenHours {
    text: string;
}

export interface IContacts {
    phoneNumber: string;
    emailAddress: string;
}

export interface IAddress {
    address: string;
    openHours: string;
}

export interface ISocials {
    facebook: string;
    instagram: string;
}