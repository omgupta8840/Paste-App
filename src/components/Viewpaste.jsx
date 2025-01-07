import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function Viewpaste() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const allpastes = useSelector((state) => state.paste.pastes);
  const { id: pasteId } = useParams();

  useEffect(() => {
    if (pasteId && allpastes?.length > 0) {
      const paste = allpastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      } else {
        console.warn("No paste found with the given ID");
      }
    }
  }, [pasteId, allpastes]);

  return (
    <div className="min-h-screen bg-grey-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {title || "Paste Title"}</h1>
        <p className="text-gray-600 text-lg whitespace-pre-wrap border-t pt-4">
          {value || "Paste content goes here..."}
        </p>
      </div>
    </div>
  );
}

export default Viewpaste;
