function Project({ number, title, category, year, image, href }) {
    return (
        <article className="project">
            
            {/* Small metadata displayed above the project image */}
            <div className="project-meta">
                <span>{number}</span>
                <span>{category} · {year}</span>
            </div>

            <a href={href} className="project-link">
                <div className="project-image-wrapper">
                    <img
                        src={image}
                        alt=""
                        className="project-image"
                    />
                </div>

                <h3>{title}</h3>
            </a>

        </article>
    )
}

export default Project