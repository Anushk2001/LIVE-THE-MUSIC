import React from 'react';
import "./Header.css"
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Login from '../Login/Login';

function Header() {
    return (
        <div className="header">
            <div className="header__Name">
                <Button>
                    ᗩȠuടℌⓚ
                    {/* <AppsIcon/> */}
                </Button>
            </div>
            <div className="header__Icon">
                <Button>
                    <AppsIcon/>
                </Button>
                <Button>
                    <FavoriteIcon/>
                </Button>
                <Button>
                     <PlaylistAddIcon/>
                </Button> 
            </div>
            <div className="header__Auth">
               <Login/>
            </div>
        </div>
    )
}

export default Header;
