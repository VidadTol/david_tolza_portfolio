import type { Metadata } from 'next';
import AssistanceSchemaScript from '@/components/assistance-seniors/AssistanceSchemaScript';

export const metadata: Metadata = {
  title: "Assistance informatique & aide administrative à Castelmaurou – Votre allié numérique",
  description:
    "Technicien diplômé avec 22 ans d'expérience. Service d'aide administrative et numérique pour personnes âgées à Castelmaurou. Lutte contre l'isolement numérique.",
  keywords: [
    "David Tolza assistance informatique",
    "aide informatique seniors Castelmaurou",
    "dépannage informatique personnes âgées 31",
    "assistance numérique seniors isolement",
    "création compte email seniors",
    "aide internet personnes âgées à domicile",
    "gestion mails pour seniors",
    "aide administrative accompagnement seniors",
  ],
};

export default function AssistanceSeniorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AssistanceSchemaScript />
      {children}
    </>
  );
}