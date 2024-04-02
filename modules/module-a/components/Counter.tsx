import { useState } from 'react'
import CounterProps from '#ioc/types/CounterProps'

export default function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  return <button onClick={() => setCount(count + 1)}>Count {count}</button>
}
