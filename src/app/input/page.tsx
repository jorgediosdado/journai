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
    <div>
      <h1>Write Your Daily Entry</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          rows={5}
          cols={50}
          placeholder="Write your daily entry here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WriteEntry;