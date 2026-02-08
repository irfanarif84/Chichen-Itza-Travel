import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/tourData";
import { CalendarDays, Users, MapPin, ArrowRight } from "lucide-react";

const departureCities = [
  { value: "cancun", label: "Cancún" },
  { value: "playa-del-carmen", label: "Playa del Carmen" },
  { value: "tulum", label: "Tulum" },
  { value: "riviera-maya", label: "Riviera Maya" },
  { value: "merida", label: "Mérida" },
];

const QuickBookingForm = () => {
  const [tourId, setTourId] = useState("");
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="bg-card rounded-lg shadow-card-hover p-6">
      <h3 className="font-heading font-bold text-lg mb-1">Check Availability</h3>
      <p className="text-sm text-muted-foreground mb-4">Find your perfect tour in seconds</p>

      <div className="space-y-3">
        {/* Tour */}
        <div>
          <label className="text-sm font-medium mb-1 block">Select Tour</label>
          <div className="relative">
            <select
              value={tourId}
              onChange={(e) => setTourId(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Choose a tour...</option>
              {tours.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.shortTitle} — ${t.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* City */}
        <div>
          <label className="text-sm font-medium mb-1 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> Departure City
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select city...</option>
            {departureCities.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm font-medium mb-1 flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" /> Preferred Date
          </label>
          <input
            type="date"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="text-sm font-medium mb-1 flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-muted-foreground" /> Guests
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-10 h-10 rounded-md border border-input bg-background flex items-center justify-center font-bold hover:bg-muted transition-colors"
            >
              −
            </button>
            <span className="font-semibold text-lg w-8 text-center">{guests}</span>
            <button
              onClick={() => setGuests(Math.min(20, guests + 1))}
              className="w-10 h-10 rounded-md border border-input bg-background flex items-center justify-center font-bold hover:bg-muted transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <Button variant="cta" className="w-full mt-2" size="lg" asChild>
          <Link to="/tours">
            Check Availability <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          ✓ Free cancellation · ✓ No payment required now
        </p>
      </div>
    </div>
  );
};

export default QuickBookingForm;