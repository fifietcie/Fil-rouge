document.getElementById("burger-menu").addEventListener("click", function () {
  console.log("click sur mon burger-menu UwU");

  var menu = document.querySelector(".inner-menu");
  menu.classList.toggle("hide");
  menu.classList.toggle("show");

  if (document.getElementById("user-icon").classList.contains("show")) {
    document.getElementById("user-icon").classList.remove("show");
    document.getElementById("user-icon").classList.add("hide");
  }

})

document.getElementById("inner-menu1").addEventListener("click", function () {
    console.log("click sur mon inner-menu UwU");
    var submenu = document.querySelector(".inner-menu .submenu");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
  });

  document.getElementById("user-icon").addEventListener("click", function () {
    console.log("click sur mon user-icon UwU");

    var submenu = document.querySelector(".user-menu");
    console.dir(submenu);
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");


    if (document.getElementById("burger-menu ul").classList.contains("show")) {
      document.getElementById("burger-menu ul").classList.remove("show");
      document.getElementById("burger-menu ul").classList.add("hide");
    }

    // var innerMenu = document.querySelector(".inner-menu");
    // innerMenu.classList
  });