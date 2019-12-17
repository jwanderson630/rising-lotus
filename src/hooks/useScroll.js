import { useEffect, useState } from "react"

function useScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  function getScroll(event) {
    setScroll({ x: window.scrollX, y: window.scrollY })
  }
  useEffect(() => {
    window.addEventListener("scroll", getScroll)
    getScroll()
    return () => {
      window.removeEventListener("scroll", getScroll)
    }
  }, [])
  return scroll
}

export default useScroll
