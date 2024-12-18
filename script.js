function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);
    const result = document.getElementById("result");

    if (isNaN(score) || score < 0 || score > 100) {
        result.textContent = "Please enter a valid score between 0 and 100.";
        result.style.color = "red";
        return;
    }

    let grade;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    result.textContent = `Your grade is: ${grade}`;
    result.style.color = grade === "F" ? "red" : "green";
}
