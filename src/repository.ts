import { ModelStateError } from './modelStateError';

interface IProduct {
    name: string;
    description: string;
    image?: {
        name: string;
        type: string;
        width: string;
        height: string;
    }
}

export interface IRepository {
    getProducts(): Promise<IProduct[]>;
}

export default class Repository implements IRepository {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getProducts(): Promise<IProduct[]> {
        const response = await fetch(`${this.url}/products.json`);
        return this.handleResponse(response);
    }

    private handleResponse(response: Response) {
        const contentType = response.headers.get('Content-Type');
        const isJson = (contentType && contentType.indexOf('application/json') !== -1) || false;

        if (response.ok && isJson) {
            return response.json();
        } else if ((response.status === 400 || response.status === 422) && isJson) {
            return response.json().then(x => Promise.reject(new ModelStateError(`${response.status}`, x)));
        }

        return Promise.reject(new Error(`${response.status} ${response.statusText}`));
    }
}
