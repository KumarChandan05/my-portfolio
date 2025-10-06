import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Figma', level: 80, category: 'design' },
    { name: 'Adobe XD', level: 75, category: 'design' },
  ];

  const categories = {
    frontend: { icon: '⚛️', title: 'Frontend' },
    backend: { icon: '⚙️', title: 'Backend' },
    tools: { icon: '🛠️', title: 'Tools' },
    design: { icon: '🎨', title: 'Design' },
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(categories).map(([categoryKey, category]) => {
            const categorySkills = skillsData.filter(skill => skill.category === categoryKey);
            
            return (
              <div key={categoryKey} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ '--progress': `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-visualization">
          <div className="floating-icons">
            <div className="floating-icon" style={{ '--delay': '0s' }}>⚛️</div>
            <div className="floating-icon" style={{ '--delay': '1s' }}>🔥</div>
            <div className="floating-icon" style={{ '--delay': '2s' }}>⚡</div>
            <div className="floating-icon" style={{ '--delay': '0.5s' }}>🚀</div>
            <div className="floating-icon" style={{ '--delay': '1.5s' }}>💎</div>
            <div className="floating-icon" style={{ '--delay': '2.5s' }}>✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;