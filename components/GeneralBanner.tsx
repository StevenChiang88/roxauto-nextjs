import Image from "next/image";

interface GeneralBannerProps {
  title: string;
  text: string;
}

/** Hero banner for inner pages. */
export default function GeneralBanner({ title, text }: GeneralBannerProps) {
  return (
    <section className="relative w-full h-[22rem]">
      <Image
        className="w-full h-full object-cover"
        alt=""
        aria-hidden
        width={1600}
        height={400}
        priority
        src="/static/images/generalBannerPic.jpg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center px-4">
        <h1 className="mb-6">{title}</h1>
        <p className="max-w-2xl text-lg opacity-90">{text}</p>
      </div>
    </section>
  );
}
