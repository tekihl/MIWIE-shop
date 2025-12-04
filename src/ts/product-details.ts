import { products } from "./product";

const createDetailHtml = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); // Replace 'key' with the actual query parameter name
    console.log(id);
}

createDetailHtml();


