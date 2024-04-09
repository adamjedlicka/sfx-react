import { Outlet } from 'react-router-dom'
import NavBar from '#ioc/components/NavBar'

export default function $layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
