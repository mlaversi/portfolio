import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const data = [
  {
    number: 'Coursera',
    text:
      'AI in Health, Deploying Machine Learning Models in Production, Machine Learning Data Lifecycle',
  },
  {
    number: 'Udemy',
    text: 'Graph Learning, Machine Learning Advanced',
  },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <ul>
      {data.map((card, index) => (
        <li key={index}>
          <strong>{card.number}+</strong>: {card.text}
        </li>
      ))}
    </ul>
    <h1></h1>
    <SectionDivider />
  </Section>
  
);

export default Accomplishments;
