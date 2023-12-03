import React from "react";
import "../Cards.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul className='cards-container'>
        <li className='cards'>
          <div className='content'>
            <h2>Anodising</h2>
            <p>
              As aluminium "rusts" it produces a loose dry white powder,
              aluminium oxide. The anodising process artificially produces this
              film but as a hard, dense wear resistant surface.
            </p>
            <NavLink to='/Legals' className='navlink'>
              Read More
            </NavLink>
          </div>
        </li>
        <li className='cards'>
          <div className='content'>
            <h2>Non Destructive Testing</h2>
            <p>
              Ashton & Moore Limited have extended their extensive range of
              Aerospace finishing services to include Non Destructive Testing.
            </p>
            <NavLink to='/Legals' className='navlink'>
              Read More
            </NavLink>
          </div>
        </li>
        <li className='cards'>
          <div className='content'>
            <h2>Painting</h2>
            <p>
              Capable of applying a paint finish to virtually any metallic and
              many non metallic surfaces, our painting division is at the
              forefront of technology.
            </p>
            <NavLink to='/Legals' className='navlink'>
              Read More
            </NavLink>
          </div>
        </li>
        <li className='cards'>
          <div className='content'>
            <h2>Conversion Coatings</h2>
            <p>
              Although stainless and corrosion resistant steels have a natural
              passive film, during the manufacturing processes minute particles
              of steel and non ferrous metals are...
            </p>
            <NavLink to='/Legals' className='navlink'>
              Read More
            </NavLink>
          </div>
        </li>
        <li className='cards'>
          <div className='content'>
            <h2>Plating</h2>
            <p>
              Silver, like lead, also has excellent lubrication and anti galling
              properties. Ashton & Moore offer deposits of pure silver without
              the addition of the brightening...
            </p>
            <NavLink to='/Legals' className='navlink'>
              Read More
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
