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
    const pdfPath = '/CV_LAVERSIN.pdf';

    // Check if the PDF file exists
    fetch(pdfPath)
      .then(response => {
        if (response.ok) {
          // Open the PDF in a new tab for viewing
          window.open(pdfPath, '_blank');
        } else {
          console.error(`PDF file not found: ${pdfPath}`);
          // Handle the case where the PDF file doesn't exist
        }
      })
      .catch(error => {
        console.error('Error while checking the PDF file:', error);
        // Handle any other errors that may occur
      });
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

