import logo from '../images/logo.svg';
import { pageLinks, iconLinks } from '../Data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((value) => {
            return <PageLink {...value} key={value.id} class="nav-link" />;
          })}
        </ul>

        <ul className="nav-icons">
          {iconLinks.map((value) => {
            return (
              <SocialLink {...value} key={value.id} classname="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
