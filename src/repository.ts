import { IMenu, IDictionary, IMenuItem, IOpenHours, IBaseInformation, IContacts, IAddress, ISocialMedia } from './interfaces/index';

export interface IRepository {
    getBaseInformation(): IBaseInformation;
    getMenu(): IMenu;
    getAddress(): IAddress;
    getOpenHours(): IOpenHours;
    getContacts(): IContacts;
    getSocialMedia(): ISocialMedia;
    getPrezels(): IDictionary<IMenuItem>;
    getIceCream(): IDictionary<IMenuItem>;
    getWaterIce(): IDictionary<IMenuItem>;
    getDips(): IDictionary<IMenuItem>;
    getDrinks(): IDictionary<IMenuItem>;
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    getBaseInformation(): IBaseInformation {
        const address: IAddress = this.getAddress();
        const openHours: IOpenHours = this.getOpenHours();
        const contacts: IContacts = this.getContacts();
        const socialMedia: ISocialMedia = this.getSocialMedia();

        const baseInformation: IBaseInformation = {
            address,
            openHours,
            contacts,
            socialMedia
        };

        return baseInformation;
    }

    getMenu(): IMenu {
        const pretzels: IDictionary<IMenuItem> = this.getPrezels();
        const iceCream: IDictionary<IMenuItem> = this.getIceCream();
        const waterIce: IDictionary<IMenuItem> = this.getWaterIce();
        const dips: IDictionary<IMenuItem> = this.getDips();
        const drinks: IDictionary<IMenuItem> = this.getDrinks();

        const menu: IMenu = {
            pretzels,
            iceCream,
            waterIce,
            dips,
            drinks
        };

        return menu;
    }

    getAddress(): IAddress {
        const address: IAddress = require(`${this.url}address.json`);

        return address;
    }

    getOpenHours(): IOpenHours {
        const openHours: IOpenHours = require(`${this.url}openHours.json`);

        return openHours;
    }

    getContacts(): IContacts {
        const contacts: IContacts = require(`${this.url}contacts.json`);

        return contacts;
    }

    getSocialMedia(): ISocialMedia {
        const socialMedia: ISocialMedia = require(`${this.url}socialMedia.json`);

        return socialMedia;
    }

    getPrezels(): IDictionary<IMenuItem> {
        const pretzels: IDictionary<IMenuItem> = require(`${this.url}pretzels.json`);

        return pretzels;
    }

    getIceCream(): IDictionary<IMenuItem> {
        const iceCream: IDictionary<IMenuItem> = require(`${this.url}iceCream.json`);

        return iceCream;
    }

    getWaterIce(): IDictionary<IMenuItem> {
        const waterIce: IDictionary<IMenuItem> = require(`${this.url}waterIce.json`);

        return waterIce;
    }

    getDips(): IDictionary<IMenuItem> {
        const dips: IDictionary<IMenuItem> = require(`${this.url}dips.json`);

        return dips;
    }

    getDrinks(): IDictionary<IMenuItem> {
        const drinks: IDictionary<IMenuItem> = require(`${this.url}drinks.json`);

        return drinks;
    }
}