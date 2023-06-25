interface ButtonProps<T = void> {
  text: string
  clickHandler: (arg?: T) => T | void
  color: string
  background: string
}

export default function Button<T>({
  text,
  clickHandler,
  color,
  background,
}: ButtonProps<T>) {
  return (
    <button
      className={`${color} ${background} py-1 px-2 rounded`}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  )
}
