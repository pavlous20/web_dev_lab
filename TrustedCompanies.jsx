import { companies } from "../data/companies";

export default function TrustedCompanies() {
  return (
    <section className="trusted">
      <h3>Trusted by companies of all sizes</h3>
      <div className="logos">
        {companies.map((name, index) => (
          <span key={index}>{name}</span>
        ))}
      </div>
    </section>
  );
}
