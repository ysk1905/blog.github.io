// Necessary Declarations
video_background = document.querySelector("video"); // selecting the first video tag (targeting intro.mp4 player)
navbar=document.querySelector("nav");
toggler = navbar.querySelector(".navbar-toggler");
navbar_collapse = navbar.querySelector(".navbar-collapse");
toggler_click = 0;

// Disabling menu options for video playback
video_background.addEventListener("contextmenu", (event)=>{
    event.preventDefault();
});

// Fixing the transparent background for navbar that opens at top of home page
toggler.onclick = ()=>{
    toggler_click += 1;
    toggler_click %= 2;
    if (toggler_click){
        if (navbar.className.indexOf("scrolled")!==-1){
            return;     // Exit the function
        }
        navbar.setAttribute("style", "background:#000 !important");
    }
    else{
        navbar.removeAttribute("style");
    }    
};

// Function to handle contact us message 
function contactMessage() {
    // To-Do: Connect with Back-End
    console.log("Contact Form Submitting ...");
}

// Clear Location Hash (if any) in the URL after Page Load [Issue: Causing #contact linking from other pages to fail as it clears the # link part]
// history.replaceState(null, document.title, window.location.href.substr(0, window.location.href.indexOf('#')));
