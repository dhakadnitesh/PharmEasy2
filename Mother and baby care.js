var isauth = localStorage.getItem("isauth") || "Not Authenticated";

if(isauth !== "Authenticated"){
    window.location.href = "./signup.html"
    alert("please do signup")

}





import navbar from "./nav.js";
document.getElementById("nav").innerHTML = navbar();

import { navbar2 } from "./nav.js";
document.getElementById("nav2").innerHTML = navbar2();

let MotherBabyCare = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/G84626/liveasy-baby-care-soft-gentle-baby-wipes-2-1671743315.jpg?dim=700x0&dpr=1&q=100",
    Title: `Liveasy Baby Care Soft & Gentle Baby Wipes`,
    Price: 100,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/T89908/himalaya-baby-gentle-wipes-combo-pack-272-2-1671741950.jpg?dim=700x0&dpr=1&q=100",
    Title: `Himalaya Baby Gentle Wipes Combo Pack 2*72`,
    Price: 315,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/V62378/mother-sparsh-99-pure-water-unscented-baby-wipes-72-pcs-pack-of-1-2-1641793534.jpg?dim=700x0&dpr=1&q=100",
    Title: `Mother Sparsh 99% Pure Water`,
    Price: 212,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/C67877/oyo-baby-water-based-wet-wipes-with-lid-baby-wipes-for-newborn-babies-with-lid-pack-of-1-2-1671743639.jpg?dim=700x0&dpr=1&q=100",
    Title: `Oyo Baby Water Based Wet Wipes `,
    Price: 160,
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

showdata(MotherBabyCare);


// sort


let sort = document.getElementById("sortbyprice")
sort.addEventListener("change",function(){
    sortdata()
})

function sortdata(){
    let sort2 = sort.value;
    console.log(sort2)

    let narr;
    if(sort2 === 'desc'){
        narr = MotherBabyCare.sort((a,b)=>{
            return Number(b.Price)-Number(a.Price)
        })
    }
    else if(sort2 === 'asc'){
        narr = MotherBabyCare.sort((a,b)=>{
            return Number(a.Price) - Number(b.Price)
        })


    }
    else if(sort2 === "Return-page"){
        return (window.location.href="./Mother and baby care.html")
    }
    console.log(narr)
    showdata(narr)
    
}


// search functionality

    let Search = document.getElementById("search-input")
    Search.addEventListener("input",function(){
        searchdata()
    })



    function searchdata(){
        let Search1 = Search.value;
        console.log(Search1)


        let narr1 = MotherBabyCare.filter((ele)=>{
            return Number(ele.Price) === Number(Search1)
        })

        if(narr1.length>0){
            showdata(narr1)
        }

        else{
            div.innerHTML =`<h2>Products Not Found!!</h2>`
            showdata(MotherBabyCare)
        }
    }



    // card data

    let Mothercare = JSON.parse(localStorage.getItem("card")) || []

    function Addtocard(ele){
        Mothercare.push(ele)
        console.log(Mothercare)

        localStorage.setItem("card",JSON.stringify(Mothercare))
        alert("Products Added To The Card!!!")

    }