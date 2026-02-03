import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Shield,
    Home,
    MapPin,
    Car,
    CheckCircle,
    FileText,
    CreditCard,
    Receipt,
    Handshake,
    Info,
    Send,
    ArrowRight,
} from "lucide-react"
//import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

type LoanType = {
    id: number
    title: string
    description: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const loanTypes: LoanType[] = [
    {
        id: 1,
        title: "Préstamos con Garantía de Casa",
        description: "Obtén el mejor financiamiento dejando una casa como garantía. Tasas preferenciales y montos competitivos.",
        icon: Home,
    },
    {
        id: 2,
        title: "Préstamos con Garantía de Terreno",
        description: "Aprovecha el valor de un terreno para obtener liquidez inmediata. Procesos ágiles y flexibles.",
        icon: MapPin,
    },
    {
        id: 3,
        title: "Préstamos con Garantía de Vehículo",
        description: "Usa un vehículo como garantía. El vehículo queda bajo custodia durante la vigencia del financiamiento.",
        icon: Car,
    },
]

const PrestamosPage = () => {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        process: false,
        requirements: false,
        loanTypes: false,
        cta: false
    });

    const heroRef = useRef<HTMLElement>(null);
    const processRef = useRef<HTMLElement>(null);
    const requirementsRef = useRef<HTMLElement>(null);
    const loanTypesRef = useRef<HTMLElement>(null);
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

        const refs = [heroRef, processRef, requirementsRef, loanTypesRef, ctaRef];
        refs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700;800&display=swap');
                
                :root {
                    --avanza-navy: #1e3a8a;
                    --avanza-gold: #d4af37;
                    --avanza-green: #059669;
                }
                
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

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
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

                .requirement-card {
                    position: relative;
                    overflow: hidden;
                }

                .requirement-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
                    transition: left 0.5s;
                }

                .requirement-card:hover::before {
                    left: 100%;
                }
            `}</style>

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    data-section="hero"
                    className="py-20 px-4 bg-gradient-to-br from-white via-amber-50 to-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.hero ? 'visible' : ''}`}>
                            <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-blue-950 leading-tight">
                                Préstamos que
                                <span className="block text-amber-600 mt-2">Hacen Realidad tus Sueños</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                                Obtén el financiamiento que necesitas con tasas competitivas y procesos rápidos
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section
                    ref={processRef}
                    data-section="process"
                    className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden"
                >
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className={`text-center mb-16 animate-on-scroll ${isVisible.process ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white hero-title">
                                Proceso Simple y Rápido
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                                En solo 4 pasos obtén tu préstamo aprobado
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: FileText, title: "1. Solicita", desc: "Completa el formulario" },
                                { icon: Shield, title: "2. Evalúa", desc: "Analizamos tu perfil" },
                                { icon: CheckCircle, title: "3. Aprueba", desc: "Respuesta en 24 horas" },
                                { icon: Handshake, title: "4. Recibe", desc: "Dinero a tu cuenta" },
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className={`text-center group animate-on-scroll ${isVisible.process ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <step.icon className="h-12 w-12 text-blue-950" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-white/80">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Requirements Section - New Design */}
                <section
                    ref={requirementsRef}
                    data-section="requirements"
                    className="py-20 px-4 bg-gradient-to-b from-emerald-600 to-emerald-700 relative overflow-hidden"
                >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-10 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className={`text-center mb-16 animate-on-scroll ${isVisible.requirements ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white hero-title">
                                Requisitos para tu Préstamo
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                                Solo necesitas 3 documentos básicos para iniciar
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: FileText,
                                    title: "Documentos de la Garantía",
                                    description: "Escritura o documentos legales de la propiedad que ofrecerás como garantía",
                                    color: "blue" // Navy
                                },
                                {
                                    icon: CreditCard,
                                    title: "Identificación",
                                    description: "Cédula de identidad o pasaporte vigente del solicitante",
                                    color: "gold" // Gold
                                },
                                {
                                    icon: Receipt,
                                    title: "Recibos de Servicios",
                                    description: "Recibo de energía eléctrica y agua del último mes",
                                    color: "green" // Green
                                }
                            ].map((req, index) => (
                                <div
                                    key={index}
                                    className={`requirement-card animate-on-scroll-scale ${isVisible.requirements ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <Card className="text-center bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group h-full">
                                        <CardHeader className="pb-4">
                                            <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl ${
                                                req.color === 'blue' ? 'bg-gradient-to-br from-blue-950 to-blue-900' :
                                                    req.color === 'gold' ? 'bg-gradient-to-br from-amber-500 to-amber-600' :
                                                        'bg-gradient-to-br from-emerald-600 to-emerald-700'
                                            }`}>
                                                <req.icon className={`h-12 w-12 ${
                                                    req.color === 'blue' ? 'text-amber-400' :
                                                        req.color === 'gold' ? 'text-blue-950' :
                                                            'text-white'
                                                }`} />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-blue-950 mb-3">
                                                {req.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 leading-relaxed font-medium mb-6">
                                                {req.description}
                                            </p>
                                            <div className={`h-1 w-16 mx-auto rounded-full ${
                                                req.color === 'blue' ? 'bg-blue-950' :
                                                    req.color === 'gold' ? 'bg-amber-500' :
                                                        'bg-emerald-600'
                                            }`}></div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className={`text-center mt-12 animate-on-scroll ${isVisible.requirements ? 'visible' : ''}`} style={{ transitionDelay: '450ms' }}>
                            <p className="text-white text-lg font-semibold mb-6">
                                ¡Es así de simple! Sin complicaciones ni trámites extensos
                            </p>
                            <Button
                                size="lg"
                                className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                            >
                                <ArrowRight className="mr-2 h-5 w-5" />
                                Comenzar Solicitud
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Loan Types Section */}
                <section
                    ref={loanTypesRef}
                    data-section="loanTypes"
                    className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div>
                        <div className={`text-center mb-16 animate-on-scroll ${isVisible.loanTypes ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950 hero-title">
                                Tipos de Préstamos
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                                Elige según la garantía que deseas ofrecer
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {loanTypes.map((loan, index) => (
                                <div
                                    key={loan.id}
                                    className={`animate-on-scroll-scale ${isVisible.loanTypes ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <Card className="hover:shadow-2xl border-2 border-gray-200 hover:border-amber-500 transition-all duration-500 group overflow-hidden h-full">
                                        <CardHeader className="text-center pb-6 bg-gradient-to-br from-blue-950/5 to-transparent group-hover:from-amber-500/10 transition-colors duration-500">
                                            <div className="w-20 h-20 bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                                <loan.icon className="h-10 w-10 text-amber-400" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-blue-950 mb-3">
                                                {loan.title}
                                            </CardTitle>
                                            <CardDescription className="text-base leading-relaxed text-gray-600">
                                                {loan.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="pt-6 space-y-4">
                                            <div className="flex gap-3">
                                                <Button className="flex-1 bg-blue-950 hover:bg-blue-900 text-white font-semibold group-hover:bg-amber-500 group-hover:text-blue-950 transition-all duration-300 shadow-lg">
                                                    <Send className="mr-2 h-4 w-4" />
                                                    Solicitar
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 border-2 border-blue-950/30 text-blue-950 hover:border-blue-950 hover:bg-blue-950/5 font-semibold transition-all duration-300"
                                                >
                                                    <Info className="mr-2 h-4 w-4" />
                                                    Más Info
                                                </Button>
                                            </div>
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
                    className="py-20 px-4 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden"
                >
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(30, 58, 138, 0.1) 20px, rgba(30, 58, 138, 0.1) 40px)`
                    }}></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.cta ? 'visible' : ''}`}>
                            <div className="w-24 h-24 bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-float">
                                <Handshake className="h-12 w-12 text-amber-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950 hero-title">
                                ¿Listo para Obtener tu Préstamo?
                            </h2>
                            <p className="text-xl mb-10 text-blue-950/80 font-semibold max-w-2xl mx-auto leading-relaxed">
                                Contáctanos hoy y comienza a hacer realidad tus proyectos con el respaldo financiero que necesitas
                            </p>
                            <Button
                                size="lg"
                                className="text-lg px-12 py-6 bg-blue-950 hover:bg-blue-900 text-white font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Solicitar Préstamo Ahora
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PrestamosPage