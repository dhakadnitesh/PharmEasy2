var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}



import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();

let skincare = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I40419/venusia-max-intensive-moisturizing-lotion-repairs-dry-skin-provides-soft-smooth-skin-500gm-2-1669710706.jpg?dim=700x0&dpr=1&q=100",
    Title: `Venusia Max Intensive Moisturizing Lotion Repairs `,
    Price: 953,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/269298/cetaphil-moisturising-lotion-sensitive-and-dry-skin-250ml-2-1671740893.jpg?dim=700x0&dpr=1&q=100",
    Title: `Cetaphil Moisturising Lotion (Sensitive And Dry Skin) - 250ml`,
    Price: 1124,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D21634/cetaphil-moisturising-lotion-normal-to-combination-sensitive-skin-250ml-2-1666018732.jpg?dim=700x0&dpr=1&q=100",
    Title: `Cetaphil Moisturising Lotion ..`,
    Price: 985,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X63988/cetaphil-brightening-day-protection-cream-spf-15-50g-2-1654249645.jpg?dim=700x0&dpr=1&q=100",
    Title: `Cetaphil Brightening Day Protection Cream Spf 15 - 50g.Every cream gives us better comfort.`,
    Price: 1026,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/265998/tetmosol-medicated-soap-for-relief-from-skin-infections-and-daily-bathing-lime-fragrance-100g-2-1672410530.jpg?dim=700x0&dpr=1&q=100",
    Title: `Tetmosol Medicated Soap `,
    Price: 90.25,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Q92979/fabessentials-indian-lotus-glycerin-bathing-bar-100-gm-6.3-1709028274.jpg",
    Title: `Fabessentials Indian Lotus`,
    Price: 95,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E84737/fabessentials-lemongrass-glycerin-bathing-bar-100-gm-2-1709029428.jpg?dim=700x0&dpr=1&q=100",
    Title: `Fabessentials Lemongrass Glycerin Bathing Bar - 100 Gm
        `,
    Price: 98,
  },

  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I48051/himalaya-neem-turmeric-soap-125gm-2-1669711342.jpg?dim=700x0&dpr=1&q=100",
    Title: `Himalaya Neem & Turmeric Soap 125gm.Improves general skin health and immunity, combating bacterial infections.`,
    Price: 63,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/N65859/liveasy-essentials-cleansing-aloe-vera-refreshing-lime-facial-wipes-20s-2-1697177802.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Essentials Cleansing Aloe Vera Refreshing Lime Facial Wipes 20'S`,
    Price: 62,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X80366/liveasy-essentials-cleansing-aloe-vera-refreshing-lime-faciel-wipes-pack-of-72-2-1697800275.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Essentials Cleansing Aloe Vera Refreshing Lime Faciel Wipes Pack Of 72`,
    Price: 110,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I48468/bodyguard-premium-aloe-vera-wet-wipes-paraben-free-packet-of-72-s-2-1669711265.jpg?dim=700x0&dpr=1&q=100",
    Title: `Bodyguard - Premium Aloe Vera Wet Wipes Paraben Free Packet Of 72 'S`,
    Price: 200,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X99738/johnsons-baby-skincare-wipes-packet-of-72-2-1647015675.jpg?dim=700x0&dpr=1&q=100",
    Title: `Johnson'S Baby Skincare Wipes Packet Of 72
        `,
    Price: 227,
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I41687/nivea-soft-light-moisturizer-of-100-ml-2-1679372287.jpg?dim=700x0&dpr=1&q=100",
    Title:`Nivea Soft Light Moisturizer Of 100 Ml`,
    Price:174
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I14524/hydromax-cream-200-gm-2-1669710123.jpg?dim=700x0&dpr=1&q=100",
    Title:`Hydromax Cream - 200 Gm
    `,
    Price:222
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I14734/hydrofil-cream-200gm-2-1669710125.jpg?dim=700x0&dpr=1&q=100",
    Title:`Hydrofil Cream 100gm`,
    Price:284
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/223494/xerina-cream-50gm-1-1671741023.jpg?dim=700x0&dpr=1&q=100",
    Title:`Xerina Cream 50gm`,
    Price:283
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/L02209/ahaglow-advanced-tube-of-100gm-face-wash-gel-2-1692250093.jpg?dim=700x0&dpr=1&q=100",
    Title:`Ahaglow Advanced Tube Of 100gm Face Wash Gel`,
    Price:452
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products/G65543/uv-doux-spf-50-tube-of-75gm-sunscreen-gel-1-1649659026.jpg?dim=700x0&dpr=1&q=100",
    Title:`Uv Doux Spf 50 Tube Of 75gm Sunscreen Gel`,
    Price:978
  },
  {
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I32794/uv-smart-spf-40-pa-sunscreen-gel-50gm-2-1703147211.jpg?dim=700x0&dpr=1&q=100",
    Title:`Uv Smart Spf 40+ Pa++++ Sunscreen Gel 50gm`,
    Price:600
  },{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I01037/uv-doux-spf-50-tube-of-50gm-silicone-sunscreen-gel-2-1707908006.jpg?dim=700x0&dpr=1&q=100",
    Title:` Silicone Sunscreen Gel`,
    Price:550
  },
];

let div = document.getElementById("container");

function showdata(arr) {
  div.innerHTML = "";
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

showdata(skincare);

// sort

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sort2 = sort.value;
  console.log(sort2);

  let narr;

  if (sort2 === "desc") {
    narr = skincare.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sort2 === "asc") {
    narr = skincare.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if (sort2 === "Return-page") {
    return (window.location.href = "./Skin Care.html");
  }

  showdata(narr);
}


// for searching

let Search = document.getElementById("search-input");
Search.addEventListener("input", function () {
  searchdata();
});

function searchdata() {
  let Search1 = Search.value;
  console.log(Search1);

  let narr1 = skincare.filter((ele) => {
    return Number(ele.Price) === Number(Search1);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products not found.....</h2>`;
    showdata(skincare);
  }
}

// for searching

// added into card

let skin = JSON.parse(localStorage.getItem("card")) || [];

function Addtocard(ele) {
  skin.push(ele);
  console.log(skin);

  localStorage.setItem("card", JSON.stringify(skin));

  alert("Product Added To The Card!!");
}
