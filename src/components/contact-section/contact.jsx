import '.../App.css'

const contact = () => {
    return (
        <>
            <section id="contact" className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <div className="section-title">
                        <h3 className="font-bold">Contact Us</h3>
                        <hr className="line1" />
                    </div>

                    <div className="row flex justify-center">
                        <div className="p-10">
                            <div className="info-box p-10 bg-white">
                                <h3 className="font-semibold mb-4">Need Some Help? Contact Us With Link Below</h3>
                                <div className="social-links flex justify-center space-x-4">
                                    <a href="https://www.instagram.com/mbgitaswaramitra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-2xl text-blue-500 hover:text-blue-700">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" className="text-2xl text-red-500 hover:text-red-700">
                                        <i className="bi bi-envelope"></i>
                                    </a>
                                    <a href="https://wa.me/+6283871087326" className="text-2xl text-green-500 hover:text-green-700">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                    <a href="https://maps.app.goo.gl/hGEKR12yRbjiGyLt8" className="text-2xl text-yellow-500 hover:text-yellow-700">
                                        <i className="fa fa-map"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.733748991442!2d107.1017057!3d-6.298675600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699aa8177245c3%3A0x4be340550b2c3a65!2sSMK%20Mitra%20Industri%20MM2100!5e0!3m2!1sid!2sid!4v1715846077729!5m2!1sid!2sid"
                            width="100%"
                            height="400"
                            style={{
                                border: 0,
                                borderBottomRightRadius: '20px',
                                borderBottomLeftRadius: '20px',
                                boxShadow: '0 0 30px rgba(214, 215, 216, 0.6)',
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact