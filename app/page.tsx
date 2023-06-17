import SectionProductCollection from "@/src/components/templates/SectionProductCollection";
import CollectionProvider from "@/src/providers/CollectionProvider";

export default function Home() {
  const collections = new CollectionProvider().findAll();
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-12">
        {collections.map((collection, key) => (
          <SectionProductCollection key={key} title={collection} collection={collection} />
        ))}
      </div>
    </main>
  );
}
