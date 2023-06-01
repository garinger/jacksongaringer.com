import SocialLink from "./SocialLink";

interface Props {
  name: string;
  demoHref: string;
  githubHref: string;
  children: React.ReactNode;
}

export default function Project({
  name,
  demoHref,
  githubHref,
  children,
}: Props) {
  return (
    <div className="my-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-lg font-medium">{name}</h1>
        <SocialLink
          text="Demo"
          href={`https://${demoHref}.jacksongaringer.com`}
          alt={`Demo of ${name}`}
        />
        <SocialLink
          text="Github"
          href={`https://github.com/garinger/${githubHref}`}
          alt={`Github repo of ${name}`}
        />
      </div>
      <p>{children}</p>
    </div>
  );
}
