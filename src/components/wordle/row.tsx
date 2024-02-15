interface RowProps {
  guess?: string;
}

export const Row = ({ guess }: RowProps) => {
  return (
    <div className="flex space-x-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-20 h-20 shrink-0 inline-flex items-center justify-center p-4 text-4xl text-foreground border-foreground/20 border-2 rounded-lg"
        >
          {guess?.[i]}
        </span>
      ))}
    </div>
  );
};
