import dynamic from "next/dynamic";

const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then((mod) => mod.default),
  { ssr: false }
);

export default function RiveScrollViewer({ src }) {
  return (
    <div className="w-[850px] h-[850px] flex flex-col items-center justify-center relative">
      <RiveComponent
        src={src}
        style={{ width: "850px", height: "850px", display: "block" }}
      />
    </div>
  );
}
