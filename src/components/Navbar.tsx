'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [date, setDate] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/date/${date}`);
  };
    const pathname = usePathname()
 
    return (
      <nav style={{height:'10vh'}} className='w-100 bg-black color text-white flex p-4'>
        <ul className='flex-1 flex'>
          <li className='p-2'>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
              Home
            </Link>
          </li>
          <li className='p-2'>
            <Link
              className={`link ${pathname === '/about' ? 'active' : ''}`}
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="flex-2 navbar_search">
        <form onSubmit={handleSearch}>
            <input className='m-1 border rounded text-gray-500 p-1'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button className='text-black bg-white p-2 border rounded-full' type="submit">Search</button>
          </form>
        </div>
      </nav>
    );



};



export default Navbar;