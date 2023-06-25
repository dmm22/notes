import { useContext, useState } from "react"
import { NoteContext } from "../contexts/NoteContext"
import Icon from "./Icon"
import Button from "./Button"

export default function NoteEditor() {
  const [editTitle, setEditTitle] = useState(false)
  const { currentNote, editCurrentNote, saveCurrentNote, editorRef } =
    useContext(NoteContext)

  const { title, body } = currentNote

  return (
    <section className="text-text flex flex-col w-4/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold p-2">{title}</h1>
          <Icon iconName="edit" clickHandler={() => console.log("test")} />
        </div>
        <Button
          text="Save"
          clickHandler={saveCurrentNote}
          color="text-text"
          background="bg-primaryBtn"
        />
      </div>
      <textarea
        ref={editorRef}
        onChange={e => editCurrentNote("body", e.target.value)}
        value={body}
        className="bg-bg resize-none border-2 border-secondaryBg1 focus:outline-primaryBtn focus:border-transparent h-screen"
      ></textarea>
    </section>
  )
}
