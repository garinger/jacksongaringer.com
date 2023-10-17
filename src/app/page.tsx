import Header from "@/components/Header";
import Project from "@/components/Project";
import Section from "@/components/Section";
import SocialLink from "@/components/SocialLink";
import { BsPaperclip } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="m-8 sm:w-2/3 md:w-2/3 xl:w-2/5">
        <Header />
        <Section title="Projects" className="flex flex-col gap-4">
          <Project
            name="Renderer"
            gifSrc="/renderer.gif"
            demoHref="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            githubHref="Renderer"
          >
            A super awesome 3D renderer written in C++
          </Project>
          <Project
            name="Blackjack"
            gifSrc="/blackjack.gif"
            demoHref="https://blackjack.jacksongaringer.com"
            githubHref="Blackjack"
          >
            A neat little Blackjack game built in React
          </Project>
        </Section>
        <Section title="Contact me">
          <SocialLink
            className="my-1"
            text="Resume"
            href="/resume.pdf"
            alt="My resume"
          >
            <BsPaperclip />
          </SocialLink>
          <SocialLink
            className="my-1"
            text="jackson.garinger@gmail.com"
            href="mailto:jackson.garinger@gmail.com"
            alt="My email"
          />
          <SocialLink
            className="my-1"
            text="469-525-7086"
            alt="My phone number"
          />
        </Section>
      </div>
    </main>
  );
}
