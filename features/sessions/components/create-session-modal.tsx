"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import { useCreateSessionModal } from "../hooks/use-create-session-modal";
import { CreateSessionForm } from "./create-session-form";

export const CreateSessionModal = () => {
  const { isOpen, setIsOpen } = useCreateSessionModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateSessionForm />
    </ResponsiveModal>
  );
};
