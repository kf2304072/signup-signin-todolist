"use client";
import { confirmPasswordState, emailState, errorMessageState, passwordState, usernameState } from '@/Atoms/userState';
import { signInWithPopup, createUserWithEmailAndPassword  } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';
import { auth, provider } from '../firebase';
import Link from 'next/link';
import SignupInputField from '@/components/SignupInputField';

const Signup = () => {

    const [errorMessage, setErrorMessage] =useRecoilState(errorMessageState);
    const [username, setUsername] =useRecoilState(usernameState);
    const [email, setEmail] =useRecoilState(emailState);
    const [password, setPassword] =useRecoilState(passwordState);
    const [confirmPassword, setConfirmPasswrod] =useRecoilState(confirmPasswordState);
    const router = useRouter();


    const signUpWithGoogle = async () =>{
        try {
            const resultSignupGoogle = await signInWithPopup(auth, provider);
            console.log("新規登録成功",resultSignupGoogle.user);
            router.push('/todos');
        } catch(error) {
            if(error instanceof Error){
                console.error("Google新規登録エラー",error);
                setErrorMessage(error.message);
            }else{
                setErrorMessage("新規登録中に予期せぬエラーが発生しました。")
            };
        };
    };

    const handleSignup = async () =>{
        if(password !== confirmPassword) {
            setErrorMessage("パスワードが一致しません。");
            return;
        };

        try {
            const userCredential = await createUserWithEmailAndPassword (auth, email, password);
            console.log("新規登録成功",userCredential.user);
            router.push('/todos');
        } catch(error) {
            if(error instanceof Error){
                console.error("新規登録エラー",error);
                setErrorMessage(error.message);
            };
        };
    };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4">新規登録</h1>
            
            {/* ユーザー名欄 */}
            <SignupInputField 
                id="username"
                type='text'
                placeholder='Username'
                value={username}
                onChange={e =>setUsername(e.target.value)}
                label='ユーザー名'
            />

            {/* メールアドレス欄 */}
            <SignupInputField 
                id="email"
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="メールアドレス"
            />

            {/* パスワード欄 */}
            <SignupInputField 
                id="password"
                type="password"
                placeholder='*******'
                value={password}
                onChange={e =>setPassword(e.target.value)}
                label='パスワード'
            />

            {/* パスワード確認欄 */}
            <SignupInputField 
                id="confirmPassword"
                type="password"
                placeholder="*******"
                value={confirmPassword}
                onChange={e => setConfirmPasswrod(e.target.value)}
                label="パスワード確認"
            />

            {/* 新規登録ボタン */}
            <button 
                onClick={handleSignup} 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mb-4">
                新規登録
            </button>

            {/* Googleで新規登録ボタン */}
            <button 
                onClick={signUpWithGoogle} 
                className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-2">
                Googleで新規登録
            </button>
            <div className="text-center">
                 <Link 
                    href="/signin" 
                    className="text-blue-500 hover:underline">
                    登録済みの方はこちら
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup;
