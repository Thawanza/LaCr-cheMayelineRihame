import React, { useState } from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

function Project() {
  return (
    <div id='projets' className='projects'>
      <div className="project-title">
        <h1>Mes projects</h1>
        
      </div>

      <div className="project-container">
        {mywork_data.map((project, index) => (
          <TruncatedCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}


function TruncatedCard({ project }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="project-card">
      <img src={project.w_img} alt={project.w_name} />
      <p className={showFull ? 'full' : 'truncated'}>{project.w_desc}</p>
      {project.w_desc.length > 150 && (
        <button className="toggle-btn" onClick={() => setShowFull(!showFull)}>
          {showFull ? 'Voir moins' : 'Voir plus'}
        </button>
      )}
    </div>
  )
}

export default Project;
