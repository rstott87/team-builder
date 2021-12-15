
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const arrayOfMembers=[]
function Form(props) {
  const [member, setMember] = useState({ name: " ", role: " "});

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });}
  
    const handleSubmit = event => {
    event.preventDefault()
    arrayOfMembers.push(member);
    props.setMemberList(arrayOfMembers);
  }

  return(
    <form onSubmit={event => handleSubmit(event)}>
      <label><div>This div is in FORM {props.members.name}</div>
        Name: 
        <input type="text"
                name="name" 
                onChange={event => handleChange(event)}  />
      </label>
      <button>Submit!</button>
      <label>
        Role:
        <input type="text" 
              name="role"
              onChange={event => handleChange(event)}   />
      </label> 
    </form>)
}

function App() {
  const [memberList, setMemberList] = useState({name: " ", role: " "})
  return (
    <div className="App">
      <div> Members:
      <div>Name: {memberList.name}</div>
      <div>Role: {memberList.role}</div>
      </div>
      <Form members ={memberList} setMemberList={setMemberList}/>
    </div>
  );
}
export default App;
