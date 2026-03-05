function initQuestionsComponents() {
    const questionItems = document.querySelectorAll(".question-item");

    questionItems.forEach(item => {
        const button = item.querySelector(".question-box");
        if (!button) return;

        button.addEventListener("click", () => {
            questionItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });
}

window.initQuestionsComponents = initQuestionsComponents;