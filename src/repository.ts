import { IMenu, IDictionary, IMenuItem, IContactEmailAddress, IOpenHours, IBaseInformation } from './interfaces/index';

export interface IRepository {
    getBaseInformation(): IBaseInformation
    getMenu(): IMenu;
    getContactEmailAddress(): IContactEmailAddress;
    getOpenHours(): IOpenHours;
    getPrezels(): IDictionary<IMenuItem>
    getIceCream(): IDictionary<IMenuItem>
    getWaterIce(): IDictionary<IMenuItem>
    getDips(): IDictionary<IMenuItem>
    getDrinks(): IDictionary<IMenuItem>
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    getBaseInformation(): IBaseInformation {
        const contactEmailAddress: IContactEmailAddress = this.getContactEmailAddress();
        const openHours: IOpenHours = this.getOpenHours();

        const baseInformation: IBaseInformation = {
            contactEmailAddress,
            openHours
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

    getContactEmailAddress(): IContactEmailAddress {
        const contactEmailAddress: IContactEmailAddress = require(`${this.url}contactEmailAddress.json`);

        return contactEmailAddress;
    }

    getOpenHours(): IOpenHours {
        const openHours: IOpenHours = require(`${this.url}openHours.json`);

        return openHours;
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