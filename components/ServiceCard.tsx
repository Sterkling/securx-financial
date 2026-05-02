import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="bg-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <Icon size={32} className="text-blue" />
      </div>
      <h3 className="text-black font-heading text-2xl uppercase mb-3">
        {title}
      </h3>
      <p className="text-gray text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
