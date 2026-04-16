import React from 'react'
import './Equipe.css'
import equipe from '../../assets/equipe'
function Equipes() {
    return (
        <div id='equipes' className='equipes'>
            <div className="equipe-title">
                <h1>Notre équipe</h1>
                <p>Découvrez les membres de notre équipe dédiée à votre bien-être.</p>

            </div>
            <div className="equipe-container">
                {equipe.map((member, index) => {
                    return <div key={index} className="equipe-member">
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.description}</p>
                        <div className="equipe-skills">
                            {member.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="equipe-skill">  {skill}   </span>
                            ))}
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default Equipes