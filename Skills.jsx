// components/Skills.js
import React from 'react';

function Skills() {
  const skillsData = [
    {
      name: 'JavaScript',
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
    },
    {
      name: 'ReactJs',
      icon: 'https://cdn-icons-png.flaticon.com/128/919/919851.png',
    },
    {
      name: 'HTML & CSS (Bootstrap)',
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968267.png',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn-icons-png.flaticon.com/128/919/919825.png',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn-icons-png.flaticon.com/128/3161/3161055.png',
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container text-center text-light">
        <h2 className="text-warning">Skills</h2>
        <div className="row mt-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="col-md-4 mb-4 skillCard">
              <div className="skill-card p-3 border rounded" style={{ backgroundColor: '#2a2a2a' }}>
                <h4>{skill.name}</h4>
                <img src={skill.icon} alt={skill.name} style={{ width: '50px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
