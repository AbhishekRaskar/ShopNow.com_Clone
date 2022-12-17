let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartItems);

let total = document.querySelector('#cart-total');

let parent = document.querySelector("#cart-cont");

let sum = 0;
let count = 0;

function Display(Data) {

    console.log(Data)

    Data.forEach(function (elem, i) {

        let Div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let name = document.createElement("h1");
        name.textContent = elem.name;

        let pr = document.createElement("h2");
        pr.textContent = elem.price;

        let cat = document.createElement("p");
        cat.textContent = elem.category;

        let desc = document.createElement("p");
        desc.textContent = elem.desc;

        let rate = document.createElement("p");
        rate.textContent = elem.rating;

        let add = document.createElement("button");
        add.textContent = "+";

        let qty = document.createElement("span");
        qty.textContent = 1;

        let red = document.createElement("button");
        red.textContent = "-";

        let rem = document.createElement("button");
        rem.textContent = "Remove"

        Div.append(image, name, pr, cat, desc, add, qty, red, rem);

        parent.append(Div);

        sum = sum + Number(elem.price);

        total.textContent = sum;

        add.addEventListener("click", function () {
            qty.textContent++;
            sum = sum + Number(elem.price);
            total.textContent = sum;

        })
        red.addEventListener("click", function () {
            qty.textContent--;
            sum = sum - Number(elem.price);
            total.textContent = sum;
        });

        rem.addEventListener("click", function () {

            Delete(elem, i);

            Display(cartItems);

            localStorage.setItem("cart", JSON.stringify(Data));

            total.textContent = sum;

            location.reload();

        });


        let coupen = document.querySelector("#cupon");

        let active = document.querySelector("#cupon-active")

        active.addEventListener("click", function () {

            // console.log(coupen.value);

            let disc = Math.floor(total.textContent * 0.3);
            let ans = total.textContent - disc;
            // console.log(ans);

            if (coupen.value == "Special 30" && count < 1) {
                total.textContent = ans;
                count++;
            }

        });

    });

}
Display(cartItems);


function Delete(elem, i) {
    cartItems.splice(i, 1);
    Display(cartItems);
}