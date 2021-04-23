import React, { Component } from 'react';
import Header from '../../Header';
import { Image } from "react-bootstrap";
import './Chef.css'
import SocialLinks from '../SocialLinks/SocialLinks';
class Chef extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div>
      
       <div><Header/></div>
      
       <div className="filler"></div>
       
       <h3 className="name">DOLOR EFFICITUR</h3>
      
        <div>
       <div className="filler"></div>
       <div className="divcontent"><Image  src='./cheff.png'/></div>
       <div className="filler"></div>
        <div className="divcontentpara">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere nibh eget tempus porta. Quisque vitae placerat turpis, in condimentum lorem. Praesent bibendum pretium justo sed rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at quam ac metus tristique facilisis. In eget tempus sapien. Curabitur at euismod neque. In porttitor eros vitae semper finibus. Pellentesque scelerisque sapien facilisis lectus malesuada venenatis.</p>

      <p>Vestibulum ornare rutrum viverra. Suspendisse facilisis, odio eu aliquam consequat, justo ex consectetur tortor, sed euismod nisl enim quis nisi. Nullam blandit pharetra libero sed aliquam. Praesent tincidunt augue sed ante efficitur bibendum. Donec molestie, mauris nec imperdiet dignissim, elit ligula tincidunt elit, in commodo neque felis in augue. Donec laoreet metus lorem, at convallis velit vulputate a. Fusce luctus scelerisque lacus. Integer varius condimentum sodales. Mauris eros erat, pharetra in diam sit amet, facilisis faucibus odio. Nullam euismod ex a libero rhoncus, quis porta nunc accumsan. Cras urna elit, eleifend ac ante in, rutrum ullamcorper augue. Aenean risus dolor, gravida at sollicitudin eget, sodales et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dapibus ipsum eu rutrum aliquet. Nunc vestibulum ultricies diam, sit amet accumsan orci aliquam a.</p></div>
  
       </div>
       
      <div className="div-social"><SocialLinks/></div>
      <div className="div-footer-chef"></div>
       </div>
    );
  }
}

export default Chef;
