import React from 'react'; 
import { Link, IndexLink} from 'react-router';

const Nav = () => {
        return (
            <nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">MörtforsDagblad Admin Tool</a>
					<a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
					<ul className="right hide-on-med-and-down">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Startsida</IndexLink></li>
						<li><Link to="/categories" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Kategorier</Link></li>
						<li><Link to="/authors" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Författare</Link></li>
                        <li><Link to="/images" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Bilder</Link></li>
                        <li><Link to="/articles" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Artiklar</Link></li>
					</ul>
					<ul className="side-nav" id="mobile-nav">
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Startsida</IndexLink></li>
						<li><Link to="/categories" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Kategorier</Link></li>
						<li><Link to="/authors" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Författare</Link></li>
                        <li><Link to="/images" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Bilder</Link></li>
                        <li><Link to="/articles" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Artiklar</Link></li>
					</ul>
				</div>
			</nav>
        );
};

export default Nav;