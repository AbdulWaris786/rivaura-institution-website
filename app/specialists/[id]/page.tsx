import { notFound } from "next/navigation";
import { specialistsData } from "../specialists-data";
import SpecialistProfileClient from "./SpecialistProfileClient";

// Required for Next.js output: "export"
export function generateStaticParams() {
  return specialistsData.map((doc) => ({
    id: doc.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SpecialistPage({ params }: PageProps) {
  const { id } = await params;
  const doctor = specialistsData.find((doc) => doc.id === id);

  if (!doctor) {
    notFound();
  }

  return <SpecialistProfileClient doctor={doctor} />;
}