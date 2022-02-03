import { FluidContainer } from '@makinox/makinox-ui';

import { heroBackgroundContainer, heroBackgroundPath, heroBackgroundVector, heroSection } from './Hero.style';

const HeroBackground = () => (
  <div className={heroBackgroundContainer()}>
    <svg className={heroBackgroundVector()} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className={heroBackgroundPath()}
      ></path>
    </svg>
  </div>
);

export default function Hero() {
  return (
    <div className={heroSection()} style={{ position: 'relative' }}>
      <div className={`flex justify-between items-center ${FluidContainer()}`} style={{ height: 500 }}>
        <HeroBackground />
        <article>
          <h1>Titulo de limons</h1>
        </article>
        <article>
          <span>3d lemon</span>
          {/* <Limon /> */}
        </article>
      </div>
    </div>
  );
}