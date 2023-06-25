import { useContext } from "react"
import { NoteContext } from "../contexts/NoteContext"
import NotePreview from "./NotePreview"

export default function SavedNotes() {
  const { notes } = useContext(NoteContext)

  return (
    <div>
      {notes.map(note => (
        <NotePreview note={note} key={`${note.createdAt}`} />
      ))}
    </div>
  )
}
