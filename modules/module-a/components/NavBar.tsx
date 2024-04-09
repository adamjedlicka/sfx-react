import navBar from '~/.sfx/navBar'

export default function NavBar() {
  return (
    <div>
      {Object.values(navBar).map((Item) => (
        <Item />
      ))}
    </div>
  )
}
