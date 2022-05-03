import './Bookmark.css';
import { useDispatch, useSelector } from 'react-redux';

function BookmarkList() {

    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmark.bookmarks);

    /**
     * Methos to remove bookmark
     * @param {*} bookMarkId 
     */
    const deleteBookmark = (event, bookMarkId) => {
        console.log('deleteBookmark');
        event.preventDefault();
        dispatch({
            type: 'DELETE_BOOKMARK',
            payload: {
                id: bookMarkId
            }

        });

    };

    /**
     * Method to display bookmarks
     * @returns HTML ELEMENT for bookmark
     */

    const bookmarkList = () => {

        return bookmarks.map(bookmark => (
            <div key={bookmark.id} className="bookmark-item">
                <a href={bookmark.url} target="blank">
                    <div>
                        <i className="bi bi-x-lg float-end px-2" onClick={(e) => deleteBookmark(e, bookmark.id)}></i>
                    </div>

                    <div className="item-warpper">
                        <div className="initial-letter">{bookmark.name.charAt(0)}</div>
                        <div className="item-link">{bookmark.name}</div>
                    </div>
                </a>

            </div>
        ));
    };
    /**
     * Method for empty bookmark list
     * @returns HTML element for empty bookmark list
     */
    const bookmarkEmptyList = () => {
        return (
            <div className="empty-list">
                No bookmark found !!
            </div>
        );
    };

    return (
        <div className="bookmark-list">
            {bookmarks.length > 0 ? bookmarkList() : bookmarkEmptyList()}

        </div>
    )

}

export default BookmarkList;