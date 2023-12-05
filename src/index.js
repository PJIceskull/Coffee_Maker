// import functions from other files
import { changeRoute } from "./model.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; // look for the auth folder
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAauj-zBAp9ewpyD6J7IGH5zjJPaQjRWSI",
  authDomain: "n315-pi.firebaseapp.com",
  projectId: "n315-pi",
  storageBucket: "n315-pi.appspot.com",
  messagingSenderId: "301611833853",
  appId: "1:301611833853:web:2fc92b7326a5fab7d9e194",
  measurementId: "G-FWVH83GF36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

// Global Variables
let productData = []; // Array to hold Json data

// Load Coffee Products
export function loadProducts() {
  // $("#Products-Page").html("");
  $(".products-section").html("");
  // console.log(productData);
  $.each(productData.Products, function (index, product) {
    $(".products-section").append(`<div class="product-box">
      <div class="product-image">
        <img
          src="images/products/${product.productImage}"
          alt="Coffee Maker"
          loading="lazy"
        />
      </div>
      <div> 
        <h1>${product.productName}</h1>
        <p>Price: <sup>$</sup>${product.productPrice}</p>
      </div>
      <button class="buyBTN" id="${index}" >Buy Now</button>
    </div>`);
  });
}

// Get Data from JSON
function getData() {
  $.get(`data/productData.json`, function (data) {
    // Assign Data to Global Variable
    productData = data;
    console.log(productData);
  }).fail(function (error) {
    console.log("Error: ", error);
    alert("Error: ", error);
  });
}

//
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  getData();
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
