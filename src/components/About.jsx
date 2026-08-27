import './About.css'
import aboutImage from '../assets/about.png'
import ElasticMesh from './ElasticMesh'
import ScrollReveal from './ScrollReveal'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-image">
            <ElasticMesh
                image={aboutImage}
                showGrid={false}        // toggle whether we can see the mesh grid over the photo
                interaction="hover"     // determine how the user activates the deformation
                stiffness={0.05}        // how strongly the mesh wants to return to original shape
                damping={0.2}           // how quickly the movement ides out
                grabRadius={0.6}        // how large an area around the cursor gets affected
                pull={0.4}              // how strongly the cursor deforms the photo
                wobble={5}              // how much neighboring points of the mesh influence each other
                tilt={3}                // tilts the entire mesh into 3D space
                shading={0.25}          // how much fake 3D lighting appears as the photo bends (from 0-1)
                resolution={25}
                borderRadius={15}
            />
        </div>

        <div className="about-content">
          <p className="about-label">About</p>

          <ScrollReveal>
            I build, perform, and teach.
          </ScrollReveal>

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
