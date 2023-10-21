"use client";
import { Todo, currentTodoState, initialInputState, inputState, inputValue, todoListState } from "@/Atoms/userState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';
import { auth } from "../firebase";


const TodosList: React.FC = () =>{
  /* アプリケーション内のどこでもTodoの現在のリストを参照するために使用。例えば、表示するTodoのリストをレンダリングする際など。 */
  const todos = useRecoilValue(todoListState);
  /* Todoのリストの状態を更新することができます。例えば、新しいTodoを追加したり、既存のTodoを削除したりする際にこの関数を使用 */
  const setTodos = useSetRecoilState(todoListState);
  /* ユーザーがテキストボックスやテキストエリアに入力を行った際など、その入力値をinputValueの状態として保存 */
  const setInput =useSetRecoilState(inputValue);
  /* ユーザーがある特定のTodoを選択または編集する際に、そのTodoの詳細情報をcurrentTodoStateの状態として設定するためにsetCurrentTodo関数を使用 */
  const setCurrentTodo = useSetRecoilState(currentTodoState);
  const router = useRouter();

  const handleCreateButton = () =>{
    router.push('/todos/create');
  }

  const deleteTodo = (id:string) =>{
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logged out successfully");
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };
  
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-2xl">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold mb-4">TODO一覧</h1>
      <button 
         onClick={handleLogout}// ここにログアウト処理を結びつけます
        className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4"
      >
        ログアウト
      </button>
    </div>

    <button 
      onClick={handleCreateButton}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mb-4"
    >
      新規作成
    </button>
        {todos.map(todo => (
          <div key={todo.id} className="border p-4 mb-2 rounded shadow-sm">
            <h2 className="font-bold">{todo.title}</h2>
            <p className="mb-2">{todo.content}</p>
            <span className={`inline-block rounded px-2 py-1 ${todo.status === "Completed" ? "bg-green-300" : "bg-red-300"}`}>
              {todo.status === "Completed" ? "完了" : "未完了"}
            </span>
            <div className="flex mt-2">
              <Link 
                onClick={() =>setCurrentTodo(todo)}
                href={`/todos/${todo.id}`}
                className="mr-2 text-blue-500"
                >
                詳細
                </Link>
                <button 
                  onClick={() =>deleteTodo(todo.id)}
                  className="text-red-500"
                 >
                削除
                </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};


export default TodosList;