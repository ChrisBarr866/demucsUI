import Image from "next/image";

export default function Logo() {
  return (
    <div className="fixed flex justify-start">
      <Image
        draggable={false}
        width={100}
        height={100}
        src="/images/cat.png"
        alt="logo"
        layout="fixed"
      />
      <div className="text-primary">DemucsUI</div>
    </div>
  );
}
