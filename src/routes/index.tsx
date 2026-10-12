import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro de Deportes ESPOCH — Sistema de gestión" },
      { name: "description", content: "Gestión de deportistas, selecciones, clubes, períodos y escenarios deportivos de la ESPOCH." },
      { property: "og:title", content: "Centro de Deportes ESPOCH — Sistema de gestión" },
      { property: "og:description", content: "Gestión de deportistas, selecciones, clubes, períodos y escenarios deportivos de la ESPOCH." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-sidebar text-sidebar-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
          <Trophy className="h-7 w-7" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-sidebar-primary">ESPOCH · Centro de Deportes</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Deportistas, selecciones y clubes en un solo lugar.
        </h1>
        <p className="mt-5 max-w-xl text-lg opacity-80">
          Registra cada estudiante una sola vez, vincúlalo a varias selecciones y clubes por período académico y consulta todo en un panel con gráficos.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
            <Link to="/auth">Ingresar como coordinador</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
