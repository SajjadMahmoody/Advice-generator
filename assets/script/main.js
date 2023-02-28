let btn = document.querySelector("#btn");
let msg = document.querySelector("#show-msg");
async function doFetch() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    });
    const data = await response.json();
    msg.innerHTML = `" ${data.slip.advice}`;
  } catch (error) {
    console.error(error);
  }
}
btn.addEventListener("click", () => {
  doFetch();
});
