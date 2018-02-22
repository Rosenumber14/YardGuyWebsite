import React from 'react';
import Config from '../../../config';

const Header = () =>
  <div>
    <div className='headerTitle'>
      Echo Mountain Landscaping
    </div>
    <img className='headerImage' src={Config.api + '/images/gardens.jpg'} />
  </div>;

export default Header;
