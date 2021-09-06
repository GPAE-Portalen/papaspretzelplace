import { ModelStateError } from './modelStateError';

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

    async getBlogPost(fileName: string) {
        const resp = await fetch(`${this.url}/blog/${fileName}.json`);
        return resp.json();
    }

    async createBlogPost(fileName: string) {
        const resp = await fetch(`/.netlify/functions/blog?fileName=${fileName}`);
        return resp.json();
    }

    private handleResponse(response: Response) {
        const contentType = response.headers.get('Content-Type');
        const isJson = (contentType && contentType.indexOf('application/json') !== -1) || false;

        if (response.ok && isJson) {
            return response.json();
        }
        else if ((response.status === 400 || response.status === 422) && isJson) {
            return response.json().then(x => Promise.reject(new ModelStateError(`${response.status}`, x)));
        }

        return Promise.reject(new Error(`${response.status} ${response.statusText}`));
    }
}