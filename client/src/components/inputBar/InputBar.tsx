import React, { useRef } from 'react'
import "../styles.css"
import "./inputBar.css"


interface Props {
  menu: string;
    setMenu: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// we use BEM convention for classes
const InputBar: React.FC<Props> = ({menu, setMenu, handleAdd}) => {
    
    const inputRef = useRef<HTMLInputElement>(null); // to get rid of the shadow/blur after pressing Enter in input
    
    return <form className='input' onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
        <input 
            ref={inputRef}
            type='input'
            value={menu}
            onChange={
                (e) => setMenu(e.target.value)
            }
            placeholder="What are you cooking?" className="input__box" />
        <button className="input_submit" type="submit">
            ready!
        </button>
    </form>;
};

export default InputBar
