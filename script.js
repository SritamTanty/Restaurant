let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let payment = document.querySelector('.payment');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    
   
    {
        id: 1,
        name: 'Plain Dosa',
        image: 'th.jpg',
        price:  60
    },
    {
        id: 2,
        name: 'Idli',
        image: 'th (1).jpg',
        price: 40
    },
    {
        id: 3,
        name: 'Aloo Paratha',
        image: 'th (2).jpg',
        price: 50
    },
    {
        id: 4,
        name: 'Chole Bhature',
        image: 'starter4.jpeg',
        price: 80
    },
    {
        id: 5,
        name: 'Chicken tangdi kabab',
        image: 'starter5.jpg',
        price: 400
    },
    
    {
        id: 6,
        name: 'Paneer Butter Masala',
        image: 'veg6.jpg',
        price: 200
    },
    {
        id: 6,
        name: 'Palak Paneer',
        image: 'veg7.jpg',
        price: 180
    },
    {
        id: 6,
        name: 'Dal Makhani',
        image: 'veg8.jpg',
        price: 150
    },
    {
        id: 6,
        name: 'Paneer Bhurji',
        image: 'veg9.jpeg',
        price: 150
    },
    {
        id: 6,
        name: 'Veg Biryani',
        image: 'veg10.jpeg',
        price: 120
    },
    {
        id: 6,
        name: 'Chicken Biryani',
        image: 'lunch1.jpg',
        price: 150
    },
    {
        id: 6,
        name: 'Mutton Curry',
        image: 'dinner2.jpg',
        price: 300
    },
    {
        id: 6,
        name: 'Chicken Butter Masala',
        image: 'non veg12.jpeg',
        price: 270
    },
    {
        id: 6,
        name: 'Chicken Hydrabadi',
        image: '14.jpeg',
        price: 310
    },
    {
        id: 6,
        name: 'Chicken Curry',
        image: 'dinner3.jpg',
        price: 250
    },
    
    {
        id: 6,
        name: 'No-Bake-Buckeye-Cheesecake',
        image: 'no-bake-buckeye-cheesecake-bar-vertical-64b5646bc6b6d.jpg',
        price: 50
    },
    {
        id: 6,
        name: 'Mason-jar-ice-cream',
        image: 'mason-jar-ice-cream1-1654195042.jpg',
        price: 100
    },
    {
        id: 6,
        name: 'Coffee-Cookies-n-cream-ice-cream',
        image: 'coffee-cookies-n-cream-ice-cream-1647459058.jpeg',
        price: 120
    },
    {
        id: 6,
        name: 'Strawberry-crunch-poke-cake',
        image: 'strawberry-crunch-poke-cake-secondary-646e82693d705.jpg',
        price: 70
    },
    {
        id: 6,
        name: 'Chocolate-Pizza',
        image: 'chocolate-pizza-vertical-3-658367a24d6ca.jpg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="Images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="Images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}