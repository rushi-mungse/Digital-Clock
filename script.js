setInterval(() => {
  const Hours = (document.querySelector("#hrDisplay").innerHTML =
    new Date().getHours());
  const Minutes = (document.querySelector("#minDisplay").innerHTML =
    new Date().getMinutes());
  const Second = (document.querySelector("#secDisplay").innerHTML =
    new Date().getSeconds());
}, 1000);
