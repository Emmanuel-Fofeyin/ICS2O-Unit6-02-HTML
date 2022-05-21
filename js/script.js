// Copyright (c) 2020 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel-Fofeyin
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use script"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-HTML/sw.js", {
    scope: "/ICS2O-Unit6-02-HTML/",
  })
}

/**
 * This function adds cookies.
 */
function updateCookieCount() {
  // input and process
  if (localStorage.updateCookieCount) {
    localStorage.updateCookieCount = Number(localStorage.updateCookieCount) + 1
  } else {
    localStorage.updateCookieCount = 1
  }

  // output
  document.getElementById("answer").innerHTML =
    "The number of times clicked: " + localStorage.updateCookieCount
}