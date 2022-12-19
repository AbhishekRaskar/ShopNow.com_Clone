let signIn = document.querySelector("#li");


    signIn.addEventListener("click", function () {
        
        window.location.href = "LogIn.html"
    });

    let home = document.querySelector("#home");

    home.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    let Data = JSON.parse(localStorage.getItem("DATA")) || [];



    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let pass = document.querySelector("#pass").value;
        let chkpass = document.querySelector("#chkpass").value;



        let data = {
            Name: name,
            Email: email,
            Pass: pass,
            Chkpass: chkpass
        }
        if (pass != chkpass) {
            alert("Password is not matching");
        }
        else {

            Data.push(data);
            // console.log(Data)
            localStorage.setItem("DATA", JSON.stringify(Data));
            alert("Sign Up Successful....!");
            window.location.href = "Login.html";
            form.reset();
        }





    })