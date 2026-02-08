/**
 * Contact Page - Lead Capture Optimized
 * Multi-step form, urgency elements, trust signals
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle2, AlertTriangle, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    factura: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nombre: "", email: "", telefono: "", ciudad: "", factura: "", mensaje: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Tu Consulta Gratuita te Espera
            </h1>
            <p className="text-xl text-background/90 mb-8">
              Completa el formulario y recibe una propuesta personalizada en 24 horas
            </p>
            <div className="flex justify-center gap-6 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span>Expertos certificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FORM - Left Side (2 columns) */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-2">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">¡Consulta Enviada!</h3>
                    <p className="text-muted-foreground mb-6">
                      Recibirás una propuesta personalizada en tu email dentro de 24 horas.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mientras tanto, puedes usar nuestra calculadora para estimar tu ahorro.
                    </p>
                    <Link href="/calculadora">
                      <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                        Ir a la Calculadora
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <p className="text-sm text-yellow-800 font-medium">
                        ⚡ Oferta especial: Primeros 10 clientes reciben descuento de $2,000
                      </p>
                    </div>

                    {/* Nombre */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background"
                        placeholder="Tu nombre"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background"
                        placeholder="tu@email.com"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background"
                        placeholder="+1 (787) 555-0000"
                      />
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Ciudad/Municipio *
                      </label>
                      <select
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">Selecciona tu ciudad</option>
                        <option value="San Juan">San Juan</option>
                        <option value="Ponce">Ponce</option>
                        <option value="Mayagüez">Mayagüez</option>
                        <option value="Caguas">Caguas</option>
                        <option value="Arecibo">Arecibo</option>
                        <option value="Bayamón">Bayamón</option>
                        <option value="Carolina">Carolina</option>
                        <option value="Otra">Otra</option>
                      </select>
                    </div>

                    {/* Factura Eléctrica */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Factura Eléctrica Promedio Mensual *
                      </label>
                      <select
                        name="factura"
                        value={formData.factura}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background"
                      >
                        <option value="">¿Cuánto pagas mensualmente?</option>
                        <option value="$100-$200">$100 - $200</option>
                        <option value="$200-$300">$200 - $300</option>
                        <option value="$300-$400">$300 - $400</option>
                        <option value="$400-$500">$400 - $500</option>
                        <option value="$500+">$500+</option>
                      </select>
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-2">
                        Preguntas o Comentarios
                      </label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary bg-background resize-none"
                        placeholder="Cuéntanos sobre tu situación..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base font-bold py-6 h-auto"
                    >
                      Enviar Consulta Gratuita
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Protegemos tu privacidad. Nunca compartimos tu información.
                    </p>
                  </form>
                )}
              </Card>
            </div>

            {/* SIDEBAR - Right Side */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="p-6 border-2 bg-muted/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Contacto Directo</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-bold text-foreground">+1 (787) 555-0000</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-bold text-foreground">info@energiasolarfacil.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-bold text-foreground">Puerto Rico</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6 border-2">
                <h3 className="text-xl font-bold text-foreground mb-6">¿Por Qué Elegirnos?</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Expertos Certificados</p>
                      <p className="text-xs text-muted-foreground">Más de 10 años de experiencia</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Garantía 25 Años</p>
                      <p className="text-xs text-muted-foreground">Protección total de tu inversión</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">500+ Clientes Felices</p>
                      <p className="text-xs text-muted-foreground">Calificación 4.9★</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Financiamiento Disponible</p>
                      <p className="text-xs text-muted-foreground">Desde $0 inicial</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Urgency Box */}
              <Card className="p-6 border-2 bg-yellow-50 border-yellow-200">
                <div className="flex gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <h3 className="font-bold text-yellow-900">Oferta Limitada</h3>
                </div>
                <p className="text-sm text-yellow-800 mb-4">
                  Los primeros 10 clientes reciben descuento de $2,000 + baterías gratis.
                </p>
                <p className="text-xs text-yellow-700">
                  ⏰ Válido solo este mes
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-4xl font-black text-foreground mb-12 text-center">
            Preguntas Frecuentes sobre la Consulta
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "¿Cuánto tiempo toma la consulta?",
                a: "La consulta es completamente gratuita y toma 15-20 minutos. Analizamos tu factura actual y te mostramos exactamente cuánto puedes ahorrar.",
              },
              {
                q: "¿Hay algún compromiso?",
                a: "No. Es completamente sin compromiso. No hay obligación de comprar. Solo queremos mostrarte las opciones disponibles.",
              },
              {
                q: "¿Cuándo recibiré la propuesta?",
                a: "Dentro de 24 horas recibirás una propuesta personalizada por email con todos los detalles, costos y opciones de financiamiento.",
              },
              {
                q: "¿Qué información necesitas?",
                a: "Solo tu nombre, email, teléfono, ubicación y tu factura eléctrica promedio. Con eso podemos hacer un análisis completo.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-2 hover:shadow-lg transition-all">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
