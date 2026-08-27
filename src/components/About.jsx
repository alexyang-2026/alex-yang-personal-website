import './About.css'
import aboutImage from '../assets/about.png'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-image">
          <img
            src={aboutImage}
            alt="Alex Yang"
          />
        </div>

        <div className="about-content">
          <p className="about-label">About</p>

          <h2>
            I build, perform,
            <br />
            and teach.
          </h2>

          <div className="about-copy">
            <p>
              My work spans technology, music, education, and
              communication.
            </p>

            <p>
              I enjoy taking an idea from its earliest form and turning
              it into something people can use, understand, or experience —
              whether that means building a product, designing an educational
              program, or presenting music to an audience.
            </p>
          </div>

          <div className="about-interests">
            <span>Technology</span>
            <span>Music</span>
            <span>Education</span>
            <span>Communication</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About