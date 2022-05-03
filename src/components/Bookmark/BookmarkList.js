import './Bookmark.css';
import { useSelector } from 'react-redux';

function BookmarkList() {

    const bookmarks = useSelector(state => state.bookmark.bookmarks);
    const deleteBookmark = () => {
        console.log('deleteBookmark');
    };

    const bookmarkList = () => {
        return bookmarks.map(bookmark => (
            <div key={bookmark.id} className="bookmark-item">
                <div>
                    <i className="bi bi-x-lg float-end px-2" onClick={deleteBookmark}></i>
                </div>

                <div className="item-warpper">
                    <div className="initial-letter">{bookmark.name.charAt(0)}</div>
                    <div className="item-link"><a href={bookmark.url} target="blank">{bookmark.name}</a></div>
                </div>
            </div>
        ))
    };

    const bookmarkEmptyList = () => {
        return (
            <div className="empty-list">
                No bookmark found !!
            </div>
        )

    };

    console.log("Bookmark list", bookmarks);
    return (
        <div className="bookmark-list">
            {bookmarks.length > 0 ? bookmarkList() : bookmarkEmptyList()}

        </div>
    )

}

export default BookmarkList;