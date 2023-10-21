"use client";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth, provider } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { emailState, errorMessageState, passwordState } from '@/Atoms/userState';
import Link from 'next/link';
import SigninInputField from '@/components/SigninInputField';



const Signin:React.FC = () => {
    /* ユーザーがログインしているかどうかを判断 */
    const [user, loading] =useAuthState(auth);
    const router = useRouter();
    /* ログインや新規登録の際にエラーが発生したときに、そのエラーメッセージをユーザーに表示するために使われる */
    const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);
    /*  ユーザーがメールアドレスを入力する際に、その値を保存・更新するために使われる*/
    const [email, setEmail] =useRecoilState(emailState);
    /* ユーザーがパスワードを入力する際に、その値を保存・更新するために使われる  */
    const [password, setPassword] =useRecoilState(passwordState);

    const signInWithGoogle = async () =>{
        try{
            const resultSignInGoogle = await signInWithPopup(auth,provider);
            console.log("ログイン成功", resultSignInGoogle.user);
            router.push('/todos');
        } catch(error) {
            if(error instanceof Error) {
                console.error("Googleログインエラー:",error);
                setErrorMessage(error.message);
            }else{
                setErrorMessage("ログイン中に予期せぬエラーが発生しました。");
            }
        };
    };

    const signInWithEmail = async () =>{
        try{
            const resultSignInLogin = await signInWithEmailAndPassword(auth, email, password);
            console.log("Emailログイン成功", resultSignInLogin.user);
            router.push('/todos');
        } catch(error){
            if(error instanceof Error){
                console.error("Emailログインエラー",error);
                setErrorMessage(error.message);
            }else{
                setErrorMessage("ログイン中に予期せぬエラーが発生しました。");
            }
        };
    };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
    <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">ログイン</h1>

        {/* エラーメッセージの表示 */}
        {errorMessage && <p className='text-red-400'>{"メールアドレス or パスワードが違います"}</p>}
        
        {/* メールアドレス欄 */}
        <SigninInputField 
            id="email"
            type='email'
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='メールアドレス'
        />

        {/* パスワード欄 */}
        <SigninInputField 
            id="password"
            type='password'
            placeholder='*******'
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="パスワード"
        />

        {/* ログインボタン */}
        <button 
            onClick={signInWithEmail} 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mb-4">
            ログイン
        </button>

        {/* Googleログインボタン */}
        <button 
            onClick={signInWithGoogle} 
            className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-2">
            Googleでログイン
        </button>

        <div className="text-center">
            <Link href="/signup" className="text-blue-500 hover:underline">
            登録がまだの方はこちら
            </Link>
        </div>
    </div>
</div>

  );
};

export default Signin;