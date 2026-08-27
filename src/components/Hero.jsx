import { m, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

// Import the image so Vite can include and optimize/reference the asset correctly
import heroImage from '../assets/hero.png'

// Create an array of objects that will be part of the navigation bar
const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact'},
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

// Create an animation specifically for the hero photograph
// The background gets its own animation because I want it to move differently from the text.
const imageVariants = {
    // Begin slightly enlarged, transparent, and blurred
    hidden: {
        opacity: 0,
        scale: 1.08,
        filter: 'blur(12px)'
    },

    // Slowly settle into the final photograph
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',

        transition: {
            duration: 1.8,
            ease: 'easeOut',
        }
    }
}

function Hero() {
    return (
        <section className="hero">
            {/* 
            motion.img works like a normal <img>, but Motion can animate it.
            Because this image is purely visual and the page doesn't need it
            to convey information, alt="" marks it as decorative.
            */}
            <motion.img
                className="hero-background"
                src={heroImage}
                alt="Landing Page Image"
                variatns={imageVariants}
                initial="hidden"
                animate="visible"
            />
            
            <nav className="hero-nav">
                <a href="#" className ="hero-brand">
                    Alex Yang
                </a>

                <div className="hero-nav-links">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href}>{link.label}</a>
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