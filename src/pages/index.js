/* global tw */
{/* Imports */}
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import star from '../images/star.svg'
import avatar from '../images/avatar.jpg';
import '../styles/global';

{/* Variable Definitions */}
const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const DividerTop = styled(Divider)`
  clip-path: polygon(0 35%, 100% 25%, 100% 65%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;
const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;
const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;
const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-sans text-black mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;
const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-sans text-black mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${star});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;
const ContactTitle = styled.h1`
${tw('text-4xl lg:text-4xl font-sans text-black mb-8 tracking-wide relative inline-block')};
text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
&:before {
content: '';
width: 40px;
height: 40px;
background: url(${triangle});
position: absolute;
background-size: 40px;
animation: ${rotate} 4s linear infinite;
left: -60px;
top: 5px;
}
`;
const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-black mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;
const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;
const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;
const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;
const AboutSub = styled.span`
  ${tw('text-black font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-3xl')};
`;
const AboutDesc = styled.p`
  ${tw('text-black font-sans text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;
const ContactText = styled.p`
  ${tw('text-black font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #001154;
    text-decoration: none;
  }
`;
const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;
{/* Index Page Implementation */}
const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
     <DividerMiddle
        bg="linear-gradient(to right, LightCyan 100%, DodgerBlue 0%)"
        speed={-.1}
        offset={-1.5}
        factor={1.8}
      />
      <Divider speed={0.2} offset={0}>
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hi, <br /> I'm Idilsu.
          </BigTitle>
          <Subtitle>I'm a Business Analyst at McKinsey Company focusing on improving strategy concerns and solutions for financial institutions. I graduated from Brown University in 2022 with a degree in Computer Science and Economics. <br /><br /> Welcome to my online portfolio.  </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, LightCyan 0%, DodgerBlue 100%)"
        speed={-.1}
        offset={0.6}
        factor={1.3}
      />
      <Content speed={0.4} offset={2.0} factor={2}>
        <Inner>
          <Title> My Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="ICURAS"
              link="https://devpost.com/software/icuras-machine-learning-protein-fold-recognition"
              bg="linear-gradient(to right, #f26f11 0%, #ffee00 100%)"
            >
              ICURAS is a novel protein recognition program that uses mean-shift-clustering in protein sequences in an attemp to better understand protein domains and folds via machine learning.<br /> <br /> ICURAS was developed at TreeHacks 2019 @ Stanford University.
            </ProjectCard>
            <ProjectCard
              title="Pacman"
              bg="linear-gradient(to right, #00ffd9 0%, #bb00ff 100%)"
            >
              Implemented Pacman game in Java, utilizing polymorphism and JavaFX library, using the AI Breath-First-Search Algorithm. <br /> <br /> Pacman is a project developed for Introduction to Object-Oriented Programming @ Brown University. 
            </ProjectCard>
            <ProjectCard
              title="Graph"
              bg="linear-gradient(to right,#fa00dd 0%, #ff0022 100%)"
            >
              Implemented a Graph utilizing the Prim-Jarnik and PageRank algorithms in Python.  <br /> <br /> Graph is a project developed for Introduction to Algorithms and Data Structures @ Brown University. 
            </ProjectCard>
            <ProjectCard
              title="This Website"
              bg="linear-gradient(to right, #00ff84 0%, #00ffea 100%)"
            >
              Built this website for my online portfolio using GatsbyJS boilerplate code.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <DividerTop
        bg="linear-gradient(to right, LightCyan 0%, DodgerBlue 100%)"
        speed={-.1}
        offset={1.3}
        factor={2.8}
      />
      <Divider speed={0.1} offset={0.8} factor={2}>
      </Divider>
      <Content speed={0.2} offset={0.99}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Idilsu Guney" />
            <AboutSub>
             I'm interested in weaving data into stories and making interdisciplinary connections with a variety of fields such as finance, literature, and digital marketing.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            For example, as a data scientist intern at the Interdisciplinary Center for Innovative Theory and Empirics (INCITE) @ Columbia University, I worked with novel corpus of text-based data from a variety of colleges across the US in order to measure the degree to which American universities offer a liberal arts education. Contributing to the “Measuring Liberal Arts” project alongside like-minded data engineers, we aimed to analyze and help transform undergraduate education. 
          </AboutDesc>
        </Inner>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, LightCyan 0%, DodgerBlue 100%)"
        speed={-.1}
        offset={4.0}
        factor={1}
      />
      
      <Content speed={0.4} offset={4.0}>
        <Inner>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactText>
            If you want to chat, please feel free to
            <a href="mailto:idilsu_guney@brown.edu"> email me</a> 
            {' '} or find me on {' '}
            <a href="https://www.linkedin.com/in/idilsu-guney-25a86a195/">LinkedIn </a> {' '}
            or {' '}
            <a href="https://app.joinhandshake.com/users/19804453"> Handshake.{' '}</a>
          </ContactText>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={3.5}>
      </Divider>
    </Parallax>
  </React.Fragment>
);
export default Index;