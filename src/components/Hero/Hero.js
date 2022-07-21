import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Avi's Portfolio <br />
         
        </SectionTitle>
        <SectionText>
       Hello, my name is Avi, i am a 11th grade student, my interests resides in Computer Science, Astronomy, Politics, History and Social affairs. My ambitions are very high and i want to do something for the betterment of this world. This is my potfolio and about what i do. Thank you.
        </SectionText>
        <Button onClick={() => window.location = 'mailto:anupmashukla1535@email.com'}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;