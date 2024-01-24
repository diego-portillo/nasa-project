import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
   // make a simple navbar with two links and a search bar with two date parmas. for now just static, no real functionality needed
    // const router = useRouter();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [search, setSearch] = useState('');
    // const handleSearch = () => {
    //     router.push({
    //         pathname: '/search',
    //         query: { search, startDate, endDate },
    //     });
    // };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src="/nasa-logo.svg" alt="nasa logo" />
            </div>
            <div className="navbar__links">
                <a href="/">Home</a>
                <a href="/search">Search</a>
            </div>
            <div className="navbar__search">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <button >Search</button>
            </div>
            <style jsx>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background-color: #000;
                    color: #fff;
                }
                .navbar__logo {
                    width: 20%;
                }
                .navbar__logo img {
                    width: 100%;
                }
                .navbar__links {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 20%;
                }
                .navbar__links a {
                    color: #fff;
                }
                .navbar__search {
                    width: 20%;
                }
                .navbar__search input {
                    margin-right: 1rem;
                }
                .navbar__search button {
                    padding: 0.5rem 1rem;
                    border: none;
                    background-color: #fff;
                    color: #000;
                    cursor: pointer;
                }
            `}</style>
        </nav>
    );



};



export default Navbar;