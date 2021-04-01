import React from 'react'








const Profile = ({fullName , bio , profession , children , alert}) => {
    return (
        <div>
     <h1>{fullName}</h1>
     <p>{bio}</p>

     <p>{profession}</p>

       {children}   
       <button onClick={()=>alert(fullName)} >
           click
       </button>
        </div>
    )
}

export default Profile