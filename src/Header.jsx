import './Header.css'

function Header() {
    return (
        <>
            <div className="main-header">
                <div className="spotify-navbar">
                    <div className="spotify-logo">
                        <img src=".\src\assets\Spotify_Primary_Logo_RGB_White.png" alt="spotify-logo"
                            style={{ width: "40px", height: "40px", margin: "8px" }} />
                    </div>
                    <div className="home-icon border">
                        <i className="fa-solid fa-house"
                            style={{
                                color: "#ffffff",
                                backgroundColor: "rgb(82, 82, 82)",
                                width: "30px",
                                height: "30px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                margin: "8px",
                                padding: "3px"
                            }}></i>
                    </div>
                    <div className="search-bar">
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "#4a4a4a" }}></i>
                        <input type="search" id="search" name="search" placeholder="What do you want to play?" />
                        <i className="fa-solid fa-window-restore" style={{ color: "#707070" }}></i>
                    </div>
                </div>
                <div className="spotify-elements">
                    <p className="border">Premium</p>
                    <p className="border">Support</p>
                    <p className="border">Download</p>
                </div>
                <div className="log-in-section">
                    <i className="fa-solid fa-arrow-down border"
                        style={{
                            color: "#575757",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%",
                            border: "2px solid white",
                            marginTop: "10px"
                        }}></i>
                    <p className="border">Install App</p>
                    <p className="border">Sign up</p>
                    <button className="login-btn border">Log in</button>
                </div>
            </div>
        </>
    );
}

export default Header;
