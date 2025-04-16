export type Destination = {
  id: number;
  name: string;
  city: string;
  province: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Pantai Kuta",
    city: "Badung",
    province: "Bali",
    description:
      "Pantai Kuta adalah salah satu pantai paling ikonik di Bali yang dikenal dengan hamparan pasir putihnya yang luas, ombak yang ideal untuk berselancar, serta suasana yang ramai dengan turis lokal dan mancanegara. Di sepanjang pantai, terdapat deretan hotel, restoran, bar, dan pusat perbelanjaan yang menjadikan Kuta sebagai pusat hiburan dan wisata malam di Bali.",
    image: "/images/kuta.jpg",
    lat: -8.7177,
    lng: 115.1687,
  },
  {
    id: 2,
    name: "Danau Batur",
    city: "Bangli",
    province: "Bali",
    description:
      "Danau Batur merupakan danau kaldera terbesar di Bali yang terletak di kaki Gunung Batur, Kintamani. Danau ini menawarkan pemandangan alam yang memukau dengan udara yang sejuk dan tenang. Di sekitar danau, pengunjung bisa menikmati wisata kuliner, berendam di pemandian air panas alami, atau memulai pendakian ke puncak Gunung Batur untuk menyaksikan matahari terbit.",
    image: "/images/batur.jpg",
    lat: -8.2652,
    lng: 115.3776,
  },
  {
    id: 3,
    name: "Air Terjun Gitgit",
    city: "Buleleng",
    province: "Bali",
    description:
      "Air Terjun Gitgit terletak di kawasan pegunungan yang hijau di Bali utara. Dikelilingi oleh hutan tropis dan suasana alam yang asri, air terjun ini menjadi destinasi favorit untuk para pencinta alam dan fotografer. Jalur trekking menuju air terjun relatif mudah, membuatnya cocok untuk keluarga maupun wisatawan yang ingin menikmati ketenangan alam Bali.",
    image: "/images/gitgit.jpg",
    lat: -8.189,
    lng: 115.1426,
  },
  {
    id: 4,
    name: "Ubud",
    city: "Gianyar",
    province: "Bali",
    description:
      "Ubud dikenal sebagai jantung seni dan budaya Bali. Kota kecil ini menawarkan suasana yang tenang dengan lanskap persawahan hijau, galeri seni, museum, serta pusat yoga dan meditasi. Ubud juga dikenal dengan pasar tradisionalnya, seni tari Bali, serta berbagai pilihan akomodasi mulai dari homestay hingga resort mewah yang menyatu dengan alam.",
    image: "/images/ubud.jpg",
    lat: -8.5069,
    lng: 115.2625,
  },
  {
    id: 5,
    name: "Pantai Medewi",
    city: "Jembrana",
    province: "Bali",
    description:
      "Pantai Medewi terletak di Bali Barat dan terkenal di kalangan peselancar karena ombaknya yang panjang dan konsisten. Pantai ini relatif sepi dan alami dibandingkan dengan pantai-pantai di selatan Bali, sehingga cocok bagi mereka yang mencari ketenangan atau ingin menikmati pemandangan laut tanpa keramaian.",
    image: "/images/madewi.jpg",
    lat: -8.4295,
    lng: 114.8481,
  },
  {
    id: 6,
    name: "Pura Besakih",
    city: "Karangasem",
    province: "Bali",
    description:
      "Pura Besakih, yang sering disebut sebagai 'Mother Temple of Bali', adalah pura Hindu terbesar dan tersuci di Bali. Terletak di lereng Gunung Agung, kompleks pura ini terdiri dari lebih dari 20 pura yang dibangun pada berbagai tingkatan. Pura ini tidak hanya menjadi pusat kegiatan spiritual, tetapi juga menawarkan pemandangan spektakuler dari ketinggian.",
    image: "/images/besakih.jpg",
    lat: -8.3745,
    lng: 115.45,
  },
  {
    id: 7,
    name: "Nusa Lembongan",
    city: "Klungkung",
    province: "Bali",
    description:
      "Nusa Lembongan adalah sebuah pulau kecil yang terletak di sebelah tenggara Bali. Pulau ini terkenal dengan keindahan pantainya yang bersih, air laut yang jernih, dan spot snorkeling serta diving yang luar biasa. Aktivitas populer lainnya termasuk menyusuri mangrove, bermain paddle board, dan menikmati seafood segar di restoran tepi pantai.",
    image: "/images/lembongan.jpg",
    lat: -8.6846,
    lng: 115.4481,
  },
  {
    id: 8,
    name: "Tanah Lot",
    city: "Tabanan",
    province: "Bali",
    description:
      "Tanah Lot adalah salah satu pura paling terkenal di Bali yang berdiri kokoh di atas batu karang besar di tengah laut. Pura ini menjadi ikon pariwisata Bali dan sangat ramai dikunjungi menjelang matahari terbenam. Selain keindahan arsitekturnya, Tanah Lot juga memiliki nilai spiritual yang tinggi bagi masyarakat Hindu Bali.",
    image: "/images/tanahlot.jpg",
    lat: -8.6214,
    lng: 115.0865,
  },
  {
    id: 9,
    name: "Pantai Sanur",
    city: "Denpasar",
    province: "Bali",
    description:
      "Pantai Sanur menawarkan suasana yang tenang dan cocok untuk wisata keluarga. Dengan ombak yang relatif kecil dan jalur pedestrian di sepanjang pantai, tempat ini ideal untuk bersepeda atau jalan pagi. Di pagi hari, pengunjung dapat menyaksikan matahari terbit dengan latar perahu-perahu nelayan yang berlayar di kejauhan.",
    image: "/images/sanur.jpg",
    lat: -8.6938,
    lng: 115.2641,
  },
];
