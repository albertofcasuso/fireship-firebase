import { SignInWithPopup,SignOut } from "../lib/firebase"
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Enter({}) {
  const{user,username} = useContext(UserContext)
  
  return (
    <main>
    {user ? 
      !username ? <UsernameForm /> : <SignOutButton /> 
      : 
      <SignInButton />
    }
  </main>
  )
}

function SignInButton(){
  const signInWithGoogle = async () =>{
    await SignInWithPopup()
  }
  return(
    <button className="btn-google" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}


function SignOutButton(){
  return(
    <button className="btn-google" onClick={SignOut}>
      Sign Out
    </button>
  )
}

function UsernameForm() {
  return null;
}