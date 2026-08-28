// useState lets thie component remember which project the viewer is currently viewing
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Motion will handle the transition between projects
import { motion } from 'motion/react'

// Arrow icons for navigating through the gallery
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Foreground images show the actual project
import postcardsProjectImage from '../assets/projects/postcards-home.png'
import educationProjectImage from '../assets/projects/alex-yang-education.png'
import chopinResearchProjectImage from '../assets/projects/chopin-research.png'

// Background images create a different visual environment for each project
import postcardsBackground from '../assets/projects/postcards-background.mp4'
import educationBackground from '../assets/projects/education-background.png'
import chopinResearchBackground from '../assets/projects/chopin-research-background.mp4'

import goldShimmer from '../assets/gold-shimmer.mp4'

// Import the CSS
import './SelectedWork.css'


const projects = [
  {
    id: 1,
    title: 'Postcards Home',
    category: 'Web Application',
    year: '2026',
    projectImage: postcardsProjectImage,
    background: postcardsBackground,
    backgroundType: 'video',

    // White interface/text for the dark background
    theme: 'dark',
    href: 'https://postcards-home.alexyang2020.workers.dev/',
  },

  {
    id: 2,
    title: 'Alex Yang Education',
    category: 'Education & Minimalist Web Design',
    year: '2026',
    projectImage: educationProjectImage,
    background: educationBackground,
    backgroundType: 'image',

    // Dark ink-like interface/text for the paper background
    theme: 'light',
    href: 'https://alexyangeducation.netlify.app/',
  },

  {
    id: 3,
    title: 'A Computational Investigation Into Narrative Arc in Chopin\'s 24 Preludes, Op.28',
    category: 'Computational Musicology Research with Python',
    tear: '2025',
    projectImage: chopinResearchProjectImage,
    background: chopinResearchBackground,
    backgroundType: 'video',
    theme: 'dark',
    href: 'https://drive.google.com/drive/u/0/folders/1D4P5tnwYRgQT2YP4YiZlq-LQhI6loQmA'
  },
]

function SelectedWork() {
    
    // Store the Arrwy Index of the project currently being displayed
    // useState(0) means start with project 0
    const [currentProject, setCurrentProject] = useState(0)

    // Move forward one project: the % operator makes the gallery loop rather than eventually trying to access an index that doesn't exist
    function nextProject() {
        setCurrentProject(
            (current) => (current + 1) % projects.length
        )
    }

    // Move backwards one project
    function previousProject() {
        setCurrentProject(
            (current) => (current - 1 + projects.length) % projects.length
        )
    }

    return (
        <section className="selected-work" id="work" aria-labelledby="selected-work-title">
          <video
            className="computational-musicology-bg"
            src={goldShimmer}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="selected-work-header">
            <h2 id="selected-work-title">Selected Technology & Research Projects</h2>
          </div>

          <div className="selected-work-screen">
          <div className="project-gallery">
            
            {/*
            This is the visible "window" of the gallery.
            All project slides exist inside it, but overflow: hidden means the visitor only sees one project at a time.
            */}
            <div className="gallery-viewport">
                {/*
                    The track contains ALL of projects side-by-side.

                    Instead of replacing one project with another,
                    we physically move this entire track left and right.

                    currentProject = 0  →  x = 0%
                    currentProject = 1  →  x = -100%
                    currentProject = 2  →  x = -200%
                */}
                <motion.div
                    className="gallery-track"
                    animate={{
                        x: `-${currentProject * 100}%`,
                    }}

                    transition={{
                        duration: 0.9,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                >
                    {projects.map((project) => (
                        <div className={`gallery-slide ${project.theme}`} key={project.id}>
                            {/* 
                            Different projects can use different types of immersive backgrounds;
                            if this project's backgroundType is "video", render a <video>,
                            otherwise, render a normal <img>.
                            */}
                            {project.backgroundType === 'video' ? (
                                <video
                                    className="gallery-background"
                                    src={project.background}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    className="gallery-background"
                                    src={project.background}
                                    alt="Background Image"
                                />
                            )}

                            <div className="gallery-overlay"></div>

                            <div className="gallery-slide-content">

                                <p className="gallery-meta">{project.category} · {project.year}</p>
                                <h2>{project.title}</h2>

                                <div className="gallery-project-visual">
                                    <img src={project.projectImage} alt={`${project.title} preview`}/>
                                </div>


                                <a href={project.href} className="gallery-view-project">
                                    View Project
                                    <ArrowRight size={15} />
                                </a>

                                </div>
                            </div>
                    ))}
                </motion.div>
            </div>
            
            {/* These controls live outside of the gallery track, therefore they remain stationary while the projects slide underneath them */}
            <div className={`gallery-interface ${projects[currentProject].theme}`}>
                <div className="gallery-controls">

                    <button
                        type="button"
                        onClick={previousProject}
                        aria-label="Previous project"
                    >
                        <ArrowLeft />
                    </button>


                    <span>{currentProject + 1} / {projects.length}</span>


                    <button
                        type="button"
                        onClick={nextProject}
                        aria-label="Next project"
                    >
                        <ArrowRight />
                    </button>

                </div>
            </div>
          </div>
          </div>

          <Link className="selected-work-more" to="/repertoire-skills">
            For Full Repertoire List and Skills, Click Here
          </Link>
        </section>
    )
}

export default SelectedWork
