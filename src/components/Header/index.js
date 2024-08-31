import {Link} from 'react-router-dom'

import {Logo} from './Styled'

const Header = () => (
  <Link to="/">
    <Logo
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
    />
  </Link>
)

export default Header
