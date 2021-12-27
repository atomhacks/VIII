import aboutStyles from '@styles/sections/About.module.css';

const About = () => {
    return (
        <div className={aboutStyles.aboutDiv} id="about">
          <div className={aboutStyles.content}>
            <h1 className={aboutStyles.title}>About</h1>
            <h2>AtomHacks is committed to creating and organizing innovative and interactive coding competitions for the Bronx High School of Science. We are driven to give back to our community and provide transformative computer science opportunities for students of all levels.</h2>
          </div>
        </div>
    );
}

export default About;