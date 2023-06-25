import { useContext } from "react"
import { NoteContext } from "../contexts/NoteContext"

export default function NoteEditor() {
  const {
    currentNote,
    editCurrentNote,
    saveCurrentNote,
    notes,
    addNote,
    selectNote,
  } = useContext(NoteContext)
  const { title, body } = currentNote

  return (
    <section className="text-text flex flex-col">
      <button onClick={saveCurrentNote}>Save</button>
      <button onClick={addNote}>Add Note</button>
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
      <div>
        {notes.map(note => (
          <pre
            onClick={() => selectNote(note.createdAt)}
            key={`${note.createdAt}`}
          >
            {JSON.stringify(note)}
          </pre>
        ))}
      </div>
    </section>
  )
}
