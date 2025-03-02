'use client';

import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="grid grid-cols-12 border-x-2 border-black 2xl:max-w-[1280px] mx-auto">
            <div className="p-2 border-solid border-y-2 bg-white border-r-2 border-black col-span-3 lg:col-span-1 flex justify-center">
                <Link href="/" >
                    ekkymulia
                </Link>
            </div>
            <div className="p-2 border-solid border-y-2 border-black col-span-9 lg:col-span-11 overflow-hidden">
                <ul className={`grid grid-cols-12 transition duration-1000 delay-150 ease-in-out overflow-hidden`}>
                    <li className="col-span-12 lg:col-span-3">Section</li>
                    <li className="hidden lg:block lg:col-span-5">
                        <ul className="flex justify-start">
                            <li>Ekky's Story:</li>
                            <li className="ml-4">
                                <Link href="/journal/ekky-s-stories-chapter-1" >
                                    Chapter 1
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="/journal/ekky-s-stories-chapter-2" >
                                    Chapter 2
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="hidden lg:block ml-4 col-span-2">
                        <Link href="/journal">
                            Journal (Blog)
                        </Link>
                    </li>
                    <li className="hidden lg:block ml-4 col-span-2">
                        <Link href="/contact">
                            Contact Page
                        </Link>
                    </li>
                    <li className="hidden ml-4 col-span-2">
                        <Link href="/project">
                            Project Page
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;