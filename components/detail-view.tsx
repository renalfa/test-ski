import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Destination } from "@/data/destinations";

import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

interface Props {
  selected: Destination;
}

const DetailView: FC<Props> = ({ selected }) => {
  return (
    <div className="flex flex-col gap-4 hover:shadow-lg pb-4 rounded-xl transition-all duration-700 ease-in-out">
      <Image
        src={selected.image}
        alt={selected.name}
        width={500}
        height={500}
        className="w-full h-80 object-cover rounded-xl"
      />
      <h2 className="text-2xl font-bold ml-4">{selected.name}</h2>
      <div className="flex items-center ml-4 bg-black text-white rounded-lg px-4 py-2 w-fit text-xs">
        <FaLocationDot />
        <span className="ml-2">
          {selected.city}, {selected.province}
        </span>
      </div>
      <p className="text-justify p-4">{selected.description}</p>
      <Link
        href="/"
        className="ml-4 flex items-center gap-2 hover:gap-4 hover:text-cyan-800 transition-all duration-300 font-bold"
      >
        See Detail
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default DetailView;
