
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/actions";
import '../Bookmark/Bookmark.css';
import BookmarkList from './BookmarkList';
import Header from "../Header/Header";

function BookMark() {

    const dispatch = useDispatch();
    const clickButton = () => {
        dispatch(showModal({
            showModal: true,
            modalType: "addBookmark"
        }));
    }

    return (
        <div>
            <div className="bookmark-container">
                <Header title="Bookmarks" showButton={true} borderColor="violet" method={clickButton}></Header>
                {/* <div className="bookmark-header">
                    <div className="bookmark-title">
                        <span>Bookmarks</span>
                    </div>
                    <div className="bookmark-add">
                        <i onClick={() => dispatch(showModal({
                            showModal: true,
                            modalType: "addBookmark"
                        }))} className="bi bi-plus-square-fill bookmark-add"></i>
                    </div>

                </div> */}
                <BookmarkList></BookmarkList>

            </div>
        </div>
    )

}

export default BookMark;