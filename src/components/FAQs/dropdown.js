document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const dropdownIcon = question.querySelector(".icon#down");
    const leftIcon = question.querySelector(".icon#left");
    const answer = question.nextElementSibling;

    question.addEventListener("click", () => {
      // Close all answers
      questions.forEach((q) => {
        if (q !== question) {
          const otherAnswer = q.nextElementSibling;
          otherAnswer.style.display = "none";
          const otherDropdownIcon = q.querySelector(".icon#down");
          const otherLeftIcon = q.querySelector(".icon#left");
          otherDropdownIcon.style.display = "inline";
          otherLeftIcon.style.display = "none";
        }
      });

      // Toggle current answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
        dropdownIcon.style.display = "inline";
        leftIcon.style.display = "none";
      } else {
        answer.style.display = "block";
        dropdownIcon.style.display = "none";
        leftIcon.style.display = "inline";
      }
    });
  });
});
