const userInfo = ()=>{
    return(dispatch)=>{
        dispatch({ type: 'user1', payload:{email: 'siraj000ahmed@gmail.com', name: 'siraj ahmed'} })
    }
}

export  default userInfo