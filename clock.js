const clock = document.getElementById("clock");

function startClock() {
  const time = new Date();
  const years = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = String(time.getDay()).padStart(2, 0);
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);
  clock.innerText = `γγγ${years}. ${month}. ${day} \nγπ§­${hours}μ ${minutes}λΆ ${seconds}μ΄`;
}

startClock();
setInterval(startClock, 1000);
