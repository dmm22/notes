import { useContext, useState, useRef } from "react"
import { NoteContext } from "../contexts/NoteContext"
import Icon from "./Icon"
import Button from "./Button"

export default function NoteEditor() {
  const [editTitle, setEditTitle] = useState(false)
  const { currentNote, editCurrentNote, saveCurrentNote, editorRef } =
    useContext(NoteContext)

  const titleRef = useRef<null | HTMLInputElement>(null)

  function toggleTitleEditingOn() {
    setEditTitle(true)
    setTimeout(() => {
      titleRef.current?.focus()
    }, 100)
  }

  const { title, body } = currentNote

  return (
    <section className="text-text flex flex-col w-4/5">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center space-x-2">
          {editTitle ? (
            <input
              onChange={e => editCurrentNote("title", e.target.value)}
              value={title}
              onBlur={() => setEditTitle(false)}
              ref={titleRef}
              className="outline-none border-none bg-bg text-xl font-bold p-2 width-fit"
            />
          ) : (
            <h1 className="text-xl font-bold p-2">{title}</h1>
          )}
          {!editTitle && (
            <Icon iconName="edit" clickHandler={toggleTitleEditingOn} />
          )}
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
        className="bg-bg resize-none border-2 border-secondaryBg1 focus:outline-primaryBtn focus:border-transparent h-screen p-2"
      ></textarea>
    </section>
  )
}
