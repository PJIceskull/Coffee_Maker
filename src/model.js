// Import functions
import { loadProducts } from "./index.js";

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      console.log(pageID);
      $("#app").html(data);
    });
    if (pageID == "coffee_makers") {
      $.get(`pages/coffee_makers.html`, function (data) {
        $("#app").html(data);
        loadProducts();
      });
    }
  } else {
    $.get(`pages/coffee_makers.html`, function (data) {
      // console.log("data " + data);
      console.log(pageID);
      $("#app").html(data);
      if (pageID == "coffee_makers") {
        loadProducts();
      }
    }).done(function () {});
  }
}
