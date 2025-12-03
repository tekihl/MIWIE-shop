///Denna är bara tillfällig för att kunna testa detaljsidan//
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Testprodukt",
    description: "Detta är en testprodukt eftersom array ej er mergead",
    price: 199,
    image: "/images/test.jpg",
  },
];
