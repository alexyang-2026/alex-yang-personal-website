import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import heroVideo from '../assets/hero.mp4'

// Create an array of objects that will be part of the navigation bar
const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact'},
    { label: 'Repertoire & Skills', to: '/repertoire-skills'},
]

// Here define the visual states that Motion can animate between
// I will give these states the name "hidden" ad "visible"
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

        // Control HOW Motion moves from hidden to visible
        transition: {
            duration: 1.2,      // Take 1.2 sec to complete the animation
            ease: 'easeOut'     // Move quickly at first, slow down near end
        }
    }
}

function Hero() {
    return (
        <section className="hero">
            <video
            className="hero-video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            />
            
            <nav className="hero-nav">
                <a href="#" className ="hero-brand">
                    Alex Yang
                </a>

                <div className="hero-nav-links">
                    {navLinks.map((link) => (
                        link.to ? (
                            <Link key={link.label} to={link.to}>{link.label}</Link>
                        ) : (
                            <a key={link.label} href={link.href}>{link.label}</a>
                        )
                    ))}
                </div>
            </nav>
            
            {/* 
                motion.div is Motion's enhanced version of a normal <div>.
                It can do everything a normal <div> can do, but it can also animate.
                I wrote this comment here because this was my first time implementing motion.div!
            */}

            <motion.div 
                className="hero-content"
                variants = {contentVariants}    // This tells the element which collection of animation states to use
                initial="hidden"
                animate="visible"
            >
                <p className="hero-eyebrow">
                    Pianist · Creator
                </p>

                <h1>Alex Yang</h1>

                <p className="hero-description">Music, technology, and communication.</p>

                <a href="#work" className="hero-cta">
                    Selected Work
                    <ArrowRight size={16} /> 
                </a>
            </motion.div>
        </section>
    )
}

export default Hero
