
import './Header.css';
const Header = (props) => {
    return (
        <>
            {/* <h3>{props.title}</h3> */}
            <div className="common-header" style={{ 'borderColor': 'red' }}>
                <div className="header-title">
                    <span>{props.title}</span>
                </div>
                <div className="bookmark-add">
                    {/* <i onClick={() => dispatch(showModal({
                        showModal: true,
                        modalType: "addBookmark"
                    }))} className="bi bi-plus-square-fill bookmark-add"></i> */}
                </div>

            </div>
        </>
    )
}

export default Header;