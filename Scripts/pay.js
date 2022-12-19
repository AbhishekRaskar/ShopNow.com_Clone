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
        window.location.href = "SignUp.html";
        // console.log("hi");
    });
    



    let form=document.querySelector("#join")
    form.addEventListener("click",(event) =>{
        event.preventDefault();
        let fist=document.querySelector("#fist").value;
        let last=document.querySelector("#last").value;
        let user=document.querySelector("#user").value;
        let mail=document.querySelector("#mail").value;
        let ckbx=document.querySelector("#chb").value;

        if(fist=="" || last=="" || user=="" || mail=="" || ckbx==""){
            alert("Please fill all details !")
        }
        else{
            window.location.href = "otp.html";
        }

    });