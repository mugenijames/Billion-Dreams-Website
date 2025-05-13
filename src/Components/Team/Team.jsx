import React from 'react';
import './Team.css';
import architect_meshack from '../../assets/architect-mesh.jpg';
import foreman from '../../assets/foreman.jpg'; 
const teamMembers = [
  {
    name: 'Meshack Ochieng',
    role: 'Architect',
    images: [
      { src: architect_meshack, caption: 'Architect Meshack Ochieng' },
    ],
    
  },
  {
    name: 'Wilfre Ouma Okida',
    role: 'Engineer',
    photo: 'path-to-photo2.jpg', 
  },
  {
    name: 'Lameck Bwire Ouma',
    role: 'Foreman',
    photo: 'foreman.jpg',
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={`${member.name}'`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
