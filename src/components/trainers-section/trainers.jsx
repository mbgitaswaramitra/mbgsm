import '.../App.css'

const trainers = () => {
    return (
        <>
            {/* Card Trainers Section */}
            <section id="trainers" className="py-12 bg-gray-100">
                <div className="card mx-auto container">
                    <div className="section-title text-center mb-8">
                        <h3 className="text-3xl font-bold">Pelatih Kami</h3>
                        <hr className="line1 my-4 border-t-2 border-orange-600 w-24 mx-auto" />
                    </div>
                    <div className="card-trainers flex justify-center items-center flex-wrap">
                        <div className="card-container flex justify-center items-center flex-wrap">
                            <div className="card-pelatih bg-white p-6 rounded-lg shadow-md m-4 text-center">
                                <img src="https://robohash.org/487dd9bf068cd0ccac3a9e6b5a66c192?set=set1&bgset=bg1&size=400x400" alt="Arif" className="card-img w-full h-auto rounded-lg" />
                                <h2 className="mt-4 text-lg font-bold">Arif</h2>
                                <p className="title mt-2 text-gray-600">Section Brass</p>
                            </div>
                        </div>

                        <div className="card-container flex justify-center items-center flex-wrap">
                            <div className="card-pelatih bg-white p-6 rounded-lg shadow-md m-4 text-center">
                                <img src="https://robohash.org/487dd9bf068cd0ccac3a9e6b5a66c192?set=set1&bgset=bg1&size=400x400" alt="Kamalludin" className="card-img w-full h-auto rounded-lg" />
                                <h2 className="mt-4 text-lg font-bold">Kamalludin</h2>
                                <p className="title mt-2 text-gray-600">Section Battery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Card Trainers Section */}
        </>
    )
}

export default trainers