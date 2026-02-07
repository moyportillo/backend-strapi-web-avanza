import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    MessageSquare,
    User,
    Building2,
    CheckCircle,
    Facebook,
    Instagram,
    Linkedin
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const ContactoPage = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [isVisible, setIsVisible] = useState({
        hero: false,
        form: false,
        info: false,
        map: false,
        social: false
    });

    const heroRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLElement>(null);
    const infoRef = useRef<HTMLElement>(null);
    const mapRef = useRef<HTMLElement>(null);
    const socialRef = useRef<HTMLElement>(null);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    const sectionName = target.dataset.section as keyof typeof isVisible;
                    if (sectionName) {
                        setIsVisible(prev => ({ ...prev, [sectionName]: true }));
                    }
                }
            });
        }, observerOptions);

        const refs = [heroRef, formRef, infoRef, mapRef, socialRef];
        refs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío de formulario
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                nombre: "",
                email: "",
                telefono: "",
                asunto: "",
                mensaje: ""
            });

            // Ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Teléfono",
            value: "+504 2270-6318",
            link: "tel:+50422706318",
            color: "blue"
        },
        {
            icon: MessageSquare,
            title: "WhatsApp",
            value: "+504 8820-3559",
            link: "https://wa.me/50488203559",
            color: "green"
        },
        {
            icon: Mail,
            title: "Correo Electrónico",
            value: "avanzahn@yahoo.com",
            link: "mailto:avanzahn@yahoo.com",
            color: "gold"
        },
        {
            icon: MapPin,
            title: "Dirección",
            value: "Torres Metropolis, Boulevard Suyapa, Tegucigalpa, Francisco Morazán, Honduras",
            link: "https://maps.app.goo.gl/kbBJYiCzoEpVwSZQ9",
            color: "blue"
        }
    ];

    const officeHours = [
        { day: "Lunes - Viernes", hours: "9:00 AM - 5:00 PM" },
        { day: "Sábados", hours: "9:00 AM - 12:00 PM" },
        { day: "Domingos", hours: "Cerrado" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <style>{`
               
                .hero-title {
                    font-family: 'Playfair Display', serif;
                }
                
                body {
                    font-family: 'Montserrat', sans-serif;
                }

                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .animate-on-scroll-scale {
                    opacity: 0;
                    transform: scale(0.95);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-on-scroll-scale.visible {
                    opacity: 1;
                    transform: scale(1);
                }

                .animate-slide-left {
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-slide-left.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .animate-slide-right {
                    opacity: 0;
                    transform: translateX(50px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-slide-right.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes pulse-ring {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }

                .pulse-ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    animation: pulse-ring 2s infinite;
                }

                .contact-card {
                    position: relative;
                    overflow: hidden;
                }

                .contact-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    transition: left 0.5s;
                }

                .contact-card:hover::before {
                    left: 100%;
                }

                @keyframes success {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .animate-success {
                    animation: success 0.5s ease-out;
                }
            `}</style>

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    data-section="hero"
                    className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
                            alt="Contacto AVANZA"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/85 to-blue-950/90"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.hero ? 'visible' : ''}`}>
                            <div className="w-24 h-24 bg-avanza-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-float">
                                <MessageSquare className="h-12 w-12 text-blue-950" />
                            </div>
                            <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
                                Contáctanos
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                                Estamos aquí para ayudarte. Comunícate con nosotros y un asesor te atenderá de inmediato.
                            </p>
                            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-amber-400 to-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section
                    ref={formRef}
                    data-section="form"
                    className="py-20 px-4 bg-white"
                >
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className={`animate-slide-left ${isVisible.form ? 'visible' : ''}`}>
                                <Card className="border-2 border-blue-950/10 shadow-2xl">
                                    <CardHeader className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-t-lg">
                                        <CardTitle className="text-3xl font-bold flex items-center gap-3">
                                            <Send className="h-8 w-8 text-avanza-gold" />
                                            Envíanos un Mensaje
                                        </CardTitle>
                                        <CardDescription className="text-white/80 text-lg">
                                            Completa el formulario y nos pondremos en contacto contigo pronto
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-8 pb-8">
                                        {submitSuccess && (
                                            <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-lg flex items-center gap-3 animate-success">
                                                <CheckCircle className="h-6 w-6 text-emerald-600" />
                                                <p className="text-emerald-800 font-semibold">
                                                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                                                </p>
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label className="flex items-center text-sm font-semibold mb-2 text-blue-950">
                                                    <User className="h-4 w-4 mr-2 text-avanza-gold" />
                                                    Nombre Completo *
                                                </label>
                                                <Input
                                                    type="text"
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleChange}
                                                    placeholder="Juan Pérez"
                                                    required
                                                    className="border-2 border-blue-950/20 focus:border-amber-500 transition-all text-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="flex items-center text-sm font-semibold mb-2 text-blue-950">
                                                    <Mail className="h-4 w-4 mr-2 text-avanza-gold" />
                                                    Correo Electrónico *
                                                </label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="ejemplo@correo.com"
                                                    required
                                                    className="border-2 border-blue-950/20 focus:border-amber-500 transition-all text-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="flex items-center text-sm font-semibold mb-2 text-blue-950">
                                                    <Phone className="h-4 w-4 mr-2 text-avanza-gold" />
                                                    Teléfono *
                                                </label>
                                                <Input
                                                    type="tel"
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleChange}
                                                    placeholder="+504 0000-0000"
                                                    required
                                                    className="border-2 border-blue-950/20 focus:border-amber-500 transition-all text-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="flex items-center text-sm font-semibold mb-2 text-blue-950">
                                                    <Building2 className="h-4 w-4 mr-2 text-avanza-gold" />
                                                    Asunto *
                                                </label>
                                                <Input
                                                    type="text"
                                                    name="asunto"
                                                    value={formData.asunto}
                                                    onChange={handleChange}
                                                    placeholder="¿En qué podemos ayudarte?"
                                                    required
                                                    className="border-2 border-blue-950/20 focus:border-amber-500 transition-all text-lg"
                                                />
                                            </div>

                                            <div>
                                                <label className="flex items-center text-sm font-semibold mb-2 text-blue-950">
                                                    <MessageSquare className="h-4 w-4 mr-2 text-avanza-gold" />
                                                    Mensaje *
                                                </label>
                                                <Textarea
                                                    name="mensaje"
                                                    value={formData.mensaje}
                                                    onChange={handleChange}
                                                    placeholder="Escribe tu mensaje aquí..."
                                                    required
                                                    rows={5}
                                                    className="border-2 border-blue-950/20 focus:border-amber-500 transition-all text-lg resize-none"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-amber-500 to-[#d4af37] hover:bg-[#d4af37] text-blue-950 font-bold text-lg py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                                                size="lg"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-950 mr-2"></div>
                                                        Enviando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-5 w-5" />
                                                        Enviar Mensaje
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Information */}
                            <div className={`animate-slide-right ${isVisible.form ? 'visible' : ''}`}>
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 hero-title">
                                            Información de Contacto
                                        </h2>
                                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                            Ponte en contacto con nosotros a través de cualquiera de nuestros canales de comunicación. Estamos disponibles para atenderte.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {contactInfo.map((info, index) => (
                                            <div
                                                key={info.title}
                                                className="contact-card"
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                            >
                                                <a
                                                    href={info.link}
                                                    target={info.icon === MapPin || info.icon === MessageSquare ? "_blank" : undefined}
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <Card className={`hover:shadow-xl transition-all duration-300 border-2 hover:border-[#d4af37] cursor-pointer ${
                                                        info.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-white' :
                                                            info.color === 'gold' ? 'bg-gradient-to-br from-amber-50 to-white' :
                                                                'bg-gradient-to-br from-emerald-50 to-white'
                                                    }`}>
                                                        <CardContent className="pt-6 pb-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                                                                    info.color === 'blue' ? 'bg-gradient-to-br from-blue-950 to-blue-900' :
                                                                        info.color === 'gold' ? 'bg-gradient-to-br from-[#d4af37] to-amber-600' :
                                                                            'bg-gradient-to-br from-emerald-600 to-emerald-700'
                                                                }`}>
                                                                    <info.icon className={`h-7 w-7 ${
                                                                        info.color === 'blue' ? 'text-avanza-gold' :
                                                                            info.color === 'gold' ? 'text-blue-950' :
                                                                                'text-white'
                                                                    }`} />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <p className="text-sm font-semibold text-blue-950/70 mb-1">
                                                                        {info.title}
                                                                    </p>
                                                                    <p className="text-lg font-bold text-blue-950">
                                                                        {info.value}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Office Hours */}
                                    <Card className="border-2 border-blue-950/10 bg-gradient-to-br from-blue-950 to-blue-900 text-white mt-8">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3 text-2xl">
                                                <Clock className="h-7 w-7 text-avanza-gold" />
                                                Horario de Atención
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                {officeHours.map((schedule, index) => (
                                                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                                                        <span className="font-semibold">{schedule.day}</span>
                                                        <span className="text-avanza-gold font-bold">{schedule.hours}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section
                    ref={mapRef}
                    data-section="map"
                    className="py-20 px-4 bg-gradient-to-b from-blue-950/5 to-white"
                >
                    <div className="container max-w-6xl mx-auto">
                        <div className={`text-center mb-12 animate-on-scroll ${isVisible.map ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 hero-title">
                                Encuéntranos
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                                Visítanos en nuestras oficinas centrales
                            </p>
                        </div>

                        <div className={`animate-on-scroll-scale ${isVisible.map ? 'visible' : ''}`}>
                            <Card className="overflow-hidden border-2 border-blue-950/10 shadow-2xl">
                                <div className="relative h-96 bg-gray-200">
                                    {/* Placeholder for Google Maps - Replace with actual Google Maps embed */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8555660438847!2d-87.18881122395236!3d14.08570218947352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d4915e97ef%3A0x57af63058677bee9!2sTorre%20Metr%C3%B3polis!5e0!3m2!1ses!2shn!4v1770429510070!5m2!1ses!2shn"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="bg-gradient-to-r from-blue-950 to-blue-900 p-6 text-white">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">AVANZA - Oficina Principal</h3>
                                            <p className="text-white/90 text-lg leading-relaxed">
                                                Torres Metropolis, Boulevard Suyapa<br />
                                                Tegucigalpa, Francisco Morazán<br />
                                                Honduras
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section
                    ref={socialRef}
                    data-section="social"
                    className="py-20 px-4 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(30, 58, 138, 0.1) 20px, rgba(30, 58, 138, 0.1) 40px)`
                    }}></div>

                    <div className="container max-w-4xl mx-auto text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.social ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 hero-title">
                                Síguenos en Redes Sociales
                            </h2>
                            <p className="text-xl text-blue-950/80 mb-12 max-w-2xl mx-auto font-semibold">
                                Mantente al día con nuestras últimas noticias, promociones y consejos
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                {[
                                    { icon: Facebook, name: "Facebook", link: "https://facebook.com", color: "blue" },
                                    { icon: Instagram, name: "Instagram", link: "https://instagram.com", color: "pink" },
                                    { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com", color: "blue" },
                                    { icon: MessageSquare, name: "WhatsApp", link: "https://wa.me/50498765432", color: "green" }
                                ].map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`animate-on-scroll-scale ${isVisible.social ? 'visible' : ''}`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="group">
                                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-rotate-6">
                                                <social.icon className={`h-10 w-10 ${
                                                    social.color === 'blue' ? 'text-blue-600' :
                                                        social.color === 'pink' ? 'text-pink-600' :
                                                            'text-green-600'
                                                }`} />
                                            </div>
                                            <p className="mt-3 font-bold text-blue-950">{social.name}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ContactoPage