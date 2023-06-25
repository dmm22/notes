import { useContext } from "react"
import Button from "./Button"
import SavedNotes from "./SavedNotes"
import { NoteContext } from "../contexts/NoteContext"

export default function SidePanel() {
  const { addNote } = useContext(NoteContext)
  return (
    <aside className="w-1/5 p-3 text-text border border-secondaryBg1 flex flex-col justify-between">
      <div className="mb-auto">
        <input className="w-full" />
        <SavedNotes />
      </div>
      <Button
        text="New Note"
        clickHandler={addNote}
        color="text-text"
        background="bg-primaryBtn"
      />
    </aside>
  )
}
