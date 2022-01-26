import faqStyles from "@styles/sections/FAQ.module.css";

const questions = [
  {
    question: "WHAT IS A HACKATHON?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
  {
    question: "WHO CAN ATTEND?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
  {
    question: "HOW LARGE CAN MY TEAM BE?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
  {
    question: "CAN I START WORKING IN ADVANCE?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
  {
    question: "WHAT CAN I CREATE?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
  {
    question: "WHEN IS ATOMHACKS?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science. Aside from the amazing experience, they are often viewed as learning events, as you can take a lot away from attending one, and as gatherings, as you can meet many people with the same interests.",
  },
];

const FAQ = () => {
  return (
    <div className={faqStyles.FAQdiv}>
      <div>
        <h1 className={faqStyles.title}>faq</h1>
      </div>
      <div className={faqStyles.questionsDiv}>
        {questions.map((ques, i) => (
          <div key={i}>
            <h1 className={faqStyles.question}>{ques.question}</h1>
            <p>{ques.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
