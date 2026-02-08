/**
 * Home Page - Lead Generation Optimized
 * High-impact hero, urgency elements, strategic CTAs, social proof
 * Conversion-focused design with animations and micro-interactions
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
  Zap,
  AlertTriangle,
  Clock,
  Users,
  Star,
  Flame,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  const urgencyStats = [
    { number: "90%", label: "de clientes sin luz en Año Nuevo" },
    { number: "94%", label: "dependencia de combustibles fósiles" },
    { number: "$500+", label: "factura eléctrica promedio mensual" },
  ];

  const testimonials = [
    {
      name: "María González",
      location: "San Juan",
      text: "Instalé solar hace 6 meses. Cuando hubo apagón, mi casa fue la única con luz. ¡Mejor decisión!",
      savings: "Ahorra $180/mes",
    },
    {
      name: "Carlos Rodríguez",
      location: "Ponce",
      text: "Pasé de pagar $450 a $50 mensuales. El sistema se pagó en 4 años.",
      savings: "Ahorra $400/mes",
    },
    {
      name: "Ana Martínez",
      location: "Mayagüez",
      text: "Independencia total. No me preocupa que LUMA falle. Tengo energía garantizada.",
      savings: "Ahorra $350/mes",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Ahorra 90%",
      description: "Reduce tu factura de $450 a $50 mensuales",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Protección Total",
      description: "Baterías de respaldo durante apagones de LUMA",
      color: "text-secondary",
    },
    {
      icon: Leaf,
      title: "Energía Limpia",
      description: "100% renovable, cero emisiones de carbono",
      color: "text-secondary",
    },
    {
      icon: Clock,
      title: "Instalación Rápida",
      description: "Operativo en 2-4 semanas, sin interrupciones",
      color: "text-primary",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta Gratuita",
      description: "Analiza tu factura actual y potencial de ahorro",
      icon: Sun,
    },
    {
      number: "02",
      title: "Diseño Personalizado",
      description: "Sistema adaptado a tu consumo y techo",
      icon: Zap,
    },
    {
      number: "03",
      title: "Instalación Profesional",
      description: "Equipo certificado, garantía de 25 años",
      icon: Shield,
    },
    {
      number: "04",
      title: "Ahorro Inmediato",
      description: "Comienza a generar energía desde el día 1",
      icon: TrendingDown,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* HERO SECTION - Ultra High Impact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 pt-20 pb-32 lg:pt-32 lg:pb-48">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Ultra Compelling Copy */}
            <div className="space-y-8 text-background">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full border border-background/30 backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-semibold">⚠️ LUMA Está Colapsando - Actúa Ahora</span>
              </div>

              {/* Main Headline - Emotional + Benefit */}
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl font-black leading-tight">
                  Energía Solar
                  <br />
                  <span className="text-yellow-300">Sin Apagones</span>
                </h1>
                <p className="text-xl lg:text-2xl text-background/90 font-medium leading-relaxed">
                  Mientras LUMA falla, tú generas tu propia energía. Ahorra hasta 90% y nunca más te quedas sin luz.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                  <span>Instalación en 2-4 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                  <span>Garantía 25 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                  <span>Sin compromiso previo</span>
                </div>
              </div>

              {/* CTA Buttons - Primary Focus */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/contacto">
                  <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-300 shadow-2xl text-base font-bold px-8 py-7 h-auto">
                    Solicita tu Consulta Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/calculadora">
                  <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10 text-base font-bold px-8 py-7 h-auto">
                    Calcula tu Ahorro
                  </Button>
                </Link>
              </div>

              {/* Social Proof - Numbers */}
              <div className="flex gap-8 pt-4 border-t border-background/20">
                <div>
                  <p className="text-3xl font-black text-yellow-300">500+</p>
                  <p className="text-sm text-background/80">Hogares con energía solar</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-yellow-300">$2M+</p>
                  <p className="text-sm text-background/80">Ahorrados en total</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-yellow-300">4.9★</p>
                  <p className="text-sm text-background/80">Calificación promedio</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image with Overlay */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-1_1770509355000_na1fn_aGVyby1zb2xhci1ob21l.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTFfMTc3MDUwOTM1NTAwMF9uYTFmbl9hR1Z5YnkxemIyeGhjaTFvYjIxbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IzU4szCZRjlqdY~eCpylcZdiXmDM0GgBdRzgBauCfmtfDN8EqI6kEa6CLGZR0QoVo5iBdZt0Cg5KPMcDyBqVmLqKwD9UDw8D1aB8GgdBcd5cALbY3S7eL4mcDnKbuYOefevChgH0Y9A8GqD3a8lR7HCX3KdMhxXBJ3HfxUH6YTkvPabhDYhmLzuUn9-2V1TbkZlSVciVQjv6r0I7vXjUimylUrfGQxtv3un6-bdnNKcgPEg8CLskIy6bg73dG8ZlLLCnTyP2Vjdmbez-7I6qcNrtC83yhFV1LyFx2ZAIGYrQ-Cuwr~Da~YKS2InuTTw25cy6H~md~nLh5y6SjsVTmg__"
                  alt="Casa con energía solar y baterías"
                  className="w-full h-full object-cover"
                />
                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md p-6 rounded-xl border border-background/20">
                  <p className="text-sm text-muted-foreground mb-2">Ahorro Promedio Mensual</p>
                  <p className="text-4xl font-black text-primary">$350</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor" className="text-background"/>
          </svg>
        </div>
      </section>

      {/* URGENCY STATS SECTION */}
      <section className="py-16 bg-background border-b-2 border-destructive/20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {urgencyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl lg:text-6xl font-black text-primary mb-2">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LUMA CRISIS - Why Act Now */}
      <section className="py-20 bg-destructive/5 border-b-4 border-destructive/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Flame className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
                  LUMA Está Fallando. ¿Cuándo Actúas?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  31 de diciembre: 90% sin luz. Abril: Apagón masivo. Julio: Crisis de generación. La infraestructura de LUMA no puede sostener a Puerto Rico. Mientras esperas que el gobierno actúe, tú puedes generar tu propia energía HOY.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border-2 border-destructive/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">¿Por Qué Solar es tu Mejor Opción?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Independencia Total</h4>
                    <p className="text-sm text-muted-foreground">No dependerás más de LUMA ni sus apagones</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ahorro Garantizado</h4>
                    <p className="text-sm text-muted-foreground">Hasta 90% en tu factura eléctrica</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Protección Contra Apagones</h4>
                    <p className="text-sm text-muted-foreground">Baterías mantienen tu hogar funcionando</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Solución Inmediata</h4>
                    <p className="text-sm text-muted-foreground">Operativo en 2-4 semanas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - Feature Cards */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Lo Que Obtienes con Energía Solar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beneficios reales que transforman tu hogar y tu bolsillo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 relative overflow-hidden group bg-card"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3">
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

      {/* TESTIMONIALS - Social Proof */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Historias reales de familias que ya disfrutan de energía solar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm font-semibold text-secondary mt-2">{testimonial.savings}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              4 Pasos Simples para tu Energía Solar
            </h2>
            <p className="text-lg text-muted-foreground">
              De la consulta a la energía limpia en menos de un mes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
                  )}

                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 mb-6 shadow-lg">
                      <div className="text-center">
                        <StepIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <span className="font-black text-2xl text-primary">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE - Email Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center text-background">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              ¿Listo para Cambiar?
            </h2>
            <p className="text-xl mb-8 text-background/90">
              Obtén tu consulta gratuita y descubre exactamente cuánto puedes ahorrar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-300 shadow-2xl text-base font-bold px-8 py-7 h-auto">
                  Solicita Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/calculadora">
                <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background/10 text-base font-bold px-8 py-7 h-auto">
                  Calcula tu Ahorro
                </Button>
              </Link>
            </div>

            <p className="text-sm text-background/70 mt-6">
              ✓ Sin compromiso • ✓ Respuesta en 24 horas • ✓ Consulta completamente gratuita
            </p>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "¿Cuánto cuesta instalar paneles solares?",
                a: "El costo promedio es de $15,000-$25,000 antes de incentivos. Pero con créditos fiscales federales y financiamiento, muchos clientes pagan $0 inicialmente.",
              },
              {
                q: "¿Qué pasa cuando hay apagón?",
                a: "Con baterías de respaldo, tu hogar sigue funcionando. Sin baterías, también tienes energía solar durante el día.",
              },
              {
                q: "¿Cuánto tiempo dura el sistema?",
                a: "Los paneles duran 25-30 años. Las baterías duran 10-15 años. Ofrecemos garantía completa.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-2 hover:shadow-lg transition-all">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                Ver Todas las Preguntas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Urgency */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-background">
            <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              No Esperes al Próximo Apagón
            </h2>
            <p className="text-2xl mb-8 text-background/90 font-medium">
              Cada día que esperas, pierdes dinero en electricidad cara de LUMA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contacto">
                <Button size="lg" className="bg-yellow-400 text-primary hover:bg-yellow-300 shadow-2xl text-lg font-black px-10 py-8 h-auto">
                  Consulta Gratuita Ahora
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>

            <div className="flex justify-center gap-8 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Respuesta en 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500+ clientes satisfechos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Garantía 25 años</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
