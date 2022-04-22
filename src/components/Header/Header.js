import './Header.css';
const Header = (props) => {
    return (
        <>
            <div className="common-header" style={{ 'borderColor': props.borderColor }}>
                <div className="header-title">
                    <span>{props.title}</span>
                </div>
                {props.showButton &&
                    <div className="bookmark-add">
                        <i onClick={props.method} className="bi bi-plus-square-fill bookmark-add"></i>
                    </div>
                }
            </div>
        </>
    )
}

export default Header;
