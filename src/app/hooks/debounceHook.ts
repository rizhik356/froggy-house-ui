import { useRef, useEffect } from 'react'

export const useDebounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number,
  cleanUp: boolean = false,
) => {
  const timeoutRef = useRef<number | undefined>(undefined)

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp])

  return (...args: T) => {
    clearTimer()
    timeoutRef.current = setTimeout(() => func(...args), delay)
  }
}
