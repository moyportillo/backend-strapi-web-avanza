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
    Clock,
    BadgeCheck,
    Zap,
    Award
} from "lucide-react";
import MetropolisImg from "@/assets/img/metro.jpg";
import MoneyImg from "@/assets/img/money.jpg";
import HomeImg from "@/assets/img/house.jpg";
import { useState, useEffect } from "react";
import ElegirnosComponent from "@/pages/elegirnos";

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
        image: MetropolisImg,
        title: "AVANZA",
        subtitle: "Bienes Raíces y Consultoría Financiera",
        icon: MapPin,
        location: "Torres Metropolis, Bulevar Suyapa, Tegucigalpa, Honduras"
    },
    {
        id: 2,
        image: MoneyImg,
        title: "Soluciones Financieras",
        subtitle: "Préstamos rápidos y seguros con tu garantía"
    },
    {
        id: 3,
        image: HomeImg,
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
                                        src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80"
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

                <ElegirnosComponent />

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