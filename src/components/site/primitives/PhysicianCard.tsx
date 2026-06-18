import { ArrowRight } from "lucide-react";

interface PhysicianCardProps {
  name: string;
  title: string;
  image: string;
}

export function PhysicianCard({ name, title, image }: PhysicianCardProps) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-3xl bg-[color:var(--mint)]">
        <img
          src={image}
          alt={`${name}, ${title}`}
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
      <h3 className="mt-3 text-sm font-semibold text-foreground">{name}</h3>
      <p className="text-xs text-muted-foreground">{title}</p>
    </article>
  );
}
