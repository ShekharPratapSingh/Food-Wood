import React, { useState,useEffect } from 'react'
function useNetconnection() {

    const[onlineStatus,setOnlineStatus]=useState(true)


    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })

    },[])

  return onlineStatus
}

export default useNetconnection