import React from "react";


const FriendList=({friends,deleteFriend})=>{
    return(
        <div className="friend-list">
            <h2>Friend's Birthdays</h2>
        <ul>
            {friends.map((friend,index)=>(
                <li key={index}>
                    {friend.name} - {new Date(friend.birthday).toLocaleDateString()}
                    <button onClick={() => deleteFriend(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    )
}
export default FriendList