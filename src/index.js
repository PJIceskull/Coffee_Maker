// import functions from other files
import { changeRoute } from "./model.js";
// Global Variables

//
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

// Listeners for Index.html
function initListeners() {
  // Hamburger Menu
  $(".hamburger-menu").on("click", function () {
    $(this).toggleClass("open");
  });
}

$(document).ready(function () {
  initListeners();
  initURLListener();
});
