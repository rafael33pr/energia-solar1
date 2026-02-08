/* Mediterranean Artisan Design - Process Page
 * Step-by-step guide to solar installation
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ClipboardCheck,
  Ruler,
  FileCheck,
  Wrench,
  Power,
  CheckCircle2,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function Proceso() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Consulta Inicial Gratuita",
      duration: "30-60 minutos",
      description:
        "Comenzamos con una conversación sin compromiso para entender tus necesidades energéticas, objetivos de ahorro y características de tu propiedad. Evaluamos tu consumo actual y discutimos tus expectativas.",
      details: [
        "Análisis de tu factura eléctrica actual",
        "Evaluación de tus objetivos energéticos",
        "Respuesta a todas tus preguntas",
        "Sin presión ni obligación de compra",
      ],
    },
    {
      number: "02",
      icon: Ruler,
      title: "Diseño del Sistema Personalizado",
      duration: "1-2 semanas",
      description:
        "Nuestros ingenieros diseñan un sistema solar a medida para tu hogar. Consideramos la orientación de tu techo, sombreado, consumo energético y presupuesto para maximizar tu inversión.",
      details: [
        "Inspección técnica del sitio",
        "Modelado 3D de tu techo",
        "Cálculo preciso de producción solar",
        "Propuesta detallada con costos y ahorros",
      ],
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Permisos y Financiamiento",
      duration: "2-4 semanas",
      description:
        "Nos encargamos de toda la documentación necesaria. Gestionamos permisos municipales, aprobaciones de la compañía eléctrica y te ayudamos a acceder a incentivos fiscales y opciones de financiamiento.",
      details: [
        "Tramitación de permisos locales",
        "Coordinación con la compañía eléctrica",
        "Asesoría sobre créditos fiscales",
        "Opciones de financiamiento flexibles",
      ],
    },
    {
      number: "04",
      icon: Wrench,
      title: "Instalación Profesional",
      duration: "1-3 días",
      description:
        "Nuestro equipo certificado instala tu sistema con precisión artesanal. Trabajamos con cuidado para proteger tu propiedad y garantizar la máxima eficiencia del sistema.",
      details: [
        "Instalación de paneles solares",
        "Montaje del sistema de baterías",
        "Conexión del inversor y cableado",
        "Limpieza completa del área de trabajo",
      ],
    },
    {
      number: "05",
      icon: Power,
      title: "Activación y Monitoreo",
      duration: "1-2 semanas",
      description:
        "Una vez aprobado por las autoridades, activamos tu sistema. Te enseñamos a usar el sistema de monitoreo para que puedas ver tu producción de energía en tiempo real desde tu smartphone.",
      details: [
        "Inspección final y aprobación",
        "Activación del sistema",
        "Capacitación sobre el monitoreo",
        "Configuración de la app móvil",
      ],
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: "Soporte Continuo",
      duration: "25+ años",
      description:
        "Tu relación con nosotros no termina con la instalación. Ofrecemos mantenimiento preventivo, monitoreo remoto y soporte técnico para garantizar el rendimiento óptimo de tu sistema durante décadas.",
      details: [
        "Garantía de 25 años en paneles",
        "Monitoreo remoto del rendimiento",
        "Mantenimiento preventivo anual",
        "Soporte técnico prioritario",
      ],
    },
  ];

  const timeline = [
    { phase: "Consulta y Diseño", weeks: "2-3 semanas" },
    { phase: "Permisos", weeks: "2-4 semanas" },
    { phase: "Instalación", weeks: "1 semana" },
    { phase: "Activación", weeks: "1-2 semanas" },
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
                Proceso Simple y Transparente
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tu Camino a la{" "}
              <span className="text-primary">Energía Solar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Desde la primera consulta hasta la activación de tu sistema, te acompañamos en cada paso del proceso con total transparencia y profesionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-90">Tiempo total promedio</p>
                <p className="text-2xl font-bold">6-10 semanas</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/30"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm opacity-90 mb-1">{item.phase}</p>
                  <p className="font-semibold">{item.weeks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <span className="font-display text-4xl font-bold text-primary/30">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {step.title}
                  </h2>

                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground font-medium">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="p-8 bg-gradient-to-br from-muted/50 to-background border-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16"></div>
                    
                    <div className="relative z-10 text-center py-12">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-12 h-12 text-primary" />
                      </div>
                      <p className="font-display text-6xl font-bold text-primary mb-4">
                        {step.number}
                      </p>
                      <p className="font-heading text-xl font-semibold text-foreground">
                        {step.title}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Instalación con Precisión Artesanal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Cada instalación es realizada por técnicos certificados con años de experiencia. Tratamos tu hogar con el mismo cuidado que trataríamos el nuestro.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilizamos equipos de la más alta calidad y seguimos estrictos protocolos de seguridad para garantizar un sistema que funcione perfectamente durante décadas.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sNk1MsQpqAj8A2R8T9znud/sandbox/lrPViPo3jF9JJUSOwpNCZD-img-2_1770509353000_na1fn_YmF0dGVyeS1zdG9yYWdlLW1vZGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc05rMU1zUXBxQWo4QTJSOFQ5em51ZC9zYW5kYm94L2xyUFZpUG8zakY5SkpVU093cE5DWkQtaW1nLTJfMTc3MDUwOTM1MzAwMF9uYTFmbl9ZbUYwZEdWeWVTMXpkRzl5WVdkbExXMXZaR1Z5YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v8jgK3WmmPAc8OCn9HD5hwPWuXR1~SlbxOEJ3RPzg33M1pX1phN-dapEFP3yqVEb5PEwcCmjsQLBd2lpWF7uzmrdH8H7NZEnGIUSy~jXOHjIO8iqo1tPM~~8f0MSLmGznPrwUFXBi0M-kn5zn5cyOVKFcOLkZScOMQJq9YU2y0z8KtyGViwQbWiJSJf446zZOF9jqrSiQFrsGxT2RJ~lSeVgpN6DJgRBza1J~K6Etr4FtEE9KGJjc0lt0vx1sR28kQHEGRRpdyLJADDINIF0LtvvQoTUt5s8iL5iKT7abALMPuiSi4ioSQlhfP1ttLxXWmduXzXb0Mf2K6mm1gwOYw__"
                alt="Sistema moderno de almacenamiento de baterías"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ¿Listo para Empezar tu Viaje Solar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              El primer paso es simple: agenda una consulta gratuita y sin compromiso. Te explicaremos todo el proceso y responderemos todas tus preguntas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base px-8 py-6">
                  Agenda tu Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                  Ver Preguntas Frecuentes
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
