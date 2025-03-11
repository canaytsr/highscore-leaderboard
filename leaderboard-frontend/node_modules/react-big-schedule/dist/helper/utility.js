"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPos = getPos;
/* eslint-disable import/prefer-default-export */
function getPos(element) {
  var x = 0;
  var y = 0;
  var currentElement = element;
  while (currentElement) {
    x += currentElement.offsetLeft - currentElement.scrollLeft;
    y += currentElement.offsetTop - currentElement.scrollTop;
    currentElement = currentElement.offsetParent;
  }
  return {
    x: x,
    y: y
  };
}