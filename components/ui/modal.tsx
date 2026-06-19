'use client'

import { useEffect, useState } from "react";
import Portal from "./portal";
import { cn } from "@/lib/utils";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";

type PortalProps = {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
};

const Modal = ({ children, show , close }: PortalProps) => {
  const [slideIn, setSlideIn] = useState<boolean>(show);
  
  useLockBodyScroll(show && slideIn);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setSlideIn(true);
      }, 50);
    }else{
      setTimeout(() => {
        setSlideIn(false);
      }, 300);
    }
  }, [show]);

  if (!show && !slideIn) return null;

  const modalWrapperClass = cn(
    "bg-white dark:bg-[#192a39] text-neutral-800 dark:text-white",
    "rounded-t-2xl lg:rounded-2xl",
    "overflow-y-auto fixed w-full transition-all duration-300",
    "left-0 right-0 ",
    "lg:top-1/2 lg:right-1/2 lg:translate-x-1/2 lg:max-w-2xl",
    { "max-lg:bottom-0 lg:-translate-y-1/2 lg:opacity-100": slideIn && show },
    { "max-lg:-bottom-[80vh] lg:translate-y-0 lg:opacity-0": !slideIn || !show },
  );

  return (
    <Portal selector="modal_root">
      <div
        className={cn(
          "absolute top-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-2xl transition-all",
          { "opacity-100": slideIn && show },
          { "opacity-0": !slideIn || !show },
        )}
        onClick={close}
      />
      <div className={modalWrapperClass}>{children}</div>
    </Portal>
  );
};

export default Modal;
