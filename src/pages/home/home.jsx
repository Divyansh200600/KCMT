import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../../components/homeFunctions/header'; 
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin ,FaYoutube} from 'react-icons/fa';
import NoticeBoard from '../../components/noticeBoard/notice';

const Home = () => {
    const [showSocialIcons, setShowSocialIcons] = useState(false);
    const navigate = useNavigate();

    // Automatically show social icons after a delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSocialIcons(true);
        }, 500); // Show icons after 0.5 seconds
        return () => clearTimeout(timer); // Clean up timer on unmount
    }, []);

    return (
        <div className="relative">
            <Header />

            {/* Floating WhatsApp Icon */}
            <a
                href="https://api.whatsapp.com/send?phone=918081332211"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
                title="Chat with us on WhatsApp"
            >
                <FaWhatsapp className="h-6 w-6" />
            </a>

            {/* Smaller Social Icons Drawer */}
            <div className={`fixed right-0 top-1/3 transform transition-transform duration-300 ${showSocialIcons ? 'translate-x-0' : 'translate-x-full'}   p-2`}>
                <div className="flex flex-col items-center space-y-2">
                    <a
                        href="https://www.facebook.com/KCMTOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full p-1 transition duration-300 w-8 h-8"
                    >
                        <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.youtube.com/c/KCMTCollege"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full p-1 transition duration-300 w-8 h-8"
                    >
                        <FaYoutube className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/kcmt-bareilly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white rounded-full p-1 transition duration-300 w-8 h-8"
                    >
                        <FaLinkedin className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.instagram.com/kcmt_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full p-1 transition duration-300 w-8 h-8"
                    >
                        <FaInstagram className="h-4 w-4" />
                    </a>
                    <a
                        href="https://x.com/KcmtO?mx=2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full p-1 transition duration-300 w-8 h-8"
                    >
                        <FaTwitter className="h-4 w-4" />
                    </a>
                   
                </div>
            </div>

            {/* Nested Routes */}
            <Routes>
                <Route path="/notice-board" element={<NoticeBoard />} />
            </Routes>
        </div>
    );
};

export default Home;
