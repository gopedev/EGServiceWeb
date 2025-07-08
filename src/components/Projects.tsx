export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Proyectos Realizados</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Aquí puedes ver algunos de los trabajos que hemos realizado para nuestros clientes. Cada proyecto está adaptado a las necesidades específicas de cada negocio.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Puedes reemplazar estas imágenes por capturas reales */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 h-40 flex items-center justify-center text-gray-500 rounded-lg shadow-inner">
              Proyecto {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
