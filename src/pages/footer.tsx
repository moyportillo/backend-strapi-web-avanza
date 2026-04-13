import React from "react";
import {
    FaFacebookF,
    FaWhatsapp,
} from "react-icons/fa";
import {
    MapPin,
    Phone,
    CalendarIcon,
    MailOpen
} from "lucide-react";

export const FooterComponent: React.FC = () => {
    return (
        <footer className="py-12 bg-blue-950 text-gray-400 px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="flex flex-col items-left md:items-start">
                    <ul className="text-sm text-left italic space-y-2">
                        <li className="flex space-x-3"><CalendarIcon size={20}/><p>Lunes a Viernes - 9:00 am - 5:00 pm</p></li>
                        <li className="pl-8">Sabados - 9:00 am - 12:00 pm</li>
                        <li className="flex space-x-3"><Phone size={20}/><p>+504 2270-6318 / +504 8820-3559</p></li>
                        <li className="flex space-x-3"><MapPin size={20}/><p>Torre Metropolis, Bulevar Suyapa, Tegucigalpa, Francisco Morazán, Honduras</p></li>
                    </ul>
                </div>

                <div className="flex gap-6">
                    <a
                        href="call:+50422706318"
                        target="telefono"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <Phone size={24} />
                    </a>

                    <a
                        href="https://wa.me/+50488203559"
                        target="celular"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                    <a
                        href="mail:avanzahn@yahoo.com"
                        target="correo electronico"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <MailOpen size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    >
                        <FaFacebookF size={24} />
                    </a>
                </div>

            </div>
            <p className="text-center mt-10 text-gray-200 text-sm">
                © 2026 Avanza S. de RL. Todos los derechos reservados.
            </p>
        </footer>
    );
};
