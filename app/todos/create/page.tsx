"use client";
import { Todo, initialInputState, todoFormState, todoListState, } from "@/Atoms/userState";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidv4} from "uuid";


const CreateTodo: React.FC = () =>{

  const [formState, setFormState] =useRecoilState(todoFormState);
  const setTodos = useSetRecoilState(todoListState);
  const currentTodos = useRecoilValue(todoListState);
  const router = useRouter();

  useEffect(() =>{
    setFormState(initialInputState);
  },[setFormState])

  const handleCreate = () =>{
    const newTodo:Todo ={
      id:uuidv4(),
      title:formState.title,
      content:formState.content,
      status: formState.status
    };
    
    const updateTodos = [...currentTodos, newTodo]
    setTodos(updateTodos);
    router.push("/todos");
  };

  return(
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
     <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl">
      <h1 className="font-bold text-2xl mb-4">新規TODO作成</h1>
      
      <div className="mb-4">
        <label className="block mb-2">タイトル</label>
        <input 
          type="text"
          className="w-full border rounded p-2"
          value={formState.title}
          onChange={e =>setFormState(prev =>({...prev, title:e.target.value}))}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">内容</label>
        <textarea 
          className="w-full border rounded p-2"
          value={formState.content}
          onChange={e =>setFormState(prev =>({...prev, content:e.target.value}))}
          ></textarea>
      </div>

      <div>
        <label>ステータス</label>
        <select 
          className="w-full border p-2"
          value={formState.status}
          onChange={e => setFormState(prev =>({...prev, status:e.target.value as "Completed" | "Uncompleted"}))}
          >
          <option value="Uncompleted">未完了</option>
          <option value="Completed">完了</option>
        </select>
      </div>

      <button 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mt-4"
        onClick={handleCreate}
        >
          作成
        </button>
     </div>
    </div>
  )
};

export default CreateTodo;


