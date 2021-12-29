
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/actions";
import '../Bookmark/Bookmark.css';
function BookMark() {

    const dispatch = useDispatch();
    return (
        <div>
            <div className="bookmark-container">
                <div className="bookmark-text text-center">
                    <h4 className=" text-muted p-2">Bookmark the links !!</h4>
                </div>
                <div className="p-2">
                    <i onClick={() => dispatch(showModal({
                        showModal: true,
                        modalType: "addBookmark"
                    }))} className="bi bi-plus-square-fill bookmark-add"></i>

                </div>

            </div>
        </div>
    )

}

export default BookMark;