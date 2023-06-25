import { useContext, useMemo } from "react"
import Note from "../types/Note"
import Icon from "./Icon"
import { NoteContext } from "../contexts/NoteContext"

interface NotePreviewProps {
  note: Note
}

export default function NotePreview({ note }: NotePreviewProps) {
  const { selectNote, deleteNote } = useContext(NoteContext)
  const { createdAt, title, body } = note

  const noteContent = useMemo(() => body.slice(0, 225), [body])

  return (
    <article className="bg-secondaryBg1 flex-grow p-3 h-44 rounded mb-3">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <strong>{title}</strong>
          <Icon
            iconName="edit"
            clickHandler={() => selectNote(createdAt)}
            size="sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="italic text-sm font-serif">
            {createdAt.toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
            })}
          </span>
          <Icon iconName="delete" clickHandler={() => deleteNote(createdAt)} />
        </div>
      </div>
      <p className="text-xs font-serif">{noteContent}</p>
    </article>
  )
}
