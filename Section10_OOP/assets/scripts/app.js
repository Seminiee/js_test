class Product {
    // field
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    consturctor() {

    }
}
console.log(new Product());

const productList = {
    products: [
        // new Product(),
        {
            title: 'A Pillow', 
            imageUrl:
             'https://m.media-amazon.com/images/I/61y6iRvb-WL._AC_UF894,1000_QL80_.jpg',
            price: 19.99,
            description: 'A soft pillow!'
        },
        {
            title: 'A Carpet', 
            imageUrl:
             'https://thecarpetier.sg/cdn/shop/products/p-8041-persian-carpetcar-cash-8041-120-493235.webp?v=1710842713&width=1946',
            price: 89.99,
            description: 'A carpet which you might like - or not.'
        },
    ],
    render() {
        const renderhook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for( const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl)
        }
        renderhook.append(prodList);
    }
};

productList.render();