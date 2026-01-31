import React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp
} from "react-icons/fa";
import logo from "@/assets/img/logo.png";

export const FooterComponent: React.FC = () => {
    return (
        <footer className="py-12 bg-cyan-900 text-gray-400 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex flex-col items-center md:items-start">

                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="avanza"
                            className="w-10 h-10"
                        />
                    </div>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaFacebookF size={24} />
                    </a>

                    <a
                        href="https://www.youtube.com/@"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaYoutube size={24} />
                    </a>
                </div>

            </div>
            <p className="text-center mt-10 text-gray-200 text-sm">
                © 2026 Avanza S. de RL. Todos los derechos reservados.
            </p>
        </footer>
    );
};
