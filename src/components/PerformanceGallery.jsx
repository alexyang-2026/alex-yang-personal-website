import { useState } from 'react'
import './PerformanceGallery.css'

// Add future performances here. The YouTube video ID is the part after
// "youtu.be/" or after "v=" in a standard YouTube URL.
const performances = [
  {
    title: 'Chopin — Scherzo No. 4',
    videoId: 'QzeGziXHtYA',
  },
  {
    title: 'Barber — Fugue',
    videoId: '7nHtdfJuBmY',
  },
  {
    title: 'Bach — Chromatic Fantasy and Fugue',
    videoId: 'z6OnT3gQagw',
  },
]

function PerformanceGallery() {
  const [activePerformance, setActivePerformance] = useState(null)

  return (
    <section className="performance-gallery" aria-labelledby="performance-gallery-title">
      <div className="performance-heading">
        <p>Selected performances</p>
        <h2 id="performance-gallery-title">Watch &amp; listen.</h2>
      </div>

      <div className="performance-track">
        {performances.map((performance) => {
          const isPlaying = activePerformance === performance.videoId

          return (
            <article className="performance-card" key={performance.videoId}>
              <div className="performance-tv">
                <div className="performance-screen">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${performance.videoId}?autoplay=1&rel=0`}
                      title={performance.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      className="performance-play"
                      onClick={() => setActivePerformance(performance.videoId)}
                      aria-label={`Play ${performance.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${performance.videoId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                      />
                      <span aria-hidden="true">▶</span>
                    </button>
                  )}
                </div>
                <div className="performance-tv-controls" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <h3>{performance.title}</h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PerformanceGallery
