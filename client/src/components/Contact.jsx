import Navbar from "./Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />

            <body className = "antialised bg-gray-100">
                <div className = "flex w-full min-h-screen justify-center items-center">
                    <div className = "flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">

                        <div className="flex flex-col space-y-8 justify-between">
                            <div>
                                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                                <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, eveniet. Recusandae deserunt aspernatur..</p>
                            </div>
                            <div className="flex flex-col space-y-6">
                                <div className="inline-flex space-x-2 items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/126/126523.png" alt="phone" width = "25px"/>
                                    <span>+(123) 456 7890</span>
                                </div>
                                <div className="inline-flex space-x-2 items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/126/126519.png" alt="mail" width = "25px"/>
                                    <span>example@xyzwebsite.com</span>
                                </div>
                                <div className="inline-flex space-x-2 items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="location" width = "25px"/>
                                    <span>11, Street 342, Abcd fgh</span>
                                </div>
                            </div>
                            <div className="flex space-x-4 text-lg">
                                <a href=""><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="facebook" width = "25px"/></a>
                                <a href=""><img src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="instagram" width = "25px"/></a>
                                <a href=""><img src="https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png" alt="twitter" width = "25px"/></a>
                                <a href=""><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-sam6sbc4.png" alt="linkedin" width = "25px"/></a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28">

                            </div>
                            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-24">

                            </div>
                            <div className="relative z-0 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                                <form action="" className="flex flex-col space-y-4">
                                    <div>
                                        <label for="" className="text-sm">Your name</label>
                                        <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-sm">Email Address</label>
                                        <input type="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-sm">Message</label>
                                        <textarea placeholder="Message" rows = "4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"/>
                                    </div>
                                    <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Contact;
