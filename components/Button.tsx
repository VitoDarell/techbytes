import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
                rounded-full
                bg-[#3374db]
                border
                border-transparent
                px-6
                py-2
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-white
                font-bold
                hover:opacity-75
                transition
                uppercase
                flex
                gap-2
                justify-center
                items-center
            `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
