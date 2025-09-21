import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart, Phone } from "lucide-react"

type Property = {
    id: number
    title: string
    price: string
    location: string
    bedrooms: number
    bathrooms: number
    area: string
    type: string
    image: string
}

const properties: Property[] = [
    {
        id: 1,
        title: "Casa Moderna en Zona Residencial",
        price: "$450,000",
        location: "Colonia Del Valle, CDMX",
        bedrooms: 3,
        bathrooms: 2,
        area: "180 m²",
        type: "Casa",
        image: "/modern-house-exterior.png",
    },
    {
        id: 2,
        title: "Departamento de Lujo",
        price: "$320,000",
        location: "Polanco, CDMX",
        bedrooms: 2,
        bathrooms: 2,
        area: "120 m²",
        type: "Departamento",
        image: "/luxury-apartment-interior.png",
    },
    {
        id: 3,
        title: "Casa Familiar con Jardín",
        price: "$380,000",
        location: "Satelite, Estado de México",
        bedrooms: 4,
        bathrooms: 3,
        area: "220 m²",
        type: "Casa",
        image: "/family-house-garden.png",
    },
    {
        id: 4,
        title: "Penthouse con Vista Panorámica",
        price: "$750,000",
        location: "Santa Fe, CDMX",
        bedrooms: 3,
        bathrooms: 3,
        area: "200 m²",
        type: "Penthouse",
        image: "/penthouse-city-view.png",
    },
    {
        id: 5,
        title: "Casa en Condominio",
        price: "$290,000",
        location: "Interlomas, Estado de México",
        bedrooms: 3,
        bathrooms: 2,
        area: "160 m²",
        type: "Casa",
        image: "/condominium-house.jpg",
    },
    {
        id: 6,
        title: "Loft Industrial",
        price: "$280,000",
        location: "Roma Norte, CDMX",
        bedrooms: 1,
        bathrooms: 1,
        area: "90 m²",
        type: "Loft",
        image: "/industrial-loft-interior.jpg",
    },
]

const BienesRaicesPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
                    <div className="container max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Encuentra tu
                            <span className="text-accent block">Hogar Ideal</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Explora nuestra selección de propiedades premium en las mejores ubicaciones. Desde casas familiares hasta
                            inversiones comerciales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8">
                                <Phone className="mr-2 h-5 w-5" />
                                Contactar Asesor
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                                Agendar Visita
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Properties Grid */}
                <section className="py-16 px-4">
                    <div className="container">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold">Propiedades Destacadas</h2>
                            <div className="flex gap-2">
                                <Badge variant="secondary">Todas</Badge>
                                <Badge variant="outline">Casas</Badge>
                                <Badge variant="outline">Departamentos</Badge>
                                <Badge variant="outline">Comercial</Badge>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties.map((property) => (
                                <Card key={property.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                                    <div className="relative">
                                        <img
                                            src={property.image || "/placeholder.svg"}
                                            alt={property.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-accent text-accent-foreground">{property.type}</Badge>
                                        </div>
                                        <Button size="sm" variant="secondary" className="absolute top-4 right-4 h-8 w-8 p-0">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg line-clamp-2">{property.title}</CardTitle>
                                            <span className="text-2xl font-bold text-accent">{property.price}</span>
                                        </div>
                                        <CardDescription className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {property.location}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center">
                                                <Bed className="h-4 w-4 mr-1" />
                                                {property.bedrooms} rec
                                            </div>
                                            <div className="flex items-center">
                                                <Bath className="h-4 w-4 mr-1" />
                                                {property.bathrooms} baños
                                            </div>
                                            <div className="flex items-center">
                                                <Square className="h-4 w-4 mr-1" />
                                                {property.area}
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1" size="sm">
                                                Ver Detalles
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Contactar
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 px-4 bg-muted/20">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios de Bienes Raíces</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Te acompañamos en cada paso del proceso inmobiliario
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {["Compra", "Venta", "Renta", "Inversión"].map((service) => (
                                <Card key={service} className="text-center">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{service}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {service === "Compra" &&
                                                "Encuentra la propiedad perfecta con nuestro equipo de expertos"}
                                            {service === "Venta" &&
                                                "Vendemos tu propiedad al mejor precio del mercado"}
                                            {service === "Renta" &&
                                                "Administramos tu propiedad y encontramos inquilinos ideales"}
                                            {service === "Inversión" &&
                                                "Asesoría especializada en inversiones inmobiliarias"}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default BienesRaicesPage;
