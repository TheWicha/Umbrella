import React from "react";
import LandingPageHero from './LandingPageHero'
import LandingPagePresentation from './LandingPagePresentation'
import LandingPageStack from './LandingPageStack'

const LandingPage: React.FC = () => {

  return (
    <div>
      <LandingPageHero />
      <LandingPagePresentation />
      <LandingPageStack />      
    </div>
  );
};

export default LandingPage;
