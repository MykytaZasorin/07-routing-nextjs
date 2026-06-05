"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";

interface NotePreviewClientProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NotePreviewClient({ params }: NotePreviewClientProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const noteId = resolvedParams.id;

  const handleClose = () => {
    router.back();
  };

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={handleClose}>
      {/* 🚀 Фіксована обгортка, яка рятує сайт від зсуву вниз */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Робимо гарний напівпрозорий оверлей
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999, // Гарантуємо, що модалка буде поверх усього сайту
        }}
      >
        {/* Контейнер самої модалки (твій поточний код) */}
        <div
          style={{
            position: "relative",
            padding: "40px 24px 24px 24px",
            minWidth: "320px",
            maxWidth: "500px",
            backgroundColor: "#222222",
            color: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Додамо об'єму
          }}
        >
          {/* Кнопка закриття */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "#333333",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              cursor: "pointer",
              color: "#ffffff",
              lineHeight: 1,
              zIndex: 50,
            }}
            aria-label="Close modal"
          >
            &times;
          </button>

          {isLoading && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              Завантаження...
            </div>
          )}
          {isError && (
            <div style={{ color: "#dc3545", textAlign: "center" }}>
              Не вдалося завантажити нотатку
            </div>
          )}

          {note && (
            <article>
              <h2
                style={{
                  marginBottom: "12px",
                  fontSize: "1.5rem",
                  color: "#ffffff",
                }}
              >
                {note.title}
              </h2>
              {note.tag && (
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#333333",
                    color: "#b5b5b5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.85rem",
                    marginBottom: "16px",
                  }}
                >
                  #{note.tag}
                </span>
              )}
              <p
                style={{
                  whiteSpace: "pre-wrap",
                  color: "#e0e0e0",
                  lineHeight: 1.5,
                }}
              >
                {note.content}
              </p>
            </article>
          )}
        </div>
      </div>
    </Modal>
  );
}
