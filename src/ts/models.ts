export type Product = {
    id: number;
    title: string;
    price: number;
    dimensions: string;
    description: string;
    imageUrl: string;
}

export type CartItem = {
    productId: number;
    quantity: number;
}