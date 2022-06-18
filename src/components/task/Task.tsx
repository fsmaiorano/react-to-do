interface TaskProps {
  content: string;
}

export default function Task({ content }: TaskProps) {
  return (
    <>
      <p>{content}</p>
    </>
  );
}
