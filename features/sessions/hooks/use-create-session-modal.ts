"use client"

import { useQueryState, parseAsBoolean } from "nuqs";

export const useCreateSessionModal = () => {

  console.log("useCreateSessionModal");
  const [isOpen, setIsOpen] = useQueryState(
    "create-session",
    parseAsBoolean.withDefault(false)
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
};
