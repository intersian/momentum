const images = [
    "_DSC7646full.jpg",
    "IMG_2079.jpg",
    "IMG_2101.jpg",
    "IMG_2105.jpg",
    "IMG_2137.jpg",
    "IMG_2145.jpg",
    "IMG_2470.jpg",
    "IMG_2599.jpg",
    "IMG_2641.jpg",
    "IMG_2653.jpg",
    "IMG_2685.jpg",
    "IMG_3026.jpg",
    "IMG_3201.jpg",
    "IMG_3248.jpg",
    "IMG_3372.jpg",
    "IMG_3404.jpg",
    "IMG_3569.jpg",
    "IMG_3587.jpg",
    "IMG_3623.jpg",
    "IMG_3752.jpg",
    "IMG_4201.jpg",
    "IMG_4457.jpg",
    "IMG_4458.jpg",
    "IMG_4512.jpg",
    "IMG_4601.jpg",
    "IMG_4703.jpg",
    "IMG_4786.jpg",
    "IMG_4865.jpg",
    "IMG_4866.jpg",
    "IMG_4949.jpg",
    "IMG_4992.jpg",
    "IMG_5042.jpg",
    "IMG_5153.jpg",
    "IMG_5200.jpg",
    "IMG_5366.jpg",
    "IMG_5859.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
