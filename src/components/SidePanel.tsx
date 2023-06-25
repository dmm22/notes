import SavedNotes from "./SavedNotes"

export default function SidePanel() {
  return (
    <aside className="w-1/6 text-text border border-secondaryBg1 p-3">
      <SavedNotes />
    </aside>
  )
}
