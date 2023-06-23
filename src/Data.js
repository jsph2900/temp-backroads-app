import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, links: '#home', text: 'home' },
  { id: 2, links: '#about', text: 'about' },
  { id: 3, links: '#services', text: 'services' },
  { id: 4, links: '#tours', text: 'tours' },
];

export const iconLinks = [
  {
    id: 1,
    iconLink: 'https://www.facebook.com',
    iconClassLogo: 'fab fa-facebook',
  },
  {
    id: 2,
    iconLink: 'https://www.twitter.com',
    iconClassLogo: 'fab fa-twitter',
  },
  {
    id: 3,
    iconLink: 'https://www.instagram.com',
    iconClassLogo: 'fab fa-instagram',
  },
];

export const servicesData = [
  {
    id: 1,
    logo: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
  },
  {
    id: 2,
    logo: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    logo: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tourData = [
  {
    id: 1,
    date: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    days: '6 days',
    price: 'from $2100',
    picture: img1,
  },
  {
    id: 2,
    date: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    days: '11 days',
    price: 'from $1400',
    picture: img2,
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    days: '8 days',
    price: 'from $5000',
    picture: img3,
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    days: '20 days',
    price: 'from $3300',
    picture: img4,
  },
];
