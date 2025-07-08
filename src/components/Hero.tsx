export default function Hero() {
  return (
    <section id="inicio" className="h-[80vh] bg-gradient-to-br from-blue-100 to-white flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Impulsa tu presencia digital
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          EG Service Web crea soluciones digitales a medida: webs, bases de datos, menús digitales y más.
        </p>
        <a href="#contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Solicita tu web
        </a>
      </div>
    </section>
  );
}
