import React from 'react';
import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  // Function to open and view the PDF
  const handleViewCV = () => {
    // Construct the path to your PDF file (assuming it's in the public folder)
    const pdfPath = '/LAVERSIN_CV.pdf';

    // Open the PDF in a new tab for viewing
    window.open(pdfPath, '_blank');
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Mathieu Laversin's Portfolio
        </SectionTitle>
        <SectionText>
          Graduated from an engineering school, degree in mathematics. Work as hard as you can, so you won't have any regrets.
        </SectionText>
        {/* Use the handleViewCV function to open the PDF */}
        <Button onClick={handleViewCV}>View my CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
