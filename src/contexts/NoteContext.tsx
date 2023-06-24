import { createContext, useState } from "react"
import Note from "../types/Note"

interface NoteContextInterface {
  currentNote: Note
  editCurrentNote: (property: "title" | "body", newValue: string) => void
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
  const [currentNote, setCurrentNote] = useState(blankNote())

  function editCurrentNote(property: "title" | "body", newValue: string) {
    setCurrentNote(currentNote => ({ ...currentNote, [property]: newValue }))
  }

  return (
    <NoteContext.Provider
      value={{
        currentNote,
        editCurrentNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
