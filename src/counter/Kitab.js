import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.packtpub.com/sites/default/files/ReactJSEssentials.png',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: 'https://images-na.ssl-images-amazon.com/images/I/61i64hg6ZgL.jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: 'https://www.packtpub.com/sites/default/files/B09550_cover.png',
    altText: '',
    caption: '',
    header: ''
  }
];

const Kitab = () => <UncontrolledCarousel items={items} />;

export default Kitab;