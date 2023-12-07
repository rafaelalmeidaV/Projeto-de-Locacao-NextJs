import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div className='items-center h-[100vh] flex flex-col justify-center bg-gray-200'>
          <h1>Imobiliária</h1>
          <Link href='/cliente'>
            <button className='btn btn-primary mt-2'>Cliente</button>
          </Link>
          <Link href='/imovel'>
            <button className='btn btn-primary mt-2'>Imóvel</button>
          </Link>
          <Link href='/locacao'>
            <button className='btn btn-primary mt-2'>Locação</button>
          </Link>
        </div>
      </div>
  
    
    </>
  );
}
