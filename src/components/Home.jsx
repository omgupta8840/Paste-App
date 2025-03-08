
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // Update existing paste
      dispatch(updateToPastes(paste));
    } else {
      // Create new paste
      dispatch(addToPastes(paste));
    }

    // Reset form fields and clear search params
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  useEffect(() => {
    if (pasteId) {
      const paste = allpastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      } else {
        console.warn('No paste found with the given ID');
      }
    }
  }, [pasteId]);

  return (
    <div className='flex flex-col items-center p-6 bg-gray-200 min-h-screen'>
      {/* Title Input and Button Section */}
      <div className='flex flex-row gap-4 justify-center w-full max-w-4xl mb-6'>
        <input
          className='p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow bg-white text-gray-800 placeholder-gray-500'
          type='text'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className='p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
          onClick={createPaste}
        >
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button>
      </div>

      {/* Textarea Section */}
      <div className='w-full max-w-4xl'>
        <textarea
          className='w-full p-4 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-gray-800 placeholder-gray-500'
          value={value}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
}

export default Home;

