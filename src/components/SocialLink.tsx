interface Props {
  text: string;
  href?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SocialLink({ text, href, className, children }: Props) {
  return (
    <div className="flex items-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} ${href && "underline"} text-lg`}
      >
        {text}
      </a>
      {children}
    </div>
  );
}
