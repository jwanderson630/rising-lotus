import { useEffect, useState } from "react"

function useScroll() {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })
  function getScroll(event) {
    setScroll({ x: window.scrollX, y: window.scrollY })
  }
  useEffect(() => {
    window.addEventListener("scroll", getScroll)
    return () => {
      window.removeEventListener("scroll", getScroll)
    }
  }, [])
  return scroll
}

export default useScroll
