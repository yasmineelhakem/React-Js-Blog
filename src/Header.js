const Header = ({title}) => {

    return (
        <header className="Header">
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Js Blog'
}

export default Header