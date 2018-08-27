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
  if (currentScrollPos  > 500) {
    
    var header = document.getElementById("header");
    header.style.display = "none";
    // document.getElementById("blog").style.className = element.className.toggle " narrowPage";
    var blog = document.getElementById("blog");//.className.replace(/\bnarrowPage\b/g, "");
    blog.className = blog.className.replace(/\bnarrowPage\b/g, "fullWidthPage");
    //  document.getElementById("blog").style.className += " fullWidthPage";
    // document.getElementById("blog").style.backgroundColor = "#FFD280";

    header.style.width = "0";
  } else {  
        var header = document.getElementById("header");
        header.style.display = "block";
        header.style.position = "relative";
        header.style.width = "30%";
        var blog = document.getElementById("blog");//.className.replace(/\bnarrowPage\b/g, "");
        blog.className = blog.className.replace(/\bfullWidthPage\b/g, "narrowPage");    
        //document.getElementById("blog").style.className += " narrowPage";
        // document.getElementById("blog").className.replace(/\bnarrowPage\b/g, "fullWidthPage");
        // document.getElementById("blog").style.backgroundColor = "#000000";
        }
    prevScrollpos = currentScrollPos;
}