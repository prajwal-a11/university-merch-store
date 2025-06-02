<!DOCTYPE html>
<html>
<body>
<script>

function calculateGPA() {
const grade1 = parseFloat(document.getElementById('grade1').value);
const grade2 = parseFloat(document.getElementById('grade2').value);
if (isNaN(grade1) || isNaN(grade2)) {
alert("Please enter valid grades");
return;
}
const gpa = ((grade1 + grade2) / 2).toFixed(2);
document.getElementById('gpaResult').innerText = Your GPA: ${gpa};
}

function saveNote() {
const note = document.getElementById('noteInput').value.trim();
if (note) 
{
const li = document.createElement('li');
li.textContent = note;
document.getElementById('noteList').appendChild(li);
document.getElementById('noteInput').value = '';
}
}

function addReminder() {
const reminder = document.getElementById('reminderInput').value.trim();
if (reminder) {
const li = document.createElement('li');
li.textContent = reminder;
document.getElementById('reminderList').appendChild(li);
document.getElementById('reminderInput').value = '';
}
}

let timeLeft = 1500; // 25 minutes in seconds
let timerInterval;

function updateDisplay() {
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
document.getElementById('timer').innerText =${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
}

window.startTimer = function () {
if (timerInterval) return;
timerInterval = setInterval(() => {
if (timeLeft > 0) {
timeLeft--;
updateDisplay();
} 
else 
{
clearInterval(timerInterval);
timerInterval = null;
alert("Time's up! Take a short break.");
}
}, 1000);
};

window.resetTimer = function () {
clearInterval(timerInterval);
timerInterval = null;
timeLeft = 1500;
updateDisplay();
};

updateDisplay();

</script>
</body>
</html>
