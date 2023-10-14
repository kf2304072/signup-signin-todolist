// Firebase関連のインポート
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Firebaseの設定
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// Authのインスタンスを取得
const auth = getAuth(app);

// Google認証のプロバイダーインスタンスを作成
const provider = new GoogleAuthProvider();

export { auth, provider };



/* Firebaseのメールアドレス/パスワード認証には、SDKの初期設定時に特定の設定を追加する必要はありません。getAuth() によって取得した auth インスタンスがそのままメールアドレス/パスワード認証にも使用されます。
*/