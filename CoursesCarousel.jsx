import { courses } from "../data/courses";

export default function CoursesCarousel() {
  return (
    <section className="courses">
      <h2>Students are viewing</h2>
      <div className="course-cards">
        {courses.map(c => (
          <div key={c.id} className="course-card">
            <img src={c.image} alt="" />
            <h3>{c.title}</h3>
            <p>{c.instructor}</p>
            <p>{c.rating} ⭐</p>
            <p>${c.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
