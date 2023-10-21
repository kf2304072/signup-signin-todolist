import Image from 'next/image';
import Button from '@/components/Button';

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
        <Button href='/signup' className='bg-blue-400 hover:bg-blue-500 mb-10'>
          新規登録画面
        </Button>
        <Button href='/signin' className='bg-pink-400 hover:bg-pink-500'>
          ログイン画面
        </Button>
      </div>

  );
}
