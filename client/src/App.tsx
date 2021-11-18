
import React, { useState } from 'react';
import './App.css';
import InputBar from './components/inputBar/InputBar';
import MenuList from './components/menuList/MenuList';
import { Menu } from './interfaces/interfaces';





const App: React.FC = () => {
  
  const [menu, setMenu] = useState<string>("")
  const [listMenus, setListMenus] = useState<Menu[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault() 
    
    if (menu) {

      setListMenus([...listMenus, { id: Date.now(), menu: menu, isBooked: false }])
      setMenu("")
    }
  }
  console.log(listMenus)
  return (
    <div className="App">
      <span className="titleHeader">HomeChow</span>
      <InputBar menu={menu} setMenu={setMenu} handleAdd={handleAdd} />
      <MenuList listMenus={listMenus} setListMenus={setListMenus }/>
     
    </div>
  );
}

export default App;
