import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {BadgeCheck, Shield, TrendingUp, Users} from "lucide-react";

const ElegirnosComponent = () => {
    return(
        <div>
            {/* Why Choose Us Section - Mixed Colors */}
            <section className="py-20 px-4 bg-gradient-to-b from-avanza-navy/5 to-white">
                <div>
                    <div className="text-center mb-16 animate-fadeInUp">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700 hero-title">
                            ¿Por Qué Elegirnos?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                            Más de 20 años de experiencia respaldando tus decisiones financieras
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Experiencia - Gold */}
                        <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-blue-950 from-avanza-gold to-avanza-gold/80 text-blue-900 group animate-scaleIn">
                            <CardHeader>
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <Users className="h-10 w-10 text-blue-950" />
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
                        <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 bg-amber-600 from-avanza-navy to-avanza-navy/90 text-white group animate-scaleIn animate-delay-100 md:-mt-4">
                            <CardHeader>
                                <div className="w-24 h-24 bg-avanza-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                    <Shield className="h-12 w-12 text-avanza-navy" />
                                </div>
                                <CardTitle className="text-white text-2xl font-bold">Confianza Total</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white leading-relaxed font-medium mb-4">
                                    Regulados y supervisados por las máximas autoridades financieras de Honduras
                                </p>
                                <div className="space-y-2 text-sm text-amber-950">
                                    <div className="flex items-center justify-center">
                                        <BadgeCheck className="h-6 w-6" />
                                        <span className="font-semibold">Comisión Nacional de Banca y Seguros</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <BadgeCheck className="h-6 w-6" />
                                        <span className="font-semibold">Servicio de Administración de Rentas</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <BadgeCheck className="h-6 w-6 mr-2" />
                                        <span className="font-semibold">Banco Central de Honduras</span>
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
                                <CardTitle className="text-2xl font-bold text-white">Resultados</CardTitle>
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
        </div>
    )
}

export default ElegirnosComponent;