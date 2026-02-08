/* Mediterranean Artisan Design - Home Page
 * Asymmetric layout, warm earth tones, artisan aesthetic
 * Hero with offset image, textured backgrounds, lead generation CTAs
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Sun,
  Battery,
  TrendingDown,
  Shield,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Ahorra Dinero",
      description: "Reduce tu factura eléctrica hasta un 90% con energía solar.",
    },
    {
      icon: Shield,
      title: "Energía Confiable",
      description: "Respaldo de baterías para mantener tu hogar funcionando siempre.",
    },
    {
      icon: Leaf,
      title: "Cuida el Planeta",
      description: "Reduce tu huella de carbono con energía 100% renovable.",
    },
    {
      icon: Battery,
      title: "Independencia Energética",
      description: "Libérate de la red eléctrica y sus aumentos constantes.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta Gratuita",
      description: "Evaluamos tus necesidades energéticas sin compromiso.",
    },
    {
      number: "02",
      title: "Diseño Personalizado",
      description: "Creamos un sistema solar adaptado a tu hogar.",
    },
    {
      number: "03",
      title: "Instalación Profesional",
      description: "Nuestros expertos instalan tu sistema con precisión artesanal.",
    },
    {
      number: "04",
      title: "Disfruta y Ahorra",
      description: "Comienza a generar tu propia energía limpia desde el día uno.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section - Asymmetric layout with offset image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left side */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium border border-accent/30">
                  ✨ Transforma tu hogar hoy
                </span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                El Camino Fácil a la{" "}
                <span className="text-primary">Energía Solar</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Descubre cómo hacer la transición de la red eléctrica a energía solar con respaldo de baterías de manera simple, confiable y económica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base px-8 py-6">
                    Solicita tu Consulta Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/proceso">
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                    Conoce el Proceso
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Instalación profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Garantía incluida</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Right side, offset */}
            <div className="relative lg:ml-12">
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-1_1770509355000_na1fn_aGVyby1zb2xhci1ob21l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTFfMTc3MDUwOTM1NTAwMF9uYTFmbl9hR1Z5YnkxemIyeGhjaTFvYjIxbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IzU4szCZRjlqdY~eCpylcZdiXmDM0GgBdRzgBauCfmtfDN8EqI6kEa6CLGZR0QoVo5iBdZt0Cg5KPMcDyBqVmLqKwD9UDw8D1aB8GgdBcd5cALbY3S7eL4mcDnKbuYOefevChgH0Y9A8GqD3a8lR7HCX3KdMhxXBJ3HfxUH6YTkvPabhDYhmLzuUn9-2V1TbkZlSVciVQjv6r0I7vXjUimylUrfGQxtv3un6-bdnNKcgPEg8CLskIy6bg73dG8ZlLLCnTyP2Vjdmbez-7I6qcNrtC83yhFV1LyFx2ZAIGYrQ-Cuwr~Da~YKS2InuTTw25cy6H~md~nLh5y6SjsVTmg__"
                  alt="Casa mediterránea con paneles solares"
                  className="w-full h-auto object-cover"
                />
                {/* Decorative border effect */}
                <div className="absolute inset-0 border-8 border-background/20 rounded-lg pointer-events-none"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-xl border border-border max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">90%</p>
                    <p className="text-sm text-muted-foreground">Ahorro promedio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor" className="text-background"/>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Por Qué Elegir Energía Solar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Invierte en tu futuro con una solución energética que beneficia tu bolsillo y el planeta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LUMA Crisis Awareness Section */}
      <section className="py-20 bg-destructive/5 border-t-4 border-destructive/20 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Crisis Information */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold border border-destructive/30">
                  ⚠️ La Crisis Energética de Puerto Rico
                </span>
              </div>
              
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                LUMA Está Fallando.
                <span className="text-destructive"> Tu Solución Está Aquí.</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">31 de Diciembre de 2024:</strong> Casi el 90% de los clientes de LUMA quedaron sin electricidad en Año Nuevo. Este no fue un incidente aislado—es parte de una crisis sistémica.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">La realidad:</strong> Puerto Rico depende del 94% de combustibles fósiles importados, paga las tarifas eléctricas más altas de cualquier estado estadounidense, y sufre apagones regulares que afectan hospitales, escuelas y negocios.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">El problema empeorará:</strong> La infraestructura envejecida, dañada por huracanes, sigue deteriorándose. Esperar a que LUMA repare la red podría tomar años.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-destructive text-background hover:bg-destructive/90 shadow-lg text-base px-8 py-6">
                    No Esperes Más: Consulta Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/calculadora">
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                    Calcula tu Ahorro
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right: Stats and Benefits */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg border-2 border-destructive/20 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">¿Por Qué Solar es tu Mejor Opción?</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Independencia Energética</h4>
                      <p className="text-sm text-muted-foreground">Genera tu propia energía sin depender de LUMA</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Protección Contra Apagones</h4>
                      <p className="text-sm text-muted-foreground">Baterías de respaldo mantienen tu hogar funcionando</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Ahorra Hasta 90%</h4>
                      <p className="text-sm text-muted-foreground">Reduce tu factura de electricidad drásticamente</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Solución Inmediata</h4>
                      <p className="text-sm text-muted-foreground">Comienza a ahorrar en semanas, no años</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              El Proceso es Más Fácil de lo que Piensas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuatro pasos simples para comenzar tu viaje hacia la independencia energética.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border-4 border-primary/20 mb-6 shadow-lg">
                    <span className="font-display text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/proceso">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                Conoce Más Detalles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with background image */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-4_1770509356000_na1fn_ZmFtaWx5LXNvbGFyLWJlbmVmaXRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTRfMTc3MDUwOTM1NjAwMF9uYTFmbl9abUZ0YVd4NUxYTnZiR0Z5TFdKbGJtVm1hWFJ6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TVYhkiuQo9vqK9fKZ1PcsFk7-QnxU~HvYs7uBZbf~ywgFFO4cJQZm3f6xdka3JVboB3gPuLPm0y1qm8EHuOAjKWXMnqfIUz6UmxnhgSyNrba5YtObZANUl-WFfER4TW7ufzQK901FzBS3-N1fMdujLzL69hhVFZz6Dt6SxuCRHI9cTFvWZUOV3VBVjV0cMMRAhrSrVrgDiwVfpBKC5Mj9bAH2grbGhXHLqxwNZ3zKuGkCvKfKrfRW-kiHDWbqEqZDphb6FNnUCYVK2MSImeyXZAdCj~VEHl6KNm2hkXLedQu40zIIoEG38PiznVYs3CnC8ciIZ3EiYbNz6ZRyd4-vg__"
            alt="Familia feliz con energía solar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/90"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-background">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Da el Primer Paso Hacia tu Independencia Energética
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicita una consulta gratuita y descubre cuánto puedes ahorrar con energía solar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-xl text-base px-8 py-6">
                  Solicita tu Consulta Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 text-base px-8 py-6 border-2">
                  Preguntas Frecuentes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
