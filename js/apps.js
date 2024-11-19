//Access the DOM elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

//set the subTotal & tax

let subtotal = 0
let tax = .07


//grab the menu types
const menuTypes =[
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides'
]

//create menu items; array of objects
let menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'salmon dip',
        desc: 'fresh salmon spread and toast',
        imgUrl: '',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'onion rings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: '',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'crab claws',
        desc: 'fresh crab claws with comeback sauce',
        imgUrl: '',
        price: 12.09,
        qty: 0
    },
    {
        id: 4,
        type: 'appetizers',
        item: 'BBQ wings',
        desc: 'chicken wings covered in barbeque sauce',
        imgUrl: '',
        price: 11.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'bacon-burger',
        desc: 'a burger served with applewood backon',
        imgUrl: '',
        price: 12.0,
        qty: 0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'full-stack ribs',
        desc: '12 pork ribs served with a side sauce of your choice',
        imgUrl: '',
        price: 15.00,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'King crab legs',
        desc: 'a stack of kings crab legs with butter',
        imgUrl: '',
        price: 22.00,
        qty: 0
    },
    {
        id: 8,
        type: 'entrees',
        item: 'Shrimp alfrado pasta',
        desc: 'Pasta made with shrimp, sauage, and alfrado sauce',
        imgUrl: '',
        price: 12.99,
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'root beer',
        desc: 'a serving of rootbeer in a choice of your size',
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'coke',
        desc: 'a serving of coke in a choice of your size',
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'sweet tea',
        desc: 'a serving of sweet tea in a choice of your size',
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 12,
        type: 'drinks',
        item: 'lemonade',
        desc: 'a serving of lemonade in a choice of your size',
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 13,
        type: 'desserts',
        item: 'browine',
        desc: 'a browine with ice cream and topped with fudge',
        imgUrl: '',
        price: 2.50,
        qty: 0
    },
    {
        id: 14,
        type: 'desserts',
        item: 'cheese cake',
        desc: 'a slice of cheese cake topped with strawberry syrup',
        imgUrl: '',
        price: 1.50,
        qty: 0
    },
    {
        id: 15,
        type: 'desserts',
        item: 'chocolate chip cookie',
        desc: 'a large chocolate chip cookie',
        imgUrl: '',
        price: 1.70,
        qty: 0
    },
    {
        id: 16,
        type: 'desserts',
        item: 'donuts',
        desc: '3 homemade donut',
        imgUrl: '',
        price: 1.10,
        qty: 0
    },
    {
        id: 17,
        type: 'sides',
        item: 'fries',
        desc: 'a batch of fries served with your choice of sauce ',
        imgUrl: '',
        price: .70,
        qty: 0
    },
    {
        id: 18,
        type: 'sides',
        item: 'fruit bowl',
        desc: 'a small bowl of assorted friuts',
        imgUrl: '',
        price: .90,
        qty: 0
    },
    {
        id: 19,
        type: 'sides',
        item: 'mashed potatoes',
        desc: 'a small helping of mashed potatoess',
        imgUrl: '',
        price: .80,
        qty: 0
    },
    {
        id: 20,
        type: 'sides',
        item: 'cesar salad',
        desc: 'a cesar salad served with a dressing of your choice',
        imgUrl: '',
        price: .95,
    }

]

//confirm button

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click')
})


//load the menu items
//make rows 
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')

    const row = document.createElement('div')
    row.classList.add('row')

    div.appendChild(menuSubheading)
    div.appendChild(row)
})


for(let i = 0; i < menuTypes.length; i++){
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDivs[i])
}
//grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

//build cols and cards
menuItems.forEach(item => {
    //do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
    <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
    <div class="card-body">
        <h4 class="card-title text-capitalize item-item">${item.item}</h4>
        <p class="card-text text-uppercase item-desc">${item.desc}</p>
    </div>

    `
})