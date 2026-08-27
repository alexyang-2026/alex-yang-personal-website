import { useState } from 'react'
import { motion } from 'motion/react'

import './Experience.css'


const events = [
  {
    title: 'Nova Scotia Talent Trust',
    caption: 'Scholarship Winner · Piano',
    date: '2016',
    frame: 'portrait',
  },

  {
    title: 'First Concerto',
    caption: 'Beethoven Piano Concerto No. 1',
    date: '2019',
    frame: 'landscape',
  },

  {
    title: 'Taylor Academy',
    caption: 'Young Artist Program · Piano',
    date: '2021',
    frame: 'portrait',
  },

  {
    title: 'Orford Music Academy',
    caption: 'Piano · Performance',
    date: '2022',
    frame: 'landscape',
  },

  {
    title: 'Juilliard Pre-College',
    caption: 'Piano · New York',
    date: '2022',
    frame: 'portrait',
  },

  {
    title: 'Trasimeno Music Festival',
    caption: 'Piano · Italy',
    date: '2023',
    frame: 'landscape',
  },

  {
    title: 'Symphony Nova Scotia',
    caption: 'Mendelssohn Piano Concerto No. 1',
    date: '2023',
    frame: 'landscape',
  },

  {
    title: 'Musical Development Club',
    caption: 'Founder · 50+ Students · Music Education',
    date: '2023',
    frame: 'square',
  },

  {
    title: 'Computational Music Analysis',
    caption: 'Python · music21 · Music Research',
    date: '2023',
    frame: 'film',
  },

  {
    title: 'Chopin Research',
    caption: 'Musicology · Performance Research',
    date: '2024',
    frame: 'portrait',
  },

  {
    title: 'The Prelude to University',
    caption: 'Director · Filmmaker · Editor',
    date: '2024',
    frame: 'film',
  },

  {
    title: 'IB Notes Initiative',
    caption: 'Education · Resource Design',
    date: '2024',
    frame: 'landscape',
  },

  {
    title: 'The Berkeley',
    caption: 'Weekly Lecture-Recitals · 25+ Seniors',
    date: '2024',
    frame: 'portrait',
  },

  {
    title: 'Chopin Piano Concerto',
    caption: 'Concerto Performance',
    date: '2024',
    frame: 'landscape',
  },

  {
    title: 'Aspen Music Festival',
    caption: 'Full-Fellowship Pianist',
    date: '2025',
    frame: 'portrait',
  },
]


function EventCard({ event }) {
  return (
    <article className={`experience-piece ${event.frame}`}>

      <div className="experience-image">
        {event.image && (
          <img
            src={event.image}
            alt={event.imageAlt || event.title}
          />
        )}
      </div>

      <div className="experience-caption">
        <span>{event.date}</span>
        <h3>{event.title}</h3>
        <p>{event.caption}</p>
      </div>

    </article>
  )
}


function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const previousEvent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextEvent = () => {
    if (currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <section className="experience">

      <div className="experience-heading">
        <p>Selected Experience</p>
        <h2>My life in motion.</h2>
      </div>


      <div className="experience-gallery">

        <motion.div
          className="experience-track"
          animate={{
            x: `calc(-${currentIndex} * (45vw + 80px))`
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {events.map((event) => (
            <EventCard
              key={`${event.date}-${event.title}`}
              event={event}
            />
          ))}
        </motion.div>

      </div>


      <div className="experience-controls">

        <button
          type="button"
          onClick={previousEvent}
          disabled={currentIndex === 0}
          aria-label="Previous experience"
        >
          ←
        </button>

        <span>
          {currentIndex + 1} / {events.length}
        </span>

        <button
          type="button"
          onClick={nextEvent}
          disabled={currentIndex === events.length - 1}
          aria-label="Next experience"
        >
          →
        </button>

      </div>
    </section>
  )
}


export default Experience