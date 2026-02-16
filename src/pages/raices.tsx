import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    MapPin,
    Bed,
    Bath,
    Square,
    Heart,
    Building,
    ChevronLeft,
    ChevronRight,
    Home,
    Handshake,
    Key,
    TrendingUp
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import ElegirnosBienes from "@/pages/elegirnos-bienes";
import buildWhatsAppUrl from "@/pages/utils";

type Property = {
    id: number
    title: string
    price: string
    location: string
    bedrooms?: number
    bathrooms?: number
    area: string
    type: "Casa" | "Terreno" | "Alquiler"
    description: string
    images: string[]
}

const properties: Property[] = [
    {
        id: 1,
        title: "Casa Moderna en Zona Residencial Premium",
        price: "L. 450,000",
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
        price: "L. 380,000",
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
        price: "L. 290,000",
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
        price: "L. 85,000",
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
        price: "L. 150,000",
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
        price: "L.650,000",
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
    {
        id: 7,
        title: "Apartamento en Renta",
        price: "L. 800/mes",
        location: "Colonia Palmira, Tegucigalpa",
        bedrooms: 2,
        bathrooms: 1,
        area: "85 m²",
        type: "Alquiler",
        description: "Apartamento moderno en excelente ubicación, ideal para profesionales o parejas jóvenes.",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        ],
    },
]

const PropertyCard = ({ property, isVisible }: { property: Property; isVisible: boolean }) => {
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
        <div className={`md:animate-on-scroll-scale ${isVisible ? 'visible' : ''}`}>
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-amber-500/50 h-full">
                <div className="relative h-64 overflow-hidden bg-blue-950/5">
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
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-950 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-950 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
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
                        <Badge className="bg-blue-950 text-white border-amber-500 border font-semibold">
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
                                isFavorite ? "fill-red-500 text-red-500" : "text-blue-950"
                            }`}
                        />
                    </button>
                </div>

                <CardHeader className="pb-3">
                    <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-blue-950 leading-tight">
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
                    <div className="flex flex-wrap gap-4 text-sm text-blue-950/70">
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
                    <p className="text-sm text-blue-950/60 line-clamp-2 leading-relaxed">
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
                        <Button className="flex-1 bg-blue-950 hover:bg-blue-900 text-white font-semibold">
                            Ver Detalles
                        </Button>
                        <a href={buildWhatsAppUrl(property.title)}>
                        <Button
                            variant="outline"
                            className="flex-1 border-2 border-avanza-gold text-blue-950 hover:bg-avanza-gold hover:text-blue-950 font-semibold"
                        >
                            Contactar
                        </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const BienesRaicesPage = () => {
    const [filter, setFilter] = useState<"Todas" | "Casa" | "Terreno" | "Alquiler">("Todas")
    const [isVisible, setIsVisible] = useState({
        hero: false,
        properties: false,
        services: false
    });

    const heroRef = useRef<HTMLElement>(null);
    const propertiesRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);

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

        const refs = [heroRef, propertiesRef, servicesRef];
        refs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const filteredProperties = properties.filter(property => {
        if (filter === "Todas") return true
        return property.type === filter
    })

    const services = [
        {
            icon: Home,
            title: "Compra",
            description: "Encuentra la propiedad perfecta con nuestro equipo de expertos",
            color: "blue" // Navy
        },
        {
            icon: Handshake,
            title: "Venta",
            description: "Vendemos tu propiedad al mejor precio del mercado",
            color: "gold" // Gold
        },
        {
            icon: Key,
            title: "Renta",
            description: "Encontramos inquilinos ideales para tu propiedad",
            color: "green" // Green
        },
        {
            icon: TrendingUp,
            title: "Inversión",
            description: "Asesoría especializada en inversiones inmobiliarias",
            color: "blue" // Navy
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50/30 to-white">
            <main className="flex-1">
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    data-section="hero"
                    className="py-20 px-4 relative overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className={`animate-on-scroll ${isVisible.hero ? 'visible' : ''}`}>
                            <h1 className="hero-title text-5xl md:text-7xl font-black mb-6 text-blue-950 leading-tight">
                                Encuentra tu
                                <span className="block text-avanza-gold mt-2">Hogar Ideal</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                                Explora nuestra selección de propiedades premium en las mejores ubicaciones de Honduras.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Properties Section */}
                <section
                    ref={propertiesRef}
                    data-section="properties"
                    className="py-16 px-4 bg-gray-200"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 animate-on-scroll ${isVisible.properties ? 'visible' : ''}`}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">
                                    Propiedades Destacadas
                                </h2>
                                <p className="text-blue-950/60 text-lg">
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
                                            ? "bg-blue-950 text-white hover:bg-blue-900"
                                            : "border-2 border-blue-950/30 text-blue-950 hover:border-blue-950 hover:bg-blue-950/5"
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
                                            ? "bg-blue-950 text-white hover:bg-blue-900"
                                            : "border-2 border-blue-950/30 text-blue-950 hover:border-blue-950 hover:bg-blue-950/5"
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
                                            ? "bg-blue-950 text-white hover:bg-blue-900"
                                            : "border-2 border-blue-950/30 text-blue-950 hover:border-blue-950 hover:bg-blue-950/5"
                                    }`}
                                >
                                    <MapPin className="mr-2 h-4 w-4" />
                                    Terrenos
                                </Button>
                                <Button
                                    onClick={() => setFilter("Alquiler")}
                                    variant={filter === "Alquiler" ? "default" : "outline"}
                                    className={`font-semibold transition-all ${
                                        filter === "Alquiler"
                                            ? "bg-blue-950 text-white hover:bg-blue-900"
                                            : "border-2 border-blue-950/30 text-blue-950 hover:border-blue-950 hover:bg-blue-950/5"
                                    }`}
                                >
                                    <Building className="mr-2 h-4 w-4" />
                                    Alquiler
                                </Button>
                            </div>
                        </div>

                        {/* Properties Grid - 2 columns on desktop, 1 on mobile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredProperties.map((property, index) => (
                                <div key={property.id} style={{ transitionDelay: `${index * 100}ms` }}>
                                    <PropertyCard property={property} isVisible={isVisible.properties} />
                                </div>
                            ))}
                        </div>

                        {filteredProperties.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-2xl text-blue-950/50 font-medium">
                                    No hay propiedades disponibles en esta categoría
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Services Section - Redesigned */}
                <section
                    ref={servicesRef}
                    data-section="services"
                    className="py-20 px-4 bg-gradient-to-b from-blue-950/5 to-transparent"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className={`text-center mb-16 animate-on-scroll ${isVisible.services ? 'visible' : ''}`}>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 hero-title">
                                Nuestros Servicios
                            </h2>
                            <p className="md:text-xl text-blue-950/70 max-w-2xl mx-auto font-medium">
                                Te acompañamos en cada paso de tu inversión inmobiliaria
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className={`service-card animate-on-scroll-scale ${isVisible.services ? 'visible' : ''}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <Card className={`text-center hover:shadow-2xl transition-all duration-500 border-0 group h-full ${
                                        service.color === 'blue' ? 'bg-gradient-to-br from-blue-950 to-blue-900' :
                                            service.color === 'gold' ? 'bg-avanza-gold to-amber-600' :
                                                'bg-gradient-to-br from-emerald-800 to-emerald-700'
                                    }`}>
                                        <CardHeader className="pb-4">
                                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl bg-white`}>
                                                <service.icon className={`h-10 w-10 ${
                                                    service.color === 'blue' ? 'text-blue-950' :
                                                        service.color === 'gold' ? 'text-avanza-gold' :
                                                            'text-emerald-600'
                                                }`} />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-white mb-3">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white/90 leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                            <div className={`h-1 w-16 mx-auto mt-6 rounded-full ${
                                                service.color === 'blue' ? 'bg-avanza-gold' :
                                                    service.color === 'gold' ? 'bg-blue-950' :
                                                        'bg-white'
                                            }`}></div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div>
                    <ElegirnosBienes/>
                </div>
            </main>
        </div>
    )
}

export default BienesRaicesPage