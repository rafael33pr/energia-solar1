/* Mediterranean Artisan Design - FAQ Page
 * Frequently asked questions about solar energy
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Costos y Financiamiento",
      questions: [
        {
          q: "¿Cuánto cuesta un sistema de energía solar con baterías?",
          a: "El costo varía según el tamaño del sistema y tus necesidades energéticas. Un sistema residencial típico con respaldo de baterías puede costar entre $15,000 y $35,000 antes de incentivos. Sin embargo, los créditos fiscales federales pueden cubrir hasta el 30% del costo, y muchos estados ofrecen incentivos adicionales. Ofrecemos opciones de financiamiento con pagos mensuales que suelen ser menores que tu factura eléctrica actual.",
        },
        {
          q: "¿Cuánto tiempo tarda en recuperarse la inversión?",
          a: "El período de recuperación típico es de 6 a 10 años, dependiendo de tus costos energéticos actuales, el tamaño del sistema y los incentivos disponibles. Después de este período, disfrutarás de energía prácticamente gratuita durante los 15-20 años restantes de vida útil del sistema. Muchos clientes ahorran entre $1,000 y $2,500 anuales en costos de electricidad.",
        },
        {
          q: "¿Qué opciones de financiamiento están disponibles?",
          a: "Ofrecemos múltiples opciones: compra en efectivo, préstamos solares con tasas competitivas, arrendamiento solar y acuerdos de compra de energía (PPA). También te ayudamos a acceder al crédito fiscal federal del 30% y a programas de incentivos estatales y locales. Nuestros asesores financieros trabajan contigo para encontrar la mejor opción según tu situación.",
        },
      ],
    },
    {
      category: "Instalación y Mantenimiento",
      questions: [
        {
          q: "¿Cuánto tiempo toma la instalación?",
          a: "La instalación física del sistema generalmente toma de 1 a 3 días, dependiendo del tamaño y complejidad. El proceso completo desde la consulta inicial hasta la activación del sistema suele tomar de 6 a 10 semanas, incluyendo el diseño personalizado, la obtención de permisos y la aprobación de la compañía eléctrica.",
        },
        {
          q: "¿Los paneles solares requieren mucho mantenimiento?",
          a: "Los sistemas solares requieren muy poco mantenimiento. Los paneles son autolimpiables con la lluvia en la mayoría de los casos. Recomendamos una inspección anual y limpieza ocasional si vives en áreas con mucho polvo. Las baterías modernas de litio también requieren mantenimiento mínimo. Ofrecemos planes de mantenimiento preventivo para garantizar el rendimiento óptimo.",
        },
        {
          q: "¿Qué garantías se incluyen?",
          a: "Nuestros paneles solares vienen con garantía de rendimiento de 25 años (garantizando al menos 80% de eficiencia después de 25 años) y garantía de fabricación de 10-12 años. Los inversores tienen garantías de 10-25 años dependiendo del modelo. Las baterías incluyen garantías de 10 años. Además, ofrecemos garantía de instalación de 5 años en mano de obra.",
        },
      ],
    },
    {
      category: "Funcionamiento del Sistema",
      questions: [
        {
          q: "¿Tendré electricidad durante un apagón?",
          a: "Sí, si incluyes un sistema de respaldo de baterías. Los sistemas solares estándar sin baterías se apagan automáticamente durante cortes de luz por seguridad. Con baterías, tu sistema puede continuar alimentando circuitos esenciales o toda tu casa (dependiendo del tamaño del banco de baterías) durante apagones, recargándose con energía solar durante el día.",
        },
        {
          q: "¿Qué pasa en días nublados o durante la noche?",
          a: "Los paneles solares siguen generando electricidad en días nublados, aunque a menor capacidad (típicamente 10-25% de la producción en días soleados). Durante la noche o cuando la producción solar es insuficiente, tu sistema de baterías proporciona energía almacenada. Si las baterías se agotan, el sistema cambia automáticamente a la red eléctrica, asegurando que nunca te quedes sin electricidad.",
        },
        {
          q: "¿Puedo monitorear mi producción de energía?",
          a: "Sí, todos nuestros sistemas incluyen monitoreo en tiempo real a través de una aplicación móvil. Puedes ver cuánta energía estás generando, consumiendo y almacenando en cualquier momento. La app también te alerta sobre cualquier problema de rendimiento y te permite rastrear tus ahorros acumulados.",
        },
        {
          q: "¿Puedo vender el exceso de energía a la compañía eléctrica?",
          a: "En la mayoría de las áreas, sí. A través de programas de medición neta (net metering), el exceso de energía que produces se envía a la red y recibes créditos en tu factura. Las políticas varían según la compañía eléctrica y el estado. Te asesoramos sobre las regulaciones específicas de tu área y te ayudamos con el proceso de interconexión.",
        },
      ],
    },
    {
      category: "Requisitos y Compatibilidad",
      questions: [
        {
          q: "¿Mi techo es adecuado para paneles solares?",
          a: "La mayoría de los techos son compatibles. Los factores clave son: orientación (sur, suroeste u oeste son ideales), inclinación (15-40 grados es óptimo), espacio disponible y condición estructural. También evaluamos el sombreado de árboles o edificios. Si tu techo no es ideal, podemos considerar instalaciones en el suelo. Realizamos una evaluación gratuita para determinar la viabilidad.",
        },
        {
          q: "¿Necesito reemplazar mi techo antes de instalar paneles?",
          a: "Si tu techo tiene más de 15-20 años o muestra signos de desgaste significativo, recomendamos reemplazarlo antes de la instalación solar. Los paneles duran 25+ años, y removerlos para reparar el techo más adelante puede ser costoso. Durante la inspección inicial, evaluamos la condición de tu techo y te asesoramos si es necesario algún trabajo previo.",
        },
        {
          q: "¿Puedo instalar paneles solares si vivo en un condominio o comunidad con HOA?",
          a: "En muchos estados, existen leyes de 'derecho al sol' que limitan la capacidad de las HOA para prohibir instalaciones solares. Sin embargo, pueden tener requisitos estéticos. Te ayudamos a navegar las regulaciones de tu HOA y a obtener las aprobaciones necesarias. Para condominios, la instalación puede ser más compleja y depende de la estructura de propiedad.",
        },
      ],
    },
    {
      category: "Baterías y Almacenamiento",
      questions: [
        {
          q: "¿Cuánto tiempo pueden las baterías alimentar mi casa?",
          a: "Depende del tamaño del banco de baterías y tu consumo. Una batería típica de 10-13.5 kWh puede alimentar circuitos esenciales (refrigerador, luces, internet, algunos electrodomésticos) durante 8-12 horas. Para toda la casa, necesitarías múltiples baterías. Durante el día, los paneles solares recargan las baterías, permitiendo autonomía indefinida en condiciones soleadas.",
        },
        {
          q: "¿Qué tipo de baterías utilizan?",
          a: "Utilizamos baterías de iones de litio de alta calidad, similares a las de vehículos eléctricos pero optimizadas para uso residencial. Son más eficientes, duraderas y seguras que las baterías de plomo-ácido tradicionales. Ofrecemos marcas líderes como Tesla Powerwall, LG Chem y Enphase, todas con excelentes garantías y rendimiento comprobado.",
        },
        {
          q: "¿Las baterías son seguras?",
          a: "Sí, las baterías modernas de litio incluyen múltiples sistemas de seguridad: gestión térmica, protección contra sobrecarga/descarga, y certificaciones UL. Están diseñadas para uso interior o exterior y cumplen con todos los códigos de construcción. La instalación profesional asegura que todos los protocolos de seguridad se sigan correctamente.",
        },
      ],
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Preguntas{" "}
              <span className="text-primary">Frecuentes</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre energía solar, instalación, costos y más. Si no encuentras lo que buscas, contáctanos directamente.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 pb-3 border-b-2 border-primary/20">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border-2 border-border rounded-lg px-6 bg-card hover:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-heading font-semibold text-foreground pr-4">
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ¿Aún Tienes Preguntas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nuestro equipo de expertos está listo para responder todas tus dudas y ayudarte a tomar la mejor decisión para tu hogar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base px-8 py-6">
                  Habla con un Experto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/proceso">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                  Conoce el Proceso
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
