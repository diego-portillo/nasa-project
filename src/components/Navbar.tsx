'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
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
        {/* <div className="flex-2 navbar_search">
                
                <input
                
                className='m-1 border rounded text-gray-500 p-1'
                type="date"
                    placeholder="Start Date"
                    // value={startDate}
                    // onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                
                className='m-1 border rounded text-gray-500 p-1'
                    type="date"
                    placeholder="End Date"
                    // value={endDate}
                    // onChange={(e) => setEndDate(e.target.value)}
                />
                <button className='text-black bg-white p-2 border rounded-full' >Search</button>
            </div> */}
      </nav>
    );



};



export default Navbar;