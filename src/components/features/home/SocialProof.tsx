import { useState, useEffect } from "react";
import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RecentBooking {
  name: string;
  location: string;
  tour: string;
  timeAgo: string;
}

const recentBookings: RecentBooking[] = [
  { name: "John M.", location: "Texas, USA", tour: "Classic Day Tour", timeAgo: "3 min ago" },
  { name: "Sarah L.", location: "Ontario, Canada", tour: "Private VIP Tour", timeAgo: "7 min ago" },
  { name: "Carlos R.", location: "Mexico City", tour: "Sunrise Tour", timeAgo: "12 min ago" },
  { name: "Emma W.", location: "London, UK", tour: "Cenote Combo", timeAgo: "18 min ago" },
  { name: "Hans G.", location: "Berlin, Germany", tour: "Family Adventure", timeAgo: "25 min ago" },
  { name: "Lisa T.", location: "Sydney, Australia", tour: "Budget Express", timeAgo: "32 min ago" },
];

const featuredReviews = [
  {
    name: "Jennifer K.",
    location: "California, USA",
    rating: 5,
    text: "Our guide Luis was absolutely phenomenal! His knowledge of Mayan history made the ruins come alive. The cenote swim was the perfect way to cool off. Highly recommend!",
    tour: "Classic Day Tour",
    date: "January 2026"
  },
  {
    name: "Michael & Family",
    location: "Toronto, Canada",
    rating: 5,
    text: "Booked the family tour and it was perfect for our kids (ages 6 & 9). The interactive storytelling kept them engaged, and they still talk about the Mayan legends!",
    tour: "Family Adventure",
    date: "December 2025"
  },
  {
    name: "Sophie R.",
    location: "Paris, France",
    rating: 5,
    text: "The sunrise tour was worth the early wake-up call! Having El Castillo almost to ourselves was magical. The photos we got are priceless.",
    tour: "Sunrise Tour",
    date: "January 2026"
  },
];

const SocialProof = () => {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const booking = recentBookings[currentBooking];

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container">
        {/* Recent bookings ticker */}
        <div className="mb-12">
          <div 
            className={`inline-flex items-center gap-3 bg-success/10 border border-success/20 rounded-full px-4 py-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              <strong>{booking.name}</strong> from {booking.location} booked <strong>{booking.tour}</strong>
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {booking.timeAgo}
            </span>
          </div>
        </div>

        {/* Section heading */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted by Thousands
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 10,247 verified reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{review.location}</span>
                  </div>
                  <p className="text-xs text-primary mt-1">{review.tour} • {review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {[
            { value: "10,247+", label: "Happy Travelers" },
            { value: "98%", label: "Would Recommend" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "8+", label: "Years of Experience" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading font-bold text-3xl text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
