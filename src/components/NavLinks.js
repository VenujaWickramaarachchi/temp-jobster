import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, id, path, icon } = link
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link acitve' : 'nav-link'
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
