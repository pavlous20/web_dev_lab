import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="categories">
      <h2>Top Categories</h2>
      <div className="cat-list">
        {categories.map(cat => (
          <div key={cat.id} className="cat-card">
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
}
