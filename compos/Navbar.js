import Link from 'next/link'

const Navbar = () => {
    return ( 
        <>
            <div>
                <h1>Logo</h1>
            </div>
            <Link href='/' >Home</Link>
            <Link href='/about' >About</Link>
            <Link href='/ninjas' >Ninja List</Link>
        </>
    );
}

export default Navbar;