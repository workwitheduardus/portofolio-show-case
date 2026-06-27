import React from "react";

const faqData = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    id: 2,
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    id: 3,
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    id: 4,
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    id: 5,
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    id: 6,
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
  },
];

export default function FAQ() {
  const chunkedFaq = [];
  for (let i = 0; i < faqData.length; i += 2) {
    chunkedFaq.push(faqData.slice(i, i + 2));
  }

  return (
    <section className="faq-section text-white w-full">
      {/* FAQ Header Block */}
      <div className="faq-header">
        <span className="faq-title uppercase block text-center">FAQ</span>
        <h2 className="faq-subtitle uppercase block text-center">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Content Area */}
      <div className="faq-content-wrapper">
        {chunkedFaq.map((rowItems, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {/* Row Layout container */}
            <div className="faq-item-row">
              {rowItems.map((item, itemIndex) => (
                <React.Fragment key={item.id}>
                  {/* Individual FAQ Item Card */}
                  <div className="faq-card">
                    <div className="faq-card-header">
                      {/* Green Vector Icon wrapper */}
                      <div className="faq-icon-wrap flex shrink-0 items-center justify-center w-6 h-6 lg:w-8 lg:h-8">
                        {/* Ikon Bintang 10 Sudut sesuai gambar contoh */}
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L14.22 5.58L18.27 4.54L17.95 8.73L21.61 10.82L19.22 14.28L21.1 18.06L17.02 18.99L15.22 22.78L12 20L8.78 22.78L6.98 18.99L2.9 18.06L4.78 14.28L2.39 10.82L6.05 8.73L5.73 4.54L9.78 5.58L12 2Z"
                            fill="#91FF02"
                          />
                        </svg>
                      </div>
                      {/* Question Text */}
                      <h3 className="faq-question-text">{item.question}</h3>
                    </div>
                    {/* Answer Description */}
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>

                  {/* Render vertical line  */}
                  {itemIndex === 0 && rowItems.length > 1 && (
                    <div className="faq-vertical-divider" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Render horizontal line */}
            {rowIndex < chunkedFaq.length - 1 && (
              <div className="faq-horizontal-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
