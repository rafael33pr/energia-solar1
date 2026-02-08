/* Mediterranean Artisan Design - 404 Not Found Page */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 grain-texture"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <p className="font-display text-9xl font-bold text-primary/20">404</p>
          </div>
          
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Página No Encontrada
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Vuelve al inicio para explorar nuestras soluciones de energía solar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Home className="mr-2 w-5 h-5" />
                Volver al Inicio
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Página Anterior
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
