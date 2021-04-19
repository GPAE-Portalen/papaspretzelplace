import { IProduct } from './interfaces/index';

export interface IRepository {
    getProducts(): IProduct[];
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    getProducts(): IProduct[] {
        const data: IProduct[] = require(`${this.url}/products.json`);
        return data;
    }
}