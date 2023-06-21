"use client";

import ClickOutsideRef from "@/src/utils/EventClick";
import {
  ForwardedRef,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type SearchBarProps = {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  children?: ReactElement;
};

export type SearchBarRef = {
  open: () => void;
  close: () => void;
  contains: (element: Element) => boolean | undefined;
};

const SearchBar = (
  { handleChange, children }: SearchBarProps,
  ref: ForwardedRef<SearchBarRef>
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const className = isOpen ? "absolute" : "hidden";
  const domRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
    contains: (element: Element) => domRef?.current?.contains(element),
  }));

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  ClickOutsideRef(ref, () => {
    close();
  });

  return (
    <div ref={domRef} className="w-4/12 relative">
      <input
        className="w-full border border-slate-200 rounded bg-black placeholder:text-slate-300 p-2"
        placeholder="Search a product"
        type="search"
        onChange={handleChange}
        onFocus={open}
      />
      <div className={className + " top-full bg-black w-full"}>{children}</div>
    </div>
  );
};

export default forwardRef<SearchBarRef, SearchBarProps>(SearchBar);
