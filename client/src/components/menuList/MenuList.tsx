import React from 'react'
import { Menu } from '../../interfaces/interfaces';
import ElementMenuList from '../elementMenuList/ElementMenuList';
import "./menuList.css"
import "../styles.css"


interface Props {
    listMenus: Menu[];
    setListMenus: React.Dispatch<React.SetStateAction<Menu[]>>
}

const MenuList:React.FC<Props>  = ({listMenus, setListMenus}) => {
    return (
        <div className="menuList">
            {
                listMenus.map(oneMenu => (
                 
                    <ElementMenuList
                        oneMenu={oneMenu}
                        key={oneMenu.id}
                        listMenus={listMenus}
                        setListMenus={setListMenus}
                    />
              ))      
            }
        </div>
    )
}

export default MenuList;
