import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Calculator,
    Clock,
    Shield,
    TrendingDown,
    Home,
    User,
    Building,
    RefreshCw,
    CheckCircle,
} from "lucide-react"

type LoanType = {
    id: number
    title: string
    description: string
    rate: string
    term: string
    amount: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    features: string[]
}

const loanTypes: LoanType[] = [
    {
        id: 1,
        title: "Préstamo Hipotecario",
        description: "Financia la compra de tu casa con las mejores tasas del mercado",
        rate: "Desde 8.5% anual",
        term: "Hasta 30 años",
        amount: "Hasta $2,000,000",
        icon: Home,
        features: ["Sin comisión por apertura", "Pagos fijos", "Seguro incluido"],
    },
    {
        id: 2,
        title: "Préstamo Personal",
        description: "Liquidez inmediata para tus proyectos personales",
        rate: "Desde 12% anual",
        term: "Hasta 5 años",
        amount: "Hasta $500,000",
        icon: User,
        features: ["Aprobación rápida", "Sin garantía", "Uso libre"],
    },
    {
        id: 3,
        title: "Préstamo Comercial",
        description: "Impulsa tu negocio con capital de trabajo",
        rate: "Desde 10% anual",
        term: "Hasta 10 años",
        amount: "Hasta $5,000,000",
        icon: Building,
        features: ["Tasas preferenciales", "Plazos flexibles", "Asesoría especializada"],
    },
    {
        id: 4,
        title: "Refinanciamiento",
        description: "Mejora las condiciones de tu crédito actual",
        rate: "Desde 7.5% anual",
        term: "Hasta 25 años",
        amount: "Hasta el 80% del valor",
        icon: RefreshCw,
        features: ["Reduce tu pago mensual", "Libera capital", "Mejores condiciones"],
    },
]

type Benefit = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
}

const benefits: Benefit[] = [
    { icon: Clock, title: "Aprobación Rápida", description: "Respuesta en menos de 24 horas" },
    { icon: Shield, title: "Proceso Seguro", description: "Información protegida con encriptación" },
    { icon: TrendingDown, title: "Tasas Competitivas", description: "Las mejores tasas del mercado" },
    { icon: Calculator, title: "Simulador Gratuito", description: "Calcula tu préstamo sin compromiso" },
]

const PrestamosPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                            Préstamos que{" "}
                            <span className="text-accent block">Hacen Realidad tus Sueños</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Obtén el financiamiento que necesitas con tasas competitivas, procesos rápidos y
                            términos flexibles adaptados a tu perfil.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8">
                                <Calculator className="mr-2 h-5 w-5" /> Simular Préstamo
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8">
                                Solicitar Ahora
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-4">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                ¿Por Qué Elegir Nuestros Préstamos?
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Ofrecemos las mejores condiciones del mercado con un servicio personalizado
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, i) => (
                                <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <benefit.icon className="h-8 w-8 text-accent" />
                                        </div>
                                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Loan Types Section */}
                <section className="py-16 px-4 bg-muted/20">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Préstamos</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Encuentra el préstamo perfecto para tus necesidades
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {loanTypes.map((loan) => (
                                <Card key={loan.id} className="hover:shadow-lg border-2 hover:border-accent/20">
                                    <CardHeader>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                                <loan.icon className="h-6 w-6 text-accent" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{loan.title}</CardTitle>
                                                <Badge variant="secondary" className="mt-1">{loan.rate}</Badge>
                                            </div>
                                        </div>
                                        <CardDescription className="mt-2">{loan.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <p className="text-sm text-muted-foreground">Plazo</p>
                                                <p className="font-semibold">{loan.term}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Monto</p>
                                                <p className="font-semibold">{loan.amount}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {loan.features.map((f, i) => (
                                                <div key={i} className="flex items-center text-sm">
                                                    <CheckCircle className="h-4 w-4 text-accent mr-2" /> {f}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1">Solicitar</Button>
                                            <Button variant="outline">Más Info</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-16 px-4">
                    <div className="container max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simulador de Préstamos</h2>
                            <p className="text-xl text-muted-foreground">
                                Calcula tu préstamo y conoce tu pago mensual
                            </p>
                        </div>

                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Form */}
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Monto del Préstamo</label>
                                        <input
                                            type="text"
                                            placeholder="100,000"
                                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Plazo (años)</label>
                                        <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring">
                                            <option>5 años</option>
                                            <option>10 años</option>
                                            <option>15 años</option>
                                            <option>20 años</option>
                                            <option>25 años</option>
                                            <option>30 años</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Tasa de Interés Anual</label>
                                        <input
                                            type="text"
                                            placeholder="8.5"
                                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ring"
                                        />
                                    </div>

                                    <Button className="w-full" size="lg">
                                        <Calculator className="mr-2 h-5 w-5" /> Calcular Préstamo
                                    </Button>
                                </div>

                                {/* Result */}
                                <div className="bg-muted/30 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-6">Resultado del Cálculo</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between py-2 border-b">
                                            <span className="text-muted-foreground">Pago Mensual</span>
                                            <span className="text-2xl font-bold text-accent">$8,456</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-muted-foreground">Total a Pagar</span>
                                            <span className="font-semibold">$2,027,520</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span className="text-muted-foreground">Total de Intereses</span>
                                            <span className="font-semibold">$1,027,520</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 border-t pt-6">
                                        <Button variant="outline" className="w-full">
                                            Solicitar Este Préstamo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default PrestamosPage;