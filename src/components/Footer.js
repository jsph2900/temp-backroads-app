import { pageLinks, iconLinks } from '../Data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((value) => {
          return <PageLink key={value.id} {...value} class="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {iconLinks.map((value) => {
          return (
            <SocialLink key={value.id} {...value} classname="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default footer;
