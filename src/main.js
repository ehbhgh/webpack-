const { add } = require("./js/add.js");
import img from "./assets/line.png";
import svg from "./assets/egg.svg";
import jpg from "./assets/car.jpg";
import txt from "./assets/index.txt";
import "./style/index.css";
import "./style/index.less";
import xml from "./assets/index.xml";
import csv from "./assets/inde.csv";
// import json5 from "./assets/index.json5"
import yaml from "./assets/index.yaml";
import toml from "./assets/index.toml";
import inputTimer from "./js/time.js";
import "./js/page.js";
console.log(add(1, 6));
inputTimer("我是好人");
//resource
let img1 = document.createElement("img");
img1.src = img;
document.body.appendChild(img1);

//inline
let img2 = document.createElement("img");
img2.src = svg;
document.body.appendChild(img2);

//source
let box = document.createElement("h1");
box.className = "txt";
box.textContent = txt;
document.body.appendChild(box);

//asset
let img3 = document.createElement("img");
img3.src = jpg;
document.body.appendChild(img3);

let box1 = document.createElement("h1");
box1.className = "icon";
box1.innerHTML = "&#xe8ab";
document.body.appendChild(box1);

let btn = document.createElement("button");
btn.innerHTML = "点击触发加法事件";
btn.addEventListener("click", () => {
  import(/*webpackChunkName:'math',webpackPreload:true*/ "./js/math.js").then(({ add }) => {
    console.log(add(6, 7));
  });
});
document.body.appendChild(btn);

// let box3 = document.createElement("div");
// box3.innerHTML=xml
// document.body.appendChild(box3);

console.log(csv);
console.log(xml);

// console.log(json5.name)
// console.log(json5.addr)

console.log(yaml.languages);

console.log(toml.data);
