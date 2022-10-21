import { Logo } from './common/Logo';
import { BurgerMenu } from './common/BurgerMenu';

export const Header = () => {
  return (
    <div className='header'>
      <Logo/>
      <nav className="header__nav">
        <a href='#' className="header__nav-link">Features</a>
        <a href='#' className="header__nav-link">Partners</a>
        <a href='#' className="header__nav-link">Stories</a>
      </nav>
      <BurgerMenu/>
      <button className="header__button">Download for free</button>
    </div>
  )
}
