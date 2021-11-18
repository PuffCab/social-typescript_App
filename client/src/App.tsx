
import React, { useState } from 'react';
import './App.css';
import InputBar from './components/inputBar/InputBar';
import MenuList from './components/menuList/MenuList';
import { Menu } from './interfaces/interfaces';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';





const App: React.FC = () => {
  
  const [menu, setMenu] = useState<string>("")
  const [listMenus, setListMenus] = useState<Menu[]>([])
  const [readyMenus, setReadyMenus] = useState<Menu[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault() 
    
    if (menu) {

      setListMenus([...listMenus, { id: Date.now(), menu: menu, isBooked: false }])
      setMenu("")
    }
  }
  // console.log(listMenus)  

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId
      && destination.index === source.index) return;

    let add;
    let active = listMenus;
    let ready = readyMenus;
    
    //Source logic
    if (source.droppableId === "menuList") {
      add = active[source.index];
      active.splice(source.index, 1)
    } else {
      add = active[source.index];
      ready.splice(source.index, 1)
    }
    
    //Destination logic
    if (destination.droppableId === "menuList") {
      
      active.splice(destination.index, 0, add)
    } else {
      
      ready.splice(destination.index, 0, add)
    }

    setReadyMenus(ready);
    setListMenus(active)
    console.log(result)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>

    <div className="App">
      <span className="titleHeader">HomeChow</span>
      <InputBar
        menu={menu}
        setMenu={setMenu}
        handleAdd={handleAdd}
      />
      <MenuList
        listMenus={listMenus}
        setListMenus={setListMenus}
        readyMenus={readyMenus}
        setReadyMenus={setReadyMenus}
      />
      
     
    </div>
    </DragDropContext>
  );
}

export default App;
