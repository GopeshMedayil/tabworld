import './Bookmark.css';
import { useSelector } from 'react-redux';

function BookmarkList() {

    const deleteBookmark = () => {
        console.log('deleteBookmark');
    }
    const bookmarks = useSelector(state => state.bookmark.bookmarks);
    console.log("Bookmark list", bookmarks);
    return (
        <div className="bookmark-list">
            {bookmarks && bookmarks.map(bookmark => (
                <div key={bookmark.id} className="bookmark-item">
                    <div>
                        <i className="bi bi-x-lg float-end px-2" onClick={deleteBookmark}></i>
                    </div>

                    <div className="item-warpper">
                        <div className="initial-letter">{bookmark.name.charAt(0)}</div>
                        <div className="item-link"><a href={bookmark.url} target="blank">{bookmark.name}</a></div>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default BookmarkList;