import SectionProductCollection from "@/src/components/templates/SectionProductCollection";

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
