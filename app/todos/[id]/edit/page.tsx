"use client";

import { currentTodoState, editingTodoState, todoListState } from "@/Atoms/userState";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


const EditTodo: React.FC = () => {

  const router = useRouter();
  const [editingTodo, setEditingTodo] = useRecoilState(editingTodoState);
  const setTodos = useSetRecoilState(todoListState);
  const currentTodo = useRecoilValue(currentTodoState);
  const setCurrentTodo = useSetRecoilState(currentTodoState);

  useEffect(() =>{
    setEditingTodo(currentTodo);
  },[currentTodo]);

  const handleSave = () => {
    if (!editingTodo) return; // ここで editingTodo が null でないことを確認

    setTodos((prevTodos) =>
        prevTodos.map(todo => 
            todo.id === editingTodo.id ? editingTodo : todo
        )
    );

    setCurrentTodo(editingTodo);
    router.push(`/todos/${editingTodo.id}`);
};



  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="font-bold text-2xl mb-6">編集 TODO</h1>
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl">

        <div className="mb-4"> 
          <label 
            className="block text-sm font-bold mb-2"
            htmlFor="title"
            >
              タイトル
          </label>
          <input 
            id="title"
            type="text"
            className="shadow appearance-none bordeer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            defaultValue={editingTodo ? editingTodo.title: ""}
            onChange={e => setEditingTodo(prev => ({...prev!, title:e.target.value}))}
          />
        </div>

        <div className="mb-4">
          <label 
            className="block text-sm font-bold mb-2"
            htmlFor="content"
            >
              内容
          </label>
          <textarea 
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            rows={5}
            defaultValue={editingTodo ? editingTodo.content : ""}
            onChange={e => setEditingTodo(prev => ({...prev!, content:e.target.value}))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">ステータス</label>
          <select 
            id="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={editingTodo ? editingTodo.status : ""}
            onChange={e => setEditingTodo(prev =>({...prev!, status:e.target.value as 'Completed' | 'Uncompleted' }))}
          >
            <option value="Uncompleted">未完了</option>
            <option value="Completed">完了</option>
          </select>
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleSave}
        >
          保存
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/todos/${editingTodo.id}")}
        >
          戻る
        </button>

      </div>
    </div>
  );
};

export default EditTodo;
