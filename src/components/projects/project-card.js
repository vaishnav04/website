import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

const ProjectCard = ({ project }) => (
  <Link to={"/projects/" + project.slug} className="card no-decoration">
    <img
      src={project.cover ? project.cover.childImageSharp.resize.src : avatar}
      alt={project.slug + `'s image`}
    />
    <div className="text-dark px-4 pt-4">
      <h6 className="mb-2">{project.title}</h6>
      <div dangerouslySetInnerHTML={{ __html: project.description}} />
    </div>
  </Link>
)

ProjectCard.propTypes = {
  project: PropTypes.any,
}

ProjectCard.defaultProps = {
  project: null,
}

export default ProjectCard
