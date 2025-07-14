function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* HEADER */}
      <header className="bg-gray-950 p-4 fixed w-full top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">Synaptia</h1>
          <nav className="space-x-6 text-sm">
            <a href="#servicios" className="hover:text-teal-300">
              Servicios
            </a>
            <a href="#sobre-nosotros" className="hover:text-teal-300">
              Sobre nosotros
            </a>
            <a href="#contacto" className="hover:text-teal-300">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-24 px-6">
        {/* INTRO */}
        <section className="relative bg-gray-900 py-20 px-6 overflow-hidden">
          {/* Imagen como fondo a la derecha */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 z-0">
            <img
              src="./src/assets/images/bot synaptia.png"
              alt="Imagen IA"
              className="w-full h-full object-cover object-right opacity-80"
            />
          </div>

          {/* Contenido principal con texto a la izquierda */}
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 leading-tight">
                Conocé cómo Synaptia puede ayudarte
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                En Synaptia creemos que la inteligencia artificial no es solo
                para grandes corporaciones. Nuestro propósito es democratizar el
                acceso a soluciones inteligentes, acercando la automatización y
                el análisis de datos a emprendimientos, pymes y profesionales
                independientes.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Desarrollamos chatbots, sistemas personalizados e integraciones
                que permiten mejorar la atención, optimizar procesos y liberar
                tiempo de tareas repetitivas. Cada solución está pensada desde
                la funcionalidad, la simpleza y la escalabilidad.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Nuestro objetivo es acompañarte en el camino hacia una
                transformación digital accesible, humana y centrada en lo que
                realmente importa: tu negocio.
              </p>
              <a
                href="#contacto"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded transition"
              >
                Empezar ahora
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="bg-gray-950 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-10">Servicios</h2>
            <div className="bg-gray-900 py-16 px-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "🤖 Chatbots con IA",
                    description:
                      "Creamos asistentes virtuales personalizados para WhatsApp, Instagram, Facebook y sitios web. Conversaciones naturales, flujos inteligentes y respuestas automáticas.",
                  },
                  {
                    title: "🔁 Automatizaciones",
                    description:
                      "Automatizamos correos, calendarios, tareas repetitivas, integración de APIs y más. Ahorrá tiempo y evitá errores humanos.",
                  },
                  {
                    title: "📊 Análisis de Datos",
                    description:
                      "Exploramos tus datos para darte información valiosa. Dashboards, segmentaciones, KPIs y reportes automatizados con IA.",
                  },
                  {
                    title: "🧠 Modelos Predictivos",
                    description:
                      "Desarrollamos sistemas que anticipan comportamientos o resultados, como predicción de demanda, churn, scoring y más.",
                  },
                  {
                    title: "💼 Sistemas personalizados",
                    description:
                      "Construimos software a medida, siempre potenciado con IA: desde CRMs hasta gestores de procesos o turnos inteligentes.",
                  },
                  {
                    title: "⚙️ Integración de herramientas",
                    description:
                      "Conectamos apps como Google Sheets, Calendly, Slack, Zapier, CRMs, etc., en flujos automatizados adaptados a tu negocio.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
                  >
                    <h3 className="text-xl font-semibold text-teal-400 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE NOSOTROS + CONTACTO COMBINADO */}
        <section id="contacto" className="bg-gray-900 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Contacto
            </h2>
            <p className="text-gray-400 text-center mb-12">
              ¿Tenés preguntas o querés automatizar tu negocio? ¡Escribinos!
            </p>

            <div className="grid gap-10">
              {/* Formulario */}
              <form className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="ejemplo@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-300 mb-1">
                    Consulta
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Contanos tu caso o qué te gustaría automatizar..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition"
                >
                  Enviar
                </button>
              </form>

              {/* Información de contacto */}
              <div className="grid md:grid-cols-3 gap-10 text-sm text-center max-w-4xl mx-auto">
                <div>
                  <h4 className="text-lg font-semibold mb-1">📍 Dirección</h4>
                  <p>
                    Avellaneda 528
                    <br />
                    Santiago del Estero, Argentina
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">📞 Teléfono</h4>
                  <p>+54 385 435-2302</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">📧 Correo</h4>
                  <p>info@synaptia.com.ar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Synaptia. Todos los derechos reservados.
        </p>
        <p className="mt-1">Creado en Argentina.</p>
      </footer>
    </div>
  );
}

export default App;
