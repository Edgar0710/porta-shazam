import React from 'react';
class Header extends React.Component {
     constructor(props) {
         super(props);
     }

    render() {
        return (
            <nav className="navbar  navbar-expand-md bg-white border-bottom ">
            <div className="container">
                <a className="navbar-brand " href="#">Miusic Max</a>
                </div> 
            </nav>
        )
    }
}
export default Header;