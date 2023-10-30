import React from "react";
import { motion } from "framer-motion";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Services() {
  const services = [
    {
      id: "design",
      label: "UX/UI Design",
      description:
        "Nuestro equipo de diseñadores expertos le ofrece asesoramiento en la creación de experiencias digitales excepcionales. Analizamos su audiencia, sus objetivos y sus necesidades para diseñar interfaces atractivas y funcionales. Nos comprometemos a equilibrar la estética con la usabilidad, asegurando que su público disfrute de una experiencia intuitiva y satisfactoria. Desde el diseño gráfico hasta la arquitectura de la información, nuestro enfoque centrado en el usuario garantiza que su producto o servicio destaque en el competitivo mundo digital. Potencie su presencia en línea y fomente la lealtad de sus usuarios con nuestro asesoramiento en UX/UI.",
    },
    {
      id: "seo",
      label: "SEO",
      description:
        "Nuestros expertos en SEO están listos para impulsar su presencia en línea. Con un enfoque personalizado, evaluamos su sitio web, investigamos palabras clave relevantes y aplicamos estrategias probadas para mejorar su clasificación en los motores de búsqueda. Nuestro asesoramiento en SEO no solo aumenta su visibilidad, sino que también atrae tráfico de calidad y mejora su relevancia en línea. Desde la optimización técnica hasta la creación de contenido atractivo, estamos comprometidos a posicionar su negocio en lo más alto de los resultados de búsqueda, impulsando su éxito en línea de manera sostenible.",
    },
    {
      id: "brand",
      label: "Asesoramiento",
      description:
        "Nuestro equipo de expertos en programación está aquí para guiarlo en cada paso de su proyecto. Desde la evaluación de sus necesidades hasta la selección de las tecnologías más adecuadas, le brindamos asesoramiento claro y personalizado. Estamos comprometidos a optimizar sus recursos, garantizar la eficiencia y alcanzar los resultados deseados. Con nuestra experiencia, le ayudamos a tomar decisiones informadas y a maximizar el éxito de su proyecto tecnológico. Su satisfacción y éxito son nuestra prioridad.",
    },
  ];
  return (
    <section
      id="services"
      className="w-full lg:w-10/12  flex flex-col lg:flex-row p-4 justify-center items-center lg:justify-between lg:items-start gap-7 rounded-lg text-white mt-16 h-[70vh]"
    >
      <div className="">
        <h1 className="text-6xl lg:text-8xl font-bold ">Servicios</h1>
      </div>
      <div className="flex flex-col w-full lg:w-3/6 p-8 justify-center items-center lg:justify-start lg:items-start">
        <Tabs aria-label="Dynamic tabs" variant="light" className="">
          {services.map((service) => (
            <Tab key={service.id} title={service.label}>
              <div className="border-1 rounded-lg p-1">
                <Card className="bg-transparent text-white max-h-96">
                  <CardBody>{service.description}</CardBody>
                </Card>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
