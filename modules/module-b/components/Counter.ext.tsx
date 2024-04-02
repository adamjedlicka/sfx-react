import CounterProps from '#ioc/types/CounterProps'
import { FC } from 'react'

export default function CounterExtension(Counter: FC<CounterProps>) {
  return function CounterWithDoubleInitialCount({ initialCount, ...props }: CounterProps) {
    return <Counter initialCount={initialCount * 2} {...props} />
  }
}
