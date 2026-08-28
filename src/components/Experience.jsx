import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import './Experience.css'

import novaScotiaTalentTrustImage from '../assets/experience/nova-scotia-talent-trust.png'
import governmentHouseImage from '../assets/experience/government-house.png'
import canadianMusicCompetitionImage from '../assets/experience/canadian-music-competition.png'
import fcmfImage from '../assets/experience/fcmf.png'
import chopinResearchImage from '../assets/experience/chopin-research.png'
import cbc30Under30Image from '../assets/experience/cbc-30-under-30.png'
import cfmtaImage from '../assets/experience/cfmta.png'
import preludeToUniversityImage from '../assets/experience/prelude-to-university.png'
import trasimenoImage from '../assets/experience/trasimeno.png'
import musicalDevelopmentClubImage from '../assets/experience/musical-development-club.png'
import juilliardPreCollegeImage from '../assets/experience/juilliard-pre-college.png'
import canadianChopinImage from '../assets/experience/canadian-chopin.png'
import aspenImage from '../assets/experience/aspen.png'
import goldenMelodiesImage from '../assets/experience/golden-melodies.png'
import juilliardConcertoImage from '../assets/experience/juilliard-concerto.png'
import torontoCompetitionImage from '../assets/experience/toronto-competition.png'
import universityAdmissionsImage from '../assets/experience/university-admissions.png'
import kovnerFellowshipImage from '../assets/experience/kovner-fellowship.png'

const events = [
  {
    title: 'Nova Scotia Talent Trust',
    caption: 'Long-Term Career Development Scholar · $33,000+ in Merit Funding',
    date: '2016-Present',
    image: novaScotiaTalentTrustImage,
    frame: 'portrait',
    tags: ['Music'],
  },
  {
    title: 'Government House Recital',
    caption: 'Invited 60-Minute Solo Recital · Lieutenant Governor’s Residence',
    date: '2017',
    image: governmentHouseImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Canadian Music Competition (CMC)',
    caption: 'Grand Prize Winner · National Competition',
    date: '2019',
    image: canadianMusicCompetitionImage,
    frame: 'portrait',
    tags: ['Music'],
  },
  {
    title: 'FCMF National Competition',
    caption: 'Grand Prize Winner · All Instrumental Categories',
    date: '2022',
    image: fcmfImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Research on Motivic and Thematic Coherence in Chopin\'s Polonaise-Fantasie',
    caption: 'Musicology',
    date: '2022',
    image: chopinResearchImage,
    frame: 'portrait',
    tags: ['Music', 'Research'],
  },
  {
    title: 'CBC 30 Under 30',
    caption: 'Youngest Honoree · 30 Hot Canadian Classical Musicians Under 30',
    date: '2023',
    image: cbc30Under30Image,
    frame: 'landscape',
    tags: ['Music', 'Communication'],
  },
  {
    title: 'CFMTA National Competition',
    caption: 'Third Prize · Canadian Chopin Society Award · Most Promising Artist',
    date: '2023',
    image: cfmtaImage,
    frame: 'portrait',
    tags: ['Music'],
  },
  {
    title: 'The Prelude to University',
    caption: 'Director · Filmmaker · Editor · Atlantic International Film Festival',
    date: '2024',
    image: preludeToUniversityImage,
    frame: 'film',
    tags: ['Tech', 'Communication'],
  },
  {
    title: 'Angela Hewitt\'s Trasimeno Music Festival: Masterclasses',
    caption: 'Youngest of 10 International Pianists',
    date: '2024',
    image: trasimenoImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Musical Development Club',
    caption: 'Founder · 50+ Students · Computational Music Education',
    date: '2024',
    image: musicalDevelopmentClubImage,
    frame: 'square',
    tags: ['Music', 'Tech', 'Communication'],
  },
  {
    title: 'Juilliard Pre-College',
    caption: '85% Merit Scholarship · Yoheved Kaplinsky & Emanuel Ax',
    date: '2024',
    image: juilliardPreCollegeImage,
    frame: 'portrait',
    tags: ['Music'],
  },
  {
    title: 'Canadian Chopin Competition',
    caption: 'National Top 5 · Youngest & First Nova Scotian Finalist',
    date: '2025',
    image: canadianChopinImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Aspen Music Festival',
    caption: 'Full Fellowship · Selected from 900+ International Applicants',
    date: '2025',
    image: aspenImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Unveiling Golden Melodies of Classical Music',
    caption: 'Founder · Weekly Lecture-Recitals · 25+ Seniors',
    date: '2025',
    image: goldenMelodiesImage,
    frame: 'portrait',
    tags: ['Music', 'Communication'],
  },
  {
    title: 'Juilliard Concerto Competition',
    caption: 'Winner · Beethoven “Emperor” Concerto',
    date: '2025',
    image: juilliardConcertoImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'Toronto International Piano Competition',
    caption: 'First Prize',
    date: '2026',
    image: torontoCompetitionImage,
    frame: 'landscape',
    tags: ['Music'],
  },
  {
    title: 'University Admissions',
    caption: 'Princeton · Stanford · Columbia–Juilliard · Brown · UPenn',
    date: '2026',
    image: universityAdmissionsImage,
    frame: 'square',
    tags: ['Communication'],
  },
  {
    title: 'Kovner Fellowship',
    caption: 'The Juilliard School · Kovner Fellow',
    date: '2026',
    image: kovnerFellowshipImage,
    frame: 'landscape',
    tags: ['Music'],
  },
]

const categoryColors = {
  Music: 'red',
  Tech: 'blue',
  Communication: 'limegreen',
  Research: 'orange',
}

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
        <span className="experience-date">{event.date}</span>
        <h3>{event.title}</h3>
        <p>{event.caption}</p>

        <ul className="experience-tags" aria-label={`${event.title} categories`}>
          {event.tags.map((tag) => (
            <li key={tag}>
              <span
                className="experience-tag-dot"
                style={{ '--tag-color': categoryColors[tag] }}
                aria-hidden="true"
              />
              {tag}
            </li>
          ))}
        </ul>
      </div>

    </article>
  )
}


function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [trackOffset, setTrackOffset] = useState(0)
  const galleryRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const gallery = galleryRef.current
    const track = trackRef.current
    const activeCard = track?.children[currentIndex]
    const firstCard = track?.children[0]

    if (!gallery || !track || !activeCard || !firstCard) return

    function updateTrackOffset() {
      const desiredOffset = activeCard.offsetLeft - firstCard.offsetLeft
      const maximumOffset = Math.max(0, track.scrollWidth - gallery.clientWidth)
      setTrackOffset(Math.min(desiredOffset, maximumOffset))
    }

    updateTrackOffset()

    const resizeObserver = new ResizeObserver(updateTrackOffset)
    resizeObserver.observe(gallery)
    resizeObserver.observe(track)

    return () => resizeObserver.disconnect()
  }, [currentIndex])

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


      <div className="experience-gallery" ref={galleryRef}>

        <motion.div
          className="experience-track"
          ref={trackRef}
          animate={{
            x: -trackOffset
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
