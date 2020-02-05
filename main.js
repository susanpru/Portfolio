//alert("Killin it boo!");

//get all the links
const input = document.getElementById("navi-toggle");
const about_link = document.getElementById("about__link");
const work_link = document.getElementById("work__link");
const contact_link = document.getElementById("contact__link");


input.addEventListener("change", function(e){
     if(input.checked) {
       document.querySelector(".navigation__nav").style.opacity = "1";
       document.querySelector(".navigation__background").style.transform = "scale(80)";
      document.querySelector(".navigation__nav").style.width = "100%";

     } else {
       document.querySelector(".navigation__nav").style.opacity = "0";
      document.querySelector(".navigation__background").style.transform = "scale(0)";
      document.querySelector(".navigation__nav").style.width = "0";
     }
  });
  /*input.addEventListener("click", (e) => {
    document.querySelector(".navigation__nav").style.opacity = "1";
    document.querySelector(".navigation__background").style.transform = "scale(80)";
    document.querySelector(".navigation__nav").style.width = "100%";

  });
*/
  about_link.addEventListener("click", (e) => {
    document.querySelector(".navigation__nav").style.opacity = "0";
    document.querySelector(".navigation__background").style.transform = "scale(0)";
    document.querySelector(".navigation__nav").style.width = "0";
  });

  work_link.addEventListener("click", (e) => {
    document.querySelector(".navigation__nav").style.opacity = "0";
    document.querySelector(".navigation__background").style.transform = "scale(0)";
    document.querySelector(".navigation__nav").style.width = "0";
  });

  contact_link.addEventListener("click", (e) => {
    document.querySelector(".navigation__nav").style.opacity = "0";
    document.querySelector(".navigation__background").style.transform = "scale(0)";
    document.querySelector(".navigation__nav").style.width = "0";
  });




  const popup = document.querySelector(".popup");
  const content = document.querySelector(".content");

  popup.addEventListener("click", (e) => {
       console.log("clicked");
  document.querySelector(".content").style.display = "block";
   });

  content.addEventListener("click", (e) => {
       console.log("clicked");
  document.querySelector(".content").style.display = "none";
   });




/*  function change() {
    if(input.checked == false) {
      input.addEventListener("click", (e) => {
        document.querySelector(".navigation__nav").style.opacity = "1";
        document.querySelector(".navigation__background").style.transform = "scale(80)";
        document.querySelector(".navigation__nav").style.width = "100%";
      });
    } else if (input.checked == true) {
      input.addEventListener("click", (e) => {
        document.querySelector(".navigation__nav").style.opacity = "0";
        document.querySelector(".navigation__background").style.transform = "scale(0)";
        document.querySelector(".navigation__nav").style.width = "0%";
      });
    }
    else {
      alert("neither");
    }
  }
change();
*/
