
document.getElementById('password').addEventListener('input', function () {
  const pwd = this.value;
  const feedback = [];
  let strength = 0;

  if (pwd.length >= 8) strength += 1;
  else feedback.push("Use at least 8 characters.");

  if (/[A-Z]/.test(pwd)) strength += 1;
  else feedback.push("Add an uppercase letter.");

  if (/[a-z]/.test(pwd)) strength += 1;
  else feedback.push("Add a lowercase letter.");

  if (/[0-9]/.test(pwd)) strength += 1;
  else feedback.push("Include a number.");

  if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;
  else feedback.push("Add a special character.");
console.log(strength,"streeeeee");
  const levels = ["Very Weak", "Weak", "Moderate", "Good", "Strong", "Very Strong"];
  document.getElementById('strength').innerText = `Strength: ${levels[strength]}`;

  const fb = document.getElementById('feedback');
  fb.innerHTML = '';
  feedback.forEach(msg => {
    const li = document.createElement('li');
    li.innerText = msg;
    fb.appendChild(li);
  });
});
