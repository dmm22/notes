import { useContext } from "react"
import { NoteContext } from "../contexts/NoteContext"
import NotePreview from "./NotePreview"

export default function SavedNotes() {
  const { notes, noteSearchInput } = useContext(NoteContext)

  const noteResults = noteSearchInput
    ? notes.filter(({ title, body }) => {
        const re = new RegExp(noteSearchInput, "gi")
        if (re.test(`${title} ${body}`)) return title
      })
    : notes

  return (
    <div>
      {noteResults.map(note => (
        <NotePreview note={note} key={`${note.createdAt}`} />
      ))}
    </div>
  )
}
