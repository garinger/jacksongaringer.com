import Image from "next/image";
import SocialLink from "./SocialLink";

interface Props {
  name: string;
  gifSrc: string;
  demoHref: string;
  githubHref: string;
  children: React.ReactNode;
}

export default function Project({
  name,
  gifSrc,
  demoHref,
  githubHref,
  children,
}: Props) {
  return (
    <div className="my-4">
      <div className="flex sm:flex-nowrap flex-wrap gap-4 items-center">
        <Image
          src={gifSrc}
          width={0}
          height={0}
          priority={true}
          quality={100}
          alt="Picture of the author"
          className="rounded w-64 h-auto"
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h1 className="text-xl font-semibold">{name}</h1>
            <SocialLink text="Demo" href={demoHref} alt={`Demo of ${name}`} />
            <SocialLink
              text="GitHub"
              href={`https://github.com/garinger/${githubHref}`}
              alt={`Github repo of ${name}`}
            />
          </div>
          <p className="text-lg">{children}</p>
          <button className="bg-black text-white rounded w-24 h-8">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
