import React from 'react';
import HeroAnime from './components/HeroAnime';
import CourseGrid from './components/CourseGrid';
import InstructorSpotlight from './components/InstructorSpotlight';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#060A16] text-white">
      <HeroAnime />
      <CourseGrid />
      <InstructorSpotlight />
      <FooterCTA />
    </div>
  );
}

export default App;
