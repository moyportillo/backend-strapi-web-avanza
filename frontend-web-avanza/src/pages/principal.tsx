import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, DollarSign, Shield, Users, TrendingUp, Award } from "lucide-react";

const PrincipalComponent = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                            Tu Futuro Financiero
                            <span className="text-accent block">Comienza Aquí</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                            Descubre las mejores oportunidades en bienes raíces y obtén los préstamos que necesitas para hacer
                            realidad tus sueños financieros.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8" asChild>
                                <Link to="/bienes-raices">
                                    <Home className="mr-2 h-5 w-5" />
                                    Explorar Propiedades
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                                <Link to="/prestamos">
                                    <DollarSign className="mr-2 h-5 w-5" />
                                    Ver Préstamos
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-4">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Ofrecemos soluciones integrales para todas tus necesidades financieras
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
                                <CardHeader className="text-center pb-4">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                        <Home className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-2xl">Bienes Raíces</CardTitle>
                                    <CardDescription className="text-lg">Encuentra la propiedad perfecta para ti</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground mb-6">
                                        Explora nuestra amplia selección de propiedades residenciales y comerciales. Desde casas familiares
                                        hasta inversiones comerciales.
                                    </p>
                                    <Button asChild className="w-full">
                                        <Link to="/bienes-raices">
                                            Ver Propiedades
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20">
                                <CardHeader className="text-center pb-4">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                        <DollarSign className="h-8 w-8 text-accent" />
                                    </div>
                                    <CardTitle className="text-2xl">Préstamos</CardTitle>
                                    <CardDescription className="text-lg">Financiamiento flexible para tus proyectos</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground mb-6">
                                        Obtén el financiamiento que necesitas con tasas competitivas y términos flexibles adaptados a tu
                                        situación financiera.
                                    </p>
                                    <Button asChild className="w-full">
                                        <Link to="/prestamos">
                                            Solicitar Préstamo
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-4 bg-muted/20">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Más de 15 años de experiencia respaldando tus decisiones financieras
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Confianza</h3>
                                <p className="text-muted-foreground">
                                    Regulados y certificados por las autoridades financieras competentes
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
                                <p className="text-muted-foreground">Equipo de expertos con más de 15 años en el mercado financiero</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Resultados</h3>
                                <p className="text-muted-foreground">
                                    Miles de clientes satisfechos han logrado sus objetivos financieros
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="container max-w-4xl mx-auto text-center">
                        <div className="bg-accent/5 rounded-2xl p-12 border border-accent/20">
                            <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Comenzar?</h2>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Nuestros asesores están listos para ayudarte a encontrar la mejor solución para tus necesidades
                                financieras.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="text-lg px-8">
                                    Hablar con un Asesor
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                                    Calcular Préstamo
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

