"use client";

import { currentTodoState, todoListState } from '@/Atoms/userState';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Detail:React.FC = () => {
  const router = useRouter();
  const currentTodo = useRecoilValue(currentTodoState);
  const setTodos = useSetRecoilState(todoListState);

  

  const handleEdit = () =>{
    if(currentTodo){
      router.push(`/todos/${currentTodo.id}/edit`);
    };
  };

  const handleDelete = () =>{
    if(currentTodo){
      setTodos(prev => prev.filter(todo => todo.id !== currentTodo.id));
      router.push("/todos");
    };
  };
  
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
      {currentTodo ? (
        <div className='p-8 bg-white rounded-lg shadow-md w-full max-w-2xl'>
          <h1 className='font-bold text-2xl mb-4'>{currentTodo.title}</h1>
          <p className='mb-4'>{currentTodo.content}</p>
          <span className={`inline-block rounded px-2 py-1 mb-4 mr-4 ${currentTodo.status === "Completed" ? "bg-green-300": "bg-red-300"}`}>
            {currentTodo.status === "Completed" ? "完了" :"未完了"}
          </span>
          <button 
            className='bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded text-white mr-4'
            onClick={handleEdit}
            >
            編集
          </button>
          <button 
            className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white mr-4'
            onClick={handleDelete}
            >
            削除
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
            onClick={() => router.push("/todos")}
        >
          戻る
        </button>
        </div>
      ):(
        <div>Todo 見つかりませんでした。</div>
      )}
    </div>
  )
}

export default Detail;