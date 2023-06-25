import { createContext, useState } from "react"
import Note from "../types/Note"

interface NoteContextInterface {
  notes: Note[]
  currentNote: Note
  editCurrentNote: (property: "title" | "body", newValue: string) => void
  saveCurrentNote: () => void
  addNote: () => void
  selectNote: (clickedNoteCreatedAt: Date) => void
  deleteNote: (clickedNoteCreatedAt: Date) => void
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

  function addNote() {
    const newNote = blankNote()
    setNotes(notes => [newNote, ...notes])
    setCurrentNote(newNote)
  }

  function selectNote(clickedNoteCreatedAt: Date) {
    const selectedNote = notes.find(
      ({ createdAt }) => createdAt === clickedNoteCreatedAt
    )
    selectedNote && setCurrentNote(selectedNote)
  }

  function editCurrentNote(property: "title" | "body", newValue: string) {
    setCurrentNote(currentNote => ({ ...currentNote, [property]: newValue }))
  }

  function deleteNote(clickedNoteCreatedAt: Date) {
    setNotes(notes =>
      notes.filter(({ createdAt }) => createdAt !== clickedNoteCreatedAt)
    )
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
        addNote,
        selectNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
