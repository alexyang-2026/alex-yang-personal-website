import './About.css'
import aboutImage from '../assets/about-optimized.jpg'
import deepseaShimmer from '../assets/deepseaShimmer.mp4'
import ElasticMesh from './ElasticMesh'

function About() {
  return (
    <section className="about" id="about">
      <video
        className="about-background"
        src={deepseaShimmer}
        autoPlay
        loop
        muted
        playsInline
      />
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

          <div className="about-copy">
            <p>
                Originally from Halifax, Nova Scotia, pianist Alex Yang is recognized as one of Canada’s most compelling emerging artists. Alex is a proud recipient of a Kovner Fellowship at Juilliard. Previously, Alex received training at the Juilliard Pre-College with Yoheved Kaplinsky and Emanuel Ax; his previous teachers include Michael Berkovsky and Lynn Stodola. He started piano at the age of four.<br></br>
                Alex was awarded a full fellowship to the Aspen Music Festival and School in 2025. His international presence was highlighted at Angela Hewitt’s Trasimeno Music Festival Master Classes in Italy, where he was praised by renowned critic Christopher Axworthy for “remarkable clarity and sense of line on a dynamic rhythmic base of great nobility” and “remarkable sensitivity.” Additionally, he received mentorship from leading pedagogues including André Laplante, Arie Vardi, Marilyn Engle, Michel Béroff, Mikhail Voskresensky, Robert McDonald, and John O’Conor. In the summer of 2026, Alex further refined his craft through the Morningside Music Bridge program.<br></br>
                Alex is a laureate of top competitions, including winning the Grand Prize of the 51st Federation of Canadian Music Festivals National Competition (FCMF) and being the youngest top-five finalist in the senior division of the sixth Canadian Chopin Competition. He was the youngest inductee of CBC’s 2023 list of 30 hot Canadian Classical Musicians under 30.<br></br>
                Alex has soloed with several orchestras, including Symphony Nova Scotia, Nova Scotia Youth Orchestra, Toronto Sinfonietta, Chebucto Symphony Orchestra, and Nova Sinfonia. He performed full-length recitals for institutions including Cecilia Concerts, Musique Royale, and Lunenburg Academy of Music Performance and has soloed in venues including the Ateneo de Madrid, Koerner Hall at the Royal Conservatory of Music, Auditorium Marianum (Italy), and the Lieutenant Governor’s House. He has been a consistent Nova Scotia Talent Trust scholarship recipient since age 8, including the James Burchill Special Award presented by the lieutenant governor. Aside from piano, Alex also plays violin and enjoys swimming, badminton, and writing.<br></br>
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
