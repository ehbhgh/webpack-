function timer(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

async function inputTimer(data) {
  let res = await timer(data);
  console.log(res);
}
export default inputTimer;
