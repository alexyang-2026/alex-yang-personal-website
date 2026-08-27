import { useState } from 'react'
import './Experience.css'

const filters = ['All', 'Music', 'Education', 'Communication', 'Leadership']

const experiences = [
  {
    id: 'golden-melodies',
    title: 'Unveiling Golden Melodies of the Past',
    role: 'Founder & Presenter',
    dates: '2024–2026',
    summary:
      'A two-year lecture-recital series at The Berkeley combining classical piano performance with education and storytelling.',
    details:
      'I founded, designed, and marketed the series and personally presented every program. I selected and performed the repertoire, researched and developed the educational material, and translated musical and musicological ideas into accessible spoken commentary for general audiences.',
    categories: ['Music', 'Leadership', 'Communication'],
  },
  {
    id: 'music-development-club',
    title: 'Music Development Club',
    role: 'Founder',
    dates: '',
    summary:
      'A classical-music education program designed to help students better understand and appreciate classical music.',
    details:
      'I founded and designed the program, which reached approximately 50 students. I was responsible for teaching, curriculum/program design, marketing, recruitment, and overall direction.',
    categories: ['Music', 'Education', 'Leadership'],
  },
  {
    id: 'competitive-debate',
    title: 'Competitive Debate',
    role: 'Captain & Competitor',
    dates: '2019–2026',
    summary:
      'Seven years of competitive debate focused on persuasive communication, research, public speaking, and rapid analysis.',
    details:
      'I served as debate captain, helped organize weekly mock debates and training, represented Nova Scotia at three national competitions, and earned five provincial first-place finishes.',
    categories: ['Communication', 'Leadership'],
  },
]

function Experience() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleExperiences = activeFilter === 'All'
    ? experiences
    : experiences.filter((experience) => experience.categories.includes(activeFilter))

  function getFilterCount(filter) {
    if (filter === 'All') return experiences.length
    return experiences.filter((experience) => experience.categories.includes(filter)).length
  }

  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience-inner">
        <header className="experience-intro">
          <h2 id="experience-title">Experience</h2>
        </header>

        <div className="experience-filters" aria-label="Filter experiences by category">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                type="button"
                key={filter}
                className={isActive ? 'experience-filter active' : 'experience-filter'}
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
              >
                <span>{filter}</span>
                <span className="experience-filter-count">{getFilterCount(filter)}</span>
              </button>
            )
          })}
        </div>

        <div className="experience-list" aria-live="polite">
          <ul role="list">
          {visibleExperiences.map((experience) => (
            <li className="experience-row" key={experience.id}>
              <article>
                <div className="experience-row-heading">
                  <h3>{experience.title}</h3>
                  <p className="experience-role">
                    {experience.role}
                    {experience.dates && <span> · {experience.dates}</span>}
                  </p>
                </div>

                <div className="experience-row-copy">
                  <p className="experience-summary">{experience.summary}</p>
                  <p className="experience-details">{experience.details}</p>
                </div>
              </article>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
