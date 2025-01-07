import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {

  const [title, setTitle] = useState("");
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allpastes=useSelector((state)=>state.paste.pastes);

  

  function cretePaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),

    }

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));

    }
    else {
      //create
      dispatch(addToPastes(paste));
    }
    //after creation and updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  useEffect(() => {
        console.log('inside ');
        if (pasteId) {
          const paste = allpastes.find((p) => p._id === pasteId);
    
          if (paste) {
            console.log('Paste found');
            setTitle(paste.title); // Safely update the title
            setValue(paste.content); // Safely update the content
          } else {
            console.warn('No paste found with the given ID');
          }
        }
      }, [pasteId]);

  return (
    <div >
      <div className='flex flex-row gap-6 justify-center ' >
        <input
          className='p-2 border-solid border-2  border-grey-500  rounded-2xl mt-2'
          type='text'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className='p-2 border-solid border-2  border-grey-500  rounded-2xl mt-2'
          onClick={cretePaste}
        >
          {
            pasteId ? "update My Paste" : "Create My paste"
          }
        </button>
      </div>
      <div className='mt-5'>
        <textarea
          className=' border-solid border-2  border-black-1000  rounded-2xl mt-4 min-w-[500px] p-3 '
          value={value}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  )
}

export default Home





//  import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';

// function Home() {
//   const [title, setTitle] = useState('');
//   const [value, setValue] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const pasteId = searchParams.get('pasteId');
//   const dispatch = useDispatch();
//   const allpastes = useSelector((state) => state.paste.pastes);

//   function cretePaste() {
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteId || Date.now().toString(36),
//       createdAt: new Date().toISOString(),
//     };

//     if (pasteId) {
//       // Update existing paste
//       dispatch(updateToPastes(paste));
//     } else {
//       // Create a new paste
//       dispatch(addToPastes(paste));
//     }

//     // Reset input fields and query params after creation/updation
//     setTitle('');
//     setValue('');
//     setSearchParams({});
//   }

//   useEffect(() => {
//     console.log('inside useEffect');
//     if (pasteId) {
//       const paste = allpastes.find((p) => p._id === pasteId);

//       if (paste) {
//         console.log('Paste found');
//         setTitle(paste.title); // Safely update the title
//         setValue(paste.content); // Safely update the content
//       } else {
//         console.warn('No paste found with the given ID');
//       }
//     }
//   }, [pasteId]); // Include `allpastes` in dependencies to ensure updates

//   return (
//     <div>
//       <div className="flex flex-row gap-6 justify-center">
//         <input
//           className="p-2 border-solid border-2 border-grey-500 rounded-2xl mt-2"
//           type="text"
//           placeholder="Enter Title Here"
//           value={title} // Fixed typo (was 'valur')
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button
//           className="p-2 border-solid border-2 border-grey-500 rounded-2xl mt-2"
//           onClick={cretePaste}
//         >
//           {pasteId ? 'Update My Paste' : 'Create My Paste'}
//         </button>
//       </div>
//       <div className="mt-5">
//         <textarea
//           className="border-solid border-2 border-black-1000 rounded-2xl mt-4 min-w-[500px] p-3"
//           value={value}
//           placeholder="Enter content here"
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//         ></textarea>
//       </div>
//     </div>
//   );
// }

// export default Home;

