import "../service/services.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Cooking Maid",
      description: "Expert in preparing delicious meals tailored to your preferences.",
      image: "./cooking-maid.png",
      link:"/cookingmaid",
    },
    {
      id: 2,
      title: "Cleaning Maid",
      description: "Efficient cleaning services to keep your home sparkling clean.",
      image: "./cleaning-maid.png",
      link:"/cleaningmaid",
    },
    {
      id: 3,
      title: "Nanny",
      description: "Caring and trustworthy nannies for your children.",
      image: "./nanny.png",
      link:"/nanny",
    },
    {
      id: 4,
      title: "Caretaker",
      description: "Experienced caretakers for elderly or special needs care.",
      image: "./caretaker.png",
      link:"/caretaker",
    },
    {
      id: 5,
      title: "All Rounder",
      description: "Versatile maids skilled in cooking, cleaning, and childcare.",
      image: "./allrounder.png",
      link:"/allrounder",
    },
  ];

  

  return (
    <section className="service-section">
      <h2 className="section-title">Our <span className="serviceheading">Services</span></h2>
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <NavLink to={`${service.link}`}>

            <button
              className="order-button"
              
              
            >
View All


            </button>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
