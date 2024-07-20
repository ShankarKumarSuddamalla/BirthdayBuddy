import React from 'react'
import { useState } from 'react'
const FriendForm = ({ addFriend }) => {
  const [name,setName] =useState('');
  const [birthday,setBirthday] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    addFriend({name,birthday});
    setName('');
    setBirthday('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div>
        <label>Birthday:</label>
        <input type='date' value={birthday} onChange={(e)=>setBirthday(e.target.value)} required/>
      </div>
      <button type='submit'>Add Friend</button>
    </form>
  );
};

export default FriendForm;
