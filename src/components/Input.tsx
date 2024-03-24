import cn from "@utils/cn";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  isVisible: boolean;
  className?: string;
};

const Input = ({ isVisible, className = "", ...props }: InputProps) => {
  return <input className={cn(["hidden", !isVisible], className)} {...props} />;
};

export default Input;
