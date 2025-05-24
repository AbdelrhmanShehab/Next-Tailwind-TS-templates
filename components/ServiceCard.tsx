import Image from "next/image";
import { Service } from "../types";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <article className=" relative w-full h-[300px] card-shadow rounded-2xl ">
      <div className="absolute flex flex-col pt-[20px] gap-4 h-[260px] md:h-[300px] w-[90%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[80px] h-[80px] rounded-full bg-[#2f82ab]/10">
          {" "}
          <Image
            src={service.icon}
            alt="Home Background"
            width={55}
            height={55}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h2 className="font-bold text-2xl">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </article>
  );
}
