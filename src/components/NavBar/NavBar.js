/**
 * vertical icon bar
 * @returns 
 */

import './NavBar.css';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-vertical">
            <Link to="/todo" style={{ padding: 5 }}>
                <div className="navbar-item ">
                    <i className="bi bi-check2-square"></i>
                    {/* <a className="active" href="#">
                    <i className="bi bi-check2-square"></i>
                </a> */}
                    <p>Todo</p>
                </div>
            </Link>
            <Link to="/bookmark">
                <div className="navbar-item border nav-bookmark">
                    <i className="bi bi-bookmarks"></i>
                    <p>Bookmark</p>
                </div>
            </Link>
            <Link to="/notes">
                <div className="navbar-item nav-notes">
                    <i className="bi bi-stickies"></i>
                    <p>Notes</p>
                </div>
            </Link>
        </div >
    )
}

export default NavBar;