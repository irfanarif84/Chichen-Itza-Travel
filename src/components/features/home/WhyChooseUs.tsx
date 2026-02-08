import { Shield, Clock, Award, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Free Cancellation",
    description: "Plans change — we get it. Cancel up to 24 hours before your tour for a full refund, no questions asked.",
  },
  {
    icon: Clock,
    title: "Skip-the-Line Access",
    description: "Beat the crowds with early access options and priority entry to Chichen Itza on select tours.",
  },
  {
    icon: Award,
    title: "Expert Local Guides",
    description: "Our certified bilingual guides are Mayan history specialists who bring the ancient world to life.",
  },
  {
    icon: HeartHandshake,
    title: "Best Price Guarantee",
    description: "Found a lower price elsewhere? We'll match it and give you 10% off your next booking.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 lg:py-20 bg-card">
    <div className="container">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Book With Us</span>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">
          Your Chichen Itza Adventure, Done Right
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We've helped over 50,000 travelers experience the magic of Chichen Itza. Here's why they choose us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="text-center p-6 rounded-lg bg-background shadow-card hover:shadow-card-hover transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <b.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;