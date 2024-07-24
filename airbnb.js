function updateSizeBasedValue() {
    var div2 = document.getElementById("header-2");

    if (window.scrollY >= 40) {
        div2.style.height = "170px";
    } else {
        if (window.innerWidth > 949) {
            div2.style.height = "266px";
        } else {
            div2.style.height = "330px";
        }
    }
}

function checkScroll() {
    var div = document.getElementById("header-2-part-2-id");
    var div1 = document.getElementById("small-search-bar-id");

    if (window.scrollY >= 40) {
        div.style.display = "none"; 
        div1.style.display = "block";
    } else {
        div.style.display = "block"; 
        div1.style.display = "none";
    }

    updateSizeBasedValue(); 
}

function updateImageBasedOnWidth() {
    var img = document.getElementById("airbnb-img-id");

    if (window.innerWidth <= 1120) {
        img.src = "img/svgexport-2 (5).svg"; 
    } else {
        img.src = "img/svgexport-1 (6).svg"; 
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", function() {
    updateSizeBasedValue();
    updateImageBasedOnWidth();
});

updateSizeBasedValue();
checkScroll();
updateImageBasedOnWidth(); 

