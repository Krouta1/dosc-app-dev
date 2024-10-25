import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

// generate some comment as documentation
/**
 * Container component
 * @returns {JSX.Element} - The container component
 * @param {React.ReactNode} children - The children of the container
 * @param {HTMLAttributes<HTMLDivElement>["className"]} className - The class name of the container
 * @version 1.0.0
 * @category Components
 * @example
 * <Container className="bg-red-500">Hello World</Container>
 */

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-[1528px] px-4 md:px-8 lg:px-16",
        className && className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
