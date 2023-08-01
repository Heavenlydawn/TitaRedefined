/*
==========
FAQ SECTION
==========
*/
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  const title = question.querySelector(".faq-question-title");
  const answer = question.querySelector(".faq-question-answer");

  // Add click event listener to title
  title.addEventListener("click", () => {
    // Toggle active class on question
    question.classList.toggle("active");
    // console.log(question.classList)

    // Toggle aria-expanded attribute on title
    const isExpanded = title.getAttribute("aria-expanded") === "true" || false;
    title.setAttribute("aria-expanded", !isExpanded);

    // Toggle hidden attribute on answer
    answer.classList.toggle("show-answer");
  });
});
