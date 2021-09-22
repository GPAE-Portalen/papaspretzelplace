import { IMenu, IDictionary, IMenuItem } from './interfaces/index';

export interface IRepository {
    getMenu(): IMenu;
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    getMenu(): IMenu {
        const pretzels: IDictionary<IMenuItem> = require(`${this.url}pretzels.json`);
        const pretzelDogs: IDictionary<IMenuItem> = require(`${this.url}pretzelDogs.json`);
        const iceCreams: IDictionary<IMenuItem> = require(`${this.url}iceCreams.json`);
        const waterIce: IDictionary<IMenuItem> = require(`${this.url}waterIce.json`);
        const dips: IDictionary<IMenuItem> = require(`${this.url}dips.json`);
        const menu: IMenu = {
            pretzels,
            pretzelDogs,
            iceCreams,
            waterIce,
            dips
        };

        return menu;
    }
}