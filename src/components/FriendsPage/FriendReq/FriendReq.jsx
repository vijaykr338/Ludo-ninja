import { useEffect, useState } from "react";
import requestData from '../../../dummyData/friends.json'
import '../FindFriends/FindFriends.css'
import loaderLink from '/assets/loader.gif'

function Requests(){
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    


    useEffect(()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setRequests(requestData);
            setIsLoading(false);
        }, 500);
    }, []);

    return(
        <>
        <div className="search-container">
            <h1>Friend Requests</h1>
            
            {
            isLoading ?
                <img className="loader-img" src={loaderLink} width="200px" alt="loading"/>:
                <Profiles requests={requests}/>
            }
        </div>
        </>
    )
}




function Profiles({requests}){
    return(
        <>
            <div className="profiles">
                {requests.map((profile, i) => {
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
                                    className="accept-btn" 
                                    onClick={()=>alert(`accepted friend request of ${profile.username}`)}
                                >Accept</button>

                                <button 
                                    className="reject-btn"
                                    onClick={()=>alert(`rejected friend request of ${profile.username}`)}
                                >Reject</button>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </>
    )
}

export default Requests;