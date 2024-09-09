import React, { useState } from 'react';
import { marked } from 'marked';


const Editor = () => {
  const [text, setText] = useState('');

  const renderMarkdown = () => {
    const html = marked(text);
    return { __html: html };
  };

  return (
    <div className="editor-container">
      <div className="textarea-container">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu texto aquí..."
        />
      </div>
      <div
        className="result-container"
        dangerouslySetInnerHTML={renderMarkdown()}
      />
    </div>
  );
};

export default Editor;
