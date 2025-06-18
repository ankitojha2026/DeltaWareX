import React from 'react';

function Testimonial() {
  return (
    <section className="py-5 bg-secondary-subtle">
      <div className="container">
        <h2 className="text-center display-6 mb-4">Who is Using Our App Development Service?</h2>
        <div className="card mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
          <div className="card-body text-center">
            <p className="card-text fst-italic">"One of the best services!! I am very satisfied with the work they did for me. I'm so happy!!!"</p>
            <p className="card-text fw-bold">Anita Negi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;