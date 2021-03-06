import React, { useEffect, useRef, useState } from 'react'
import { Menu } from '../../interfaces/interfaces'
import { MdDelete, MdDone, MdEditNote } from 'react-icons/md'
import "./elementMenuList.css"
import "../styles.css"
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    index: number;
    oneMenu: Menu;
    listMenus: Array<Menu>;
    setListMenus: React.Dispatch<React.SetStateAction<Array<Menu>>>;


}

const ElementMenuList = ({ index, oneMenu, listMenus, setListMenus }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editOneMenu, setEditOneMenu] = useState<string>(oneMenu.menu)
    
    const handleDone = (id: number) => {
        setListMenus(
            listMenus.map((oneMenu) => oneMenu.id === id ? { ...oneMenu, isBooked: !oneMenu.isBooked } : oneMenu
            )
        );
    }

    const handleDelete = (id: number) => {
        setListMenus(listMenus.filter((oneMenu) => oneMenu.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        console.log(listMenus)
        e.preventDefault();
        setListMenus(listMenus.map((oneMenu) => (
            oneMenu.id === id ? { ...oneMenu, oneMenu: editOneMenu } : oneMenu
        )) 
        );
        setEdit(false)
        console.log(listMenus)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <Draggable draggableId={oneMenu.id.toString()} index={index}>

            {
                (provided, snapshot) => (
                    <form className={`menu__element ${snapshot.isDragging ? 'drag' : ""}`}
                        
                        onSubmit={(e) => handleEdit(e, oneMenu.id)}
                    
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        
                        { 
                            edit ? (
                                <input
                                    ref={inputRef}
                                    value={editOneMenu}
                                    onChange={(e) => setEditOneMenu(e.target.value)}
                                    className = "menu__element--text"
                                    type="text"
                                />
                            ) :   oneMenu.isBooked ? (
                                        <s className="menu__element--text">
                                        {oneMenu.menu}
                                    </s>
                                    ): (
                                            
                                    <span className="menu__element--text">
                                        {oneMenu.menu}
                                    </span>
                                    )}
                        <div>
                            <span
                                className="icon"
                                onClick={() => { 
                                if (!edit && !oneMenu.isBooked) {
                                    setEdit(!edit);
                                    }
                                }}
                            >
                                <MdEditNote/>
                            </span>
                            <span className="icon" onClick={() => handleDelete(oneMenu.id)}>
                                <MdDelete/>
                            </span>
                            <span className="icon" onClick={() => handleDone(oneMenu.id)}>
                                <MdDone/>
                            </span>
                        </div>
                    </form>
                )
            }

        </Draggable>
    )

    
}

export default ElementMenuList
