import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Award,
    Target,
    Eye,
    Users,
    TrendingUp,
    Shield,
    Heart,
    Zap,
    CheckCircle,
    Building2,
    Handshake,
    Lightbulb,
    Globe
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import HoverImg from "@/assets/img/metropolis.jpeg"

const NosotrosPage = () => {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        history: false,
        mission: false,
        vision: false,
        values: false,
        stats: false,
        team: false,
        cta: false
    });

    const heroRef = useRef<HTMLElement>(null);
    const historyRef = useRef<HTMLElement>(null);
    const missionRef = useRef<HTMLElement>(null);
    const visionRef = useRef<HTMLElement>(null);
    const valuesRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);
    const teamRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);

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

        const refs = [heroRef, historyRef, missionRef, visionRef, valuesRef, statsRef, teamRef, ctaRef];
        refs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const values = [
        {
            icon: Shield,
            title: "Integridad",
            description: "Actuamos con transparencia y honestidad en cada transacción, construyendo relaciones de confianza duraderas.",
            color: "blue"
        },
        {
            icon: Heart,
            title: "Compromiso",
            description: "Nos dedicamos al éxito de nuestros clientes, trabajando incansablemente para superar sus expectativas.",
            color: "gold"
        },
        {
            icon: Zap,
            title: "Innovación",
            description: "Adoptamos las mejores prácticas y tecnologías para ofrecer soluciones financieras modernas y eficientes.",
            color: "green"
        },
        {
            icon: Users,
            title: "Excelencia",
            description: "Mantenemos los más altos estándares de calidad en cada servicio que brindamos a nuestros clientes.",
            color: "blue"
        }
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
                    50% { transform: translateY(-20px); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .animate-pulse-slow {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .parallax-bg {
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }

                .shimmer {
                    background: linear-gradient(to right, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%);
                    background-size: 1000px 100%;
                    animation: shimmer 3s infinite;
                }
            `}</style>

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    data-section="hero"
                    className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={HoverImg}
                            alt="AVANZA Building"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/80 to-blue-950/90"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.hero ? 'visible' : ''}`}>
                            <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
                                Sobre
                                <span className="block text-avanza-gold mt-2">AVANZA</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                                Más de 20 años construyendo sueños y transformando vidas a través de soluciones financieras e inmobiliarias
                            </p>
                            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Company Description */}
                <section
                    ref={historyRef}
                    data-section="history"
                    className="py-20 px-4 bg-white"
                >
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`animate-slide-left ${isVisible.history ? 'visible' : ''}`}>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                                        alt="Historia AVANZA"
                                        className="rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-avanza-gold rounded-2xl -z-10"></div>
                                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-950 rounded-2xl -z-10"></div>
                                </div>
                            </div>

                            <div className={`animate-slide-right ${isVisible.history ? 'visible' : ''}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <Award className="h-10 w-10 text-avanza-gold" />
                                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 hero-title">
                                        Nuestra Historia
                                    </h2>
                                </div>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-lg">
                                        <span className="font-bold text-blue-950">AVANZA</span> nació en 2009 con una visión clara: democratizar el acceso a soluciones financieras e inmobiliarias en Honduras. Fundada por un equipo de profesionales con amplia experiencia en el sector, nuestra empresa se estableció con el compromiso de ofrecer servicios accesibles, transparentes y eficientes.
                                    </p>
                                    <p className="text-lg">
                                        A lo largo de más de 20 años, hemos crecido de manera constante, ganándonos la confianza de miles de familias y empresas hondureñas. Nuestra trayectoria está marcada por la innovación continua y el compromiso inquebrantable con nuestros clientes.
                                    </p>
                                    <p className="text-lg">
                                        Hoy, <span className="font-bold text-blue-950">AVANZA</span> es sinónimo de confiabilidad en el mercado financiero e inmobiliario, respaldados por las principales instituciones reguladoras del país y reconocidos por nuestra excelencia en el servicio.
                                    </p>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <div className="flex items-center gap-2 text-blue-950 font-semibold">
                                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                                        <span>Establecidos en 2009</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-950 font-semibold">
                                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                                        <span>20+ Años de Experiencia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section
                    ref={missionRef}
                    data-section="mission"
                    className="py-20 px-4 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="container max-w-6xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`animate-slide-left ${isVisible.mission ? 'visible' : ''}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-avanza-gold rounded-2xl flex items-center justify-center">
                                        <Target className="h-8 w-8 text-blue-950" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold hero-title">
                                        Misión
                                    </h2>
                                </div>
                                <p className="text-xl text-white/90 leading-relaxed mb-8">
                                    Proporcionar soluciones financieras e inmobiliarias innovadoras, accesibles y confiables que empoderen a nuestros clientes para alcanzar sus metas y construir un futuro próspero.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Facilitar el acceso a financiamiento con garantías",
                                        "Conectar a las personas con sus hogares ideales",
                                        "Mantener los más altos estándares éticos",
                                        "Impulsar el desarrollo económico de Honduras"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`animate-slide-right ${isVisible.mission ? 'visible' : ''}`}>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                        alt="Misión AVANZA"
                                        className="rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-800 rounded-2xl -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section
                    ref={visionRef}
                    data-section="vision"
                    className="py-20 px-4 bg-gradient-to-br from-green-800 to-emerald-700 text-white relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-6xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`animate-slide-left ${isVisible.vision ? 'visible' : ''} order-2 md:order-1`}>
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                        alt="Visión AVANZA"
                                        className="rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-avanza-gold rounded-2xl -z-10"></div>
                                </div>
                            </div>

                            <div className={`animate-slide-right ${isVisible.vision ? 'visible' : ''} order-1 md:order-2`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                                        <Eye className="h-8 w-8 text-avanza-gold" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold hero-title">
                                        Visión
                                    </h2>
                                </div>
                                <p className="text-xl text-white/90 leading-relaxed mb-8">
                                    Ser la empresa líder en Honduras en soluciones financieras e inmobiliarias, reconocida por nuestra innovación, integridad y el impacto positivo que generamos en la vida de nuestros clientes y en el desarrollo del país.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: Globe, text: "Expansión Nacional" },
                                        { icon: Lightbulb, text: "Innovación Continua" },
                                        { icon: Handshake, text: "Alianzas Estratégicas" },
                                        { icon: TrendingUp, text: "Crecimiento Sostenible" }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300">
                                            <item.icon className="h-8 w-8 mx-auto mb-2 text-avanza-gold" />
                                            <p className="text-sm font-semibold">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section
                    ref={valuesRef}
                    data-section="values"
                    className="py-20 px-4 bg-white"
                >
                    <div className="container max-w-6xl mx-auto">
                        <div className={`text-center mb-16 animate-on-scroll ${isVisible.values ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 hero-title">
                                Nuestros Valores
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                                Los principios que guían cada una de nuestras acciones y decisiones
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={value.title}
                                    className={`animate-on-scroll-scale ${isVisible.values ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <Card className={`text-center hover:shadow-2xl transition-all duration-500 border-0 h-full ${
                                        value.color === 'blue' ? 'bg-gradient-to-br from-blue-950 to-blue-900' :
                                            value.color === 'gold' ? 'bg-gradient-to-br from-[#d4af37] to-amber-600' :
                                                'bg-gradient-to-br from-green-800 to-emerald-700'
                                    }`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ${
                                                value.color === 'blue' ? 'bg-avanza-gold' :
                                                    value.color === 'gold' ? 'bg-blue-950' :
                                                        'bg-white'
                                            }`}>
                                                <value.icon className={`h-10 w-10 ${
                                                    value.color === 'blue' ? 'text-blue-950' :
                                                        value.color === 'gold' ? 'text-avanza-gold' :
                                                            'text-emerald-600'
                                                }`} />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-white mb-3">
                                                {value.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white/90 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    ref={ctaRef}
                    data-section="cta"
                    className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
                        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-4xl mx-auto text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.cta ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-title">
                                ¿Listo para Comenzar?
                            </h2>
                            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                                Únete a miles de clientes satisfechos que han confiado en AVANZA para alcanzar sus metas financieras e inmobiliarias
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="text-lg px-10 py-6 bg-avanza-gold hover:bg-amber-400 text-blue-950 font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                    asChild
                                >
                                    <Link to="/prestamos">
                                        <TrendingUp className="mr-2 h-5 w-5" />
                                        Solicitar Préstamo
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-10 py-6 bg-white border-2 border-white text-blue-950 hover:bg-transparent hover:text-white font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                                    asChild
                                >
                                    <Link to="/bienes-raices">
                                        <Building2 className="mr-2 h-5 w-5" />
                                        Ver Propiedades
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default NosotrosPage