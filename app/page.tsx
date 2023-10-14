import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className='flex flex-col items-center h-full '>
        <h1 className="text-4xl mb-5">Todo List</h1>
        <Image 
          className="my-5"
          src={"https://source.unsplash.com/collection/1346951/1000x500?sig=1"}
          alt='login'
          width={632}
          height={400}
        />
        <Link href="/signup/" 
          className='bg-blue-400 hover:bg-blue-500 rounded-md py-3 px-3 cursor-pointer w-[632px] text-center mb-10 text-lg'>
          新規登録画面
        </Link>
        <Link href="/signin/" 
          className='bg-pink-400 hover:bg-pink-500 rounded-md py-3 px-3 cursor-pointer w-[632px] text-center text-lg'>
          ログイン画面
        </Link>
      </div>

  );
}
