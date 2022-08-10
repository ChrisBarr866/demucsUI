import { useState } from "react"

export default function useQueue(defaultValue) {
  const [queue, setQueue] = useState(defaultValue)

  function push(element) {
    setQueue(a => [...a, element])
  }

  function filter(callback) {
    setQueue(a => a.filter(callback))
  }

  function update(index, newElement) {
    setQueue(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  function remove(index) {
    setQueue(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clear() {
    setQueue([])
  }

  return { queue, set: setQueue, push, filter, update, remove, clear }
}
