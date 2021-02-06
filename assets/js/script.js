// global variables
var nameTitle = document.querySelector(".header");
    // console.log(nameTitle);
var profilePic = document.querySelector(".dave-pic");
    // console.log(profilePic);
var pageLinks = document.getElementsByTagName("a");
    // console.log(pageLinks);

// simple attributes to set
nameTitle.setAttribute("style", "color: yellow");
// console.log(nameTitle);

// loops and functions
for (let i = 0; i < pageLinks.length; i++) {
    let link = pageLinks[i];
    // console.log(link);

        if (i % 2 === 1) {
            link.setAttribute("style", "color: yellow", "fontweight: bold");
        } 
    }    

// animation
    // want to have pageLinks/nameTitle change color on mouse over