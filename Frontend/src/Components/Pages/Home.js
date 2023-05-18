import React, { useState } from 'react';
import Admin from './Admin/Admin';
import User from './User/User';
import Login from './Login/Login';
import Owner from './Owner/Owner';

const Home = () => {    
    const [username, setUsername] = useState('none');
    const [check,setCheck]=useState('none')
    const handleButton=(e)=>{
        setUsername(e.target.value);
    }
    const handleEnter =()=>{
        setCheck(username)
    }
    return (check=='none' ?
        ( <>
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h4 className="mainLabel">LOGIN Basic</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Username"                
                        onChange={handleButton.bind(this)}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Password"                       
                                               
                    />
                    <button  type='button' className="btn joinBtn" onClick={(e)=>{handleEnter()}}>
                        Enter
                    </button>
                   
                </div>
            </div>
        </div>
        </>): check=='admin' ? (
           <Admin/> 
        ): check=='login' ? (
            <Login/>
        ):check=='user'?(
            <User/>
        ):check=='owner' && (
            <Owner/>
        )
    );
};

export default Home;