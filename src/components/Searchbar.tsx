import { useState, useContext } from "react"
import Icon from "./Icon"
import { NoteContext } from "../contexts/NoteContext"

export default function Searchbar() {
  const [inputFocused, setInputFocused] = useState(false)
  const { noteSearchInput, editSearchInput } = useContext(NoteContext)

  const handleInputFocus = () => {
    setInputFocused(true)
  }

  const handleInputBlur = () => {
    setInputFocused(false)
  }

  return (
    <div
      className={`w-full bg-text flex items-center justify-between px-3 py-1 rounded mb-3 ${
        inputFocused ? "outline outline-primaryBtn" : ""
      }`}
    >
      <input
        onChange={e => editSearchInput(e.target.value)}
        value={noteSearchInput}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className="outline-none"
      />
      <Icon iconName="search" clickHandler={() => console.log("test")} />
    </div>
  )
}
