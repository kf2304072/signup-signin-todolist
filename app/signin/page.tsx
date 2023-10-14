"use client";
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth, provider } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { errorMessageState } from '@/Atoms/userState';


const Signin:React.FC = () => {

    const [user, loading] =useAuthState(auth);
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState)

    useEffect(() =>{
        if(user){
            router.push('/dashboard');
        }
    },[user, router]);

    const signInWithGoogle = async () =>{
        try{
            const result = await signInWithPopup(auth,provider);
            console.log("ログイン成功", result.user);
            router.push('/dashboard');
        } catch(error) {
            if(error instanceof Error) {
                console.error("Googleログインエラー:",error);
                setErrorMessage(error.message);
            }else{
                setErrorMessage("ログイン中に未知のエラーが発生しました。")
            }
        }
        

    }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
    <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">ログイン</h1>

        {/* エラーメッセージの表示 */}
        {errorMessage && <p>{errorMessage}</p>}
        
        {/* メールアドレス欄 */}
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">メールアドレス</label>
            <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
            />
        </div>

        {/* パスワード欄 */}
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">パスワード</label>
            <input 
                type="password" 
                id="password" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="*******"
            />
        </div>

        {/* ログインボタン */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mb-4">
            ログイン
        </button>

        {/* Googleログインボタン */}
        <button onClick={signInWithGoogle} className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-2">
            Googleでログイン
        </button>
    </div>
</div>

  )
}

export default Signin;