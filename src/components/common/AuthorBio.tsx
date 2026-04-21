interface AuthorBioProps {
  authorName: string;
  isEs?: boolean;
}

export default function AuthorBio({ authorName, isEs = false }: AuthorBioProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-muted/40 rounded-lg border border-border mt-6 mb-2">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-bold text-primary">ME</span>
      </div>
      {/* Text */}
      <div>
        <p className="font-semibold text-sm text-foreground">{authorName}</p>
        <p className="text-xs text-primary font-medium mt-0.5">
          {isEs
            ? "Guía Certificado · Experto en Arqueología Maya"
            : "Certified Tour Guide · Maya Archaeology Expert"}
        </p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {isEs
            ? "Más de 10,000 tours guiados en Chichén Itzá. Experto certificado en arqueología y cultura maya."
            : "10,000+ tours led at Chichen Itza. Certified expert in Maya archaeology and culture."}
        </p>
      </div>
    </div>
  );
}
