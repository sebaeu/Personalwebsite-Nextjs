import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm <br />
          Sebastian
        </SectionTitle>
        <SectionText>
        Entrepreneur and Marketing Specialist
        </SectionText>
        <SectionText>
        Want to talk?
        </SectionText>
        <Button onClick={props.handleClick}>Contact me here</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;