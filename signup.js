let form = document.querySelector("form")
form.addEventListener("submit",function(){
   getdata1()
})
let data;

 data = JSON.parse(localStorage.getItem("data")) || []

function getdata1(){
    event.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confi-password").value;
    // console.log(name,email,password,confirm)

    if(password === confirm){
        let obj = {
            name,
            email,
            password,
            confirm
        }
        
        data.push(obj)
        console.log(data)
        alert("Signup Successful!")

        localStorage.setItem("data",JSON.stringify(data))
        window.location.href ="./Login.html"

    }
    else{
        alert("Password is Incorrect !!")
    }
}