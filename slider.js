var image = [
    {
        image: "https://t4.ftcdn.net/jpg/06/53/45/01/240_F_653450148_4MhFBVKei7w0BaaVV0DiA29yUGy7JEBi.jpg",
    },
    {
      image:"https://t3.ftcdn.net/jpg/07/66/77/14/240_F_766771496_5zNuVjPCSoXjRky49Yo5rIrvud48rw78.jpg"
    },
    {
      image:"https://t4.ftcdn.net/jpg/04/08/26/95/240_F_408269547_v5avxFNFmQfMFGrb1DVwEMbwDdLguMPf.jpg"
    },
    {
        image:'https://t4.ftcdn.net/jpg/07/67/74/59/240_F_767745958_sGhQ2MWK3fGapQH787tGwBLj6vitIlG0.jpg'
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
id = setInterval(settime, 2000);