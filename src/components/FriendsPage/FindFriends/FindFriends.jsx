import { useState } from "react";
import serachData from '../../../dummyData/friends.json'
import './FindFriends.css'
import loaderLink from '/assets/loader.gif'

function Search(){
    const [serachResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [querry, setQuerry] = useState("");

    function handleSearch(){
        console.log(querry);
        setIsLoading(true);
        setTimeout(()=>{
            setSearchResult(serachData);
            setIsLoading(false);
        }, 500);
    }

    return(
        <>
        <div className="search-container">
            <h1>Search People Worldwide</h1>
            <div className="search">
                <input
                    value={querry}
                    onChange={(e)=>setQuerry(e.target.value)}
                    type="text"
                    placeholder="search users by id"
                />
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>

            
            {
            isLoading ?
                <img className="loader-img" src={loaderLink} width="200px" alt="loading"/>:
                <ResultDiv serachResult={serachResult}/>
            }
        </div>
        </>
    )
}




function ResultDiv({serachResult}){
    
    return(
        <>
            <div className="profiles">
                {serachResult.map((profile, i) => {
                    return ( 
                        <div key={i} className="profile">
                            <img src={profile.profileImage} alt="" width="50px" />
                            <div className="middle">
                                <div className="upper">
                                    <h3>{profile.username}</h3>
                                </div>
                                <div className="lower">
                                    <p>level : {profile.level}</p>|
                                    <p>{profile.location}</p>|
                                    <p>{profile.bio}</p>
                                </div>
                            </div>
                            <div className="right">
                                <button 
                                    onClick={()=>{alert(`request sent to ${profile.username}`)}}
                                >
                                    Send Request
                                </button>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </>
    )
}

export default Search;