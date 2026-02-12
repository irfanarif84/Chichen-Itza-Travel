import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrustBadges from "@/components/features/booking/TrustBadges";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().min(1, "Please select a subject"),
  tourInterest: z.string().optional(),
  travelDate: z.string().optional(),
  groupSize: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const meta = getPageMeta({
  title: "Contact Us – Chichen Itza Tours | Get a Free Quote",
  description: "Contact our Chichen Itza tour experts for a free quote. Get personalized recommendations, group discounts, and fast responses within 2 hours.",
  canonical: "/practical/contact",
});

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "", tourInterest: "", groupSize: "" },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead meta={meta} />
      <div className="container py-6">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
              Contact Us & Get a Free Quote
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Our Chichen Itza experts respond within 2 hours. Get personalized tour recommendations, group discounts, and custom itineraries.
            </p>

            {submitted ? (
              <div className="bg-success/10 border border-success/30 rounded-lg p-8 text-center">
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-4">We've received your message and will get back to you within 2 hours.</p>
                <Button variant="cta" asChild>
                  <Link to="/tours">Browse Tours While You Wait →</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" {...register("name")} className="mt-1" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="you@email.com" {...register("email")} className="mt-1" />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" placeholder="+1 234 567 8900" {...register("phone")} className="mt-1" />
                  </div>
                  <div>
                    <Label>Subject *</Label>
                    <Select onValueChange={(v) => setValue("subject", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="Select a subject" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="group">Group Booking (6+)</SelectItem>
                        <SelectItem value="custom">Custom Itinerary</SelectItem>
                        <SelectItem value="question">General Question</SelectItem>
                        <SelectItem value="support">Booking Support</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="travelDate">Preferred Travel Date</Label>
                    <Input id="travelDate" type="date" {...register("travelDate")} className="mt-1" />
                  </div>
                  <div>
                    <Label>Group Size</Label>
                    <Select onValueChange={(v) => setValue("groupSize", v)}>
                      <SelectTrigger className="mt-1"><SelectValue placeholder="How many travelers?" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1–2 travelers</SelectItem>
                        <SelectItem value="3-5">3–5 travelers</SelectItem>
                        <SelectItem value="6-10">6–10 travelers</SelectItem>
                        <SelectItem value="11-20">11–20 travelers</SelectItem>
                        <SelectItem value="20+">20+ travelers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your ideal tour experience, special requirements, or any questions..." rows={5} {...register("message")} className="mt-1" />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" /> {isSubmitting ? "Sending..." : "Send Message & Get Free Quote"}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card rounded-lg shadow-card p-6">
              <h2 className="font-heading font-semibold text-lg mb-4">Get in Touch</h2>
              <div className="space-y-4 text-sm">
                <a href="tel:+529981234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">Call Us</p><p className="text-muted-foreground">+52 998 123 4567</p></div>
                </a>
                <a href="mailto:info@chichenitzatours.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">Email</p><p className="text-muted-foreground">info@chichenitzatours.com</p></div>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">Office</p><p className="text-muted-foreground">Cancún, Quintana Roo, MX</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div><p className="font-semibold">Hours</p><p className="text-muted-foreground">Mon-Sun 7 AM – 9 PM CST</p></div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="font-heading font-semibold mb-2">Why Contact Us?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Personalized tour recommendations</li>
                <li>✓ Group discounts for 6+ travelers</li>
                <li>✓ Custom itinerary planning</li>
                <li>✓ Respond within 2 hours</li>
                <li>✓ No obligation, free quotes</li>
              </ul>
            </div>

            <TrustBadges variant="compact" />
          </aside>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
