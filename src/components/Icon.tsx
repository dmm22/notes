import { useState, useEffect } from "react"

interface IconProps {
  iconName: string
  clickHandler: (timeStamp: Date) => void
}

export default function Icon({ iconName, clickHandler }: IconProps) {
  const [iconSrc, setIconSrc] = useState("")

  useEffect(() => {
    ;(async () => {
      const iconModule = await import(`../assets/${iconName}.svg`)
      setIconSrc(iconModule.default)
    })()
  }, [])

  return (
    <img className="h-4 cursor-pointer" src={iconSrc} onClick={clickHandler} />
  )
}
