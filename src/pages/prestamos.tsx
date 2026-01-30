import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Calculator,
    Clock,
    Shield,
    TrendingDown,
    Home,
    MapPin,
    Car,
    CheckCircle,
    FileText,
    Users,
    Handshake,
    DollarSign,
    Info,
    Send,
} from "lucide-react"
import { useState } from "react"

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
        description: "Obtén el mejor financiamiento dejando tu casa como garantía. Tasas preferenciales y montos competitivos.",
        icon: Home,
    },
    {
        id: 2,
        title: "Préstamos con Garantía de Terreno",
        description: "Aprovecha el valor de tu terreno para obtener liquidez inmediata. Procesos ágiles y flexibles.",
        icon: MapPin,
    },
    {
        id: 3,
        title: "Préstamos con Garantía de Vehículo",
        description: "Usa tu vehículo como garantía. Mantienes el uso de tu auto mientras pagas.",
        icon: Car,
    },
]

type Benefit = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    image: string
}

const benefits: Benefit[] = [
    {
        icon: Clock,
        title: "Aprobación Rápida",
        description: "Respuesta en menos de 24 horas",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80"
    },
    {
        icon: Shield,
        title: "Proceso Seguro",
        description: "Información protegida con altos estándares",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80"
    },
    {
        icon: TrendingDown,
        title: "Tasas Competitivas",
        description: "Las mejores tasas ajustadas a tu perfil",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
    },
    {
        icon: Users,
        title: "Asesoría Personalizada",
        description: "Expertos te acompañan en todo el proceso",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
    },
]

const PrestamosPage = () => {
    const [loanAmount, setLoanAmount] = useState<string>("")
    const [loanTerm, setLoanTerm] = useState<string>("5")
    const [interestRate, setInterestRate] = useState<string>("")
    const [showResults, setShowResults] = useState(false)
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
    const [totalPayment, setTotalPayment] = useState<number>(0)
    const [totalInterest, setTotalInterest] = useState<number>(0)

    const calculateLoan = () => {
        const principal = parseFloat(loanAmount.replace(/,/g, ""))
        const years = parseInt(loanTerm)
        const rate = parseFloat(interestRate) / 100

        if (isNaN(principal) || isNaN(years) || isNaN(rate) || principal <= 0 || years <= 0 || rate <= 0) {
            alert("Por favor ingresa valores válidos")
            return
        }

        const monthlyRate = rate / 12
        const numberOfPayments = years * 12

        const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

        const total = monthly * numberOfPayments
        const interest = total - principal

        setMonthlyPayment(monthly)
        setTotalPayment(total)
        setTotalInterest(interest)
        setShowResults(true)
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-HN', {
            style: 'currency',
            currency: 'HNL',
            minimumFractionDigits: 2,
        }).format(value)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap');
                
                :root {
                    --avanza-navy: #1e3a8a;
                    --avanza-gold: #d4af37;
                }
                
                .hero-title {
                    font-family: 'Playfair Display', serif;
                }
                
                body {
                    font-family: 'Montserrat', sans-serif;
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

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
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

                .benefit-card:hover {
                    transform: translateY(-12px) scale(1.02);
                }

                .benefit-card:hover .benefit-card-overlay {
                    opacity: 0.5;
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
                    animation: shimmer 3s infinite linear;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        rgba(212, 175, 55, 0.3) 50%,
                        transparent 100%
                    );
                    background-size: 1000px 100%;
                }
            `}</style>

            <main className="flex-1">
                <section className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#152a6b] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-5xl mx-auto text-center relative z-10">
                        <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-white animate-fadeInUp leading-tight">
                            Préstamos que
                            <span className="block text-[#d4af37] mt-2">Hacen Realidad tus Sueños</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-100 font-medium">
                            Obtén el financiamiento que necesitas con tasas competitivas y procesos rápidos
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-200">
                            <Button size="lg" className="text-lg px-10 py-6 bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#1e3a8a] font-bold shadow-2xl transition-all hover:scale-105">
                                <Calculator className="mr-2 h-5 w-5" />
                                Simular Préstamo
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold transition-all"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Solicitar Ahora
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/5 to-white relative">
                    <div className="absolute inset-0 shimmer pointer-events-none"></div>

                    <div className="container relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a8a] hero-title">
                                ¿Por Qué Elegirnos?
                            </h2>
                            <p className="text-xl text-[#1e3a8a]/70 max-w-2xl mx-auto font-medium">
                                Ofrecemos las mejores condiciones con un servicio de excelencia
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, i) => (
                                <Card
                                    key={i}
                                    className="benefit-card overflow-hidden border-2 hover:border-[#d4af37] shadow-lg hover:shadow-2xl cursor-pointer group transition-all duration-400"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="benefit-card-overlay absolute inset-0 bg-[#1e3a8a] opacity-60 transition-opacity duration-400"></div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                                                <benefit.icon className="h-10 w-10 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardHeader className="transition-all duration-400">
                                        <CardTitle className="text-xl font-bold text-[#1e3a8a] text-center">
                                            {benefit.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="transition-all duration-400">
                                        <p className="text-sm text-[#1e3a8a]/70 text-center leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gradient-to-b from-white via-[#1e3a8a]/5 to-[#1e3a8a]/10">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a8a] hero-title">
                                Tipos de Préstamos
                            </h2>
                            <p className="text-xl text-[#1e3a8a]/70 max-w-2xl mx-auto font-medium">
                                Elige según la garantía que deseas ofrecer
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {loanTypes.map((loan, index) => (
                                <Card
                                    key={loan.id}
                                    className={`hover:shadow-2xl border-2 hover:border-[#d4af37] transition-all duration-500 group overflow-hidden animate-fadeInUp animate-delay-${(index + 1) * 100}`}
                                >
                                    <CardHeader className="text-center pb-6 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent group-hover:from-[#d4af37]/10 transition-colors duration-500">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                            <loan.icon className="h-10 w-10 text-[#d4af37]" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-[#1e3a8a] mb-3">
                                            {loan.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed">
                                            {loan.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-6 space-y-4">
                                        <div className="flex gap-3">
                                            <Button className="flex-1 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold group-hover:bg-[#d4af37] group-hover:text-[#1e3a8a] transition-all duration-300">
                                                <Send className="mr-2 h-4 w-4" />
                                                Solicitar
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="flex-1 border-2 border-[#1e3a8a]/30 text-[#1e3a8a] hover:border-[#1e3a8a] hover:bg-[#1e3a8a]/5 font-semibold"
                                            >
                                                <Info className="mr-2 h-4 w-4" />
                                                Más Info
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gradient-to-br from-[#d4af37]/20 via-[#d4af37]/10 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e3a8a] hero-title">
                                Simulador de Préstamos
                            </h2>
                            <p className="text-xl text-[#1e3a8a]/70 font-medium">
                                Calcula tu préstamo y conoce tu pago mensual
                            </p>
                        </div>

                        <Card className="p-8 md:p-10 shadow-2xl border-2 border-[#d4af37]/30">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div>
                                        <label className="flex items-center text-base font-semibold mb-3 text-[#1e3a8a]">
                                            <DollarSign className="mr-2 h-5 w-5 text-[#d4af37]" />
                                            Monto del Préstamo (L)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="100,000"
                                            value={loanAmount}
                                            onChange={(e) => setLoanAmount(e.target.value)}
                                            className="w-full px-5 py-4 border-2 border-[#1e3a8a]/20 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-lg font-medium"
                                        />
                                    </div>

                                    <div>
                                        <label className="flex items-center text-base font-semibold mb-3 text-[#1e3a8a]">
                                            <Clock className="mr-2 h-5 w-5 text-[#d4af37]" />
                                            Plazo (años)
                                        </label>
                                        <select
                                            value={loanTerm}
                                            onChange={(e) => setLoanTerm(e.target.value)}
                                            className="w-full px-5 py-4 border-2 border-[#1e3a8a]/20 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-lg font-medium cursor-pointer"
                                        >
                                            <option value="1">1 año</option>
                                            <option value="2">2 años</option>
                                            <option value="3">3 años</option>
                                            <option value="5">5 años</option>
                                            <option value="10">10 años</option>
                                            <option value="15">15 años</option>
                                            <option value="20">20 años</option>
                                            <option value="25">25 años</option>
                                            <option value="30">30 años</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="flex items-center text-base font-semibold mb-3 text-[#1e3a8a]">
                                            <TrendingDown className="mr-2 h-5 w-5 text-[#d4af37]" />
                                            Tasa de Interés Anual (%)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="8.5"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full px-5 py-4 border-2 border-[#1e3a8a]/20 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all text-lg font-medium"
                                        />
                                    </div>

                                    <Button
                                        onClick={calculateLoan}
                                        className="w-full py-6 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                        size="lg"
                                    >
                                        <Calculator className="mr-2 h-5 w-5" />
                                        Calcular Préstamo
                                    </Button>
                                </div>

                                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/90 rounded-xl p-8 text-white shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-8 flex items-center">
                                        <FileText className="mr-3 h-6 w-6 text-[#d4af37]" />
                                        Resultado del Cálculo
                                    </h3>

                                    {!showResults ? (
                                        <div className="flex flex-col items-center justify-center h-64 text-center">
                                            <Calculator className="h-16 w-16 text-[#d4af37]/50 mb-4" />
                                            <p className="text-white/70 text-lg">
                                                Ingresa los datos y presiona "Calcular Préstamo"
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="space-y-6">
                                                <div className="bg-white/10 rounded-lg p-6 border-2 border-[#d4af37]/50">
                                                    <span className="text-white/80 text-sm font-medium block mb-2">
                                                        Pago Mensual
                                                    </span>
                                                    <span className="text-4xl font-black text-[#d4af37]">
                                                        {formatCurrency(monthlyPayment)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between py-4 border-b border-white/20">
                                                    <span className="text-white/80 font-medium">Total a Pagar</span>
                                                    <span className="font-bold text-xl">
                                                        {formatCurrency(totalPayment)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between py-4">
                                                    <span className="text-white/80 font-medium">Total de Intereses</span>
                                                    <span className="font-bold text-xl">
                                                        {formatCurrency(totalInterest)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-8 pt-8 border-t border-white/20">
                                                <Button
                                                    className="w-full py-6 bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#1e3a8a] font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                                    size="lg"
                                                >
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Solicitar Ahora
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#152a6b] text-white">
                    <div className="container max-w-6xl mx-auto">
                        <div className="text-center mb-16">
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
                                    className={`text-center group animate-fadeInUp animate-delay-${(index + 1) * 100}`}
                                >
                                    <div className="w-24 h-24 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <step.icon className="h-12 w-12 text-[#1e3a8a]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-white/80">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/90">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e3a8a] hero-title">
                            ¿Listo para Obtener tu Préstamo?
                        </h2>
                        <p className="text-xl mb-10 text-[#1e3a8a]/80 font-semibold">
                            Contáctanos hoy y comienza a hacer realidad tus proyectos
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-12 py-6 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold shadow-2xl transition-all hover:scale-105"
                        >
                            <Send className="mr-2 h-5 w-5" />
                            Solicitar Préstamo
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PrestamosPage