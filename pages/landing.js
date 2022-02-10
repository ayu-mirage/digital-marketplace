import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

export default function Landing() {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
      </Layout>
    </>
  );
}