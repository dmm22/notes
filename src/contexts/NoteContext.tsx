import { createContext, useState } from "react"
import Note from "../types/Note"

interface NoteContextInterface {
  note: Note[]
  currentNote: Note
  editCurrentNote: (property: "title" | "body", newValue: string) => void
  saveCurrentNote: () => void
}

export const NoteContext = createContext<NoteContextInterface>(
  {} as NoteContextInterface
)

function blankNote() {
  return {
    title: "New Note",
    body: "",
    createdAt: new Date(),
  }
}
export default function NoteContextProvider({
  children,
}: {
  children: JSX.Element
}) {
  const [notes, setNotes] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState(blankNote())

  function editCurrentNote(property: "title" | "body", newValue: string) {
    setCurrentNote(currentNote => ({ ...currentNote, [property]: newValue }))
  }

  function saveCurrentNote() {
    const existingNoteIndex = getCurrentNoteIndex()

    if (existingNoteIndex >= 0) {
      setNotes(notes => [
        currentNote,
        ...notes.slice(0, existingNoteIndex),
        ...notes.slice(existingNoteIndex + 1),
      ])
    } else {
      setNotes(notes => [currentNote, ...notes])
    }
  }

  function getCurrentNoteIndex() {
    return notes.findIndex(
      ({ createdAt }) => createdAt === currentNote.createdAt
    )
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        currentNote,
        editCurrentNote,
        saveCurrentNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
