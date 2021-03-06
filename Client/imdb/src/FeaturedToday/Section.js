import React from "react";
import './Section.css';

const Section = ({movie_url}) => {
  return (
    <section className='section-class'>
        <img className='img-carousel' src={movie_url} />
    </section>
  );
};

export default Section;
