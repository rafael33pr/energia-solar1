/* Mediterranean Artisan Design - Footer Component
 * Earth tones, elegant layout, warm aesthetic
 */

import { Link } from "wouter";
import { Sun, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-display text-xl font-semibold text-foreground">
                  Energía Solar Fácil
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos hogares con energía solar limpia y confiable. Tu camino hacia la independencia energética comienza aquí.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/beneficios">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Beneficios
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/proceso">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Proceso
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculadora">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Calculadora
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Preguntas Frecuentes
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Instalación Solar</li>
              <li className="text-sm text-muted-foreground">Sistemas de Baterías</li>
              <li className="text-sm text-muted-foreground">Mantenimiento</li>
              <li className="text-sm text-muted-foreground">Consultoría Energética</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>info@energiasolarfacil.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Disponible en toda la región</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Energía Solar Fácil. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
