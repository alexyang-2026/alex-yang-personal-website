import { useState } from 'react'
import { Link } from 'react-router-dom'
import './RepertoireSkills.css'

const repertoire = {
  solo: [
    {
      composer: 'J.S. Bach',
      works: [
        'Chromatic Fantasy and Fugue in D Minor, BWV 903',
        'Toccata in D Major, BWV 912',
        'English Suite No. 2 in A Minor, BWV 807',
        'Prelude and Fugue in E-flat Minor, WTC I, BWV 853',
        'Prelude and Fugue in B-flat Major, WTC I, BWV 866',
        'Prelude and Fugue in B-flat Minor, WTC I, BWV 867',
        'Prelude and Fugue in G Major, WTC I, BWV 860',
        'Prelude and Fugue in D Major, WTC II, BWV 874',
      ],
    },

    {
      composer: 'D. Scarlatti',
      works: [
        'Sonata in C Major, K.159',
      ],
    },

    {
      composer: 'J. Haydn',
      works: [
        'Sonata No. 62 in E-flat Major, Hob. XVI:52',
        'Andante and Variations in F Minor, Hob. XVII:6',
      ],
    },

    {
      composer: 'W.A. Mozart',
      works: [
        'Sonata in B-flat Major, K.570',
        'Rondo in D Major, K.485',
      ],
    },

    {
      composer: 'L.V. Beethoven',
      works: [
        'Sonata No. 3 in C Major, Op. 2 No. 3',
        'Sonata No. 11 in B-flat Major, Op. 22',
        'Sonata No. 17 in D Minor, Op. 31 No. 2 (“Tempest”)',
        'Sonata No. 21 in C Major, Op. 53 (“Waldstein”)',
        'Sonata No. 25 in G Major, Op. 79',
        'Sonata No. 32 in C Minor, Op. 111',
      ],
    },

    {
      composer: 'F. Chopin',
      works: [
        'Andante Spianato et Grande Polonaise Brillante, Op. 22',
        'Sonata in B-flat Minor, Op. 35',
        'Barcarolle in F-sharp Major, Op. 60',
        'Polonaise-Fantaisie in A-flat Major, Op. 61',
        '24 Preludes, Op. 28',
        'Scherzo No. 1 in B Minor, Op. 20',
        'Scherzo No. 4 in E Major, Op. 54',
        'Études, Op. 10 Nos. 1, 4, 5 (“Black Keys”), 12',
        'Études, Op. 25 Nos. 2, 10 (“Octave”)',
        'Fantaisie-Impromptu, Op. 66',
        'Mazurkas, Op. 24 (complete set)',
        'Nocturne, Op. 9 No. 3',
        'Nocturne, Op. 27 No. 2',
        'Nocturne, Op. 55 No. 2',
        'Nocturne, Op. 72 No. 1',
        'Waltz in A-flat Major, Op. 42',
      ],
    },

    {
      composer: 'F. Liszt',
      works: [
        'Transcendental Etude No. 1 in C Major (“Preludio”)',
        'Transcendental Etude No. 5 in B-flat Major (“Feux Follets”)',
        'Transcendental Étude No. 10 in F Minor',
        'Sonetto 123 del Petrarca',
        'Gnomenreigen (Two Concert Études)',
        'Ballade No. 2 in B Minor',
      ],
    },

    {
      composer: 'F. Mendelssohn',
      works: [
        'Variations Sérieuses, Op. 54',
      ],
    },

    {
      composer: 'F. Schubert',
      works: [
        'Impromptu in E-flat Major, Op. 90 No. 2',
        'Allegretto in C Minor, D.915',
      ],
    },

    {
      composer: 'R. Schumann',
      works: [
        'Sonata No. 2 in G Minor, Op. 22',
      ],
    },

    {
      composer: 'J. Brahms',
      works: [
        'Capriccio in G Minor, Op. 116 No. 3',
      ],
    },

    {
      composer: 'S. Rachmaninoff',
      works: [
        'Prelude in G Minor, Op. 23 No. 5',
        'Étude-Tableau in G Minor, Op. 33 No. 8',
        'Lilacs, Op. 21 No. 5',
      ],
    },

    {
      composer: 'C. Debussy',
      works: [
        'Estampes, L.100 (complete)',
      ],
    },

    {
      composer: 'S. Prokofiev',
      works: [
        'Suggestion Diabolique, Op. 4 No. 4',
      ],
    },

    {
      composer: 'S. Barber',
      works: [
        'Fugue from Piano Sonata in E-flat Minor, Op. 26',
      ],
    },

    {
      composer: '20th–21st Century & Contemporary',
      works: [
        'Aldo López-Gavilán — Toccata de guitarra para piano',
        'Marjan Mozetich — Prelude from Three Pieces for Piano Solo',
        'Oskar Morawetz — Scherzo',
        'Carl Vine — Piano Sonata No. 1',
        'Qin Yuan — Divine’s Calling',
      ],
    },
  ],

  concertos: {
    complete: [
      'Beethoven — Concerto No. 1 in C Major, Op. 15',
      'Beethoven — Concerto No. 5 in E-flat Major (“Emperor”), Op. 73',
      'Chopin — Concerto No. 1 in E Minor, Op. 11',
      'Mendelssohn — Concerto No. 1 in G Minor, Op. 25',
      'Liszt — Concerto No. 1 in E-flat Major, S.124',
      'Saint-Saëns — Concerto No. 2 in G Minor, Op. 23',
      'Prokofiev — Concerto No. 3 in C Major, Op. 26',
    ],

    movements: [
      'Brahms — Concerto No. 1 in D Minor, Op. 15 (II)',
      'Mozart — Concerto No. 19 in F Major, K.459 (I)',
      'Haydn — Concerto in D Major, Hob. XVIII:11 (I)',
    ],
  },

  chamber: [
    'Schumann — Piano Quintet in E-flat Major, Op. 44',
    'Brahms — Piano Quintet in F Minor, Op. 34',
    'Saint-Saëns — Carnival of the Animals (two-piano version)',
    'Mozart — Sonata in C Major for Piano Four Hands, K.521',
    'Smetana — Rondo in C Major for Eight Hands',
    'Smetana — Trio in G Minor',
    'Arnold Mendelssohn — Trio for Two Violins and Piano',
    'Shostakovich — Five Pieces for Two Violins and Piano',
  ],
}

const techSkills = [
  {
    category: 'Languages & Frameworks',
    skills: [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'C++',
      'SQL',
      'React'
    ],
  },

  {
    category: 'Data & AI',
    skills: [
      'NumPy',
      'Pandas',
      'Supabase',
      'sqlite3',
      'music21',
    ],
  },

  {
    category: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VSCode',
      'Jupyter Notebook',
      'Cloudflare',
      'Netlify',
    ],
  },
]

function RepertoireSkills() {
  const [category, setCategory] = useState('solo')

  return (
    <main className="repertoire-skills">

      <Link to="/" className="return-home">
        ← Return to main page
      </Link>

      <header className="repertoire-header">
        <p className="repertoire-label">Repertoire & Skills</p>

        <h1>Repertoire</h1>

        <p className="repertoire-intro">
          A catalogue of works studied and performed.
        </p>
      </header>


      <nav className="repertoire-tabs">
        <button
          className={category === 'solo' ? 'active' : ''}
          onClick={() => setCategory('solo')}
        >
          Solo
        </button>

        <button
          className={category === 'concertos' ? 'active' : ''}
          onClick={() => setCategory('concertos')}
        >
          Concertos
        </button>

        <button
          className={category === 'chamber' ? 'active' : ''}
          onClick={() => setCategory('chamber')}
        >
          Chamber
        </button>
      </nav>


      <section className="repertoire-catalogue">

        {category === 'solo' && (
          <>
            {repertoire.solo.map((composer) => (
              <div
                className="composer"
                key={composer.composer}
              >
                <div className="composer-heading">
                  <h2>{composer.composer}</h2>
                </div>

                <div className="composer-works">
                  {composer.works.map((work) => (
                    <p key={work}>
                      {work}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}


        {category === 'concertos' && (
          <>
            <div className="composer">
              <div className="composer-heading">
                <h2>Complete Concertos</h2>
              </div>

              <div className="composer-works">
                {repertoire.concertos.complete.map((work) => (
                  <p key={work}>{work}</p>
                ))}
              </div>
            </div>


            <div className="composer">
              <div className="composer-heading">
                <h2>Individual Movements</h2>
              </div>

              <div className="composer-works">
                {repertoire.concertos.movements.map((work) => (
                  <p key={work}>{work}</p>
                ))}
              </div>
            </div>
          </>
        )}


        {category === 'chamber' && (
          <div className="composer">
            <div className="composer-heading">
              <h2>Chamber Music</h2>
              <span>{repertoire.chamber.length} works</span>
            </div>

            <div className="composer-works">
              {repertoire.chamber.map((work) => (
                <p key={work}>{work}</p>
              ))}
            </div>
          </div>
        )}

      </section>

      <section className="tech-skills">

  <div className="tech-skills-header">
    <p>Skills</p>
    <h1>Technology</h1>
  </div>

  <div className="tech-skills-grid">

    {techSkills.map((group) => (
      <div
        className="tech-skill-group"
        key={group.category}
      >
        <h2>{group.category}</h2>

        <div className="tech-skill-list">
          {group.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>

      </div>
    ))}

  </div>

</section>

    </main>
  )
}


export default RepertoireSkills