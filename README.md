🌐 Edga Service Web

Edga Service Web es una página profesional dedicada a ofrecer servicios digitales como:

- Creación de páginas web modernas
- Desarrollo y gestión de bases de datos
- Reestructuración y optimización de sitios existentes
- Digitalización de menús mediante códigos QR

Hecha con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com/), esta web es sencillita, rápida y responsive y preparada para producción.


---

## 🚀 Tecnologías

- ✅ [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- ✅ [Tailwind CSS](https://tailwindcss.com/)
- ✅ [TypeScript](https://www.typescriptlang.org/)
- ✅ [Nodemailer](https://nodemailer.com/) (para envío de correos)
- ✅ [Lucide React](https://lucide.dev/) (íconos)
- ✅ `next-intl` (multilenguaje)
- ✅ Animaciones con Tailwind + pantalla de carga

---

## 📬 Formulario de Contacto

El formulario está conectado a una API interna (`/api/contact`) y envía los datos directamente por correo electrónico mediante **Nodemailer**.

> Configura tu archivo `.env.local` con credenciales SMTP.

---

## 🌍 Multilenguaje

Estructura compatible con múltiples idiomas mediante `next-intl`. Actualmente:

- Español 🇪🇸
- Inglés 🇬🇧

---

## 📱 Responsive y Accesible

- Menú hamburguesa en móviles
- Scroll suave al navegar
- Accesible desde cualquier dispositivo

---

## 📦 Instalación local

```bash
git clone https://github.com/tuusuario/edga-service-web.git
cd edga-service-web
npm install
npm run dev
