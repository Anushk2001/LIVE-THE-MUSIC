import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__Header">
                <div className="search">
                    <SearchIcon className="search__Icon"/>
                    <input 
                        type="text"
                        id="filterInput"
                        placeholder="search"
                    />
                </div>
                <div className="greeting">
                    Good Evening
                </div>
            </div>
            <div className="home__Middle">
                It Will Contain Grids
            </div>
        </div>
    )
}

export default Home;
