let btn = document.querySelector("#btn");
let btnImg = document.querySelector("#btn img");
let showmsg = document.querySelector("#show-msg");
let showid = document.querySelector("#show-id");
async function doFetch() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });
    const data = await response.json();
    showmsg.innerHTML = `" ${data.slip.advice} "`;
    showid.innerHTML = `#${data.slip.id}`;
  } catch (error) {
    console.error(error);
  }
}
let d = 0;
btn.addEventListener("click", () => {
  d = d + 1;
  btnImg.style.cssText = `transform: rotate(${d * 180}deg)`;
  doFetch();
});

doFetch()
