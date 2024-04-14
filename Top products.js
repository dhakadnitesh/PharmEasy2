var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}













import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();

let Topproducts = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
    Price: 207.48,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/V68813/everherb-diabetic-care-juice-13-potent-herbs-healthy-blood-sugar-management-1-litre-bottle-2-1698385586.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Everherb Diabetic Care Juice-13 Potent Herbs - Healthy Blood Sugar Management - 1 Litre Bottle",
    Price: 311.48,
  },
 
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K40120/everherb-by-pharmeasy-pain-relief-oil-blend-of-8-powerful-herbal-ingredients-100-ml-2-1698645591.jpg",
    Title:
      "Everherb (By Pharmeasy) Pain Relief Oil - Blend Of 8 Powerful Herbal Ingredients - 100 Ml",
    Price: 195.51,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg?dim=700x0&dpr=1&q=100",
    Title: "Pharmeasy Pill Box Organizer",
    Price: 254.49,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/188996/zincovit-strip-of-15-tablets-green-2-1702990444.jpg",
    Title:
      "Zincovit Strip Of 15 Tablets (Green) Good for health and free from diff losses..",
    Price: 99,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products/122021/neurobion-plus-strip-of-10-tablets-2-1656662066.jpg?dim=320x320&dpr=1&q=100",
    Title:
      "Neurobion Plus Strip Of 10 Tablets It is increase the amount of protine... ",
    Price: 108.45,
  },

  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/B99719/dr-vaidyas-pain-relief-oil-ayurvedic-oil-for-joint-and-muscle-pain-pack-of-1-100ml-each-6.1-1709536291.jpg",
    Title: "Dr. Vaidya'S Pain Relief Oil -100 Ml",
    Price: 235,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I02652/iodex-pain-relief-balm-16-gm-2-1706772020.jpg?dim=700x0&dpr=1&q=100",
    Title: "Iodex Pain Relief Balm 16 Gm",
    Price: 87.12,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05006/dettol-hand-sanitizer-liquid-gel-70-alcohol-kills-999-germs-50ml-3-1669634943.jpg",
    Title: "Dettol Original Bottle Of 50ml Instant Hand Sanitizer",
    Price: 24.75,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X80366/liveasy-essentials-cleansing-aloe-vera-refreshing-lime-faciel-wipes-pack-of-72-2-1697800275.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Liveasy Essentials Cleansing Aloe Vera Refreshing Lime Faciel Wipes Pack Of 72",
    Price: 110.5,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/P54860/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-90-2-1689585851.jpg?dim=700x0&dpr=1&q=100",
    Title: "Everherb (By Pharmeasy) ",
    Price: 407.49,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/P53507/jagat-pharma-pure-giloy-ashwagandha-250mg-capsules-boost-immunity-relives-anxite-combo-pack-2-1671743780.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Jagat Pharma Pure Giloy & Ashwagandha 250mg Capsules | Boost Immunity Relives Anxite | Combo Pack",
    Price: 229.84,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Q79438/liveasy-foods-sugarfree-chyavanposh-900-gms-gives-2x-immunity-boosts-energy-2-1681475689.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Liveasy Foods Sugarfree Chyavanposh - 900 Gms-Gives 2x Immunity - Boosts Energy",
    Price: 303.24,
  },
  ,
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T15269/nutriorg-wheatgrass-juice-500ml-2-1677731927.jpg?dim=700x0&dpr=1&q=100",
    Title: "Nutriorg Wheatgrass Juice 500ml",
    Price: 300.83,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1680172150.jpg?dim=700x0&dpr=1&q=100",
    Title:
      "Everherb (By Pharmeasy) Aloe Vera Juice With Pulp - Rejuvenates Skin & Hair - 1 Litre Bottle",
    Price: 195.51,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/V81246/liveasy-wellness-oral-rehydration-salts-205g-sachet-orange-flavour-6.1-1671744000.jpg",
    Title:
      "Liveasy Wellness Oral Rehydration Salts-20.5g Sachet -Orange Flavour",
    Price: 19,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/O53013/hansaplast-fixation-tape-25-cm-x-5-mtr-2-1687437439.jpg?dim=700x0&dpr=1&q=100",
    Title: "Hansaplast Fixation Tape 2.5 Cm X 5 Mtr.",
    Price: 35.2,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Z72101/pravek-anti-allergic-oil-50-ml-2-1705994586.jpg?dim=700x0&dpr=1&q=100",
    Title: "Pravek Anti-Allergic Oil 50 Ml",
    Price: 207,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/115990/moiste-cream-50gm-1-1671741068.jpg?dim=700x0&dpr=1&q=100",
    Title: "Moiste Cream 50gm",
    Price: 125.95,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/090550/himalaya-gokshura-tablets-60s-2-1669655322.jpg",
    Title: `Himalaya Gokshura Tablets 60'S
        `,
    Price: 245,
  },
 
];




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
    btn.innerText = "Add to card";
    btn.className = "btn";
    btn.addEventListener("click", function () {
      Addtocard(ele);
    });

    card.append(img, Title, Price, btn);
    div.append(card);
  });
}
showdata(Topproducts);

// Fors sorting

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sortval = sort.value;
  // console.log(sortval)
  let narr;

  if (sortval === "desc") {
    narr = Topproducts.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sortval === "asc") {
    narr = Topproducts.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if(sortval ==="Return-page"){
   return window.location.href ="./Top Products.html"
    
  }

  console.log(narr);
  showdata(narr);
}

// For sorting

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

  let narr1 = Topproducts.filter((ele, i) => {
    return Number(ele.Price) === Number(Search1);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products not found.....</h2>`
    showdata(Topproducts);
  }
}

// for searching

// for add to card

let Products = JSON.parse(localStorage.getItem("card"))||[]

function Addtocard(ele){
    Products.push(ele)
    console.log(Products)

    localStorage.setItem("card",JSON.stringify(Products))
    // showdata(Products)
    alert("Products Added To The Card!")

}




// for add to card
