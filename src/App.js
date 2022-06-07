import './App.css';
import { TextComponent } from './Components/TextComponent';
import { ListComponent } from './Components/ListComponent';
import { useState } from 'react';

function App() {

  const [reloadList, setreloadList ] =useState()

  const reload =()=>{
    setreloadList(!reloadList)
  }

  return (
    <div className="App">
      <div className="header">
        <TextComponent reload={reload}></TextComponent>
      </div>
      <div className="content">
        <ListComponent reloadList={reloadList}></ListComponent>
      </div>
    </div>
  );
}

export default App;
