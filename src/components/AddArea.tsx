import { useState, KeyboardEvent } from "react"

type Props = {
    onEnter: (taskName: string)=> void //AQUI
}

export const AddArea = ({onEnter}: Props)=>{ //AQUI
    
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent)=>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText); //AQUI
            setInputText('');
        }
    }

    return (
        <div className="border-2 rounded-2xl p-3 my-5 border-gray-400
                        flex items-center"> {/*Container*/ }
            <div className="mr-2"> ✚ </div>
            <input 
            type="text" 
            placeholder="Adicione uma tarefa e aperte 'Enter'..."
            className="border-none bg-transparent outline-none text-white text-xl flex-1"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </div>
    )
}