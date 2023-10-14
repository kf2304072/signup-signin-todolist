import React from 'react'

const signup = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
    <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">新規登録</h1>
        
        {/* ユーザー名欄 */}
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="username">ユーザー名</label>
            <input 
                type="text" 
                id="username" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Username"
            />
        </div>

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

        {/* パスワード確認欄 */}
        <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">パスワード確認</label>
            <input 
                type="password" 
                id="confirmPassword" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="*******"
            />
        </div>

        {/* 新規登録ボタン */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mb-4">
            新規登録
        </button>

        {/* Googleで新規登録ボタン */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-2">
            Googleで新規登録
        </button>
    </div>
</div>
  )
}

export default signup