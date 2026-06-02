"use client";

import { useRouter, useParams } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

export default function InterceptedNotePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const handleClose = () => {
    router.back(); // Повертає на той фільтр, з якого клікнули!
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview id={id} />
    </Modal>
  );
}
