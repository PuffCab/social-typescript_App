import React from 'react'
import { Menu } from '../../interfaces/interfaces';
import ElementMenuList from '../elementMenuList/ElementMenuList';
import "./menuList.css"
import "../styles.css"
import { Droppable } from 'react-beautiful-dnd';


interface Props {
    listMenus: Array<Menu>;
    setListMenus: React.Dispatch<React.SetStateAction<Array<Menu>>>;
    readyMenus: Array<Menu>;
    setReadyMenus: React.Dispatch<React.SetStateAction<Array<Menu>>>;
}

const MenuList:React.FC<Props>  = ({listMenus, setListMenus, readyMenus, setReadyMenus}) => {
    return (
       
        <div className="container__menuList">
            <Droppable droppableId="menuList">  

                {(provided, snapshot) => (

                <div className={`menuLists ${snapshot.isDraggingOver ? 'dragactive' : ""}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                <span className="menuLists__heading">
                    Wanna cook
                </span>
               {
                    listMenus.map((oneMenu, index) => (
                    
                        <ElementMenuList
                            index = {index}
                            oneMenu = {oneMenu}
                            key = {oneMenu.id}
                            listMenus = {listMenus}
                            setListMenus = {setListMenus}
                        />
                    ))      
                }
                            
                 {provided.placeholder}
            
            </div>
            
                )}
            </Droppable>

            <Droppable droppableId="menuListReady" >

                {(provided, snapshot) => (

                        <div className={`menuLists ready ${snapshot.isDraggingOver ? 'dragready' : ""}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                <span className="menuLists__heading">
                    Monday
                </span>
               {
                    readyMenus.map((oneMenu, index) => (
                    
                        <ElementMenuList
                            index={index}
                            oneMenu={oneMenu}
                            key={oneMenu.id}
                            listMenus={readyMenus}
                            setListMenus={setReadyMenus}
                        />
                    ))      
                }
                {provided.placeholder}
            </div> 
                    
                )}                
            </Droppable>
        </div>
    )
}

export default MenuList;
