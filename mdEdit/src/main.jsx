import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Editor from './editor.jsx'
import './editor.css'
import './index.css'

const Main = () => {
  return (
    <>
      <Editor />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
