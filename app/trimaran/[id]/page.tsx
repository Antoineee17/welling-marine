import "./styles.css";
import TrimaranView from "./TrimaranView";


const TRIMARANS = [
 {
    id: "53",
    name: "Trimaran 53",
    description: "Rapide et léger",
    images: [
      "/assets/53/3113.jpg",
      "/assets/53/3114.jpg",
      "/assets/53/3115.jpg",
      "/assets/53/3116.jpg",
      "/assets/53/3117.jpg",
      "/assets/53/3118.jpg",
      "/assets/53/3119.jpg",
      "/assets/53/3120.jpg",
      "/assets/53/3121.jpg",
      "/assets/53/3122.jpg",
      "/assets/53/3123.jpg",
      "/assets/53/3124.jpg",
      "/assets/53/3125.jpg",
      "/assets/53/3126.jpg",
      "/assets/53/3127.jpg",
      "/assets/53/3128.jpg",
      
      "/assets/53/3131.jpg",
    ],
    versions: [
      "/assets/53/3129.jpg",
      "/assets/53/3130.jpg",
    ],
    specs: {
      longueur: "16 m",
      largeur: "8 m",
      coque: "15 m",
      tirant: "1.2 m",
      gv: "120 m²",
      genois: "80 m²",
      eau: "500 L",
      gazole: "300 L",
      couchages: "8",
      cabines: "4",
    },
  },  { id: "65", name: "Trimaran 65", description: "Confort longue distance" },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const trimaran = TRIMARANS.find((t) => t.id === id);
  if (!trimaran) return null;

  return <TrimaranView trimaran={trimaran} />;
}

