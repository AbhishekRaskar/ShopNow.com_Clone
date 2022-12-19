let signup = document.querySelector("#su");


    signup.addEventListener("click", function () {
        window.location.href = "SignUp.html"
    });
    let home = document.querySelector("#home");

    home.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    let Up = document.querySelector("#foo");

    Up.addEventListener("click", function () {
        event.preventDefault();
        window.location.href = "SignUp.html"
        // console.log("hi");
    });

    let Data = JSON.parse(localStorage.getItem("DATA")) || [];

    let In = document.querySelector("#signIn")

    In.addEventListener("submit", function (event) {
        event.preventDefault();
        let User = document.querySelector("#email1").value;
        let Pass = document.querySelector("#pass1").value;

        // console.log(User,Pass);

        // let UId = localStorage.getItem("UserId");
        // let UPass = localStorage.getItem("UserPass");

        let name = "";
        let count = 0;
        for (let i = 0; i < Data.length; i++) {
            if (Pass == Data[i].Pass) {
                count++;
                name = Data[i].Name;
                localStorage.setItem("NAME",name);
            }
        }
        if (count > 0){
            alert("Login Successful...!");
            window.location.href = "home.html";

            return;
        }
        else{
            alert("Wrong Password...!");
        }


    });