// faq.js

document.addEventListener('DOMContentLoaded', function () {
    const faqList = document.getElementById('faq-list');

    // Fetch the list of FAQs from the server
    fetch('/api/faqs')
        .then(response => response.json())
        .then(faqs => {
            faqs.forEach(faq => {
                // Display FAQ items (question and answer) on the page
                faqList.innerHTML += `
                    <div class="faq">
                        <h3>${faq.question}</h3>
                        <p>${faq.answer}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

