// pages/write-entry.tsx
"use client"; // This is a client component

import React, { useState } from 'react'

const WriteEntry: React.FC = () => {

    const [entry, setEntry] = useState<string>('');  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
  
      const response = await fetch('http://localhost:3000/comments', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: entry }),
      });
  
      if (response.ok) {
        alert('Entry saved successfully!');
      } else {
        alert('Error saving entry');
      }
      setEntry('');
    };

  return (

    <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Write Your Daily Entry</h1>
        <form onSubmit={handleSubmit}>
            <textarea
            className="border border-gray-300 rounded-md p-2 w-full h-40"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write your daily entry here..."
            />
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
            >
            Submit
            </button>
        </form>
        </div>);
};

export default WriteEntry;