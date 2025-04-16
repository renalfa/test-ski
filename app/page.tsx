"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
});
import DetailView from "@/components/detail-view";

import { destinations } from "@/data/destinations";

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
