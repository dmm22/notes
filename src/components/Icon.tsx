import { useState, useEffect, MouseEvent } from "react"

interface IconProps {
  iconName: string
  clickHandler: (event: MouseEvent<HTMLImageElement>, timeStamp: Date) => void
  size?: "sm"
}

export default function Icon({ iconName, clickHandler, size }: IconProps) {
  const [iconSrc, setIconSrc] = useState("")

  useEffect(() => {
    ;(async () => {
      const iconModule = await import(`../assets/${iconName}.svg`)
      setIconSrc(iconModule.default)
    })()
  }, [])

  const handleClick = (event: MouseEvent<HTMLImageElement>) => {
    clickHandler(event, new Date())
  }

  return (
    <img
      className={`${size === "sm" ? "h-3" : "h-4"} cursor-pointer`}
      src={iconSrc}
      onClick={handleClick}
    />
  )
}
