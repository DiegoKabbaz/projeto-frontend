import { Headers, Nav, NavLink } from "./style-header";

export function Header() {
  return (
    <Headers>
      <span>Rick and Morty</span>
      <Nav>
        <NavLink to="/">Personagens</NavLink>
        <NavLink to="/epsodes">Episódios</NavLink>
        <NavLink to="/localizacao">Localizações</NavLink>
      </Nav>
    </Headers>
  )
}
