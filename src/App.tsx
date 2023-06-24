import NoteEditor from "./components/NoteEditor"
import NoteContextProvider from "./contexts/NoteContext"

export default function App() {
  return (
    <NoteContextProvider>
      <div>
        <NoteEditor />
      </div>
    </NoteContextProvider>
  )
}
