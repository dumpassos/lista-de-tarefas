import { useState } from "react";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";


function App() {

  const [list, setList] = useState<Item[]>([]);

  const handleAddArea = (taskName: string)=>{

    let newList = [...list]; //Clone da lista

    newList.push({ //Adicionando item
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList); //Atualizando o clone na lista nova
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
      <div className="bg-teal-900 text-zinc-300 min-h-screen"> {/* Container */}
      <div className="m-auto max-w-4xl p-3"> {/* Area */}
      <h1 
      className="m-0 p-0 text-white text-center border-b
       border-gray-400 pb-5
      font-bold text-5xl">Lista de Tarefas</h1>


                <AddArea onEnter={handleAddArea}/>

                {list.map((item, index) => (
                  <ListItem key={index} item={item} onChange={handleTaskChange} />
                ))}

      </div> 
      </div>
      
  )
}

export default App
