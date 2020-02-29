import React, { useState, useMemo, useEffect } from "react"
import { useSprings, animated } from "react-spring"
import { Waypoint } from "react-waypoint"

const FlowIn = ({ children, offset = "-100px", distance = "50px" }) => {
  const [entered, setEntered] = useState(false)
  const flowItems = useMemo(
    () =>
      children.length ? children.filter(child => child !== null) : [children],
    [children]
  )

  useEffect(() => {
    if (window.scrollY > 0) {
      setEntered(true)
    }
  }, [])

  const springs = useSprings(
    flowItems.length,
    flowItems.map((item, index) => ({
      from: {
        opacity: 0,
        transform: `translate3d(0,${distance},0)`,
      },
      opacity: entered ? 1 : 0,
      transform: entered
        ? `translate3d(0,0,0)`
        : `translate3d(0,${distance},0)`,
      delay: 150 * index,
    }))
  )

  return (
    <>
      <Waypoint onEnter={() => setEntered(true)} topOffset={offset} />
      {springs.map((props, index) => (
        <animated.div
          style={props}
          key={flowItems[index].key}
          className="flowItem"
        >
          {flowItems[index]}
        </animated.div>
      ))}
    </>
  )
}

export default FlowIn
