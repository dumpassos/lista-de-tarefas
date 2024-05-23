import { useState } from "react";
import { Item } from "../types/item"

type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item, onChange}: Props)=>{
    
    return (
        <div className="font-medium text-2xl bg-teal-800 flex
                        rounded-xl items-center p-3 mb-3"> {/*Container*/}
            <input type="checkbox" className="w-6 h-6 mr-2" 
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            
            />
            <label className={`text-white ${item.done ? 'line-through' : 'no-underline'}`}>
                {item.name}</label>
        </div>
    )
}