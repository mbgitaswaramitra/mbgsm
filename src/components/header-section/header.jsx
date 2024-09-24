import './header.css'
const header = () => {
    return (
        <>
            {/* Navbar Section */}
            <section>
                <header id='header'>

                    <nav className="navbar" id='navbar'>
                        <img src="..\src\assets\img\logo-mbgsm.png" alt="" className='logo-navbar' />
                        <ul className="navbar-links">
                            <li><a className='links active font-bold' href="#hero">MBGSM</a></li>
                            <li><a className='links font-bold' href="#about">Tentang Kami</a></li>
                            <li><a className='links font-bold' href="#ekskul">Ekstrakurikuler</a></li>
                            <li><a className='links font-bold' href="#trainers">Pelatih</a></li>
                            <li><a className='links font-bold' href="#contact">Kontak</a></li>
                            <li><a className='links font-bold' href="#acorp">A Corps</a></li>
                        </ul>
                    </nav>

                </header >
            </section >
            {/* End Navbar Section */}
        </>
    );
};

export default header