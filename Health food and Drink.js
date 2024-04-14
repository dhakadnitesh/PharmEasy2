var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}





import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();



let HealthFoodDrink = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/105900/himalaya-liv52-ds-tablets-60s-2-1671741075.jpg?dim=700x0&dpr=1&q=100",
    Title: `Himalaya Liv.52 Ds Tablets - 60'S
        `,
    Price: 227,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K40120/everherb-by-pharmeasy-pain-relief-oil-blend-of-8-powerful-herbal-ingredients-100-ml-6.2-1698645610.jpg",
    Title: `Everherb (By Pharmeasy) Pain Relief Oil`,
    Price: 195,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/B99719/dr-vaidyas-pain-relief-oil-ayurvedic-oil-for-joint-and-muscle-pain-pack-of-1-100ml-each-2-1709536049.jpg?dim=700x0&dpr=1&q=100",
    Title: `Dr. Vaidya'S Pain Relief Oil -100 Ml
    `,
    Price: 234,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E30239/amrutanjan-strong-pain-relief-balm-bottle-of-50-ml-2-1654169570.jpg?dim=700x0&dpr=1&q=100",
    Title: `Amrutanjan Strong Pain Relief Balm Bottle Of 50 Ml
    `,
    Price: 133,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/365699/threptin-vanilla-butterscotch-nutrition-diskettes-tin-of-1-kg-2-1669709950.jpg?dim=700x0&dpr=1&q=100",
    Title: `Threptin Vanilla Butterscotch Nutrition Diskettes Tin Of 1 Kg`,
    Price: 1672,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/R95554/fit-nutrition-bar-assorted-variety-pack-of-6-2-1671742504.jpg?dim=700x0&dpr=1&q=100",
    Title: `F'It Nutrition Bar Assorted/Variety (Pack Of 6)`,
    Price: 525,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/C45545/panchamrit-anti-stress-gummies-30-units-2-1684492893.jpg?dim=700x0&dpr=1&q=100",
    Title: `Panchamrit Anti-Stress ..`,
    Price: 300,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/L56994/new-saridon-strip-of-10-tablets-2-1688127341.jpg?dim=700x0&dpr=1&q=100",
    Title: `New Saridon Strip Of 10 Tablets`,
    Price: 48,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg?dim=700x0&dpr=1&q=100",
    Title: `Digene Gel Acidity & Gas Relief...`,
    Price: 154,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Z63893/liveasy-wellness-antacid-mint-flavour-sugar-free-bottle-of-200ml-oral-liquid-2-1695207631.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Wellness Antacid Mint Flavour Sugar Free `,
    Price: 125,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I03065/himcocid-sf-mint-flavour-suspension-200ml-2-1676354330.jpg?dim=700x0&dpr=1&q=100",
    Title: `Himcocid Sf Mint Flavour Suspension 200ml`,
    Price: 143,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/M57242/amrutanjan-advanced-back-pain-roll-on-bottle-of-50-ml-2-1654234591.jpg?dim=700x0&dpr=1&q=100",
    Title: `Amrutanjan Advanced Back Pain Roll-On Bottle Of 50 Ml`,
    Price: 134,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E22952/pharmeasy-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1698385251.jpg?dim=700x0&dpr=1&q=100",
    Title: `Pharmeasy Apple Cider Vinegar`,
    Price: 325,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T69121/kapiva-himalayan-apple-cider-vinegar-with-mother-vinegar-500ml-unpasteurized-and-undiluted-6.2-1696413052.jpg",
    Title: `Kapiva Himalayan Apple Cider Vinegar`,
    Price: 284,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/F96523/nutriorg-nutri-fit-juice-500ml-2-1677732661.jpg?dim=700x0&dpr=1&q=100",
    Title: `Nutriorg Nutri Fit Juice 500ml`,
    Price: 284,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/C00742/pro360-weight-gainer-chocolate-weight-management-powder-jar-of-250-g-2-1654077429.jpg?dim=700x0&dpr=1&q=100",
    Title: `Medislim Gold Vanilla Flavour Powder 500 Gm.Being nutrient-rich..`,
    Price: 992,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I10603/sugar-free-gold-100-sachets-sweetener-sachets-box-of-100-s-2-1688468113.jpg?dim=700x0&dpr=1&q=100",
    Title: `Sugar Free Gold 100 Sachets Sweetener Sachets Box Of 100 'S`,
    Price: 145,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/R39500/glucon-d-instant-energy-health-drink-nimbu-pani-450gm-refill-2-1677525522.jpg?dim=700x0&dpr=1&q=100",
    Title: `Glucon-D Nimbu Pani Glucose Powder450gm Refill`,
    Price: 181,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/V01140/glucon-d-instant-energy-health-drink-tangy-orange-200gm-refill-2-1677525526.jpg?dim=700x0&dpr=1&q=100",
    Title: `Glucon-D Tangy Orange Glucose Powder200gm Refill`,
    Price: 82,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Y71987/glucon-d-instant-energy-health-drink-tangy-orange-75gm-refill-extra-50gm-free-2-1677525593.jpg?dim=700x0&dpr=1&q=100",
    Title: `Glucon-D Tangy Orange Glucose Powder75gm+50gm Refill`,
    Price: 142,
  },
];

let div = document.getElementById("container");

function showdata(arr) {
    div.innerHTML =""
  arr.forEach((ele) => {
    let card = document.createElement("div");

    let img = document.createElement("img");

    let Title = document.createElement("h3");

    let Price = document.createElement("p");

    let btn = document.createElement("button");
    btn.addEventListener("click", function () {
      Addtocard(ele);
    });

    card.className = "card";

    img.src = ele.img;
    img.className = "img";

    Title.innerText = ele.Title;
    Title.className = "h3";

    Price.innerText = ele.Price;
    Price.className = "p";

    btn.innerText = "Add To Card";
    btn.className = "btn";

    card.append(img, Title, Price, btn);
    div.append(card);
  });
}

showdata(HealthFoodDrink);

//  for sorting

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sort2 = sort.value;
  console.log(sort2);
  let narr;

  if (sort2 === "desc") {
    narr = HealthFoodDrink.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sort2 === "asc") {
    narr = HealthFoodDrink.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if (sort2 === "Return-page") {
    return (window.location.href = "./Health food and Drink.html");
  }
  console.log(narr);

  showdata(narr);
}

// for searching

let Search = document.getElementById("search-input");
Search.addEventListener("input", function () {
  searchdata();
});

function searchdata() {
  let search2 = Search.value;
  console.log(search2);

  let narr1 = HealthFoodDrink.filter((ele) => {
    return Number(ele.Price) === Number(search2);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products Not Found....</h2>`;
    showdata(HealthFoodDrink);
  }
}

// search method

//    Add to card

let HealthFD = JSON.parse(localStorage.getItem("card")) || [];

function Addtocard(ele) {
  HealthFD.push(ele);
  console.log(HealthFD);

  localStorage.setItem("card", JSON.stringify(HealthFD));
  alert("Produts Added To The Card!!");
}
