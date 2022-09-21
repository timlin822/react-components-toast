import {useState,useEffect} from 'react';

import Toast from 'components/toast/Toast';

import './App.css';

function App() {
  const [toastIsOpen,setToastIsOpen]=useState(false);
  const toast={
    type: "warning",
    title: "Warning",
    message: "警告成功"
  };

  const toastOpenHandler=()=>{
    setToastIsOpen(true);
  };
  const toastCloseHandler=()=>{
    setToastIsOpen(false);
  };

  useEffect(()=>{
    const timeoutId=setTimeout(()=>{
      toastCloseHandler();
    },3000);

    return ()=>{
      clearTimeout(timeoutId);
    }
  },[toastIsOpen]);

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <button className="btn btn-warning" onClick={toastOpenHandler}>Warning</button>
        <Toast toastIsOpen={toastIsOpen} toast={toast} toastCloseHandler={toastCloseHandler} />
      </div>
    </section>
  );
}

export default App;