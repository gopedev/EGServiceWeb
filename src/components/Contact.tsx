'use client';
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      setError(true);
    }
  }

  return (
    <section id="contacto" className="py-20 bg-blue-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Contáctanos</h2>

        <form onSubmit={handleSubmit} className="grid gap-4 text-left">
          <input type="text" name="name" placeholder="Nombre" required className="p-3 rounded border border-gray-300 w-full" />
          <input type="email" name="email" placeholder="Correo electrónico" required className="p-3 rounded border border-gray-300 w-full" />
          <textarea name="message" placeholder="Mensaje" rows={5} required className="p-3 rounded border border-gray-300 w-full" />

          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition">
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {success && <p className="text-green-600 mt-4">¡Mensaje enviado correctamente!</p>}
        {error && <p className="text-red-600 mt-4">Ocurrió un error al enviar.</p>}
      </div>
    </section>
  );
}
