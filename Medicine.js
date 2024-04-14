var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}






import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();