
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/actions";
import '../Bookmark/Bookmark.css';
function BookMark() {

    const dispatch = useDispatch();
    return (
        <div>
            <div className="bookmark-container">
                <div className="bookmark-header">
                    <div className="bookmark-title">
                        <span>Bookmarks</span>
                    </div>
                    <div className="bookmark-add">
                        <i onClick={() => dispatch(showModal({
                            showModal: true,
                            modalType: "addBookmark"
                        }))} className="bi bi-plus-square-fill bookmark-add"></i>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6">
                            <h3>Bookmarks</h3>
                        </div>

                        <div className="col-md-6">
                            <i onClick={() => dispatch(showModal({
                                showModal: true,
                                modalType: "addBookmark"
                            }))} className="bi bi-plus-square-fill bookmark-add"></i>                        </div>
                    </div> */}
                </div>
                {/* <div className="bookmark-text text-center">
                    <div className=" text-muted p-2 m-2 text-reset fw-bold">Bookmark your links !!</div>                </div>
                <div className="p-2">
                    <i onClick={() => dispatch(showModal({
                        showModal: true,
                        modalType: "addBookmark"
                    }))} className="bi bi-plus-square-fill bookmark-add"></i>

                </div> */}

            </div>
        </div>
    )

}

export default BookMark;