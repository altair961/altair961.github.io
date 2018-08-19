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
  if (currentScrollPos > 300) {
    var header = document.getElementById("header");
    header.style.display = "none";
    document.getElementById("blog").style.width = "100%";
    document.getElementById("blog").style.backgroundColor = "#E5F2FF";
    
    header.style.width = "0";
    //header.style.position = "absolute";
  } else {
    var header = document.getElementById("header");
    header.style.display = "block";
    header.style.position = "relative";
    header.style.width = "30%";
    document.getElementById("blog").style.width = "70%";
    document.getElementById("blog").style.backgroundColor = "#CRC";

  }
  prevScrollpos = currentScrollPos;
}