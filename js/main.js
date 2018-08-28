//switch between tabs
function switchToPage(evt, contentPage) {
    var i, tabcontent, tab;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(contentPage).style.display = "block";
    evt.currentTarget.className += " active";
}

//hide an element on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos  > 650) {   
    var header = document.getElementById("header");
    var blog = document.getElementById("blog");
    blog.className = blog.className.replace(/\bnarrowPage\b/g, "fullWidthPage");
    header.className = header.className.replace(/\bnarrowHeader\b/g, "fullWidthHeader");
  } else {  
        var header = document.getElementById("header");
        header.className = header.className.replace(/\bfullWidthHeader\b/g, "narrowHeader");
        var blog = document.getElementById("blog");
        blog.className = blog.className.replace(/\bfullWidthPage\b/g, "narrowPage");    
    }
    prevScrollpos = currentScrollPos;
}