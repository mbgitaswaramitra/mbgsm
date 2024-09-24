import '.../App.css'

const register = () => {
    return (
        <>
            <section id="formulir" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className="bordering p-8 bg-white rounded-lg shadow-md">
                        <form className="form" action="script.php" method="post">
                            <div className="section-title text-center mb-8">
                                <h3 className="text-3xl font-bold">Register Form</h3>
                                <hr className="line1 my-4 border-t-2 border-orange-600 w-24 mx-auto" />
                                <div className="flex justify-center space-x-4">
                                    <img className="img-1 w-24" src="assets/img/logo-mbgsm.png" alt="MBGSM Logo" />
                                    <img className="img-2 w-24" src="assets/img/logo-mitra.png" alt="Mitra Logo" />
                                </div>
                            </div>

                            <p className="message text-center mb-6">
                                Isi data dirimu untuk menjadi anggota <span className="font-bold">MBGSM</span>
                            </p>

                            <label className="block mb-4">
                                <input id="name" name="name" required placeholder="" type="text" className="input border border-gray-300 p-2 rounded w-full" />
                                <span className="block mt-2">Nama</span>
                            </label>

                            <label className="block mb-4">
                                <input id="kelas" name="kelas" required placeholder="" type="text" className="input border border-gray-300 p-2 rounded w-full" />
                                <span className="block mt-2">Kelas</span>
                            </label>

                            <label className="block mb-4">
                                <input id="number" name="number" required placeholder="" type="text" className="input border border-gray-300 p-2 rounded w-full" />
                                <span className="block mt-2">Telp</span>
                            </label>

                            <label className="block mb-4">
                                <input id="reason" name="reason" required placeholder="" type="text" className="input border border-gray-300 p-2 rounded w-full" />
                                <span className="block mt-2">Alasan Bergabung MBGSM</span>
                            </label>

                            <label className="block mb-4">
                                <h4 className="text-lg font-medium mb-2">Apakah pernah mengikuti kegiatan Marching Band?</h4>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input type="radio" id="yes" className="pilih1 mr-2" name="radio" />
                                        <span>Pernah</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" id="no" className="pilih2 mr-2" name="radio" />
                                        <span>Belum</span>
                                    </label>
                                </div>
                            </label>

                            <label className="block mb-4" id="input-alat">
                                <h5 className="text-md font-medium mb-2">Isi dengan alat yang pernah dimainkan. (Jika belum pernah isi dengan tanda -)</h5>
                                <input type="text" id="alat" className="alat border border-gray-300 p-2 rounded w-full" placeholder="Cth. Saat SMP pernah bermain Baritone" />
                            </label>

                            <button type="submit" className="submit bg-blue-500 text-white p-2 rounded w-full">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default register