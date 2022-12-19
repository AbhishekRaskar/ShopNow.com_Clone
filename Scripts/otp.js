let signup = document.querySelector("#su");


    signup.addEventListener("click", function () {
        window.location.href = "SignUp.html"
        alert("hi")
    });
    let home = document.querySelector("#home");

    home.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
        alert("hi")

    });

    let Up = document.querySelector("#foo");

    Up.addEventListener("click", function () {
        event.preventDefault();
        window.location.href = "SignUp.html"
        // console.log("hi");
    });

    
    document.querySelector("#join").addEventListener("click",function(event){
        event.preventDefault();
        let val=document.querySelector("#fist").value;
        // console.log("hi");
        if(val == "1234"){
            window.location.href = "home.html";
        }
        else{
            alert("Incorrect OTP..");
        }
    })