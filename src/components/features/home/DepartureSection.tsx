import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  { name: "Cancún", slug: "cancun", tours: 12, time: "2.5 hrs" },
  { name: "Playa del Carmen", slug: "playa-del-carmen", tours: 10, time: "2 hrs" },
  { name: "Tulum", slug: "tulum", tours: 8, time: "2 hrs" },
  { name: "Riviera Maya", slug: "riviera-maya", tours: 9, time: "2 hrs" },
  { name: "Mérida", slug: "merida", tours: 6, time: "1.5 hrs" },
];

const DepartureSection = () => (
  <section className="py-16 lg:py-20 bg-card">
    <div className="container">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Convenient Departures</span>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">
          Tours From Your City
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We pick you up directly from your hotel. Choose your departure city for available tours and schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cities.map((c) => (
          <Link
            key={c.slug}
            to={`/tours-from/${c.slug}`}
            className="group flex flex-col items-center p-5 rounded-lg bg-background shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <MapPin className="h-8 w-8 text-primary mb-2 group-hover:text-accent transition-colors" />
            <h3 className="font-heading font-semibold text-base">{c.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.tours} tours · {c.time} drive</p>
            <span className="text-xs text-primary font-medium mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              View Tours <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DepartureSection;