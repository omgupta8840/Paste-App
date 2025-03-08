
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { removeFromPastes } from '../redux/pasteSlice';
import { Link } from 'react-router-dom';
import ShareButtons from './ShareButtons';

function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    toast.success('Paste deleted successfully');
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {/* Search Input */}
      <input
        className="p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full max-w-3xl mb-6 bg-white text-gray-800 placeholder-gray-500"
        type="search"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Paste List */}
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              {/* Paste Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {paste.title}
              </h2>

              {/* Paste Content */}
              <p className="text-gray-600 text-lg whitespace-pre-wrap mb-6">
                {paste.content}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row gap-4 justify-end">
                {/* Edit Button */}
                <Link
                  to={`/?pasteId=${paste._id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Edit
                </Link>

                {/* View Button */}
                <Link
                  to={`/pastes/${paste._id}`}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  View
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(paste._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Delete
                </button>

                {/* Copy Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success('Copied to clipboard');
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Copy
                </button>

                {/* Share Button */}
                <ShareButtons text={paste.content} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center">
            No pastes found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Paste;
