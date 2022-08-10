import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center display-inline">
      <Image
        draggable={false}
        width={200}
        height={200}
        src="/images/cat.png"
        alt="logo"
        layout="responsive"
      />
      <div className="text-primary">DemucsUI</div>
    </div>
  );
}
