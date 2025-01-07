import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { removeFromPastes } from '../redux/pasteSlice';
import { Link } from 'react-router-dom';
import ShareButtons from './ShareButtons';

function Paste() {

  const pastes=useSelector((state)=> state.paste.pastes);
  const [searchTerm,setSearchTerm]= useState('');
  const dispatch =useDispatch();

  const filteredData=pastes.filter(
    (paste)=> paste.title.toLowerCase().includes
    (searchTerm.toLowerCase()));

    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId))
    }

  return (
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-5'
     type='search'
     placeholder='search here'
     value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.valuehTerm)} />
    <div className='flex flex-col gap-5 mt-5'>
      {
       filteredData.length>0 && 
       filteredData.map(
        (paste)=>{
          return(
            <div className='border' key={paste?._id} >
              <div>
                {paste.title}
              </div>
              <div>
                {paste.content}
              </div>
              <div className='flex flex-row gap-4 place-content-evenly'>
                <button>

                  <Link to={`/?pasteId=${paste?._id}`}>
                  Edit
                  </Link>
                </button>
                <button>
                   <Link  to={`/pastes/${paste?._id}`}>
                   View
                   </Link>
                  
                </button>
                <button onClick={()=> handleDelete(paste?._id)}>
                  Delete
                </button>
                <button onClick={()=>{
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("Copied to clipboard")
                }}>
                  copy
                </button>
                {/* <button>
                  Share
                </button> */}


<ShareButtons text={paste.content}   />


                
              </div>
            </div>
          )
        }
       )
      }

    </div>
    </div>

  )
}

export default Paste
