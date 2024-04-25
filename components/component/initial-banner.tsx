import { SocialGrid } from "./social-grid";

export function InitialBanner() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent text-3xl font-extrabold text-transparent sm:text-5xl lg:text-6xl">
                Ilumine e dê vida para sua casa com nossos produtos de casa &
                decoração
              </h1>

              <blockquote className="mx-auto mt-4 max-w-3xl font-bold sm:text-xl/relaxed">
                A JM Luz e arte transforma ideias em realidade, personalizando
                cabos e luminárias em peças decorativas para uma experiência
                positiva dos clientes.
              </blockquote>
            </div>
          </div>

          <div className="  w-full h-auto flex items-center justify-center">
            <SocialGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
