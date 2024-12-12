import React from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Values from './components/Values';
import Stats from './components/Stats';

export default function AboutPage() {
  return (
    <div className="pt-16 bg-gray-50">
      <Hero />
      <Mission />
      <Values />
      <Team />
      <Stats />
    </div>
  );
}