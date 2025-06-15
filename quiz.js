// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve User's Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Handle the case where no option is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare User's Answer with Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
