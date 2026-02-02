import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ArrowRight,
    Home,
    DollarSign,
    Shield,
    Users,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
    MapPin,
    FileText,
    CreditCard,
    Receipt,
    Clock,
    BadgeCheck,
    Zap,
    Award
} from "lucide-react";
import { useState, useEffect } from "react";

type CarouselSlide = {
    id: number;
    image: string;
    title: string;
    subtitle?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    location?: string;
}

const carouselSlides: CarouselSlide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        title: "AVANZA",
        subtitle: "Bienes Raíces y Consultoría Financiera",
        icon: MapPin,
        location: "Tegucigalpa, Honduras"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        title: "Soluciones Financieras",
        subtitle: "Préstamos rápidos y seguros con tu garantía"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        title: "Te ayudamos con tu nuevo hogar",
        subtitle: "Encuentra la propiedad de tus sueños"
    }
];

const PrincipalComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
                
                :root {
                    --avanza-navy: #1e3a8a;
                    --avanza-gold: #d4af37;
                    --avanza-green: #059669;
                }
                
                .avanza-navy {
                    color: var(--avanza-navy);
                }
                
                .bg-avanza-navy {
                    background-color: var(--avanza-navy);
                }
                
                .border-avanza-gold {
                    border-color: var(--avanza-gold);
                }
                
                .text-avanza-gold {
                    color: var(--avanza-gold);
                }
                
                .bg-avanza-gold {
                    background-color: var(--avanza-gold);
                }

                .text-avanza-green {
                    color: var(--avanza-green);
                }

                .bg-avanza-green {
                    background-color: var(--avanza-green);
                }
                
                .hero-title {
                    font-family: 'Playfair Display', serif;
                }
                
                body {
                    font-family: 'Montserrat', sans-serif;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slideChange {
                    0% {
                        opacity: 0;
                        transform: scale(1.1);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .animate-slideInLeft {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.6s ease-out forwards;
                }

                .animate-slide-change {
                    animation: slideChange 0.8s ease-out;
                }

                .animate-delay-100 {
                    animation-delay: 0.1s;
                    opacity: 0;
                }

                .animate-delay-200 {
                    animation-delay: 0.2s;
                    opacity: 0;
                }

                .animate-delay-300 {
                    animation-delay: 0.3s;
                    opacity: 0;
                }

                .animate-delay-400 {
                    animation-delay: 0.4s;
                    opacity: 0;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                .shimmer {
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        rgba(212, 175, 55, 0.3) 50%,
                        transparent 100%
                    );
                    background-size: 1000px 100%;
                    animation: shimmer 3s infinite;
                }
            `}</style>

            <main className="flex-1">
                {/* Hero Section with Carousel */}
                <section className="relative h-screen overflow-hidden">
                    {/* Carousel Slides */}
                    <div className="absolute inset-0">
                        {carouselSlides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${
                                    index === currentSlide ? 'opacity-100 animate-slide-change' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-avanza-navy/70 via-avanza-navy/50 to-avanza-navy/80"></div>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
                            <div key={currentSlide} className="animate-fadeInUp">
                                <h1 className="hero-title text-5xl md:text-7xl font-black mb-4 text-blue-900 leading-tight">
                                    {carouselSlides[currentSlide].title}
                                </h1>
                                {carouselSlides[currentSlide].subtitle && (
                                    <p className="text-2xl md:text-3xl text-avanza-gold font-bold mb-8">
                                        {carouselSlides[currentSlide].subtitle}
                                    </p>
                                )}
                                {carouselSlides[currentSlide].location && (
                                    <div className="flex items-center justify-center text-white/90 text-xl mb-12">
                                        <MapPin className="h-6 w-6 mr-2 text-avanza-gold" />
                                        {carouselSlides[currentSlide].location}
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                    <Button
                                        size="lg"
                                        className="text-lg px-10 py-6 bg-avanza-gold hover:bg-avanza-gold/90 text-avanza-navy font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                        asChild
                                    >
                                        <Link to="/prestamos">
                                            <DollarSign className="mr-2 h-5 w-5" />
                                            Solicitar Préstamo
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-10 py-6 border-2 border-white text-green-800 hover:bg-white hover:text-avanza-navy font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                        asChild
                                    >
                                        <Link to="/bienes-raices">
                                            <Home className="mr-2 h-5 w-5" />
                                            Ver Propiedades
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                        onClick={previousSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-20"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                        {carouselSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 rounded-full transition-all ${
                                    index === currentSlide
                                        ? "w-12 bg-avanza-gold"
                                        : "w-3 bg-white/50 hover:bg-white/70"
                                }`}
                            />
                        ))}
                    </div>
                </section>

                {/* Requirements Section - Green Background */}
                <section className="py-20 px-4 bg-gradient-to-br from-avanza-green to-avanza-green/80 relative overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16 animate-fadeInUp">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700 hero-title">
                                Requisitos para tu Préstamo
                            </h2>
                            <p className="text-xl text-amber-700 max-w-2xl mx-auto font-medium">
                                Solo necesitas 3 documentos básicos para iniciar
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: FileText,
                                    title: "Documentos de la Garantía",
                                    description: "Escritura o documentos legales de la propiedad que ofrecerás como garantía",
                                    delay: "100"
                                },
                                {
                                    icon: CreditCard,
                                    title: "Identificación",
                                    description: "Cédula de identidad o pasaporte vigente del solicitante",
                                    delay: "200"
                                },
                                {
                                    icon: Receipt,
                                    title: "Recibos de Servicios",
                                    description: "Recibo de energía eléctrica y agua del último mes",
                                    delay: "300"
                                }
                            ].map((req, index) => (
                                <Card
                                    key={index}
                                    className={`text-center bg-amber-100 hover:shadow-2xl transition-all duration-500 border-0 group animate-scaleIn animate-delay-${req.delay}`}
                                >
                                    <CardHeader>
                                        <div className="w-20 h-20 bg-gradient-to-br from-avanza-green to-avanza-green/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <req.icon className="h-10 w-10 text-blue-950" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-gray-700">
                                            {req.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-800 text-avanza-navy/70 leading-relaxed font-medium">
                                            {req.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-white text-lg font-semibold mb-6">
                                ¡Es así de simple! Sin complicaciones ni trámites extensos
                            </p>
                            <Button
                                size="lg"
                                className="bg-avanza-gold hover:bg-avanza-gold/90 text-avanza-navy font-bold text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                asChild
                            >
                                <Link to="/prestamos">
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Comenzar Solicitud
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Section - Navy/Gold gradient */}
                <section className="bg-blue-950 py-20 px-4 from-white via-avanza-gold/10 to-white">
                    <div>
                        <div className="text-center mb-16 animate-fadeInUp">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white hero-title">
                                Nuestros Servicios
                            </h2>
                            <p className="text-xl text-white max-w-2xl mx-auto font-medium">
                                Soluciones financieras e inmobiliarias diseñadas para ti
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Prestamos Card - 70% focus */}
                            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-avanza-gold/30 hover:border-avanza-gold overflow-hidden md:col-span-2 lg:col-span-1 animate-slideInLeft">
                                <div className="absolute inset-0 bg-gradient-to-br from-avanza-navy via-avanza-navy/95 to-avanza-navy/90 opacity-90"></div>
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                                        alt="Bienes Raíces"
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <CardHeader className="text-center pb-6">
                                        <div className="w-24 h-24 bg-avanza-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shimmer">
                                            <DollarSign className="h-12 w-12 text-green-600" />
                                        </div>
                                        <CardTitle className="text-3xl font-bold text-blue-950 mb-3">
                                            Préstamos Rápidos
                                        </CardTitle>
                                        <CardDescription className="text-xl text-avanza-gold font-semibold">
                                            Financiamiento ágil con tu garantía
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className="space-y-4 mb-8">
                                            {[
                                                { icon: Award, text: "Avalúo completamente GRATIS" },
                                                { icon: Clock, text: "Aprobación en solo 48 horas" },
                                                { icon: BadgeCheck, text: "NO revisamos Central de Riesgos" },
                                                { icon: Zap, text: "NO necesitas constancia de trabajo" },
                                                { icon: Shield, text: "Solo evaluamos tu garantía" }
                                            ].map((feature, index) => (
                                                <div key={index} className="flex items-center text-left rounded-lg p-2">
                                                    <feature.icon className="h-5 w-5 text-avanza-gold mr-3 flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Button
                                            asChild
                                            className="w-full bg-avanza-gold hover:bg-avanza-gold/90 text-avanza-navy font-bold text-lg py-6 shadow-xl"
                                            size="lg"
                                        >
                                            <Link to="/prestamos">
                                                Solicitar Préstamo Ahora
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </div>
                            </Card>

                            {/* Bienes Raices Card */}
                            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-avanza-navy/30 hover:border-avanza-navy overflow-hidden animate-slideInRight">
                                <div className="absolute inset-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                                        alt="Bienes Raíces"
                                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <CardHeader className="text-center pb-6">
                                        <div className="w-24 h-24 bg-avanza-navy rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                            <Home className="h-12 w-12 text-avanza-gold" />
                                        </div>
                                        <CardTitle className="text-3xl font-bold text-gray-700 mb-3">
                                            Bienes Raíces
                                        </CardTitle>
                                        <CardDescription className="text-xl text-gray-700 font-semibold">
                                            Tu propiedad ideal te espera
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-gray-700 mb-8 leading-relaxed font-medium text-lg">
                                            Explora nuestra amplia selección de propiedades residenciales y comerciales.
                                            Desde casas familiares hasta terrenos para inversión, te ayudamos a encontrar
                                            el lugar perfecto para ti.
                                        </p>
                                        <Button
                                            asChild
                                            className="w-full bg-avanza-navy hover:bg-avanza-navy/90 text-white font-bold text-lg py-6 shadow-xl"
                                            size="lg"
                                        >
                                            <Link to="/bienes-raices">
                                                Explorar Propiedades
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section - Mixed Colors */}
                <section className="py-20 px-4 bg-gradient-to-b from-avanza-navy/5 to-white">
                    <div>
                        <div className="text-center mb-16 animate-fadeInUp">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700 hero-title">
                                ¿Por Qué Elegirnos?
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                                Más de 15 años de experiencia respaldando tus decisiones financieras
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Experiencia - Gold */}
                            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-blue-950 from-avanza-gold to-avanza-gold/80 text-blue-900 group animate-scaleIn">
                                <CardHeader>
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <Users className="h-10 w-10 text-avanza-gold" />
                                    </div>
                                    <CardTitle className="text-white text-2xl font-bold">Experiencia</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/90 leading-relaxed font-medium">
                                        Equipo de expertos con más de 20 años en el mercado financiero e inmobiliario
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Confianza - Navy (Center) */}
                            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-amber-500 from-avanza-navy to-avanza-navy/90 text-white group animate-scaleIn animate-delay-100 md:-mt-4">
                                <CardHeader>
                                    <div className="w-24 h-24 bg-avanza-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <Shield className="h-12 w-12 text-avanza-navy" />
                                    </div>
                                    <CardTitle className="text-blue-950 text-2xl font-bold">Confianza Total</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-black leading-relaxed font-medium mb-4">
                                        Regulados y supervisados por las máximas autoridades financieras de Honduras
                                    </p>
                                    <div className="space-y-2 text-sm text-blue-900">
                                        <div className="flex items-center justify-center">
                                            <BadgeCheck className="h-4 w-4 mr-2" />
                                            <span className="font-semibold">Banco Central de Honduras</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <BadgeCheck className="h-4 w-4 mr-2" />
                                            <span className="font-semibold">Comisión de Banca y Seguros</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <BadgeCheck className="h-4 w-4 mr-2" />
                                            <span className="font-semibold">Servicio de Administración de Rentas</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Resultados - Green */}
                            <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-green-800 from-avanza-green to-avanza-green/80 text-white group animate-scaleIn animate-delay-200">
                                <CardHeader>
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <TrendingUp className="h-10 w-10 text-avanza-green" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-amber-500">Resultados</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white/90 leading-relaxed font-medium">
                                        Miles de clientes satisfechos han logrado sus objetivos financieros con nosotros
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Gold gradient */}
                <section className="py-20 px-4 bg-blue-950 from-avanza-gold via-avanza-gold/90 to-avanza-gold/80 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(30, 58, 138, 0.1) 20px, rgba(30, 58, 138, 0.1) 40px)`
                    }}></div>

                    <div className="container max-w-4xl mx-auto text-center relative z-10">
                        <div className="animate-fadeInUp">
                            <div className="w-24 h-24 bg-avanza-navy rounded-full flex items-center justify-center mx-auto mb-8 animate-float shadow-2xl">
                                <Award className="h-12 w-12 text-avanza-gold" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white hero-title">
                                ¿Listo para Comenzar?
                            </h2>
                            <p className="text-xl text-amber-600 mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
                                Nuestros asesores están listos para ayudarte a encontrar la mejor solución
                                financiera o inmobiliaria para tus necesidades
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="text-lg px-10 py-6 bg-avanza-navy hover:bg-avanza-navy/90 text-white font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                >
                                    <Users className="mr-2 h-5 w-5" />
                                    Hablar con un Asesor
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-10 py-6 bg-white border-2 border-avanza-navy text-avanza-navy hover:bg-avanza-navy hover:text-white font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                    asChild
                                >
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default PrincipalComponent;