let cart = document.querySelector("#Cart");

    cart.addEventListener("click", function (event) {
        event.preventDefault();
        // console.log("working");
        window.location.href = "Cart.html";
    });

    let Up = document.querySelector("#signIn");

    Up.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "Login.html";
    })

    let home = document.querySelector("#home");

    home.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    document.querySelector("#fourth").addEventListener("click", function () {
        // console.log("Hi");
        window.location.href = "login.html"
    })

    document.querySelector("#fot").addEventListener("click",function(event){
        event.preventDefault();
        // console.log("Hi");
        window.location.href = "signup.html"
    })

    let Nam = localStorage.getItem("NAME");

   document.querySelector("#name").textContent = Nam;