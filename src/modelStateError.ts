interface IModelStateDictionary { [key: string]: string[]; }

export class ModelStateError extends Error {
    private readonly errors: IModelStateDictionary;

    constructor(message: string, errors: IModelStateDictionary) {
        super(message);
        Object.setPrototypeOf(this, ModelStateError.prototype);
        this.errors = errors;
    }

    get Errors(): IModelStateDictionary { return this.errors; }
}