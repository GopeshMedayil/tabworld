
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
function BookMark() {

    const dispatch = useDispatch();
    return (
        <div>
            Bookmark
            <button onClick={() => dispatch(showModal({
                showModal: true,
                modalType: "addBookmark"
            }))}>Add Bookmark</button>

        </div>
    )

}

export default BookMark;