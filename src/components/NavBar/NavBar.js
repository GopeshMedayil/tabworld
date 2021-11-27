/**
 * vertical icon bar
 * @returns 
 */

import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar-vertical">
            <div className="navbar-item ">
                <a className="active" href="#">
                    <i class="bi bi-check2-square"></i>
                </a>
                <p>Todo</p>
            </div>

            <div className="navbar-item border  nav-bookmark">
                <a className="active" href="#">
                    <i class="bi bi-bookmarks"></i>
                </a>
                <p>Bookmark</p>
            </div>
            <div className="navbar-item  nav-notes">
                <a className="active" href="#">
                    <i class="bi bi-stickies"></i>
                </a>
                <p>Notes</p>
            </div>

        </div >
    )
}

export default NavBar;