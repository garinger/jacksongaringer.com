interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <div className="mb-6">
      <hr className="my-2"></hr>
      <h1 className="font-semibold text-xl">{title}</h1>
      <div className="mx-2">{children}</div>
    </div>
  );
}
