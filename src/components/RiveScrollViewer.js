import dynamic from "next/dynamic";

const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then((mod) => mod.default),
  { ssr: false }
);

export default function RiveScrollViewer({ src }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <RiveComponent
        src={src}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
