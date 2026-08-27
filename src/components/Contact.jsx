import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">

        <p className="contact-label">Contact</p>

        <div className="contact-main">
          <h2>
            Have something in mind?
            <span> Let&apos;s talk.</span>
          </h2>

          <a
            className="contact-email"
            href="mailto:zixuan.yang2018@gmail.com"
          >
            zixuan.yang2018@gmail.com
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-bottom">
          <div className="contact-links">
            <a
              href="https://www.instagram.com/alexyang2020/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://github.com/alexyang-2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
          </div>

          <button
            className="contact-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="contact-signoff">
          <span>Alex Yang</span>
          <span>© 2026</span>
        </div>

      </div>
    </footer>
  )
}

export default Contact