import React from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        let nav = this.props.nav;
        return (

            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {Object.values(nav).map((elem, i) => {
                                return <NavLink to={elem[1]} key={i}><li>{elem[0]}</li></NavLink>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Nav;
