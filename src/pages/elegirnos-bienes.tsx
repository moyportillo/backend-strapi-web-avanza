import {Clock, Shield, TrendingDown, Users} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const ElegirnosBienesComponent = () => {
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
    return (
      <div>
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
  </div>
  );
}

export default ElegirnosBienesComponent;