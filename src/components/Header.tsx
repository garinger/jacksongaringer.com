import SocialLink from "./SocialLink";

export default function Header() {
  return (
    <header className="my-4">
      <div className="flex gap-2">
        <h1 className="font-bold text-xl grow">Jackson Garinger</h1>
        <SocialLink
          text="LinkedIn"
          href="https://www.linkedin.com/in/jacksongaringer/"
          alt="My LinkedIn"
        />
        <SocialLink
          text="GitHub"
          href="https://github.com/garinger"
          alt="My GitHub"
        />
      </div>
      <h2>Software Engineer</h2>
      <h2>Dallas, Texas</h2>
    </header>
  );
}
