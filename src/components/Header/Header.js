import React from 'react';
import "./Header.css"
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

function Header() {
    return (
        <div className="header">
            <div className="header__Name">
                <Button>
                    Music
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
                <Button variant="contained" size="small" color="primary">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Header;
