export interface IProduct {
    name: string;
    description: string;
    image: {
        name: string;
        type: string;
        width: string;
        height: string;
    };
    tags?: [string];
}

export interface IBlogPost {
    title: string;
    date: Date;
}