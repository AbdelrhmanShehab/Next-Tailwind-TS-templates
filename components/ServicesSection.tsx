// components/ServicesSection.tsx
import { Service } from "../types";
import ServiceCard from "./ServiceCard";

type Props = {
  services: Service[];
};

export default function ServicesSection({ services }: Props) {
  return (
    <section className="flex gap-8 flex-col md:flex-row md:justify-between mt-6 mb-12">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
}
