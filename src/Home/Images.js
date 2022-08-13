

export const PortfolioImages = ()=> 
{
    const directory = require.context("../assets/img/portfolio", false, /\.(png|jpe?g|svg)$/);
    let imagePaths = getImagePaths(directory);
    let portfolioImages = [];
    imagePaths.map((path) => portfolioImages.push(require("../assets/img/portfolio/" + path.replace("./",""))));
    return portfolioImages;
}

export const ServiceImages = () =>{
    const directory = require.context("../assets/img/service", false, /\.(png|jpe?g|svg)$/);
    let imagePaths = getImagePaths(directory);
    let portfolioImages = [];
    imagePaths.map((path) => portfolioImages.push(require("../assets/img/service/" + path.replace("./",""))));
    return portfolioImages;
}
function getImagePaths(directory) 
{
    let images = [];
    directory.keys().map((item, index) => images.push(item));
    return images;
}

export const GetDescriptionByTag = (tag)=>{
    let descriptions = {
        "Kitchen":"Expect a Sleek-made modular kitchen design that blends function with elegance.",
        "Furniture" :"Get Completely personalised furniture to complement the aeshetic of your space.",
        "Accessories":"From the right furnishing and fabrics in diverse colours to a variety of house interior decor items.",
        "Lighting":"Choose from a wide-range of lights-- elaborate chandeliers, beautiful floor lamps.",
        "":"We work with you to make your dream come true, by using your imagination and our work experience.",
        undefined:"We work with you to make your dream come true, by using your imagination and our work experience."
    }
    return descriptions[tag]
}