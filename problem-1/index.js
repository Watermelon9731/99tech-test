let input = 0;

document
  .getElementById("inputNumber")
  .addEventListener("input", (e) => (input = e.target.value));

document.getElementById("firstWay").addEventListener("click", () => {
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    sum += i;
  }
  document.getElementById("result").innerHTML = sum;
});

document.getElementById("secondWay").addEventListener("click", () => {
  const sum = ((Number(input) + 1) * Number(input)) / 2;
  document.getElementById("result").innerHTML = sum;
});

document.getElementById("thirdWay").addEventListener("click", () => {
  function sumRecursive(begin, input) {
    if (input === 0) {
      return 0;
    }
    return begin + sumRecursive(begin + 1, input - 1);
  }

  const sum = sumRecursive(1, input);

  document.getElementById("result").innerHTML = sum;
});
