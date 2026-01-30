import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart, Phone, ChevronLeft, ChevronRight, Home, MapPinned } from "lucide-react"
import { useState } from "react"

type Property = {
    id: number
    title: string
    price: string
    location: string
    bedrooms?: number
    bathrooms?: number
    area: string
    type: "Casa" | "Terreno"
    description: string
    images: string[]
}

const properties: Property[] = [
    {
        id: 1,
        title: "Casa Moderna en Zona Residencial Premium",
        price: "$450,000",
        location: "Colonia Del Valle, Tegucigalpa",
        bedrooms: 3,
        bathrooms: 2,
        area: "180 m²",
        type: "Casa",
        description: "Hermosa casa con acabados de lujo, amplio jardín y excelente ubicación cerca de escuelas y centros comerciales.",
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        ],
    },
    {
        id: 2,
        title: "Casa Familiar con Jardín Amplio",
        price: "$380,000",
        location: "Residencial El Trapiche, Tegucigalpa",
        bedrooms: 4,
        bathrooms: 3,
        area: "220 m²",
        type: "Casa",
        description: "Casa espaciosa ideal para familias, con áreas verdes, terraza y garaje para 2 vehículos.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        ],
    },
    {
        id: 3,
        title: "Casa en Condominio Privado",
        price: "$290,000",
        location: "Lomas del Guijarro, Tegucigalpa",
        bedrooms: 3,
        bathrooms: 2,
        area: "160 m²",
        type: "Casa",
        description: "Casa en exclusivo condominio con seguridad 24/7, áreas recreativas y piscina comunitaria.",
        images: [
            "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
        ],
    },
    {
        id: 4,
        title: "Terreno Residencial con Todos los Servicios",
        price: "$85,000",
        location: "Valle de Ángeles, Francisco Morazán",
        area: "500 m²",
        type: "Terreno",
        description: "Excelente terreno plano, con todos los servicios básicos disponibles. Ideal para construir la casa de tus sueños.",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
            "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800&q=80",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
        ],
    },
    {
        id: 5,
        title: "Amplio Terreno Comercial Céntrico",
        price: "$150,000",
        location: "Boulevard Morazán, Tegucigalpa",
        area: "800 m²",
        type: "Terreno",
        description: "Terreno comercial en ubicación estratégica, perfecto para desarrollo de plaza comercial o edificio de oficinas.",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
            "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80",
        ],
    },
    {
        id: 6,
        title: "Casa de Lujo con Vista Panorámica",
        price: "$650,000",
        location: "Las Colinas, Tegucigalpa",
        bedrooms: 5,
        bathrooms: 4,
        area: "350 m²",
        type: "Casa",
        description: "Casa de alto nivel con vistas espectaculares a la ciudad, piscina infinita y acabados de primera calidad.",
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        ],
    },
]

const PropertyCard = ({ property }: { property: Property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
    }

    const previousImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
    }

    return (
        <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-avanza-gold/30">
            <div className="relative h-64 overflow-hidden bg-avanza-navy/5">
                <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Carousel Controls */}
                {property.images.length > 1 && (
                    <>
                        <button
                            onClick={previousImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-avanza-navy p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-avanza-navy p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {property.images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all ${
                                        index === currentImageIndex
                                            ? "w-6 bg-avanza-gold"
                                            : "w-1.5 bg-white/60"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                    <Badge className="bg-avanza-navy text-white border-avanza-gold border font-semibold">
                        {property.type}
                    </Badge>
                </div>

                {/* Favorite Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsFavorite(!isFavorite)
                    }}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                    <Heart
                        className={`h-5 w-5 transition-colors ${
                            isFavorite ? "fill-red-500 text-red-500" : "text-avanza-navy"
                        }`}
                    />
                </button>
            </div>

            <CardHeader className="pb-3">
                <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-avanza-navy leading-tight">
                        {property.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-base">
                        <MapPin className="h-4 w-4 mr-1.5 text-avanza-gold" />
                        {property.location}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Property Features */}
                <div className="flex flex-wrap gap-4 text-sm text-avanza-navy/70">
                    {property.bedrooms && (
                        <div className="flex items-center font-medium">
                            <Bed className="h-4 w-4 mr-1.5 text-avanza-gold" />
                            {property.bedrooms} hab
                        </div>
                    )}
                    {property.bathrooms && (
                        <div className="flex items-center font-medium">
                            <Bath className="h-4 w-4 mr-1.5 text-avanza-gold" />
                            {property.bathrooms} baños
                        </div>
                    )}
                    <div className="flex items-center font-medium">
                        <Square className="h-4 w-4 mr-1.5 text-avanza-gold" />
                        {property.area}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-avanza-navy/60 line-clamp-2 leading-relaxed">
                    {property.description}
                </p>

                {/* Price */}
                <div className="pt-2">
                    <span className="text-3xl font-bold text-avanza-gold">
                        {property.price}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                    <Button className="flex-1 bg-avanza-navy hover:bg-avanza-navy/90 text-white font-semibold">
                        Ver Detalles
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 border-2 border-avanza-gold text-avanza-navy hover:bg-avanza-gold hover:text-white font-semibold"
                    >
                        Contactar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

const BienesRaicesPage = () => {
    const [filter, setFilter] = useState<"Todas" | "Casa" | "Terreno">("Todas")

    const filteredProperties = properties.filter(property => {
        if (filter === "Todas") return true
        return property.type === filter
    })

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-avanza-gold/5 to-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap');
                
                :root {
                    --avanza-navy: #1e3a8a;
                    --avanza-gold: #d4af37;
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
            `}</style>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 px-4 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-avanza-gold/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-avanza-navy/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container max-w-5xl mx-auto text-center relative z-10">
                        <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-avanza-navy animate-fadeInUp leading-tight">
                            Encuentra tu
                            <span className="block text-avanza-gold mt-2">Hogar Ideal</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-avanza-navy/70 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-100 font-medium">
                            Explora nuestra selección de propiedades premium en las mejores ubicaciones de Honduras.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-200">
                            <Button size="lg" className="text-lg px-10 py-6 bg-avanza-navy hover:bg-avanza-navy/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                                <Phone className="mr-2 h-5 w-5" />
                                Contactar Asesor
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-10 py-6 border-2 border-avanza-gold text-avanza-navy hover:bg-avanza-gold hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                <MapPinned className="mr-2 h-5 w-5" />
                                Agendar Visita
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Properties Section */}
                <section className="py-16 px-4">
                    <div className="container max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-avanza-navy mb-2">
                                    Propiedades Destacadas
                                </h2>
                                <p className="text-avanza-navy/60 text-lg">
                                    {filteredProperties.length} propiedad{filteredProperties.length !== 1 ? 'es' : ''} disponible{filteredProperties.length !== 1 ? 's' : ''}
                                </p>
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    onClick={() => setFilter("Todas")}
                                    variant={filter === "Todas" ? "default" : "outline"}
                                    className={`font-semibold transition-all ${
                                        filter === "Todas"
                                            ? "bg-avanza-navy text-white hover:bg-avanza-navy/90"
                                            : "border-2 border-avanza-navy/30 text-avanza-navy hover:border-avanza-navy hover:bg-avanza-navy/5"
                                    }`}
                                >
                                    <Home className="mr-2 h-4 w-4" />
                                    Todas
                                </Button>
                                <Button
                                    onClick={() => setFilter("Casa")}
                                    variant={filter === "Casa" ? "default" : "outline"}
                                    className={`font-semibold transition-all ${
                                        filter === "Casa"
                                            ? "bg-avanza-navy text-white hover:bg-avanza-navy/90"
                                            : "border-2 border-avanza-navy/30 text-avanza-navy hover:border-avanza-navy hover:bg-avanza-navy/5"
                                    }`}
                                >
                                    <Home className="mr-2 h-4 w-4" />
                                    Casas
                                </Button>
                                <Button
                                    onClick={() => setFilter("Terreno")}
                                    variant={filter === "Terreno" ? "default" : "outline"}
                                    className={`font-semibold transition-all ${
                                        filter === "Terreno"
                                            ? "bg-avanza-navy text-white hover:bg-avanza-navy/90"
                                            : "border-2 border-avanza-navy/30 text-avanza-navy hover:border-avanza-navy hover:bg-avanza-navy/5"
                                    }`}
                                >
                                    <MapPin className="mr-2 h-4 w-4" />
                                    Terrenos
                                </Button>
                            </div>
                        </div>

                        {/* Properties Grid - 2 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>

                        {filteredProperties.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-2xl text-avanza-navy/50 font-medium">
                                    No hay propiedades disponibles en esta categoría
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-avanza-navy/5 to-transparent">
                    <div className="container max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-avanza-navy mb-4 hero-title">
                                Nuestros Servicios
                            </h2>
                            <p className="text-xl text-avanza-navy/70 max-w-2xl mx-auto font-medium">
                                Te acompañamos en cada paso de tu inversión inmobiliaria
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Compra",
                                    description: "Encuentra la propiedad perfecta con nuestro equipo de expertos"
                                },
                                {
                                    title: "Venta",
                                    description: "Vendemos tu propiedad al mejor precio del mercado"
                                },
                                {
                                    title: "Renta",
                                    description: "Administramos tu propiedad y encontramos inquilinos ideales"
                                },
                                {
                                    title: "Inversión",
                                    description: "Asesoría especializada en inversiones inmobiliarias"
                                }
                            ].map((service, index) => (
                                <Card
                                    key={service.title}
                                    className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-avanza-gold/50 group"
                                >
                                    <CardHeader className="pb-4">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-avanza-gold to-avanza-gold/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white text-2xl font-bold">{index + 1}</span>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-avanza-navy">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-avanza-navy/60 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-r from-avanza-navy to-avanza-navy/90 text-white">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-title">
                            ¿Listo para encontrar tu propiedad ideal?
                        </h2>
                        <p className="text-xl mb-10 text-white/90 font-medium">
                            Contáctanos hoy y déjanos ayudarte a hacer realidad tus sueños inmobiliarios
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-12 py-6 bg-avanza-gold hover:bg-avanza-gold/90 text-avanza-navy font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Contáctanos Ahora
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default BienesRaicesPage