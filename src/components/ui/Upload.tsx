"use client";
import { Inbox } from 'lucide-react';
import React from 'react'
import {useDropzone} from "react-dropzone"

const  Upload = () => {


    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
         console.log(acceptedFiles);
        
          }
        })
          return (
    <div className=' p-2 bg-white rounded-xl'>
         <div {...getRootProps({className:'border-dashed border-2 rounded-xl cursor-pointer  bg-gray-50 py-8 flex justify-center items-center flex-col'})} >
         <input  {...getInputProps()} />
        <>
        <Inbox className=''/>
        
        </>
         </div>
    </div> 
  )
}

export default Upload