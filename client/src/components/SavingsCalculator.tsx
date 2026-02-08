/* Mediterranean Artisan Design - Savings Calculator Component
 * Interactive tool to estimate solar energy savings
 */

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingDown,
  DollarSign,
  Zap,
  Leaf,
  Calendar,
  Home,
} from "lucide-react";

interface CalculatorResults {
  monthlyBill: number;
  annualBill: number;
  systemCost: number;
  federalCredit: number;
  netSystemCost: number;
  monthlyProduction: number;
  annualProduction: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  savingsIn25Years: number;
  co2Offset: number;
}

export default function SavingsCalculator() {
  // Input states
  const [monthlyBill, setMonthlyBill] = useState<string>("150");
  const [sunExposure, setSunExposure] = useState<string>("good");
  const [roofCondition, setRoofCondition] = useState<string>("excellent");
  const [systemSize, setSystemSize] = useState<number>(8); // kW
  const [batteryStorage, setBatteryStorage] = useState<boolean>(false);

  // Calculate results
  const results: CalculatorResults = useMemo(() => {
    const monthly = parseFloat(monthlyBill) || 0;
    const annual = monthly * 12;

    // System cost estimation: ~$2.50-3.50 per watt (after incentives)
    // Base cost: $3.00 per watt
    let costPerWatt = 3.0;
    if (roofCondition === "fair") costPerWatt = 3.2;
    if (roofCondition === "poor") costPerWatt = 3.5;

    const baseCost = systemSize * 1000 * costPerWatt;
    const batteryAddon = batteryStorage ? 12000 : 0;
    const systemCost = baseCost + batteryAddon;

    // Federal tax credit (30%)
    const federalCredit = systemCost * 0.3;
    const netSystemCost = systemCost - federalCredit;

    // Production efficiency based on sun exposure
    let productionMultiplier = 1.0;
    if (sunExposure === "excellent") productionMultiplier = 1.15;
    if (sunExposure === "good") productionMultiplier = 1.0;
    if (sunExposure === "fair") productionMultiplier = 0.85;
    if (sunExposure === "poor") productionMultiplier = 0.7;

    // Average production: 1.2 kWh per kW per day in good conditions
    const dailyProduction = systemSize * 1.2 * productionMultiplier;
    const monthlyProduction = dailyProduction * 30;
    const annualProduction = monthlyProduction * 12;

    // Electricity rate (average US rate ~$0.14 per kWh)
    const electricityRate = 0.14;

    // Monthly and annual savings
    const monthlySavings = monthlyProduction * electricityRate;
    const annualSavings = annualProduction * electricityRate;

    // Payback period (in years)
    const paybackPeriod =
      annualSavings > 0 ? netSystemCost / annualSavings : 0;

    // 25-year savings (system lifespan)
    const savingsIn25Years = annualSavings * 25 - systemCost;

    // CO2 offset (average: 0.92 lbs CO2 per kWh)
    const co2Offset = annualProduction * 0.92 / 2000; // Convert to tons

    return {
      monthlyBill: monthly,
      annualBill: annual,
      systemCost,
      federalCredit,
      netSystemCost,
      monthlyProduction,
      annualProduction,
      monthlySavings,
      annualSavings,
      paybackPeriod,
      savingsIn25Years,
      co2Offset,
    };
  }, [monthlyBill, sunExposure, roofCondition, systemSize, batteryStorage]);

  const handleSystemSizeChange = (value: number[]) => {
    setSystemSize(value[0]);
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="p-8 border-2 bg-gradient-to-br from-muted/50 to-background">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
          Información de tu Hogar
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Monthly Bill Input */}
            <div className="space-y-3">
              <Label htmlFor="monthly-bill" className="text-foreground font-medium">
                Factura Eléctrica Mensual Actual
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-primary" />
                <Input
                  id="monthly-bill"
                  type="number"
                  min="0"
                  step="10"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="pl-10 border-2 text-lg"
                  placeholder="150"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Factura anual estimada: ${(results.annualBill).toFixed(0)}
              </p>
            </div>

            {/* Sun Exposure Select */}
            <div className="space-y-3">
              <Label htmlFor="sun-exposure" className="text-foreground font-medium">
                Exposición Solar del Techo
              </Label>
              <Select value={sunExposure} onValueChange={setSunExposure}>
                <SelectTrigger className="border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excelente (6+ horas directas)</SelectItem>
                  <SelectItem value="good">Buena (4-6 horas directas)</SelectItem>
                  <SelectItem value="fair">Regular (2-4 horas directas)</SelectItem>
                  <SelectItem value="poor">Pobre (&lt;2 horas directas)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Afecta la producción de energía
              </p>
            </div>

            {/* Roof Condition Select */}
            <div className="space-y-3">
              <Label htmlFor="roof-condition" className="text-foreground font-medium">
                Condición del Techo
              </Label>
              <Select value={roofCondition} onValueChange={setRoofCondition}>
                <SelectTrigger className="border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excelente (&lt;5 años)</SelectItem>
                  <SelectItem value="good">Buena (5-15 años)</SelectItem>
                  <SelectItem value="fair">Regular (15-20 años)</SelectItem>
                  <SelectItem value="poor">Pobre (&gt;20 años)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Puede afectar costos de instalación
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Size Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-foreground font-medium">
                  Tamaño del Sistema Solar
                </Label>
                <span className="text-2xl font-bold text-primary">{systemSize} kW</span>
              </div>
              <Slider
                value={[systemSize]}
                onValueChange={handleSystemSizeChange}
                min={3}
                max={15}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>3 kW (pequeño)</span>
                <span>15 kW (grande)</span>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Producción estimada: {results.monthlyProduction.toFixed(0)} kWh/mes
              </p>
            </div>

            {/* Battery Storage Toggle */}
            <div className="space-y-3 pt-4 border-t-2 border-border">
              <Label className="text-foreground font-medium flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={batteryStorage}
                  onChange={(e) => setBatteryStorage(e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                Incluir Sistema de Baterías
              </Label>
              <p className="text-xs text-muted-foreground">
                Agrega ~$12,000 al costo (con protección ante apagones)
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Results Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cost Analysis */}
        <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Análisis de Costos</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Costo del Sistema:</span>
              <span className="font-semibold text-foreground">
                ${results.systemCost.toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Crédito Federal (30%):</span>
              <span className="font-semibold text-primary">
                -${results.federalCredit.toFixed(0)}
              </span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">Costo Neto:</span>
              <span className="text-lg font-bold text-primary">
                ${results.netSystemCost.toFixed(0)}
              </span>
            </div>
          </div>
        </Card>

        {/* Annual Savings */}
        <Card className="p-6 border-2 bg-gradient-to-br from-accent/5 to-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Ahorros Anuales</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ahorro Mensual:</span>
              <span className="font-semibold text-foreground">
                ${results.monthlySavings.toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ahorro Anual:</span>
              <span className="font-semibold text-accent">
                ${results.annualSavings.toFixed(0)}
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-2">Reducción de factura:</p>
              <p className="text-2xl font-bold text-accent">
                {((results.annualSavings / results.annualBill) * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </Card>

        {/* Payback Period */}
        <Card className="p-6 border-2 bg-gradient-to-br from-secondary/5 to-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Recuperación</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Período de Retorno:</span>
              <span className="text-2xl font-bold text-secondary">
                {results.paybackPeriod.toFixed(1)} años
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-2">Después de {results.paybackPeriod.toFixed(1)} años, tu energía es gratis</p>
              <p className="text-sm font-semibold text-foreground">
                Ahorros en 25 años: ${results.savingsIn25Years.toFixed(0)}
              </p>
            </div>
          </div>
        </Card>

        {/* Production */}
        <Card className="p-6 border-2 bg-gradient-to-br from-primary/5 to-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Producción</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Mensual:</span>
              <span className="font-semibold text-foreground">
                {results.monthlyProduction.toFixed(0)} kWh
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Anual:</span>
              <span className="font-semibold text-primary">
                {results.annualProduction.toFixed(0)} kWh
              </span>
            </div>
          </div>
        </Card>

        {/* Environmental Impact */}
        <Card className="p-6 border-2 bg-gradient-to-br from-secondary/5 to-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Impacto Ambiental</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">CO₂ Evitado/Año:</span>
              <span className="font-semibold text-secondary">
                {results.co2Offset.toFixed(1)} toneladas
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-2">Equivalente a plantar:</p>
              <p className="text-lg font-bold text-secondary">
                {Math.round(results.co2Offset * 16)} árboles/año
              </p>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-6 border-2 bg-gradient-to-br from-accent/5 to-background md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Home className="w-6 h-6 text-accent" />
            </div>
            <h4 className="font-heading font-semibold text-foreground">Resumen</h4>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              Tu sistema de <span className="font-semibold text-foreground">{systemSize} kW</span> se pagará en aproximadamente{" "}
              <span className="font-semibold text-accent">
                {results.paybackPeriod.toFixed(1)} años
              </span>
              .
            </p>
            <p className="text-muted-foreground">
              Después, ahorrarás{" "}
              <span className="font-semibold text-accent">
                ${results.annualSavings.toFixed(0)}/año
              </span>
              {" "}durante 25+ años.
            </p>
          </div>
        </Card>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-4">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
          Solicita tu Consulta Gratuita Personalizada
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Esta es una estimación basada en promedios. Contacta con nosotros para un análisis detallado de tu situación específica.
        </p>
      </div>
    </div>
  );
}
