var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}





import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar()

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2()



let Card = JSON.parse(localStorage.getItem("card"))||[]



let div = document.getElementById("container");





function showdata(arr) {
  div.innerHTML = "";

  arr.forEach((ele, i) => {
    let card = document.createElement("div");

    let img = document.createElement("img");

    let Title = document.createElement("h3");

    let Price = document.createElement("p");

    card.className = "card";

    img.src = ele.img;
    img.className = "img";

    Title.innerText = ele.Title;
    Title.className = "h3";

    Price.innerText = ele.Price;
    Price.className = "p";

    let btn = document.createElement("button");
    btn.innerText = "Remove from card";
    btn.className = "btn";
    btn.addEventListener("click", function () {
      Removefromcard(ele,i);
    });

    card.append(img, Title, Price, btn);
    div.append(card);
  });
}

showdata(Card)


function Removefromcard(i){
    Card.splice(i,1)
    console.log(Card)

    localStorage.setItem("card",JSON.stringify(Card))
    showdata(Card)
    alert("Product Remove From The Card!!")

    if(Card.length===0){
        window.location.href = "./index.html";
    }
    else{
        showdata(Card)
    }
}

