

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



$(".header").show();
$("footer").hide();
$(".div2").hide();
$(".menu-logo").hide();
$(".headerSub2-2").hide();
// setTimeout(() => {
//     $(".headerSub2-2").show();
//     vid.play()
// }, 7000);
const vid = document.getElementById("signatureBg")
setTimeout(() => {
    // image.classList.add('pause');
}, 8000);


const upper = () => {
    $(".menu-logo").fadeIn(3000);
    $("footer").show();
        // $(".div1").slideUp(3500);
        $(".div2").show();
        $(".sidebar").hide();
        $(".sidebar").fadeIn(3000);
        // $(".header").slideUp(slow);
        $(".header").slideUp( "slow", function() {
            $(".header").hide();
            
          });
        setTimeout(() => {
            $(".header").hide();
        }, 700);

        // $(".div2").slideUp(3500);
}



/* STYLE NAVBAR*/
      function isVisible($el) {
          let docViewTop = $(window).scrollTop();
          let docViewBottom = docViewTop + $(window).height();
          let elTop = $el.offset().top;
          let elBottom = elTop + $el.height();
          return ((elBottom <= docViewBottom) && (elTop >= docViewTop));
        }
        $(function () {
          console.log(isVisible($("#home")))
          console.log(isVisible($("#portfolio")))
          $(window).scroll(function () {
            switch(ready) {
              case isVisible($("#homeLogo")):
                document.getElementById("sideBarHomeEffect").style.borderLeft = "5px solid #04f502";
                document.getElementById("sideBarPortfolioEffect").style.borderLeft = "none";
                document.getElementById("sideBarDownloadsEffect").style.borderLeft = "none";
                document.getElementById("sideBarAboutmeEffect").style.borderLeft = "none";
                break;
              case isVisible($("#portfolio")):
                document.getElementById("sideBarHomeEffect").style.borderLeft = "none";
                document.getElementById("sideBarPortfolioEffect").style.borderLeft = "5px solid #04f502";
                document.getElementById("sideBarDownloadsEffect").style.borderLeft = "none";
                document.getElementById("sideBarAboutmeEffect").style.borderLeft = "none";
                break;
              case isVisible($("#downloads")):
                document.getElementById("sideBarHomeEffect").style.borderLeft = "none";
                document.getElementById("sideBarPortfolioEffect").style.borderLeft = "none";
                document.getElementById("sideBarDownloadsEffect").style.borderLeft = "5px solid #04f502";
                document.getElementById("sideBarAboutmeEffect").style.borderLeft = "none";
              break;
              case isVisible($("#aboutme")):
                document.getElementById("sideBarHomeEffect").style.borderLeft = "none";
                document.getElementById("sideBarPortfolioEffect").style.borderLeft = "none";
                document.getElementById("sideBarDownloadsEffect").style.borderLeft = "none";
                document.getElementById("sideBarAboutmeEffect").style.borderLeft = "5px solid #04f502";
             
              break;
              default:
            } 
            // if (isVisible($("#home"))) {
            //   document.getElementById("sideBarPortfolioEffect").style.borderLeft = "3px solid #04f502";
            // } else {
            //   document.getElementById("sideBarPortfolioEffect").style.color = "black";
            // }
          });
        });
        let ready = false
        document.addEventListener("DOMContentLoaded", function(event) {
          ready= true
        });

        
