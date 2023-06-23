import Title from './Title';
import { servicesData } from '../Data';
import Service from './Service';

const services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle=" Services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service} />;
          //
        })}
      </div>
    </section>
  );
};
export default services;
