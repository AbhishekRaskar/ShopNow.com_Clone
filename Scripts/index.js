// let url = "https://636f1afbf2ed5cb047d58225.mockapi.io/all";



let url = "https://fakestoreapi.com/products";

fetch(url).then(function (res) {
    return res.json();
})
    .then(function (data) {
        Data = data;
        // console.log(Data);
        Display(Data)
    })
    .catch(function (err) {
        alert(err);
    });

let main = document.querySelector("#products")

function Display(Data) {

    // console.log(Data)

    Data.forEach(function (elem, i) {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);

        let name = document.createElement("h1");
        name.textContent = elem.name;

        let pr = document.createElement("h2");
        pr.textContent = elem.price;

        let cat = document.createElement("p");
        cat.textContent = elem.category;

        let desc = document.createElement("p");
        desc.textContent = elem.description;

        let rate = document.createElement("p");
        rate.textContent = elem.rating.rate;

        let btn = document.createElement("button");
        btn.textContent = "Add to Cart"


        div.append(image, name, pr, cat, desc, rate, btn);

        main.append(div);

    });
}