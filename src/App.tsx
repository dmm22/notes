import ColorSwatches from "./components/ColorSwatches"
import NoteEditor from "./components/NoteEditor"
import SavedNotes from "./components/SavedNotes"
import NoteContextProvider from "./contexts/NoteContext"

export default function App() {
  return (
    <NoteContextProvider>
      <main className="flex flex-row">
        <ColorSwatches />
        <SavedNotes />
        <NoteEditor />
      </main>
    </NoteContextProvider>
  )
}
