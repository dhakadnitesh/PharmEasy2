var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}






import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();

let Healthcare = [
  
 
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/000660/accu-chek-active-glucometer-kit-with-free-10-strips-1-1669655236.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accu-Chek Active Glucometer Kit (With Free 10 Strips)
    `,
    Price: 950,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/V63989/accusure-as-bp-digital-monitor-2-1671741637.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accusure As Bp Digital Monitor
    `,
    Price: 1062,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=700x0&dpr=1&q=100",
    Title: `Dr. Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50
    `,
    Price: 602,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1669710365.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accu-Chek Instant Glucometer Test Strips Box Of 50
    `,
    Price: 900,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/274946/contour-plus-glucometer-test-strips-box-of-50-1-1671740730.jpg?dim=700x0&dpr=1&q=100",
    Title: `Contour Plus Glucometer Test Strips Box Of 50(with free 10 stipe)
    `,
    Price: 1028,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D05436/contour-ts-blood-glucose-50s-test-strip-with-free-kalor-round-lancets-2-1707997789.jpg?dim=700x0&dpr=1&q=100",
    Title: `Contour Ts Blood Glucose 50'S Test Strip With Free Kalor Round Lancets
    `,
    Price: 1050,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/P61386/liveasy-surgical-microporous-surgical-tape-125-mm-5mtr-single-pcs-2-1674286126.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Surgical Microporous Surgical Tape 12.5 Mm* 5mtr Single Pcs
    `,
    Price: 19,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/W91392/liveasy-surgical-microporus-surgical-tape-125mm-914-mtr-single-pcs-2-1674286084.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Surgical Microporus Surgical Tape 12.5mm *9.14 Mtr Single Pcs
    `,
    Price: 38,
  },
  
 
 
  {
    img: "https://cdn01.pharmeasy.in/dam/products/P71622/omron-hem-7121j-bp-monitor-1-nos-2-1678799575.jpg?dim=700x0&dpr=1&q=100",
    Title: `Omron Hem 7121j Bp Monitor 1 No'S
    `,
    Price: 1753,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/L52017/beurer-bc-32-wrist-blood-pressure-monitor-2-1671742829.jpg?dim=700x0&dpr=1&q=100",
    Title: `Beurer Bc 32 Wrist Blood Pressure Monitor
    `,
    Price: 2156,
  },
  
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I06295/omron-hem-7120-bp-monitor-2-1669655298.jpg?dim=700x0&dpr=1&q=100",
    Title: `Omron Hem-7120 Bp Monitor
    `,
    Price: 1001,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D26298/dr-odin-digital-blood-pressure-monitor-black-bsx516-2-1671742591.jpg?dim=700x0&dpr=1&q=100",
    Title: `Dr. Odin Digital Blood Pressure Monitor Black-Bsx516
    `,
    Price: 4000,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/O70942/coviself-covid-self-test-kit-2-1671742428.jpg?dim=700x0&dpr=1&q=100",
    Title: `Coviself Covid Self Test Kit
    `,
    Price: 180,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D61297/mankind-at-home-one-step-urine-hcg-digital-pregnancy-test-kit-6-tests-2-1686549527.jpg?dim=700x0&dpr=1&q=100",
    Title: `Mankind Prega 
    `,
    Price: 197,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/F06427/ova-news-ovulation-detection-kit-by-mankind-ovulation-kit-18-tests-pack-of-3-6.5-1686550632.jpg",
    Title: `Ova News Ovulation Detection Kit 
    `,
    Price: 1297,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/N37764/onetouch-select-plus-test-strips-pack-of-50-strips-for-use-with-onetouch-select-plus-simple-3-1699443509.jpg?dim=700x0&dpr=1&q=100",
    Title: `Onetouch Select Plus Test Strips 
    `,
    Price: 1135,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X94492/pharmeasy-pulse-oximeter-2-1691042123.jpg?dim=700x0&dpr=1&q=100",
    Title: `Pharmeasy Pulse Oximeter
    `,
    Price: 499,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T27314/pul-fingertip-pulse-oximeter-2-1641789118.jpg?dim=700x0&dpr=1&q=100",
    Title: `Pul Fingertip Pulse Oximeter
    `,
    Price: 476,
  },
 
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05586/dr-morepen-pulse-oximeter-1-piece-1-1669655167.jpg?dim=700x0&dpr=1&q=100",
    Title: `Dr. Morepen Pulse Oximeter 1 Piece
    `,
    Price: 499,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/Z40947/dr-odin-finger-tip-pulse-oximeter-2-1654232979.jpg?dim=700x0&dpr=1&q=100",
    Title: `Dr Odin Finger Tip Pulse Oximeter
    `,
    Price: 875,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D95288/onetouch-select-plus-simple-glucometer-free-10-test-strips-10-sterile-lancets-1-lancing-device-3-1700200875.jpg?dim=700x0&dpr=1&q=100",
    Title: `Onetouch Select Plus Simple Glucometer`,
    Price: 947,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T50870/accu-chek-instant-50-test-strips-2-packs-of-softclix-lancet-25-2-1679656580.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accu-Chek Instant 50 Test Strips + 2 Packs Of Softclix Lancet 25
    `,
    Price: 1381,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D97429/accu-chek-active-50-test-strips-2-packs-of-softclix-lancet-25-2-1671742432.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accu-Chek Active 50 Test Strips + 2 Packs Of Softclix Lancet 25
    `,
    Price: 1289,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/L62732/accu-chek-active-100-strips-50x2-with-free-25-lancets-3-1654232837.jpg?dim=700x0&dpr=1&q=100",
    Title: `Accu-Chek Active 100 Strips (50x2) With Free Softlix Free 25 Lancets
    `,
    Price: 1889,
  },
//   {
//     img: "",
//     Title: ``,
//     Price: "",
//   },
//   {
//     img: "",
//     Title: ``,
//     Price: "",
//   },
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
    btn.innerText = "Add To Card";
    btn.addEventListener("click",function(){
        Addtocard(ele)
    })

    card.className = "card";

    img.src = ele.img;
    img.className = "img";

    Title.innerText = ele.Title;
    Title.className = "h3";

    Price.innerText = ele.Price;
    Price.className = "p";

    btn.className = "btn";

    card.append(img, Title, Price, btn);
    div.append(card);
  });
}

showdata(Healthcare);

// sort Method

let sort = document.getElementById("sortbyprice");
sort.addEventListener("change", function () {
  sortdata();
});

function sortdata() {
  let sort2 = sort.value;
  console.log(sort2);
  let narr;

  if (sort2 === "desc") {
    narr = Healthcare.sort((a, b) => {
      return Number(b.Price) - Number(a.Price);
    });
  } else if (sort2 === "asc") {
    narr = Healthcare.sort((a, b) => {
      return Number(a.Price) - Number(b.Price);
    });
  } else if (sort2 === "Return-page") {
    return (window.location.href = "./Healthcaredevices.html");
  }

  showdata(narr);
}

// short method

// search method

let Search = document.getElementById("search-input");
Search.addEventListener("input", function () {
  searchdata();
});

function searchdata() {
  let search2 = Search.value;
  console.log(search2);

  let narr1 = Healthcare.filter((ele) => {
    return Number(ele.Price) === Number(search2);
  });

  if (narr1.length > 0) {
    showdata(narr1);
  } else {
    div.innerHTML = `<h2>Products Not Found....</h2>`;
    showdata(Healthcare);
  }
}

// search method


// Add to card

let Health = JSON.parse(localStorage.getItem("card")) || []

function Addtocard(ele){
    Health.push(ele)
    console.log(Health)

    localStorage.setItem("card",JSON.stringify(Health))
    alert("Produts Added To The Card!!")
}



