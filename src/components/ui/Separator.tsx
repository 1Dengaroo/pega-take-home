type SeparatorProps = {
  className?: string;
};

const Separator = ({ className = '' }: SeparatorProps) => {
  return <div className={`bg-border/20 h-[1px] w-full shrink-0 ${className}`} />;
};

export default Separator;
