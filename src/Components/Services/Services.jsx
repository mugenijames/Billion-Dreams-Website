import React, { useState } from 'react';
import './Services.css';
import renov1 from '../../assets/renov1.jpeg';
import renov2 from '../../assets/renov2.jpg';
import renov3 from '../../assets/renov3.jpg';
import foundation1 from '../../assets/foundation1.jpg';
import underground1 from '../../assets/underground1.jpeg';
import kaw6 from '../../assets/kaw6.jpeg';
import kaw1 from '../../assets/kaw1.jpeg';
import kaw4 from '../../assets/kaw4.jpeg';
import concrete_mixer_machine from '../../assets/concrete-mixer-machine.png';
import vibration_machine from '../../assets/concrete-vibrating-machine.jpg';
import backhoe_loader from '../../assets/backhoe-loader.png';
import cabro from '../../assets/cabro.jpg';
import cabro3 from '../../assets/cabro3.jpg';
import sand_ballast from '../../assets/sand-ballast.jpg';
import landscape1 from '../../assets/landscaping1.jpg';
import landscape2 from '../../assets/landscaping2.jpg';
import landscape3 from '../../assets/landscaping3.jpg';
import mold1 from '../../assets/mold1.jpeg';
import mold2 from '../../assets/mold2.jpeg';
import mold3 from '../../assets/mold3.jpeg';
import architect_design1 from '../../assets/architect-design1.jpg';
import architect_design2 from '../../assets/architect-design2.png';
import architect_design3 from '../../assets/architect-design3.jpg';

const servicesData = [
  {
    title: 'Building and Construction',
    description: 'We handle residential, commercial, and institutional construction projects with precision and expertise.',
    images: [
      { src: foundation1, caption: 'Residential foundation work' },
      { src: kaw6, caption: 'Institutional building construction' },
      { src: underground1, caption: 'Underground tank construction' },
      { src: kaw1, caption: 'Underground tank construction' },
      { src: kaw4, caption: 'Underground tank construction' },
    ],
  },
  {
    title: 'Renovations',
    description: 'Transform and modernize spaces to meet your needs and style.',
    images: [
      { src: renov1, caption: 'National Assembly Renovation' },
      { src: renov2, caption: 'Kitchen remodel' },
      { src: renov3, caption: 'Office space revamp' },
    ],
  },
  {
    title: 'Architectural Services',
    description: 'Professional architectural designs and consultancy for all your projects.',
    images: [
      { src: architect_design1, caption: '3D architectural design' },
      { src: architect_design2, caption: 'Blueprint preparation' },
      { src: architect_design3, caption: 'Modern house design' },
    ],
  },
  {
    title: 'Landscaping',
    description: 'Enhance your outdoor spaces with our expert landscaping services.',
    images: [
      { src: landscape1, caption: 'Garden landscaping' },
      { src: landscape2, caption: 'Outdoor patio design' },
      { src: landscape3, caption: 'Lawn maintenance' },
    ],
  },
  {
    title: 'Painting and Moulding',
    description: 'Quality painting and decorative moulding services to elevate your spaces.',
    images: [
      { src: mold1, caption: 'Custom molding design for the mansion' },
      { src: mold2, caption: 'Molding design for the gate' },
      { src: mold3, caption: 'Window molding' },
    ],
  },
  {
    title: 'Hire Building Tools',
    description: 'Rent tools like mixers, vibrators, and more for your construction needs.',
    images: [
      { src: concrete_mixer_machine, caption: 'Concrete mixer' },
      { src: vibration_machine, caption: 'Concrete vibrator' },
      { src: backhoe_loader, caption: 'Backhoe loader' },
    ],
  },
  {
    title: 'Building Products',
    description: 'We sell a variety of building products such as ballasts, cabros, vents, bricks, machine-cut stones, hardcore, and more.',
    images: [
      { src: cabro, caption: 'Cabro blocks' },
      { src: cabro3, caption: 'Interlocking cabro' },
      { src: sand_ballast, caption: 'Sand and ballast supply' },
    ],
  },
];

const Services = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="services" id="services">
      {servicesData.map((service, index) => (
        <section className="service-section" key={index}>
          <div className="service">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-images">
              {(expandedSections[index]
                ? service.images
                : service.images.slice(0, 3)
              ).map((image, idx) => (
                <div className="image-container" key={idx}>
                  <img src={image.src} alt={`${service.title} - ${image.caption}`} />
                  <p className="caption">{image.caption}</p>
                </div>
              ))}
            </div>
            {service.images.length > 3 && (
              <button
                className="see-more"
                onClick={() => toggleExpand(index)}
              >
                {expandedSections[index] ? 'Show Less' : 'See More'}
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
