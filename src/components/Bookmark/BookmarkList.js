import './Bookmark.css';

function BookmarkList() {
    return (
        <div className="bookmark-list">
            <div class="bookmark-item">
                <div>
                    <i class="bi bi-x-lg float-end px-2"></i>
                </div>

                <div className="item-warpper">
                    <div className="initial-letter">G</div>
                    <div className="item-link">Google</div>
                </div>
            </div>
            <div class="bookmark-item">
                <div className="item-warpper">
                    <div className="initial-letter">G</div>
                    <div className="item-link">Google</div>
                </div>
            </div>
            <div class="bookmark-item">
                <div className="item-warpper">
                    <div className="initial-letter">G</div>
                    <div className="item-link">Google</div>
                </div>
            </div>
            <div class="bookmark-item">
                <div className="item-warpper">
                    <div className="initial-letter">G</div>
                    <div className="item-link">Google</div>
                </div>
            </div>
            <div class="bookmark-item">
                <div className="item-warpper">
                    <div className="initial-letter">G</div>
                    <div className="item-link">Google</div>
                </div>
            </div>
        </div>
    )

}

export default BookmarkList;