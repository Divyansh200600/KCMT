import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon, AcademicCapIcon, CalendarIcon, BriefcaseIcon, UsersIcon, DocumentTextIcon, ChatIcon, PhoneIcon, PlayIcon, MenuIcon, XIcon, } from '@heroicons/react/outline';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [animating, setAnimating] = useState(false);
    const navigate = useNavigate();

    const Img1 = 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fim1.png?alt=media&token=58ec1385-7393-4ec7-81ac-a5e0f6e4f6e9';
    const Img2 = 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2FScreenshot%202024-09-29%20160803.png?alt=media&token=b86d1b07-36b3-4692-9ab2-f4b97ee744b4';
    const Logo = 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Flogo.jpg?alt=media&token=089fa7bf-6443-4cec-8d80-db13bdd0b16b';
    const P1 = 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fp1.png?alt=media&token=18871e26-da93-4ab1-b4dd-0c3163b09a8a';
    const P2 = 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fp2.png?alt=media&token=7d8fc693-df9d-476c-9f40-40cfd2d26666';

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
        setAnimating(false); // Reset animating state
    };

    const handleCloseSidebar = () => {
        setAnimating(true); // Start closing animation
        setTimeout(() => {
            setSidebarOpen(false);
            setAnimating(false);
        }, 300); // Match the transition duration
    };


    const handleCall = () => {
        window.location.href = "tel:8081-332211"; // Opens dialer with phone number
    };

    const handleWatchVideo = () => {
        window.open("https://www.youtube.com/watch?v=vNEwLM-DbvE", "_blank"); // Opens video in a new tab
    };

    const handleNoticeBoard = () => {

        navigate('/home/notice-board');
    };


    return (
        <header className="text-gray-800 shadow-lg w-full" style={{ backgroundColor: '#FCFBF2' }}>
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo and Institution Name */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-16 w-16 mr-3 md:h-32 md:w-32" />
                    <div className="flex flex-col items-start">
                        <div className="text-2xl md:text-4xl font-bold tracking-wider relative z-10 mb-1 hover-animation">
                            <span className="text-blue-500 hover-animation">
                                {Array.from('KCMT').map((letter, index) => (
                                    <span
                                        key={index}
                                        className="inline-block transition-transform duration-300 transform hover:translate-y-[-5px]"
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                            <span className="text-black ml-2">
                                {Array.from(' GROUP').map((letter, index) => (
                                    <span
                                        key={index}
                                        className="inline-block transition-transform duration-300 transform hover:translate-y-[-5px] "
                                    >
                                        {letter}
                                    </span>
                                ))}
                            </span>
                        </div>
                        <div className="text-sm md:text-lg text-gray-700">Institution of Braeilly</div>
                        <div className="bg-lime-500 text-white p-2 md:p-4 rounded-md shadow-lg">
                            <div className="text-sm md:text-lg font-semibold">Top Education Brand Of Northern India</div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-2 gap-4 mb-4 w-full max-w-md">
                    <div className="border border-gray-300 rounded-md p-2 flex justify-center items-center">
                        <img src={P1} alt="Image Frame 1" className="h-16 w-16 md:h-32 md:w-32 object-cover" />
                    </div>
                    <div className="border border-gray-300 rounded-md p-2 flex justify-center items-center">
                        <img src={P2} alt="Image Frame 2" className="h-16 w-16 md:h-32 md:w-32 object-cover" />
                    </div>
                </div>

                {/* Images on the Right */}
                <div className="hidden md:flex items-center">
                    <img src={Img1} alt="Image 1" className="h-16 w-16 md:h-32 md:w-32 object-cover mr-3" />
                    <img src={Img1} alt="Image 2" className="h-16 w-16 md:h-32 md:w-32 object-cover" />
                </div>

                <button
                    className="block md:hidden text-gray-800 hover:text-blue-500 transition-colors absolute top-5 right-6 z-50"
                    onClick={handleOpenSidebar}
                >
                    <MenuIcon className="h-8 w-8" />
                </button>
            </div>

            {/* Navigation Links for Desktop */}
            <nav className="hidden md:flex justify-center space-x-8 my-4 bg-white py-2 shadow-sm" style={{ backgroundColor: '#FCFBF2' }}>
                <NavigationLinks />
            </nav>

            {/* Celebratory Strip */}
            <div className="bg-yellow-400 text-center py-2 animation-move">
                <span className="font-semibold text-3xl">🎉 Celebrating the 24th Year of Excellence! 🎉</span>
                <div className="flex justify-center space-x-4 py-4">
                    <Button icon={<PhoneIcon />} color="blue" label="Call" onClick={handleCall} />
                    <Button icon={<PlayIcon />} color="green" label="Watch Video" onClick={handleWatchVideo} />
                    <Button icon={<DocumentTextIcon />} color="pink" label="Notice Board" onClick={handleNoticeBoard} />
                </div>
            </div>

            {/* Sidebar for Mobile */}
            {sidebarOpen && (
                <div
                    className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50 ${animating ? 'fade-out' : 'fade-in'
                        }`}
                >
                    <div
                        className={`relative bg-white w-64 h-full shadow-md overflow-y-auto transition-transform duration-300 ${animating ? 'sidebar-closing' : 'sidebar-opening'
                            }`}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-800 hover:text-blue-500 transition-colors"
                            onClick={handleCloseSidebar}
                        >
                            <XIcon className="h-8 w-8" />
                        </button>
                        <div className="bg-blue-500 h-32 flex items-center justify-center">
                            <img src={Logo} alt="Logo" className="h-16 w-16 rounded-full bg-white p-2 shadow-md" />
                        </div>
                        <nav className="mt-8 space-y-6 p-4">
                            <NavigationLinks />
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

// Navigation Links Component for Reusability
const NavigationLinks = () => (
    <>
        <NavLink href="/home" icon={<HomeIcon />} label="Home" />
        <NavLink href="#about" icon={<InformationCircleIcon />} label="About Us" />
        <NavLink href="#courses" icon={<AcademicCapIcon />} label="Courses" />
        <NavLink href="#admissions" icon={<CalendarIcon />} label="Admissions" />
        <NavLink href="#placement" icon={<BriefcaseIcon />} label="Placement" />
        <NavLink href="#student-corner" icon={<UsersIcon />} label="Student Corner" />
        <NavLink href="#updates" icon={<DocumentTextIcon />} label="Updates" />
        <NavLink href="#contact" icon={<ChatIcon />} label="Contact Us" />
    </>
);

// NavLink Component for Reusability
const NavLink = ({ href, icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === href; // Check if the current path matches the link's href

    return (
        <a
            href={href}
            className={`flex items-center text-gray-800 hover:text-blue-500 transition-colors relative ${isActive ? 'text-blue-500' : ''}`}
        >
            {React.cloneElement(icon, { className: 'h-5 w-5 mr-1' })}
            {label}
            {isActive && (
                <span className="absolute bottom-[-5px] left-0 h-1 w-full bg-blue-500"></span> // Blue underline
            )}
        </a>
    );
};

// Button Component for Reusability
const Button = ({ icon, color, label, onClick }) => {
    const bgColor = color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : 'bg-pink-500';
    const hoverColor = color === 'blue' ? 'hover:bg-blue-600' : color === 'green' ? 'hover:bg-green-600' : 'hover:bg-pink-600';

    return (
        <button
            className={`flex items-center ${bgColor} text-white font-semibold py-1 px-2 rounded-full shadow ${hoverColor} transition-colors text-sm`}
            onClick={onClick} // Handle click
        >
            {React.cloneElement(icon, { className: 'h-4 w-4 mr-1' })}
            {label}
        </button>
    );
};


export default Header;

// CSS for animations
const css = `
    .sidebar-opening {
        transform: scale(1);
        animation: popIn 0.3s forwards;
    }

    .sidebar-closing {
        transform: scale(0.8);
        animation: popOut 0.3s forwards;
    }

    @keyframes popIn {
        0% { opacity: 0; transform: translateX(-100%) scale(0.8); }
        100% { opacity: 1; transform: translateX(0) scale(1); }
    }

    @keyframes popOut {
        0% { opacity: 1; transform: translateX(0) scale(1); }
        100% { opacity: 0; transform: translateX(-100%) scale(0.8); }
    }

    .fade-in {
        animation: fadeIn 0.3s forwards;
    }

    .fade-out {
        animation: fadeOut 0.3s forwards;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
          .animation-move {
        animation: moveUpDown 2s ease-in-out infinite alternate;
    }

    @keyframes moveUpDown {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }
`;

// Create and append the style element to the head of the document
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);