`use strict`;

const content = null;
const padding = null;
const border = null;

function getElementWidth(content, padding, border) {
    console.log(Number.parseInt(content + padding * 4 + border * 4));
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
