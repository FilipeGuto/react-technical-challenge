import NextImage from "next/image";

type ImageProps = {
  className?: string;
  src?: string;
  alt?: string;
  sizes?: string;
};
const Image = ({ className, src, sizes, alt }: ImageProps) => {
  if (!src) {
    return (
      <div className={`${className} bg-gray-200`} />
    );
  }

  const urlImage = `${process.env.NEXT_PUBLIC_IMAGES_URL}${src}`

  return (
    <div className='w-44 h-48 relative'>
      <NextImage
        alt={alt || ""}
        className={className}
        loader={() => urlImage}
        src={urlImage}
        layout='fixed'
        sizes={sizes}
        fill
      />
    </div>
  );
};

export default Image;
