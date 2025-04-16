"use client";

import React, { useState } from "react";
import MapView from "@/components/map-view";
import { destinations } from "@/data/destinations";
import DetailView from "@/components/detail-view";

const Home = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const selected = destinations.find((d) => d.id === selectedId)!;

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detail Destinasi</h1>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <MapView onSelect={setSelectedId} />
        <DetailView selected={selected} />
      </section>
    </main>
  );
};

export default Home;
