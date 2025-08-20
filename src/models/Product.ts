export interface Product {
    // this follow the response that we get from the API
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string | undefined;
}