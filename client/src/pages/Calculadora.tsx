/* Mediterranean Artisan Design - Savings Calculator Page
 * Dedicated page for the interactive savings calculator
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";

export default function Calculadora() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Calcula tus{" "}
              <span className="text-primary">Ahorros Solares</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Descubre cuánto puedes ahorrar con energía solar. Ingresa tu factura eléctrica actual y obtén una estimación personalizada en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#calculator">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  Comienza a Calcular
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-background">
        <div className="container max-w-6xl">
          <SavingsCalculator />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 grain-texture"></div>
        
        <div className="container relative z-10 max-w-4xl">
          <h2 className="font-display text-4xl font-bold text-foreground mb-12 text-center">
            Cómo Funciona la Calculadora
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Factores Considerados
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Factura Eléctrica Actual</p>
                    <p className="text-sm text-muted-foreground">Tu consumo mensual de electricidad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Exposición Solar</p>
                    <p className="text-sm text-muted-foreground">Horas de luz solar directa en tu techo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Condición del Techo</p>
                    <p className="text-sm text-muted-foreground">Edad y estado de tu estructura</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Tamaño del Sistema</p>
                    <p className="text-sm text-muted-foreground">Capacidad en kilovatios (kW)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Qué Incluye la Estimación
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Costos del Sistema</p>
                    <p className="text-sm text-muted-foreground">Inversión inicial y créditos fiscales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Ahorros Proyectados</p>
                    <p className="text-sm text-muted-foreground">Reducción mensual y anual de costos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Período de Retorno</p>
                    <p className="text-sm text-muted-foreground">Cuándo se paga el sistema</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-foreground">Impacto Ambiental</p>
                    <p className="text-sm text-muted-foreground">CO₂ evitado y árboles equivalentes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Nota Importante
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Esta calculadora proporciona estimaciones basadas en promedios nacionales y datos típicos del sector. Los resultados reales pueden variar según factores específicos de tu ubicación, incluyendo: tasas de electricidad locales, incentivos estatales y locales, orientación exacta del techo, sombreado, eficiencia del sistema, y cambios en el consumo de energía. Para obtener una estimación precisa y personalizada, te recomendamos solicitar una consulta gratuita con nuestros expertos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grain-texture"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Empezar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ahora que conoces tus ahorros potenciales, solicita una consulta gratuita para un análisis detallado y personalizado.
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
