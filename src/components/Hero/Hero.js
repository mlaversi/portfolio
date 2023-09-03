import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Mathieu Laversin's Portfolio
        </SectionTitle>
        <SectionText>
        Graduated from an engineering school, degree in mathematics. Work as hard as you can, so you won't have any regrets. 
        </SectionText>
        <Button onClick={props.handleClick}>Download my CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;