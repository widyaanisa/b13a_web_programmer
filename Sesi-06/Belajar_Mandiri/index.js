let intervalID = null;

window.addEventListener('load', () => {
  setTimeout(() => {
    invokeFunctionEverySpecificTime(
      () => changeTextColor('p.colored-text', generateRandomCSSColor()),
      1
    );
  }, convertSecondsToMiliseconds(0));
});

function invokeFunctionEverySpecificTime(func, seconds) {
  const miliseconds = convertSecondsToMiliseconds(seconds);
  intervalID = setInterval(func, miliseconds);
}

function convertSecondsToMiliseconds(seconds) {
  return seconds * 1000;
}

function changeTextColor(selector, color) {
  const element = document.querySelector(selector);
  element.style.color = color;
}

function generateRandomCSSColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}