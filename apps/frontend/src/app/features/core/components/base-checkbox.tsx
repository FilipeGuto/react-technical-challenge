import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";

export interface BaseCheckboxProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  dataTestId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const BaseCheckbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  BaseCheckboxProps
> = (
  { checked = false, disabled, dataTestId, className, ...otherProps },
  ref
) => {
  return (
    <div
      className={classNameBuilder(
        "relative group/checkbox w-[18px] h-[18px]",
        className
      )}
    >
      <input
        {...otherProps}
        className={'border-2 border-red-500 flex items-center justify-center w-full h-full rounded-md bg-white'}
        data-testid={dataTestId}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        ref={ref}
      />
      <AiFillCheckSquare
        className={classNameBuilder(
          "absolute -inset-[3px] text-neutral-darkest hidden pointer-events-none",
          "peer-checked/checkbox:block",
          "transition duration-250 ease-dissolve",
          disabled ? "" : "group-hover/checkbox:text-[#381E72]"
        )}
      />
    </div>
  );
};

export default React.forwardRef(BaseCheckbox);
