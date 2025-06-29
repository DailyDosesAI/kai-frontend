import dynamic from "next/dynamic";

const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then((mod) => mod.default),
  { ssr: false }
);

export default function RiveScrollViewer({ src }) {
  return (
    <div className="w-[900px] h-[900px] flex flex-col items-center justify-center relative">
      <RiveComponent
        src={src}
        style={{ width: "900px", height: "900px", display: "block" }}
      />
    </div>
  );
}
