import '.../App.css'

const about = () => {
    return (
        <>
            {/* About Section */}
            <section id="about" className="about">
                <div className="container mx-auto">
                    <div className="section-title mb-4">
                        <h3>Tentang Kami</h3>
                        <hr className="line1" />
                    </div>
                    <div className="about-container flex flex-col lg:flex-row items-center lg:items-start">
                        <img src="src\assets\img\logo-mbgsm.png" alt="Gita Swara Mitra Marching Band" className="w-1/3 lg:w-1/4 mb-8 lg:mb-0 lg:mr-8" />
                        <div className="text-lg lg :w-3/4 max-w-4xl text-justify mt-10">
                            <p>The Gita Swara Mitra Marching Band is an extracurricular activity at SMK Mitra Industri MM2100, which is focused on students who have an interest in the world of music, particularly in Marching Band. This extracurricular Marching Band was established in 2011 when SMK Mitra Industri MM2100 had its first batch of students, and it remains active to this day.</p>
                            <p className="mt-4">One Band, One Sound, One Soul is our slogan at the Gita Swara Mitra Marching Band, which means Satu Band, Satu Suara, Satu Jiwa. Interested in becoming a member of MBGSM?</p>
                        </div>
                    </div>
                </div>

                <div className='schedule mt-6 max-w-7xl box-border h-auto w-full p-6 shadow md:shadow-lg rounded-2xl'>
                    <h2 className='font-bold text-xl uppercase tracking-wider '>Jadwal Latihan</h2>
                    <div className='schedule-day mb-2 pt-3'>
                        <h3 className='font-semibold'>Selasa</h3>
                        <p>Dimulai setelah apel sore - 17.00</p>
                    </div>
                    <div className='schedule-day mb-2'>
                        <h3 className='font-semibold'>Selasa</h3>
                        <p>Dimulai setelah apel sore - 17.00</p>
                    </div>
                    <div className='schedule-day mb-2'>
                        <h3 className='font-semibold'>Selasa</h3>
                        <p>Dimulai dari 08.00 - 15.00</p>
                    </div>
                </div>
            </section >
            {/* End About Section */}
        </>
    )
}

export default about