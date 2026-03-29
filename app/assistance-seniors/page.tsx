import AssistanceHeroSection from "@/components/assistance-seniors/AssistanceHeroSection";
import AssistancePourquoiSection from "@/components/assistance-seniors/AssistancePourquoiSection";
import AssistanceServicesSection from "@/components/assistance-seniors/AssistanceServicesSection";
import AssistanceFAQSection from "@/components/assistance-seniors/AssistanceFAQSection";
import AssistanceZonesSection from "@/components/assistance-seniors/AssistanceZonesSection";
import AssistanceCTASection from "@/components/assistance-seniors/AssistanceCTASection";
import Separator from "@/components/Separator";

export default function AssistanceSeniorsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start">
      <AssistanceHeroSection />
      <Separator />
      <AssistancePourquoiSection />
      <Separator />
      <AssistanceServicesSection />
      <Separator />
      <AssistanceFAQSection />
      <Separator />
      <AssistanceZonesSection />
      <Separator />
      <AssistanceCTASection />
    </main>
  );
}
