/* Mediterranean Artisan Design - Benefits Page
 * Detailed benefits of solar energy with warm aesthetic
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  TrendingDown,
  Shield,
  Leaf,
  Battery,
  Home,
  Award,
  Zap,
  DollarSign,
  ArrowRight,
} from "lucide-react";

export default function Beneficios() {
  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Ahorro Económico Inmediato",
      description:
        "Reduce tu factura eléctrica desde el primer mes. Los sistemas solares pueden disminuir tus costos de energía hasta un 90%, generando ahorros significativos que se acumulan año tras año.",
      stats: "Hasta 90% de ahorro",
    },
    {
      icon: Shield,
      title: "Protección Contra Apagones",
      description:
        "Con un sistema de respaldo de baterías, tu hogar permanece energizado incluso durante cortes de luz. Mantén tu refrigerador, luces y dispositivos esenciales funcionando sin interrupciones.",
      stats: "Energía 24/7",
    },
    {
      icon: Leaf,
      title: "Impacto Ambiental Positivo",
      description:
        "Cada sistema solar residencial evita la emisión de toneladas de CO₂ anualmente. Contribuye activamente a la lucha contra el cambio climático mientras disfrutas de energía limpia.",
      stats: "Cero emisiones",
    },
    {
      icon: Battery,
      title: "Independencia Energética",
      description:
        "Libérate de los aumentos constantes en las tarifas eléctricas. Con energía solar, produces tu propia electricidad y controlas tus costos energéticos a largo plazo.",
      stats: "Autonomía total",
    },
    {
      icon: Home,
      title: "Incremento en el Valor de tu Propiedad",
      description:
        "Las casas con sistemas solares se venden más rápido y a precios más altos. Los compradores valoran los ahorros energéticos y la infraestructura moderna ya instalada.",
      stats: "+15% valor promedio",
    },
    {
      icon: Award,
      title: "Incentivos y Créditos Fiscales",
      description:
        "Aprovecha deducciones fiscales federales y estatales que pueden cubrir hasta el 30% del costo de instalación. Programas de financiamiento hacen la transición aún más accesible.",
      stats: "Hasta 30% crédito fiscal",
    },
  ];

  const additionalBenefits = [
    {
      icon: Zap,
      title: "Tecnología Probada",
      description: "Sistemas con garantías de 25+ años y eficiencia comprobada.",
    },
    {
      icon: TrendingDown,
      title: "Costos Predecibles",
      description: "Olvídate de las sorpresas en tu factura eléctrica mensual.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium border border-accent/30">
                Beneficios Comprobados
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transforma tu Hogar con{" "}
              <span className="text-primary">Energía Solar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Descubre cómo la energía solar no solo reduce tus costos, sino que también protege tu hogar, aumenta su valor y contribuye a un futuro más sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      {benefit.stats}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section with Stats */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-3_1770509357000_na1fn_c29sYXItaW5zdGFsbGF0aW9uLWFydGlzYW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTNfMTc3MDUwOTM1NzAwMF9uYTFmbl9jMjlzWVhJdGFXNXpkR0ZzYkdGMGFXOXVMV0Z5ZEdsellXNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jh3s9DU5RV2Uo9o4MASnQdqOUBFEMHYrsPSH~dcJy5pXR-wzLiYDOUvqWjSnTEq-PUtAcjPsoaC-tpwyy~ofHnQ4fGvty~2iszhOkLK6rNFOYnSCCj9IJHEsBoUL0JmQLpz9OkrBRDNdjfmTI1bjfNj9dQsQSNGz-1vrozcDgxdnPQDBjHCuYWgo8o4BSvYZgrFgo8Ir5v4AplHWsABY3BNhMF3se2hqPFHLko3SeN7Sj9S4ldsjlQn9I6NdBYc4MdalNmq2pSBTxK8dkWr0dJfPECbsSoPoIpHmXmWJa~Jy~iUMgWU73-cJBuNvYb8~yRY7wpAP1K83dHXJfyQMSQ__"
                alt="Instalación artesanal de paneles solares"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Instalación Profesional con Garantía
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro equipo de expertos certificados realiza cada instalación con precisión artesanal, asegurando el máximo rendimiento y durabilidad de tu sistema solar.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-sm text-muted-foreground">Años de garantía</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfacción del cliente</p>
                </div>
              </div>

              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-5_1770509352000_na1fn_YWJzdHJhY3Qtc29sYXItZW5lcmd5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTVfMTc3MDUwOTM1MjAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRjMjlzWVhJdFpXNWxjbWQ1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fb-JmCaq2AIQM5bqpavTkuLPnGv7SYUxkDM2~XPI6jLaikB2RebLgL34pc-yZZra~YheJ-cQe-3cL4KulYEb6ll6HsjDf5ZDmE5W5BUwVTO2u0-fybQSJlgPzlibLJKjDPtrCPFKyT4Toh~IH3oN~9-QHbcJ868A5ZoPvZ8JGqt-fk8gcyiJ4izsgnUkQ2~XSTIfbaVsL5AQIdj2Yq1vml8okIZQyjqMk6UxvtM9oqmzXHJaNWQLN0KjXTel0mcxoB~kA1cBhNowl3P7we6z1ZOpqyVwWXg0YHU84IFgmY2oObvHzo5ERzIACGGzMBqvHFimL~AHYJjFUZoY8KoM-w__"
            alt="Abstract solar energy"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Comenzar a Ahorrar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicita una evaluación gratuita y descubre exactamente cuánto puedes ahorrar con energía solar.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-xl text-base px-8 py-6">
                Solicita tu Consulta Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
