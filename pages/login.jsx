import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
    const {data: session} = useSession()
    console.log(session);
  if (session) {
    return (
        <div>
            <p>Welcome, {session.user.email}</p>
            <img src={session.user.image} alt='error1' referrerPolicy="no-referrer" ></img>
            <button onClick={()=> signOut()} >Sign out</button>
        </div>
    )
  } else {
    return (
        <div className='container'>
            <p>You are not signed in.</p>
            <button className="login" onClick={()=> signIn()} >Sign in</button>
            <a href="/"><button className="back">Back Home</button></a>    
        </div>
    )
  }
}

export default login

// Test