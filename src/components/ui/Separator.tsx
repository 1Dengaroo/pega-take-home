type SeparatorProps = {
  className?: string;
};

const Separator = ({ className = "" }: SeparatorProps) => {
  return (
    <div className={`w-full h-[1px] bg-border/20 shrink-0 ${className}`} />
  );
};

export default Separator;
