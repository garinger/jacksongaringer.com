interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className }: Props) {
  return (
    <div className="mb-6">
      <hr className="my-2"></hr>
      <h1 className="font-bold text-xl">{title}</h1>
      <div className={`${className} mx-4`}>{children}</div>
    </div>
  );
}
