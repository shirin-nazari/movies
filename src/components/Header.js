import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo .png';
import userIcon from '../assets/user.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../contents/navigations';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (searchInput)
            navigate(`/search?q=${searchInput}`)
    }, [searchInput])
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-40'>
            <div className="container mx-auto px-3 flex items-center h-full">
                <Link to={'/'}><img src={Logo} alt="logo" width={120} /></Link>
                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <NavLink
                                    key={nav.label}
                                    to={nav.href}
                                    className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            )
                        })
                    }
                </nav>
                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 border-none outline-none hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                            <IoSearchOutline />
                        </button>
                    </form>

                    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <img src={userIcon} alt="user-icon" width='w-full h-full' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header