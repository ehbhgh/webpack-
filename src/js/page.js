function asyncCpmponent() {
    //动态导入
  return import("lodash").then(({ default: _ }) => {
    const element = document.createElement("div");
    element.innerHTML = _.join(["wo", "shi", "ws"], " ");
    return element;
  });
}

asyncCpmponent().then((element)=>{
    document.body.appendChild(element)
})