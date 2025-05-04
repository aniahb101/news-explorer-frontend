import "./AboutSection.css";
import profileImage from "../../images/me.jpg";

function AboutSection() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={profileImage} alt="Author" className="about__image" />
        <div className="about__content">
          <h1 className="about__title">About the Author</h1>

          <p className="about__subtitle">
            My name is Aniah Brown, and I am a full stack software developer
            with a passion for creating intuitive and visually appealing user
            interfaces.
            <br />I have expertise in React, JavaScript, HTML, and CSS, as well
            as responsive design techniques like Flexbox and media queries.
          </p>

          <p className="about__subtitle about__subtitle--spaced">
            My experience with version control tools like Git has helped me
            collaborate effectively on projects. During my time at TripleTen, I
            honed my skills in building modern web applications and learned how
            to deliver high-quality, user-friendly solutions.
            <br />I am excited to use my skills to help potential customers
            bring their ideas to life and create impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
