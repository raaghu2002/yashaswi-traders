import React from 'react';
import SectionTitle from '../common/SectionTitle';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Somshekar B C",
      position: "Founder",
      bio: "With 9 years of experience in the steel industry, Somshekar established a strong foundation for the company.",
      image: "/assets/images/team/founder.jpg"
    },
    {
      id: 2,
      name: "Kumar",
      position: "Operations Manager",
      bio: "Kumar manages day-to-day operations and ensures efficient service delivery.",
      image: "/assets/images/team/operations.jpg"
    },
    {
      id: 3,
      name: "Nagaraju",
      position: "Customer Support",
      bio: "Nagaraju focuses on client interactions and works to maintain customer satisfaction.",
      image: "/assets/images/team/customer.jpg"
    },
    {
      id: 4,
      name: "Lokesh",
      position: "Technical Assistant",
      bio: "Lokesh assists with technical specifications and supports customers in choosing the right steel solutions.",
      image: "/assets/images/team/technical.jpg"
    }
  ];
  
  return (
    <section className="team-section">
      <div className="container">
        <SectionTitle
          title="Our Team"
          subtitle="Meet the People Behind Yeshaswi Traders"
        />
       
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;