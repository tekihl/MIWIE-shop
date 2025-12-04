import type { Product } from "./models";

export const products: Product[] = [

        {
            id: 1, 
            title: "chair", 
            price: 300, 
            dimensions: "56cm x 78cm", 
            description: "this is a chair. A very special chair",
            imageUrl: "src/assets/chair.jpg",
        },

        {
            id: 2, 
            title: "lamp", 
            price: 85, 
            dimensions: "16cm x 68cm", 
            description: "This is a cool lamp",
            imageUrl: "src/assets/lamp.jpg",
        },

        {
            id: 3, 
            title: "Car Radio", 
            price: 168, 
            dimensions: "16cm x 20cm", 
            description: "I stole this car radio like 15 years ago in Tulsa Florida, enjoy!",
            imageUrl: "src/assets/car-radio.jpg",
        },

         {
            id: 4, 
            title: "Magazine", 
            price: 78, 
            dimensions: "24cm x 30 cm", 
            description: "A vintage 60s magazine, perfect for the outhouse!",
            imageUrl: "src/assets/magazine.webp",
        },

        {
            id: 5, 
            title: "Old cowboy figure", 
            price: 25, 
            dimensions: "18cm x 5 cm", 
            description: "Some old cowboy figurine, still in the box",
            imageUrl: "src/assets/woody.jpg",
        },
        
]

