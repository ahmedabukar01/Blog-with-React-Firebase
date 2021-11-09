const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
                MIniBlog
            </div>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/posts">Posts</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Header;