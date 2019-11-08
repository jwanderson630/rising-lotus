import { useRef, useState, useEffect } from "react"

export default function useHoveredOver() {
  const hoverRef = useRef()
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    hoverRef.current.addEventListener("mouseenter", () => {
      setHovered(true)
    })
    hoverRef.current.addEventListener("mouseleave", () => {
      setHovered(false)
    })
    hoverRef.current.addEventListener("focusin", () => {
      setHovered(true)
    })
    hoverRef.current.addEventListener("focusout", () => {
      setHovered(false)
    })
    return () => {
      hoverRef.current.removeEventListener("mouseenter", () => {
        setHovered(true)
      })
      hoverRef.current.removeEventListener("mouseleave", () => {
        setHovered(false)
      })
      hoverRef.current.removeEventListener("focusin", () => {
        setHovered(true)
      })
      hoverRef.current.removeEventListener("focusout", () => {
        setHovered(false)
      })
    }
  }, [hoverRef])
  return [hovered, hoverRef]
}
