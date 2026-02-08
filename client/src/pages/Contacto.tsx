/* Mediterranean Artisan Design - Contact Page
 * Lead generation form with warm, inviting design
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    interes: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.nombre || !formData.email || !formData.telefono) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    // In a real application, this would send data to a backend
    console.log("Form submitted:", formData);
    
    toast.success("¡Gracias por tu interés!", {
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });

    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      ciudad: "",
      interes: "",
      mensaje: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "info@energiasolarfacil.com",
      description: "Respuesta en 24 horas",
    },
    {
      icon: Phone,
      title: "Teléfono",
      detail: "+1 (555) 123-4567",
      description: "Lun - Vie: 9am - 6pm",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      detail: "Servicio en toda la región",
      description: "Consulta disponibilidad",
    },
    {
      icon: Clock,
      title: "Horario",
      detail: "Lunes a Viernes",
      description: "9:00 AM - 6:00 PM",
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
                Estamos Aquí para Ayudarte
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comienza tu{" "}
              <span className="text-primary">Viaje Solar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Solicita una consulta gratuita y sin compromiso. Nuestros expertos evaluarán tus necesidades y te mostrarán cuánto puedes ahorrar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 lg:p-12 border-2">
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Solicita tu Consulta Gratuita
                </h2>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-foreground font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        required
                        className="border-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="border-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-foreground font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        required
                        className="border-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ciudad" className="text-foreground font-medium">
                        Ciudad
                      </Label>
                      <Input
                        id="ciudad"
                        type="text"
                        placeholder="Tu ciudad"
                        value={formData.ciudad}
                        onChange={(e) => handleChange("ciudad", e.target.value)}
                        className="border-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interes" className="text-foreground font-medium">
                      ¿Qué te interesa?
                    </Label>
                    <Select
                      value={formData.interes}
                      onValueChange={(value) => handleChange("interes", value)}
                    >
                      <SelectTrigger className="border-2">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paneles">Solo Paneles Solares</SelectItem>
                        <SelectItem value="paneles-baterias">Paneles + Baterías</SelectItem>
                        <SelectItem value="baterias">Solo Sistema de Baterías</SelectItem>
                        <SelectItem value="consulta">Consulta General</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-foreground font-medium">
                      Mensaje (Opcional)
                    </Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos más sobre tus necesidades energéticas..."
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      rows={5}
                      className="border-2 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-base py-6"
                  >
                    Enviar Solicitud
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo. No compartimos tu información con terceros.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 border-2 bg-gradient-to-br from-muted/50 to-background">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground mb-1">
                          {info.title}
                        </p>
                        <p className="text-sm text-foreground mb-1">{info.detail}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 bg-primary text-primary-foreground">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  ¿Por Qué Elegirnos?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Consulta gratuita sin compromiso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Más de 10 años de experiencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Instalación profesional certificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Garantías extendidas incluidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Financiamiento flexible disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span>Soporte técnico de por vida</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-2 bg-gradient-to-br from-accent/10 to-background">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  Respuesta Rápida Garantizada
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nos comprometemos a responder todas las solicitudes en menos de 24 horas. Tu tiempo es valioso, y estamos aquí para ayudarte a tomar la mejor decisión para tu hogar.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
