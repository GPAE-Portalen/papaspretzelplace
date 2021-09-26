import { IMenu, IDictionary, IMenuItem, IContactEmailAddress, IOpenHours } from './interfaces/index';

export interface IRepository {
    getMenu(): IMenu;
    getContactEmailAddress(): IContactEmailAddress;
    getOpenHours(): IOpenHours;
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    getMenu(): IMenu {
        const pretzels: IDictionary<IMenuItem> = require(`${this.url}pretzels.json`);
        const iceCreams: IDictionary<IMenuItem> = require(`${this.url}iceCreams.json`);
        const waterIce: IDictionary<IMenuItem> = require(`${this.url}waterIce.json`);
        const dips: IDictionary<IMenuItem> = require(`${this.url}dips.json`);
        const drinks: IDictionary<IMenuItem> = require(`${this.url}drinks.json`);

        const menu: IMenu = {
            pretzels,
            iceCreams,
            waterIce,
            dips,
            drinks
        };

        return menu;
    }

    getContactEmailAddress(): IContactEmailAddress {
        const contactEmailAddress: IContactEmailAddress = require(`${this.url}contactEmailAddress.json`);

        return contactEmailAddress;
    }

    getOpenHours(): IOpenHours {
        const openHours: IOpenHours = require(`${this.url}openHours.json`);

        return openHours;
    }
}