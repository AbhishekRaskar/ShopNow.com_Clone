

let signup = document.querySelector("#sin");
let login = document.querySelector("#sp");

login.addEventListener("click" , ()=>{
    window.location.href = "signin.html"
})


signup.addEventListener("click", function () {

    // signIn.style.display = "none";
    // signUp.style.display = "block";

    // document.title = "Sign Up";
    window.location.href = "Login.html"
});




signUp.addEventListener("submit", function (event) {

    event.preventDefault();

    let Name = signUp.name.value;
    let User = signUp.email.value;
    let Pass = signUp.pass.value;


    if (Pass != signUp.chkpass.value) {
        alert("Password is not matching");
    }
    else {
        localStorage.setItem("UserName", Name);
        localStorage.setItem("UserId", User);
        localStorage.setItem("UserPass", Pass);
        alert("Sign Up Successful....!")


        signUp.reset();
    }
});


signIn.addEventListener("submit", function (event) {
    event.preventDefault();
    let User = signIn.email1.value;
    let Pass = signIn.pass1.value;


    let UId = localStorage.getItem("UserId");
    let UPass = localStorage.getItem("UserPass");


    if (User !== UId) {
        alert("User Not registered...!");
    }
    else {
        if (Pass !== UPass) {
            alert("Wrong Password...!");
        }
        else {
            alert("Login Successful...!");
        }

        window.location.href = "index.html";
    }



});
