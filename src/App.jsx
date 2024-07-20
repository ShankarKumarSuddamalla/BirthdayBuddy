import React from "react";
import { useState,useEffect } from "react";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import './index.css'
const App=()=>{
  const [friends,setFriends]=useState([]);

  useEffect(()=>{
    const storedFriends=JSON.parse(localStorage.getItem('friends'));
    if(storedFriends){
      setFriends(storedFriends);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('friends',JSON.stringify(friends));
  },[friends]);

  useEffect(()=>{
    const checkBirthdays=()=>{
      const today=new Date().toISOString().slice(0,10);
      friends.forEach(friend=>{
        if(friend.birthday===today){
          alert(`It's ${friend.name}'s birthday today!`);
        }
      });
    };

    const intervalId=setInterval(checkBirthdays,86400000);
    return ()=>clearInterval(intervalId);
  },[friends]);


  const addFriend=(friend)=>{
    setFriends([...friends,friend]);
  };
  return(
    <div className="app-container">
      <h1>Birthday Reminder</h1>
      <FriendForm addFriend={addFriend} />
      <FriendList friends={friends} />
    </div>
  );
};


export default App;