import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#1F1F1F] h-full w-full">
      <div className=" flex items-center">
        <div
          className="relative w-75 h-75 sm:w-87.5 
      sm:h-87.5 md:h-100 md:w-100"
        >
          <Image
            src="/documents.png"
            fill
            alt="Documents"
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="Documents"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-100 w-100 hidden md:block">
          <Image
            src="/reading.png"
            fill
            alt="Reading"
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="Reading"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
