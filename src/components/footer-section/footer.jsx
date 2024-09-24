import '.../App.css'

const footer = () => {
    return (
        <>
            {/* Footer Section */}
            <section id="footer" >
                <div className="footer-container mx-auto p-10">
                    <div className="section-title">
                        {/* <img src={logo} alt="Gita Swara Mitra Logo" className="logo-footer mx-auto mb-4" /> */}
                        <h4 className="font-bold">Marching Band</h4>
                        <h5 className="">Gita Swara Mitra</h5>
                    </div>
                    <div className="footer">
                        <p>Terimakasih telah mengunjungi web kami!</p>
                    </div>
                </div>
            </section>
            {/* End Footer Section */}
        </>
    )
}

export default footer