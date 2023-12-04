// import functions from other files
import { changeRoute } from "./model.js";
// Global Variables

//
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

// Listeners for Index.html
function initListeners() {}

$(document).ready(function () {
  initListeners();
  initURLListener();
});
