import React, { useState } from 'react';

function ParagraphWordCounter() {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const ParagraphWordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
      />
      <p>ParagraphWordCount: {ParagraphWordCount}</p>
    </div>
  );
}

export default ParagraphWordCounter;