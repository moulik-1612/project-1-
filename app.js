let select = document.querySelector(".add-product select");
let qty = document.querySelector("#quantity");
let show_price = document.querySelector("#display-price");
let btn = document.querySelector("button");


let x = document.querySelector("#textarea");
let x1 = document.querySelector("#order-textarea");
let x2 = document.querySelector("#order-history");


let btn1 = document.querySelector("#info");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let number = document.querySelector("#number");


let next = document.querySelector("#Next");
let previous = document.querySelector("#Previous");
let first = document.querySelector("#First");
let last = document.querySelector("#Last");

let n = 0;

let order_info = [];


btn.addEventListener("click", () => {
show_price.value = select.value * qty.value;
str = `Quantity = ${qty.value}\nPrice = ${show_price.value}\n\n`;
order_info.push(str);
x.value += order_info[n];
n++;
})


let customer_inf0 = [];

let m = 0;

btn1.addEventListener("click", () => {
    Str = `Name = ${name.value}\nEmail Id = ${email.value}\nNumber = ${number.value}`;
    customer_inf0.push(Str);
    x1.value += order_info[m];
    x1.value += customer_inf0[m];
    m++;
})

select.addEventListener("change", () => {
    removeData();
})


function removeData () {
    qty.value = "";
    show_price.value = "";
    name.value = "";
    email.value = "";
    number.value = "";
    x1.value = "";
}

first.addEventListener("click",() => {
   x2.value = order_info[0];
   x2.value += customer_inf0[0];
   c = 0;
})

let c = 0;
next.addEventListener("click", ()=> {
    c++;
    x2.value = order_info[c];
    x2.value += customer_inf0[c];
})

previous.addEventListener("click", () => {
    c--;
    x2.value = order_info[c];
    x2.value += customer_inf0[c];
})

last.addEventListener("click", ()=> {
    x2.value = order_info[order_info.length-1];
    x2.value += customer_inf0[order_info.length-1];
})

