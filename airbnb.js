let lastScrollTop = 0;
const bottomNav = document.getElementById('bottom-nav');

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

    if (window.innerWidth > 744) {
        bottomNav.style.display = 'none'; 
    } else {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            
            bottomNav.style.display = 'none';
        } else {
           
            bottomNav.style.display = 'block';
        }
        if (scrollTop === 0) {
           
            bottomNav.style.display = 'block';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    }
}

function updateImageBasedOnWidth() {
    var img = document.getElementById("airbnb-img-id");

    if (window.innerWidth <= 1120) {
        img.src = "img/svgexport-2 (5).svg"; 
    } else {
        img.src = "img/svgexport-1 (6).svg"; 
    }
}

function checkInitialNavDisplay() {
    if (window.innerWidth > 744) {
        bottomNav.style.display = 'none';
    } else {
        bottomNav.style.display = 'block';
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", function() {
    updateSizeBasedValue();
    updateImageBasedOnWidth();
    checkInitialNavDisplay(); 
});

updateSizeBasedValue();
checkScroll();
updateImageBasedOnWidth();
checkInitialNavDisplay(); 
