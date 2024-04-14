var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}




import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()

import {navbar2} from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2()



var image = [
    {
        image: "https://t3.ftcdn.net/jpg/07/29/82/80/240_F_729828022_Fk49je3YXxdYcNWYk9GyzD8MhEKwQsEB.jpg",
    },
    {
      image:"https://t4.ftcdn.net/jpg/05/88/39/07/240_F_588390761_5C08hywE2O9CbWilmFASbs5JeQoHNrlQ.jpg"
    },
    {
      image:"https://t3.ftcdn.net/jpg/07/11/69/18/240_F_711691836_S5msP4rMUSdbB6FlO1GRBN5xzzlrERiz.jpg"
    },
    {
        image:"https://t3.ftcdn.net/jpg/05/88/39/06/240_F_588390611_E6XRjImveLW15b1VBDLJCLbvAensH2qW.jpg"
    }
    
    
    
];

var time = 0;
var id;

function settime() {
    if (time < image.length - 1) {
        time++;
    } else {
        time = 0;
    }
    document.getElementById("slider").src = image[time].image;
}

// Start the slider initially
id = setInterval(settime, 3000);