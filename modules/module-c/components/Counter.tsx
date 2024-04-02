import { useState } from 'react'
import CounterProps from '#ioc/types/CounterProps'

export default function Counter({ initialCount, multiplier }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  return <button onClick={() => setCount(count * multiplier)}>Count {count}</button>
}
