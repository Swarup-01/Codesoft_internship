document.getElementById("calculateBtn").addEventListener("click", () => {
  // Fetch input values
  const subject1 = parseFloat(document.getElementById("subject1").value) || 0;
  const subject2 = parseFloat(document.getElementById("subject2").value) || 0;
  const subject3 = parseFloat(document.getElementById("subject3").value) || 0;
  const subject4 = parseFloat(document.getElementById("subject4").value) || 0;
  const subject5 = parseFloat(document.getElementById("subject5").value) || 0;

  // Validate input
  if (
    [subject1, subject2, subject3, subject4, subject5].some(
      (mark) => mark < 0 || mark > 100
    )
  ) {
    alert("Please enter marks between 0 and 100 for all subjects.");
    return;
  }

  // Calculate total marks
  const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

  // Calculate average percentage
  const averagePercentage = (totalMarks / 500) * 100;

  // Calculate grade
  let grade;
  if (averagePercentage >= 90) {
    grade = "A+";
  } else if (averagePercentage >= 80) {
    grade = "A";
  } else if (averagePercentage >= 70) {
    grade = "B+";
  } else if (averagePercentage >= 60) {
    grade = "B";
  } else if (averagePercentage >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  // Calculate CGPA (out of 10)
  const cgpa = (averagePercentage / 9.5).toFixed(2);

  // Display results
  document.getElementById(
    "totalMarks"
  ).textContent = `Total Marks: ${totalMarks} / 500`;
  document.getElementById(
    "averagePercentage"
  ).textContent = `Average Percentage: ${averagePercentage.toFixed(2)}%`;
  document.getElementById("grade").textContent = `Grade: ${grade}`;
  document.getElementById("cgpa").textContent = `CGPA: ${cgpa}`;
  document.getElementById("results").style.display = "block";
});
