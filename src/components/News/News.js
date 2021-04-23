import React, { Component } from 'react';
import Header from '../../Header';
import './News.css';
import { Image } from "react-bootstrap";
class News extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
         <div>
       <div><Header/></div>
       <div className="filler"></div>

        <a href="#1">
       <div>
       <div className="divnews"><Image  src='./pizza.png'/></div>
        <div className="newscontent"><p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut ac metus ornare, tristique sapien ac, fermentum risus. Quisque interdum lacinia ornare.
         Vivamus auctor eu purus sed semper. Vestibulum malesuada, ex a tempor sodales, tortor neque
          interdum ex, sed aliquam ex erat vitae ipsum. Orci varius natoque penatibus et magnis dis
           parturient montes, nascetur ridiculus mus. Vestibulum tincidunt ornare nibh vitae ultricies.
            Etiam in viverra neque.
            Proin ultrices dolor arcu, eget mattis massa bibendum id. Vestibulum imperdiet porta libero, vel volutpat dui sagittis in. Pellentesque eu euismod libero. Praesent id mattis enim. Ut molestie nunc dolor, a placerat enim sagittis at. Morbi semper nibh in velit aliquet commodo non ac urna. Pellentesque habitant morbi tristique senectus et 
            </p></div>
        </div>
        </a>

         <a href="#2">
       <div>
       <div className="divnewssec"><Image  src='./meat.png'/></div>
        <div className="newscontentsec"><p className="content">Suspendisse quam augue, venenatis vel neque id, aliquet tempus
         ligula. Maecenas sodales at elit ac hendrerit. Morbi tincidunt fringilla cursus. In et velit
          eget nunc semper bibendum. Etiam turpis arcu, viverra ut erat id, mollis elementum nisl. 
          Donec aliquet sem ut erat vulputate, ac volutpat lacus eleifend. In facilisis consequat ipsum,
           vel tempor odio finibus nec. Nulla viverra, neque vel faucibus commodo, felis nulla feugiat
            quam, sed vulputate erat massa at lectus. Fusce malesuada congue lorem, in varius neque 
            blandit non.
            Proin ultrices dolor arcu, eget mattis massa bibendum id. Vestibulum imperdiet porta libero,
             vel volutpat dui sagittis in. Pellentesque eu euismod libero. Praesent id mattis enim. Ut 
             molestie nunc dolor, a placerat enim sagittis at. Morbi semper nibh in velit aliquet commodo
              
            </p></div>
        </div>
        </a>

         <a href="#3">
       <div>
       <div className="divnewsthr"><Image  src='./salad.png'/></div>
        <div className="newscontentthr"><p className="content">Phasellus aliquet metus gravida, aliquam libero eget,
         condimentum tellus. Cras congue justo est, vel ornare est sagittis sed. Donec pellentesque
          eros nunc, sed feugiat dolor efficitur ac. Praesent sagittis dignissim urna a hendrerit. 
          In condimentum porttitor mi congue porta. Duis rutrum urna suscipit est bibendum, at auctor
           nulla accumsan. Cras non felis vestibulum, ultricies tellus nec, convallis dui. Duis ipsum
            ligula, finibus ut magna ac, semper laoreet ex.
            
            Proin ultrices dolor arcu, eget mattis massa bibendum id. Vestibulum imperdiet porta libero, 
            el volutpat dui sagittis in. Pellentesque eu euismod libero. Praesent id mattis enim. 
            Ut molestie nunc dolor, a placerat enim sagittis at. Morbi semper nibh in velit aliquet 
            commodo non ac urna. 
            </p></div>
        </div>
        </a>
        <div className="div-footer-news"></div>
        </div>

    
    );
  }
}

export default News;
