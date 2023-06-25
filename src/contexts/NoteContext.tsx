import { createContext, useState, useRef } from "react"
import Note from "../types/Note"

interface NoteContextInterface {
  notes: Note[]
  currentNote: Note
  editCurrentNote: (property: "title" | "body", newValue: string) => void
  saveCurrentNote: () => void
  addNote: () => void
  selectNote: (clickedNoteCreatedAt: Date) => void
  deleteNote: (clickedNoteCreatedAt: Date) => void
  noteSearchInput: string
  editSearchInput: (newValue: string) => void
  editorRef: React.MutableRefObject<HTMLTextAreaElement | null>
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
  const [notes, setNotes] = useState<Note[]>([
    {
      title: "Placeholder Note",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui est in modi, harum, non nisi numquam earum quam quos voluptas doloremque quas deleniti sapiente illo cumque expedita vero ratione delectus, voluptatem eum officia eveniet rem? Voluptatibus magni optio culpa, laudantium quidem velit alias error eveniet tempora incidunt ratione illo consequuntur, aperiam, minima enim odio architecto quo neque excepturi id quos minus placeat! Optio qui dolorum at. Similique maxime recusandae illo error amet perferendis provident voluptatem sed placeat debitis! Totam maxime nesciunt doloribus doloremque natus veniam asperiores nostrum exercitationem quam nam sunt vitae facere, laudantium inventore facilis molestiae! Similique, pariatur.",
      createdAt: new Date(),
    },
  ])
  const [currentNote, setCurrentNote] = useState(blankNote())
  const [noteSearchInput, setNoteSearchInput] = useState("")

  const editorRef = useRef<HTMLTextAreaElement | null>(null)

  function addNote() {
    const newNote = blankNote()
    setNotes(notes => [newNote, ...notes])
    setCurrentNote(newNote)
    editorRef.current?.focus()
  }

  function selectNote(clickedNoteCreatedAt: Date) {
    const selectedNote = notes.find(
      ({ createdAt }) => createdAt === clickedNoteCreatedAt
    )
    selectedNote && setCurrentNote(selectedNote)
    editorRef.current?.focus()
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
    console.log("clicked")
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

  function editSearchInput(newValue: string) {
    setNoteSearchInput(newValue)
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
        noteSearchInput,
        editSearchInput,
        editorRef,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
