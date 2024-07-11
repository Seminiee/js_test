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
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }
    }
    render() {} // for OVERRIDING

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

    // constructor(renderHookId) {
    //     super(renderHookId);
    // }

    constructor(renderHookId) {
        super(renderHookId,false);
        this.orderProducts = () => {
            console.log('Ordering...');
            console.log(this.items);
        }
        this.render();
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    orderProducts() {
        console.log('Ordering...');
        console.log(this.items);
    }
    render() {
        // const cartEl = document.createElement('selection');
        const cartEl = this.createRootElement('section','cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        const orderButton = cartEl.querySelector('button');
        // orderButton.addEventListener('click',() => this.orderProducts()); // 1st way
        orderButton.addEventListener('click',this.orderProducts)
        // cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
    }
}
/**
 * As mentioned before: For any work that involves "this", it's not just a "good convention" but required to call super() first!
 */
class ProductItem extends Component {
    constructor(product,renderHookId) {
        super(renderHookId,false);
        this.product = product;
        this.render();
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
    #products = [];
    constructor (renderHookId) {
        // 로컬 데이터를 초기화한 다음에 super() 실행 -> super()를 먼저, 적어도 서브 클래스에 있는 this를 실행하기 전에 호출해야함.
        super(renderHookId,false); 
        this.render();
        this.#fetchProducts();
    }

    #fetchProducts() {
        this.#products = [ 
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
        this.renderProducts(); // 데이터가 초기 콘텐츠를 렌더링한 후에 데이터가 도착하는 문제
    }

    renderProducts() {
        for (const prod of this.#products) {
            const productItem = new ProductItem(prod, 'prod-list');
        }
    }
    render() {
        // const prodList = document.createElement('ul');
        // prodList.id = 'prod-list';
        // const prodList = this.createRootElement('ul','product-list', [new ElementAttribute('id','prod-list')]);
        this.createRootElement('ul','product-list', [new ElementAttribute('id','prod-list')]);
        if(this.#products && this.#products.length > 0) {
            this.renderProducts();
        }
        // prodList.className = 'product-list';
        // for (const prod of this.products) {
        //   const productItem = new ProductItem(prod, 'prod-list');
        //   productItem.render();
        //   const prodEl = productItem.render();
        //   prodList.append(prodEl);
        // }
        // return prodList;
      }
}

// const productList = {};

class Shop /*extends Component*/{
    constructor() {
        // super(); -> 이 클래스는 상속 받는 것이 아무것도 없다. (컴포넌트 확장X)
        this.render();
    }
    render() {
        const renderHook = document.getElementById('app');

        const list = this.cart = new ShoppingCart('app');
        // console.log(list.#products); //SyntaxError: Private field '#products' must be declared in an enclosing class
        // this.cart.render();
        // const cartEl = this.cart.render();

        // const productList = new ProductList('app');
        new ProductList('app');

        // productList.render();
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
        // shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();