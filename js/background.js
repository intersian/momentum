const images = [
    "_DSC7646full.JPG",
    "IMG_2079.JPG",
    "IMG_2101.JPG",
    "IMG_2105.JPG",
    "IMG_2137.JPG",
    "IMG_2145.JPG",
    "IMG_2470.JPG",
    "IMG_2599.JPG",
    "IMG_2641.JPG",
    "IMG_2653.JPG",
    "IMG_2685.JPG",
    "IMG_3026.JPG",
    "IMG_3201.JPG",
    "IMG_3248.JPG",
    "IMG_3372.JPG",
    "IMG_3404.JPG",
    "IMG_3569.JPG",
    "IMG_3587.JPG",
    "IMG_3623.JPG",
    "IMG_3752.JPG",
    "IMG_4201.JPG",
    "IMG_4457.JPG",
    "IMG_4458.JPG",
    "IMG_4512.JPG",
    "IMG_4601.JPG",
    "IMG_4703.JPG",
    "IMG_4786.JPG",
    "IMG_4865.JPG",
    "IMG_4866.JPG",
    "IMG_4949.JPG",
    "IMG_4992.JPG",
    "IMG_5042.JPG",
    "IMG_5153.JPG",
    "IMG_5200.JPG",
    "IMG_5366.JPG",
    "IMG_5859.JPG"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//document.body.style.backgroundImage = `url('./img/${chosenImage}')`;
//document.body.style.backgroundRepeat = "no-repeat";
//document.body.style.backgroundSize = "cover";
