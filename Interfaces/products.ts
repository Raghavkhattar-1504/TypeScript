interface Product{
    readonly id: string,
    name: string,
    price: number,
    category?: string,
    inStock: boolean,
}

const addToCart = (product: Product): Product[] => {
    let productArr: Product[] = []

    productArr.push(product)
    return productArr
}

const prod1: Product = {
    id: "pro123",
    name: "Mobile",
    price: 50000,
    inStock: true
}

console.log(addToCart(prod1));