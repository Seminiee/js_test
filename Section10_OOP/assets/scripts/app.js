class Product {
    // field
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}
class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}
class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }
    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for(const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value); // setAttribute()는 DOM의 메서드, Attribute를 설정함.
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}
class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue,curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        // const cartEl = document.createElement('selection');
        const cartEl = this.createRootElement('section','cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        // cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
    }
}
/**
 * As mentioned before: For any work that involves "this", it's not just a "good convention" but required to call super() first!
 */
class ProductItem extends Component {
    constructor(product,renderHookId) {
        super(renderHookId);
        this.product = product;
    }
  
    addToCart() {
        App.addProductToCart(this.product);
    }
  
    render() {
        // const prodEl = document.createElement('li');
        const prodEl= this.createRootElement('li','product-item');
        // prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
                </div>
            </div>
            `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}
class ProductList extends Component{
    products = [
        new Product(
            'A Pillow', 
            'https://m.media-amazon.com/images/I/61y6iRvb-WL._AC_UF894,1000_QL80_.jpg',
            'A soft pillow!',
            19.99
        ),
        new Product(
           'A Carpet',
           'https://thecarpetier.sg/cdn/shop/products/p-8041-persian-carpetcar-cash-8041-120-493235.webp?v=1710842713&width=1946',
           'A carpet which you might like - or not.',
           89.99
        ),
    ];
    constructor (renderHookId) {
        super(renderHookId);
    }
    render() {
        // const prodList = document.createElement('ul');
        // prodList.id = 'prod-list';
        const prodList = this.createRootElement('ul','product-list', [new ElementAttribute('id','prod-list')]);

        // prodList.className = 'product-list';
        for (const prod of this.products) {
          const productItem = new ProductItem(prod, 'prod-list');
          productItem.render();
        //   const prodEl = productItem.render();
        //   prodList.append(prodEl);
        }
        // return prodList;
      }
}

// const productList = {};

class Shop {
    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        this.cart.render();
        // const cartEl = this.cart.render();
        const productList = new ProductList('app');
        productList.render();
        //const prodListEl = productList.render();

        // renderHook.append(cartEl);
        // renderHook.append(prodListEl);
    }
}

class App {
    static cart;
    static init() {
        const shop = new Shop();
        // const { } = shop;
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();