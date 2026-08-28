import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import heroVideo from '../assets/hero.mp4'
import heroPoster from '../assets/hero-poster.jpg'

// Create an array of objects that will be part of the navigation bar
const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact'},
    { label: 'Repertoire & Skills', to: '/repertoire-skills'},
]

// These are the two versions of the hero text Motion switches between
// keeping them here makes the timing easy to adjust without digging through the JSX
const contentVariants = {

    // This is how the content should look BEFORE the animation starts
    hidden: {
        opacity: 0,             // Completely transparent = 0 opacity
        y: 24,                  // Move the element 24 px downward from its final position
        filter: 'blur(10px)',   // Start the content slightly blurred    
    },

    visible: {
        opacity: 1,
        y: 0,                   // Return the element to its original vertical position
        filter: 'blur(0px)',    // Remove the blur

        // This starts near the end of the curtain opening
        // that way the words don't distract from the video reveal
        transition: {
            delay: 0.25,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

// All four curtains use the exact same timing so they feel like one opening
// the four ease numbers shape the speed: slow start, quicker middle, slow finish
const curtainTransition = {
    delay: 0,
    duration: 0.75,
    ease: [0.65, 0, 0.35, 1]
}

// The nav gets its own animation because it sits outside hero-content
// its delay is almost the same so the whole interface arrives together
const navigationVariants = {
    hidden: {
        opacity: 0,
        filter: 'blur(8px)'
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            delay: 0.25,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

function Hero() {
    // Some people ask their device for less animation
    // for them we skip the intro and show the finished hero right away
    const prefersReducedMotion = useReducedMotion()

    // HashRouter already uses the # part of the URL for page routes
    // so we scroll ourselves instead of letting links like #work replace that route
    const scrollToSection = (event, sectionId) => {
        event.preventDefault()
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToTop = (event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section className="hero">
            {/* The video is full screen from the beginning and never changes size
                the black curtains above it are the only things that move */}
            <div className="hero-reveal">
                <video
                    className="hero-video"
                    src={heroVideo}
                    poster={heroPoster}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* These four black pieces meet in the middle and cover the video
                sliding each one toward its nearest edge creates the growing window

                initial=false tells Motion to use the normal CSS position on frame one
                this avoids an extra automatic animation before our real one starts */}
            <motion.div
                className="hero-curtain hero-curtain-top"
                initial={false}
                animate={{ y: '-100%' }}
                transition={prefersReducedMotion ? { duration: 0 } : curtainTransition}
            />
            <motion.div
                className="hero-curtain hero-curtain-right"
                initial={false}
                animate={{ x: '100%' }}
                transition={prefersReducedMotion ? { duration: 0 } : curtainTransition}
            />
            <motion.div
                className="hero-curtain hero-curtain-bottom"
                initial={false}
                animate={{ y: '100%' }}
                transition={prefersReducedMotion ? { duration: 0 } : curtainTransition}
            />
            <motion.div
                className="hero-curtain hero-curtain-left"
                initial={false}
                animate={{ x: '-100%' }}
                transition={prefersReducedMotion ? { duration: 0 } : curtainTransition}
            />
            
            {/* Nav and text stay hidden while the window begins opening
                introReady starts their variants, and the delays above make them appear near the end */}
            <motion.nav
                className="hero-nav"
                variants={navigationVariants}
                initial={prefersReducedMotion ? false : 'hidden'}
                animate="visible"
            >
                <a href="#/" className ="hero-brand" onClick={scrollToTop}>
                    Alex Yang
                </a>

                <div className="hero-nav-links">
                    {navLinks.map((link) => (
                        link.to ? (
                            <Link key={link.label} to={link.to}>{link.label}</Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(event) => scrollToSection(event, link.href)}
                            >
                                {link.label}
                            </a>
                        )
                    ))}
                </div>
            </motion.nav>
            
            {/* 
                motion.div is Motion's enhanced version of a normal <div>.
                It can do everything a normal <div> can do, but it can also animate.
                I wrote this comment here because this was my first time implementing motion.div!
            */}

            <motion.div 
                className="hero-content"
                variants = {contentVariants}    // This tells the element which collection of animation states to use
                initial={prefersReducedMotion ? false : 'hidden'}
                animate="visible"
            >
                <p className="hero-eyebrow">
                    Pianist · Creator
                </p>

                <h1>Alex Yang</h1>

                <p className="hero-description">Music, technology, and communication.</p>

                <a
                    href="#work"
                    className="hero-cta"
                    onClick={(event) => scrollToSection(event, '#work')}
                >
                    Selected Work
                    <ArrowRight size={16} /> 
                </a>
            </motion.div>
        </section>
    )
}

export default Hero
