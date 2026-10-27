import { specialistsData } from "../specialists-data";
import SpecialistProfileClient from "./SpecialistProfileClient";
import { notFound } from "next/navigation";

// Required for static site generation with output: 'export'
export function generateStaticParams() {
  return specialistsData.map((doc) => ({
    id: doc.id,
  }));
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const doctor = specialistsData.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return <SpecialistProfileClient doctor={doctor} />;
}