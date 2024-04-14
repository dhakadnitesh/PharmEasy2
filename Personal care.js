var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}




import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();

let Personalcare = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1702961571.jpg?dim=700x0&dpr=1&q=100",
    Title: `Calcimax 500 Health Supplement Tablets (500 Mg Of Calcium) Strip Of 30`,
    Price: 354,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg?dim=700x0&dpr=1&q=100",
    Title: `Calcimax Forte Plus Strip Of 30 Tablets
    `,
    Price: 267.78,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/194710/evion-forte-capsule-10s-2-1671740837.jpg?dim=700x0&dpr=1&q=100",
    Title: `Evion Forte Strip Of 10 Capsules
    `,
    Price: 200.64,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/C07955/i-site-af-strip-of-10-capsules-1-1671742378.jpg?dim=700x0&dpr=1&q=100",
    Title: `I Site Af Strip Of 10 Capsules
    `,
    Price: 236.04,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X80366/liveasy-essentials-cleansing-aloe-vera-refreshing-lime-faciel-wipes-pack-of-72-2-1697800275.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Essentials Cleansing Aloe Vera 
    `,
    Price: 110.4,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I45647/littles-soft-cleansing-baby-wipes-with-aloe-vera-jojoba-oil-and-vitamin-e-30-wipes-2-1708061778.jpg?dim=700x0&dpr=1&q=100",
    Title: `Little'S Soft Cleansing Baby Wipes `,
    Price: 346,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/G84626/liveasy-baby-care-soft-gentle-baby-wipes-2-1671743315.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Baby Care Soft & Gentle Baby Wipes
    `,
    Price: 100,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T89908/himalaya-baby-gentle-wipes-combo-pack-272-2-1671741950.jpg?dim=700x0&dpr=1&q=100",
    Title: `Himalaya Baby Gentle Wipes Combo Pack 2*72
    `,
    Price: 315,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I14524/hydromax-cream-200-gm-2-1669710123.jpg?dim=700x0&dpr=1&q=100",
    Title: `Hydromax Cream - 200 Gm
    `,
    Price: 437,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/254819/moisturex-soft-cream-300gm-2-1671741026.jpg?dim=700x0&dpr=1&q=100",
    Title: `Moisturex Cream 100gm
    `,
    Price: 283,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/223494/xerina-cream-50gm-1-1671741023.jpg?dim=700x0&dpr=1&q=100",
    Title: `Xerina Cream 50gm
    `,
    Price: 460,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I14734/hydrofil-cream-200gm-2-1669710125.jpg?dim=700x0&dpr=1&q=100",
    Title: `Hydrofil Cream 200gm
    `,
    Price: 306,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/281751/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-60-capsules-2-1709362399.jpg?dim=700x0&dpr=1&q=100",
    Title: `Revital H Men Multivitamin `,
    Price: 575,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-woman-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-3-1700029232.jpg",
    Title: `Revital H Woman Multivitamin With Calcium Zinc`,
    Price: 344,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/227623/sevenseas-original-capsule-100s-1-1671741088.jpg?dim=700x0&dpr=1&q=100",
    Title: `Sevenseas Original Capsule 100`,
    Price: 444,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/H44554/maxirich-multivitamin-minerals-sofgels-bottle-of-30-3-1654169164.jpg",
    Title: `Maxirich Multivitamin & Minerals Sofgels Bottle Of 30
    `,
    Price: 265,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products/034206/cartigen-duo-tablet-2-1641535157.jpg?dim=700x0&dpr=1&q=100",
    Title: `Cartigen Duo Strip Of 10 Tablet`,
    Price: 299,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I38359/ostoshine-tab-10s-2-1669710574.jpg?dim=700x0&dpr=1&q=100",
    Title: `Ostoshine Strip Of 10 Tablets`,
    Price: 690,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/B71827/rejoint-uc-plus-strip-of-10-tablets-1-1641538852.jpg?dim=700x0&dpr=1&q=100",
    Title: `Rejoint Uc Plus Strip Of 10 Tablets`,
    Price: 978,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products/C62800/mobiplus-sugar-free-strip-of-10-tablets-1-1641538022.jpg?dim=700x0&dpr=1&q=100",
    Title: `Mobiplus Sugar Free Strip Of 10 Tablets
    `,
    Price: 395,
  },
];

let div = document.getElementById("container");

function showdata(arr) {
  div.innerHTML = "";

  arr.forEach((ele) => {
    let card = document.createElement("card");

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

showdata(Personalcare);

// for sorting

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sort2 = sort.value;
  console.log(sort2);
  let narr;

  if (sort2 === "desc") {
    narr = Personalcare.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sort2 === "asc") {
    narr = Personalcare.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if (sort2 === "Return-page") {
    return (window.location.href = "./Personal care.html");
  }
  console.log(narr);

  showdata(narr);
}

// for sorting

// for searching

let Search = document.getElementById("search-input");
Search.addEventListener("input", function () {
  searchdata();
});

function searchdata() {
  let Search1 = Search.value;
  console.log(Search1);

  let narr1 = Personalcare.filter((ele) => {
    return Number(ele.Price) === Number(Search1);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products not found.....</h2>`;
    showdata(Personalcare);
  }
}

// for searching

// for add to card

let Personal = JSON.parse(localStorage.getItem("card")) || [];

function Addtocard(ele) {
  Personal.push(ele);
  console.log(Personal);

  localStorage.setItem("card", JSON.stringify(Personal));
  alert("Product Added To The Card!!");
}
