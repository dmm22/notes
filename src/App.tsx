import ColorSwatches from "./components/ColorSwatches"
import NoteEditor from "./components/NoteEditor"
import SavedNotes from "./components/SavedNotes"
import SidePanel from "./components/SidePanel"
import NoteContextProvider from "./contexts/NoteContext"

export default function App() {
  return (
    <NoteContextProvider>
      <main className="flex flex-row h-screen p-3">
        <ColorSwatches />
        <SidePanel />
        <NoteEditor />
      </main>
    </NoteContextProvider>
  )
}
