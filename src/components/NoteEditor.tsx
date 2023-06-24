import { useContext } from "react"
import { NoteContext } from "../contexts/NoteContext"

export default function NoteEditor() {
  const { currentNote, editCurrentNote } = useContext(NoteContext)
  const { title, body } = currentNote

  return (
    <section className="text-text flex flex-col">
      <input
        onChange={e => editCurrentNote("title", e.target.value)}
        value={title}
        className="bg-bg border-secondaryBg1 border-2"
      />
      <textarea
        onChange={e => editCurrentNote("body", e.target.value)}
        value={body}
        className="bg-bg resize-none border-secondaryBg1 border-2"
      ></textarea>
    </section>
  )
}
