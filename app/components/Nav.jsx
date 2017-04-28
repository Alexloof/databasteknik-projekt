import React from 'react'; 
import { Link, IndexLink} from 'react-router';

const Nav = () => {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text" style={{fontWeight: 'bold'}}>
                            MörtforsDagblad Admin Tool
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Startsida</IndexLink>
                        </li>
                        <li>
                            <Link to="/categories" activeClassName="active-link">Kategorier</Link>
                        </li>
                        <li>
                            <Link to="/authors" activeClassName="active-link">Författare</Link>
                        </li>
                        <li>
                            <Link to="/images" activeClassName="active-link">Bilder</Link>
                        </li>
                        <li>
                            <Link to="/articles" activeClassName="active-link">Artiklar</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Made by Alex, Simon & Mikael
                        </li>
                    </ul>
                </div>
            </div>
        );
};

export default Nav;