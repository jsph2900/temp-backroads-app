import Title from './Title';
import { tourData } from '../Data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle=" tours" />
      <div className="section-center featured-center">
        {tourData.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
      <img src="./images/about.jpeg" alt="" />
    </section>
  );
};
export default Tours;
