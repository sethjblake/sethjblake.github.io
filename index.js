window.addEventListener("scroll", () => {
    let scrollBlock = document.getElementById("scroll-block");
    let scrollPosition = window.scrollY;

    console.log(scrollPosition);

    

    // Bring scroll-block into view when scrolled past 50px
    // if (scrollPosition > 50) {
    //     scrollBlock.style.transformY = 20;
    // } else {
    //     scrollBlock.style.top = "100vh"; // Keep it below the viewport
    // }
});

function openLink(url_) {
    window.open(url_, "_blank");
}

let headshot;
$(document).ready(() => {
    $('#metroid-play-button').click(function() {
        openLink('https://drdolit.itch.io/metroid');
    });
    
    $('#drillhammer-play-button').click(function() {
        openLink('https://sjblake.itch.io/drillhammer');
    });
    
    $('#about-me-button').click(function() {
        openLink('https://sjblake.itch.io/drillhammer');
    });
    
    headShot = $('#headshot');
    slideInHeadshot();
});

// function slideInHeadshot() {
//     let dest = 25;
//     let curr = -30;
//     let increment = 1;
//     headShot.css("left", curr);
//     let slideInterval = setInterval(() => {
//         curr += increment;
//         headShot.css("left", curr);
//         if(curr >= dest) {
//             clearInterval(slideInterval)
//         }
//     }, 10);
// }