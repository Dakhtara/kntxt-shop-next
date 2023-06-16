import Alert from "@/components/alert/Alert";
import SectionProductCollection from "@/components/templates/SectionProductCollection";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-12">
        <SectionProductCollection title="EU Tour" collection="EU Tour" />
        <SectionProductCollection title="Overdrive" collection="Overdrive" />
      </div>
    </main>
  );
}
