//switch between tabs
function switchToPage(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//hide an element on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 200) {
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
    document.getElementById("blog").style.width = "60%";
    document.getElementById("blog").style.backgroundColor = "#CRC";

  }
  prevScrollpos = currentScrollPos;
}