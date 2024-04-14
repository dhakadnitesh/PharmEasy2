let form = document.querySelector("form")
form.addEventListener("submit",function(event){
 getdata1(event)
})

let data2 = JSON.parse(localStorage.getItem("data")) || []
console.log(data2)

function getdata1(event){
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let narr = data2.find((ele)=>{
        return ele.email === email && ele.password === password
        
    })
    if(narr){
        localStorage.setItem("isauth","Authenticated")

        alert("Login Successful")
        window.location.href="./index.html"
    }
    else{
        alert("Wrong Creadiential,Please Check The Info.....")
    }
   

}
