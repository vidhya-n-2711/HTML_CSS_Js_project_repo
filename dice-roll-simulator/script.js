const rollBtn = document.getElementById("rollBtn");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");

rollBtn.addEventListener("click", () => {
  // Random dice numbers between 1-6
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;

  // Animate rotation
  dice1.style.transform = `rotate(${Math.random() * 720}deg)`;
  dice2.style.transform = `rotate(${Math.random() * 720}deg)`;

  // Display numbers
  setTimeout(() => {
    dice1.textContent = num1;
    dice2.textContent = num2;
    result.textContent = `You rolled ${num1} and ${num2} (Total: ${
      num1 + num2
    })`;
  }, 400);
});
