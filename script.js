const data = [
  {
    "id": 1,
    "name": "Cheeseburger",
    "price": 5.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
  },
  {
    "id": 2,
    "name": "Pizza",
    "price": 8.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
  },
  {
    "id": 3,
    "name": "Tacos",
    "price": 3.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
  },
  {
    "id": 4,
    "name": "Sushi",
    "price": 11.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
  },
  {
    "id": 5,
    "name": "Pasta",
    "price": 9.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
  },
  {
    "id": 6,
    "name": "Fried Chicken",
    "price": 7.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
  },
  {
    "id": 7,
    "name": "Grilled Cheese Sandwich",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
  },
  {
    "id": 8,
    "name": "Steak",
    "price": 15.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
  },
  {
    "id": 9,
    "name": "Caesar Salad",
    "price": 6.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
  },
  {
    "id": 10,
    "name": "Fish and Chips",
    "price": 8.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
  },
  {
    "id": 11,
    "name": "Ramen",
    "price": 9.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
  },
  {
    "id": 12,
    "name": "Burrito",
    "price": 7.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
  },
  {
    "id": 13,
    "name": "Pho",
    "price": 8.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
  },
  {
    "id": 14,
    "name": "Pad Thai",
    "price": 9.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
  },
  {
    "id": 15,
    "name": "Gyro",
    "price": 6.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
  },
  {
    "id": 16,
    "name": "Ice Cream",
    "price": 3.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
  },
  {
    "id": 17,
    "name": "Smoothie",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
  },
  {
    "id": "18",
    "name": "Apple Pie",
    "price": 4.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
  },
  {
    "id": 19,
    "name": "Chocolate Cake",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
  },
  {
    "id": 20,
    "name": "Pancakes",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
  },
  {
    "id": 21,
    "name": "Cupcake",
    "price": 2.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
  },
  {
    "id": 22,
    "name": "Crepes",
    "price": 5.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
  },
  {
    "id": 23,
    "name": "Club Sandwich",
    "price": 6.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
  },
  {
    "id": 24,
    "name": "Falafel",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
  },
  {
    "id": 25,
    "name": "Curry",
    "price": 9.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
  }
]


const card_container = document.getElementById("card_container")
const take_order = document.getElementById("take_order")
const ordered_items = document.getElementById("ordered_items")
const total_price = document.getElementById("total-price")
const place_order = document.getElementById("place_order")
const pay = document.getElementById("pay_order")

let order = []
let order_stats = {
  "order_status": false,
  "paid": false 
}
let total = 0


function displayAlert(){
  alert("Thank You for eating with us today!")
}

function payOrder(){
  pay.style.backgroundColor = "green"
  setTimeout (() => {
    order_stats.paid = true
    const p = document.getElementById("pay-status")
    p.innerText = "Payment Done."
    console.log("status - ", order_stats)

    if(order_stats.paid == true){
      displayAlert()
    }
  }, 1000)
}



function orderPrep(){
  place_order.style.backgroundColor = "green"
  take_order.style.backgroundColor = "grey"
  take_order.disable = true
  setTimeout (() => {
    order_stats.order_status = true
    const p = document.getElementById("order-status")
    p.innerText = "Your order is placed."
    console.log("status - ", order_stats)

    if(order_stats.order_status == true){
      pay.addEventListener("click", payOrder)
    }
  }, 1500)
}

function displayOrder() {

  if(take_order.disable != true){
    if(order.length > 0){
      take_order.disable = true
      take_order.style.backgroundColor = "green"
    }
  
    setTimeout(() => {
      
      ordered_items.innerHTML = ""
      order.forEach((ele, ind) => {
  
        let item = document.createElement("div")
        item.className = "items"
  
        let div = document.createElement("div")
        let sp1 = document.createElement("span")
        sp1.innerText = ind + 1 + ". "
        div.appendChild(sp1)
  
        let sp2 = document.createElement("span")
        sp2.innerText = ele.name
        div.appendChild(sp2)
  
        item.appendChild(div)
  
        let sp3 = document.createElement("span")
        sp3.innerText = "= " + ele.price
        item.appendChild(sp3)
  
        ordered_items.appendChild(item)
  
      })
      
      total = parseInt(eval(total))
      total_price.innerText = "= " + total.toFixed(2)
      if(order.length > 0){
        place_order.addEventListener("click", orderPrep)
      }
      console.log("ordered items - ",  order)
  
    }, 2500)

  }

}


function TakeOrder(event) {
  if(take_order.disable != true){
    element = event.srcElement.offsetParent

    const ele = document.getElementById(element.id)

    let name = ele.children[1].childNodes[1].innerText
    let price = ele.children[2].childNodes[1].innerText

    total = total + "+" + price.match(/\d+\.?\d+/g)

    order.push({
      "name": name,
      "price": price
    })
  }
}


async function getMenu() {

  console.log("Menu - ", data)
  for (let i = 0; i < data.length; i++) {
    const element = data[i]

    const cards = document.createElement("div")
    cards.className = "cards"
    cards.id = i

    const img = document.createElement("img")
    img.src = element.imgSrc
    cards.appendChild(img)

    const name = document.createElement("p")
    const b1 = document.createElement("b")
    b1.innerText = "Name - "
    name.appendChild(b1)
    const span1 = document.createElement("span")
    span1.innerText = element.name
    name.appendChild(span1)
    cards.appendChild(name)

    const price = document.createElement("p")
    const b2 = document.createElement("b")
    b2.innerText = "Price - "
    price.appendChild(b2)
    const span2 = document.createElement("span")
    span2.innerText = element.price + "$"
    price.appendChild(span2)
    cards.appendChild(price)


    card_container.appendChild(cards)
    cards.addEventListener("click", TakeOrder)
  }

  take_order.addEventListener("click", displayOrder)
}
getMenu()


