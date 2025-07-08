import { Globe, Database, Wrench, QrCode } from 'lucide-react';

export default function Services() {
  const servicios = [
    { icon: <Globe className="h-8 w-8 text-blue-600" />, title: "Páginas Web", description: "Diseñamos y desarrollamos sitios modernos y rápidos." },
    { icon: <Database className="h-8 w-8 text-blue-600" />, title: "Bases de Datos", description: "Creamos y gestionamos bases de datos seguras y escalables." },
    { icon: <Wrench className="h-8 w-8 text-blue-600" />, title: "Reestructuración Web", description: "Mejoramos tu web existente con nuevas funciones y diseño." },
    { icon: <QrCode className="h-8 w-8 text-blue-600" />, title: "Cartas Digitales QR", description: "Digitalizamos menús para restaurantes accesibles desde QR." },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
