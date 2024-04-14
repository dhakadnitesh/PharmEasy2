var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}




import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();





let Eledercare = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Z61607/liveasy-adult-diaper-tape-style-m-10anti-bacterial-and-odour-lock-technology-waist-28-45-inch-2-1697805992.jpg?dim=700x0&dpr=1&q=100",
    Title: "Liveasy Adult Diaper Tape Style (M)",
    Price: 385.25,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/269415/crocin-pain-relief-strip-of-15-tablets-1-1701935215.jpg?dim=700x0&dpr=1&q=100",
    Title: "Crocin Pain Relief Strip Of 15 Tablets",
    Price: 70.25,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/181150/vicks-vaporub-10ml-relief-from-cold-cough-headache-and-body-pain-2-1677525517.jpg?dim=700x0&dpr=1&q=100",
    Title: "Vicks Vaporub 10ml Relief From Cold Cough Headache And Body Pain",
    Price: 47.23,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/254835/volini-pain-relief-gel-tube-of-10-g-2-1671740954.jpg?dim=700x0&dpr=1&q=100",
    Title: "Volini Pain Relief Gel Tube Of 10 G",
    Price: 40.92,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/M57242/amrutanjan-advanced-back-pain-roll-on-bottle-of-50-ml-2-1654234591.jpg?dim=700x0&dpr=1&q=100",
    Title: "Amrutanjan Advanced Back Pain Roll-On Bottle Of 50 Ml",
    Price: 99,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1689585733.jpg?dim=700x0&dpr=1&q=100",
     Title:
      "Everherb (By Pharmeasy) Ashwagandha-Immunity Booster Capsules-Anxiety...",
    Price: 299,
 },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/P53507/jagat-pharma-pure-giloy-ashwagandha-250mg-capsules-boost-immunity-relives-anxite-combo-pack-2-1671743780.jpg?dim=700x0&dpr=1&q=100",
    Title: "Jagat Pharma Pure Giloy & Ashwagandha 250mg Capsules..",
    Price: 229.99,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Q79438/liveasy-foods-sugarfree-chyavanposh-900-gms-gives-2x-immunity-boosts-energy-2-1681475689.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Foods Sugarfree Chyavanposh - 900 Gms-Gives 2x Immunity - Boosts Energy
        `,
    Price: 303,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I41647/baidyanath-sugarfree-chyawanvit-sugarfree-chyawanprash-to-boost-immunity-increase-stamina-1kg-2-1669711228.jpg?dim=700x0&dpr=1&q=100",
    Title: `Baidyanath Sugarfree Chyawanvit `,
    Price: 418.8,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products/I05376/cartigen-1500-strip-of-15-tablets-2-1664871945.jpg?dim=700x0&dpr=1&q=100",
    Title: `Cartigen 1500 Strip Of 15 Tablets
        `,
    Price: 124,
  },
 

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I10603/sugar-free-gold-100-sachets-sweetener-sachets-box-of-100-s-2-1688468113.jpg?dim=700x0&dpr=1&q=100",
    Title: `Sugar Free Gold 100 Sachets Sweetener Sachets Box Of 100 'S
        `,
    Price: "145.77",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products/I33390/novofine-31gx6mm-box-of-5-needles-box-front-1-1626079160.jpg?dim=700x0&dpr=1&q=100",
    Title: `Novofine 31gx6mm Box Of 5 Needles
        `,
    Price: "82.44",
  },
  
 
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/H68053/flamingo-flamicrepe-cotton-crepe-bandage-15-cm-2-1671742432.jpg?dim=700x0&dpr=1&q=100",
    Title: "Flamingo Flamicrepe Cotton Crepe Bandage 15 Cm",
    Price: 415,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I35099/omnigel-gel-50gm-1-1669710577.jpg?dim=700x0&dpr=1&q=100",
    Title: `Omnigel Gel 50gm`,
    Price: 168,
  },
  ,
  {
    img:"https://cdn01.pharmeasy.in/dam/products/155145/rumalaya-gel-30gm-1-1641533224.jpg?dim=700x0&dpr=1&q=100",
    Title:`Rumalaya Gel 30gm`,
    Price:115
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/A25289/liveasy-wellness-pain-relief-gel-tube-of-30-g-1-1659962889.jpg?dim=700x0&dpr=1&q=100",
    Title:`Liveasy Wellness Pain Relief Gel Tube Of 30 G
    `,
    Price:97.56
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products/034206/cartigen-duo-tablet-2-1641535157.jpg?dim=700x0&dpr=1&q=100",
    Title:`Cartigen Duo Strip Of 10 Tablet`,
    Price:299
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I38359/ostoshine-tab-10s-2-1669710574.jpg?dim=700x0&dpr=1&q=100",
    Title:`Ostoshine Strip Of 10 Tablets`,
    Price:690
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/B71827/rejoint-uc-plus-strip-of-10-tablets-1-1641538852.jpg?dim=700x0&dpr=1&q=100",
    Title:`Rejoint Uc Plus Strip Of 10 Tablets`,
    Price:978
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products/C62800/mobiplus-sugar-free-strip-of-10-tablets-1-1641538022.jpg?dim=700x0&dpr=1&q=100",
    Title:`Mobiplus Sugar Free Strip Of 10 Tablets
    `,
    Price:395
  }




];

let div = document.getElementById("container");



function showdata(arr){
    div.innerHTML=""

    arr.forEach((ele,i)=>{
        let card = document.createElement("div")

        let img = document.createElement("img")

        let Title = document.createElement("h3")

        let Price = document.createElement("p")

        let btn = document.createElement("button")
        btn.innerText ="Add To Card"
        btn.addEventListener("click",function(){
            Addtocard(ele)
        })


        card.className ="card"

        img.className = "img"
        img.src = ele.img

        Title.className = "h3"
        Title.innerText = ele.Title

        Price.className = "p"
        Price.innerText = ele.Price

        btn.className ="btn"

        card.append(img,Title,Price,btn)
        div.append(card)
    })
}

showdata(Eledercare)


//  Fors sorting

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sortval = sort.value;
  // console.log(sortval)
  let narr;

  if (sortval === "desc") {
    narr = Eledercare.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sortval === "asc") {
    narr = Eledercare.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if(sortval ==="Return-page"){
    return window.location.href ="./Elederly care.html"
     
   }

  console.log(narr);
  showdata(narr);
}



// for searching

let Search = document.getElementById("search-input");
Search.addEventListener("input", function () {
    searchdata();
});

// let last = 0;
// function throttle(func, delay) {
//   let now = new Date().getTime();
//   if (now - last < delay) return;
//   last = now;
//   return func();
// }

function searchdata() {
  let Search1 = Search.value;
  console.log(Search1);

  let narr1 = Eledercare.filter((ele, i) => {
    return Number(ele.Price) === Number(Search1);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products not found.....</h2>`
    showdata(Eledercare);
  }
}

// for searching

// for Add tot card

let Elder  = JSON.parse(localStorage.getItem("card")) || []


function Addtocard(ele){
    Elder.push(ele)
    console.log(Elder)

    localStorage.setItem("card",JSON.stringify(Elder))
    alert("Products Added to the card!!")

}





// for add to card
