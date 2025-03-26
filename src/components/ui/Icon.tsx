import { FC } from "react";

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

const Icon: FC<IconProps> = ({ children, className }) => {
  return <div className={`w-5 h-5 ${className}`}>{children}</div>;
};

export default Icon;
