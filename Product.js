function openImage(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeImage() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            if (answer.classList.contains('open')) {
                // Collapse the answer
                answer.classList.remove('open');
                icon.textContent = '+';
                icon.classList.remove('open');
            } else {
                // Expand the answer
                answer.classList.add('open');
                icon.textContent = '×';
                icon.classList.add('open');
            }
        });
    });
});
