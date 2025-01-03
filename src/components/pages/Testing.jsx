import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'

const key =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Znd2eGZqdmhwaHRlZXp0d2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4Njc2NTUsImV4cCI6MjA1MTQ0MzY1NX0.iL1_XZ8BGSt1A00HkmU3sbuOp8tR6F5ZUFgt7Zx51Jk
`

const url = "https://dyfwvxfjvhphteeztwgj.supabase.co"

function Testing() {

    const [file, setFile] = useState(null)

    function handleUpload(){
        if(file==null){
            alert("Please select a file")
            return
        }
        console.log(file)

        const fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length-1]

        if(extension != "jpg" && extension !="png"){
            alert("Please select jpg or png file")
            return 
        }
    
        const supabase = createClient(url,key)

        supabase.storage.from("images").upload(file.name,file,{
            cacheControl : "3600",
            upsert : false
        }).then((res)=>{
            console.log(res)
        })

        const url2 = supabase.storage.from("images").getPublicUrl(file.name)

        console.log(url2)
        
    }
  return (
    <div>
        <h1>File Upload</h1>

        <input type="file" onChange={(e)=>{
            setFile(e.target.files[0])
        }}/>
        <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Testing