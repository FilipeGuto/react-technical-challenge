import { BsChevronDown } from "react-icons/bs";
import { classNameBuilder } from "@/helpers/class-name-builder";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import Text from "./text";

export interface DropdownProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}
const DisclosureDropdown: React.FC<DropdownProps> = ({
  title = "",
  children = "",
  className,
}) => {
  return (
    <Disclosure
      as='div'
      className={classNameBuilder(
        "flex flex-col rounded-lg overflow-hidden",
        className
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNameBuilder(
              "z-10 flex flex-row justify-between items-center rounded-sm",
              open ? "bg-neutral-dark" : "bg-neutral-darker",
              "transition ease-dissolve duration-250"
            )}
          >
            <Text variant='h4' color='neutral-lightest'>
              {title}
            </Text>
            <BsChevronDown
              className={classNameBuilder(
                "text-neutral-lightest transition ease-dissolve duration-250",
                open ? "rotate-180" : ""
              )}
            />
          </Disclosure.Button>
          <hr className='border-3 border-gray-300 my-3' />
          <Transition
            enter='transition ease-dissolve duration-250 transform'
            enterFrom='-translate-y-full'
            enterTo='translate-x-0'
            leave='transition ease-dissolve duration-250 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-y-full'
          >
            <Disclosure.Panel className='flex flex-col gap-3 justify-start max-h-32 overflow-auto'>
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureDropdown;
