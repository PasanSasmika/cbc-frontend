import React, { useState } from 'react'
import uploadMediaToSupabase from '../../utils/mediaUpload'

function Testing() {

    const [file, setFile] = useState(null)

async function handleUpload(){

    uploadMediaToSupabase(file).then((url)=>{
        console.log(url)
    }).catch((err)=>{
        console.log(err)
    })
            
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