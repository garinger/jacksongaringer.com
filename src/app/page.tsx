import Header from "@/components/Header";
import Project from "@/components/Project";
import Section from "@/components/Section";
import SocialLink from "@/components/SocialLink";
import { BsPaperclip, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="m-8 sm:w-2/3 md:w-2/3 xl:w-2/5">
        <Header />
        <Section title="Projects">
          <Project name="Blackjack" demoHref="blackjack" githubHref="blackjack">
            A react app that lets you play blackjack.
          </Project>
          <Project name="Dog Finder" demoHref="fetch" githubHref="fetch">
            A react app that lets you sort through dogs to find the right match.
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
            text="jagaring@ttu.edu"
            href="mailto:jagaring@ttu.edu"
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
