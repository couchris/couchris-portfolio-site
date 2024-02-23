window.addEventListener("DOMContentLoaded", (e) => {
  var scrollLinks = document.getElementsByClassName("scroll");

  for (let link of scrollLinks) {
    link.addEventListener("click", (e) => {
      document
        .querySelector(e.target.id)
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});

//take all the <anchor tags> that have the class scroll
//take its id, add a dot infront of it to search for that name as a css class on another element on the page
//use scrollIntoView function
//make sure section's class matches the id of the link

$(document).ready(function(){
  console.log($('nav'));
  $(".container").on("scroll", function () {
  var distance = 500;
        if ($(".container").scrollTop() > distance) {
            $('nav').addClass('navscroll');
        }
        else {
          $('nav').removeClass('navscroll');
        }
        
   });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}