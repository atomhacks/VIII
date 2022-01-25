import faqStyles from '@styles/sections/FAQ.module.css';

const FAQ = () => {
    return (
        <div className={faqStyles.FAQdiv}>
            <div>
                <h1 className={faqStyles.title}>faq</h1>
            </div>
            <div className={faqStyles.questionsDiv}>
                <div>
                    <h1 className={faqStyles.question}>TEST</h1>
                </div>
                <div>
                    <h1 className={faqStyles.question}>TEST</h1>
                </div>
                <div>
                    <h1 className={faqStyles.question}>TEST</h1>
                </div>
                <div>
                    <h1 className={faqStyles.question}>TEST</h1>
                </div>
            </div>

        </div>
    );
}

export default FAQ;