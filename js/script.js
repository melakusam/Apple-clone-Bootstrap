// let tog = $(".ulone")
// tog.on("click", melaku);

// function melaku() {
//     $(".ulone1").toggle()
// // $(".footer-links-wrapper h3:after ").Style.content='x'
    
// }
 
// let two = $(".ultwo");
// two.on("click", melaku2);

// function melaku2() {
//   $(".ultwo1").toggle();
  
// }
// let three = $(".ulthree");
// three.on("click", melaku3);

// function melaku3() {
//   $(".ulthree1").toggle();
// }
// let four = $(".ulfour");
// four.on("click", melaku4);

// function melaku4() {
//   $(".ulfour1").toggle();
// }

// let edna = $(".ulfive");
// edna.on("click", ezra);

// function ezra() {
// 	$(".ulfive1").toggle();
// }

// let six = $(".ulsix");
// six.on("click", melaku6);
// function melaku6() {
// 	$(".ulsix1").toggle()
// }
// let seven = $(".ulseven");
// seven.on("click", melaku7);
// function melaku7() {
// 	$(".ulseven1").toggle();
// }

// let eight = $(".uleight");
// eight.on("click", melaku8);
// function melaku8() {
//   $(".uleight1").toggle();
// }
// let nine = $(".ulnine");
// nine.on("click", melaku9);
// function melaku9() {
// 	$(".ulnine1").toggle();
// }
// let ten = $(".ulten");
// ten.on("click", melaku10);
// function melaku10() {
// 	$(".ulten1").toggle();
// }


// let hello = $("help")

// $(".footer-links-wrapper h3").click(function () {
//   if ($(window).width() <= 768){
//     $(this).next("ul").slideToggle()
//     // $(this).toggleClass("iconRotator")
//      $(this).toggleClass("iconRotator");

//   }
// })


if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("someClass");
} else {
  $(".footer-links-wrapper").removeClass("someClass");
}
$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
    $(".footer-links-wrapper ul").show();
  }
});

// Footer collapse functionality
$(document).on("click", ".someClass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
   $(this).toggleClass("iconRotator");
});


//  // this is also works perfectly by its self
// $(".footer-links-wrapper h3").click(function () {
//   if ($(window).width() <= 768) {
//     $(this).next("ul").slideToggle();
//     $(this).toggleClass("iconRotator");
//   }
// });

// function myFunction() {
//   var x = document.getElementById("myDIV"); //myDIV = div to toggle

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }




//var hello = document.getElementsByClassName('footer-links-wrapper');


// const naEl = document.getElementsByClassName("navbar-toggler");
// console.log(naEl);
// $(".navbar-toggler");


  
// tog.on("click", melaku);

// function melaku() {
// 	$("ul").toggle()
// }





// {/* <div data-text="This is the default text">Test</div>;
// $("h1").attr("data-text", "This is some other text"); */}

//     // .footer-links-wrapper h3:after {
//     //       font-family: "FontAwesome";
//     //       content: '+';
//     //       /* content: "\f067"; */
//     //       padding-left: 10px;
//     //       position: absolute;
//     //       right: 25px;
//     //   }
