import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className=""></div>
      <div className="text-center tracking-wide md:text-6xl text-3xl   justify-center mt-20 lg:px-44 font-bold leading-snug">
        Learn Full-Stack Development from scratch with
        <span
          id="stroke"
          className="relative whitespace-nowrap text-teal-500 ml-3 "
        >
          <svg
            aria-hidden="true"
            width="159"
            height="11"
            viewBox="0 0 159 11"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-7 left-0 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_6_2645)">
              <path d="M34.6052 2.23986C49.7085 1.91769 64.8201 1.71057 79.9316 1.61852C95.0431 1.52647 110.015 1.55716 125.052 1.7029C133.595 1.78728 142.145 1.90234 150.688 2.05576L151.847 0.483237C132.345 0.797741 112.851 1.18895 93.3577 1.65688C73.864 2.1248 54.3702 2.66943 34.8765 3.29844C23.9334 3.6513 12.9985 4.0195 2.05538 4.41838C1.41409 4.4414 0.452148 4.59481 0.0903915 5.1778C-0.246699 5.72243 0.378152 6.00625 0.896121 5.99091C21.212 5.50764 41.5443 5.46162 61.8685 5.8605C82.1926 6.25939 102.5 7.11085 122.783 8.39955C134.179 9.12062 145.566 9.98742 156.936 10.9923C157.553 11.046 158.572 10.7622 158.901 10.2329C159.263 9.65757 158.589 9.45813 158.096 9.41978C137.862 7.63247 117.579 6.2824 97.2794 5.37724C76.98 4.47208 56.6477 4.0195 36.3235 4.01183C24.9036 4.01183 13.4836 4.14223 2.06361 4.41838L0.904343 5.99091C20.3898 5.27752 39.8836 4.64851 59.3773 4.08854C78.871 3.53623 98.3647 3.05297 117.858 2.65409C128.802 2.43163 139.753 2.22452 150.696 2.04809C151.337 2.04042 152.307 1.86399 152.661 1.28868C153.015 0.713362 152.365 0.483237 151.855 0.475566C136.736 0.214757 121.632 0.0536689 106.521 0.0153147C91.4091 -0.0230396 76.4374 0.0459981 61.3998 0.237769C52.8574 0.345161 44.3068 0.490907 35.7645 0.675008C35.1232 0.69035 34.153 0.859108 33.7995 1.43442C33.4624 1.97905 34.0872 2.26287 34.6052 2.24753V2.23986Z" />
            </g>
            <defs>
              <clipPath id="clip0_6_2645">
                <rect width="159" height="11" />
              </clipPath>
            </defs>
          </svg>

          <span className="relative">CS Foundations 101</span>
        </span>{" "}
      </div>
      <div className="md:text-2xl text-lg  font-medium text-center text-neutral-400  tracking-normal leading-snug  mt-10 md:px-36 ">
        We help students and professionals learn full-stack development from
        scratch.
      </div>
      <div className="flex items-center justify-center space-x-4 mt-5 ">
        <Button className="rounded-full border bg-transparent border-teal-200-400 hover:opacity-90 hover:bg-teal-400 bg-teal-500 ">
          <Link href="/about">About</Link>
          <MoveRight className="ml-1" />
        </Button>
        {/* <Button className="rounded-full border bg-transparent hover:border-amber-600 text-orange-400 hover:bg-transparent ">
        <Link href="/notes">Notes</Link>
        </Button> */}
      </div>
      {/* <div className="items-center justify-center  rounded-xl ">
          <div className="text-2xl font-medium"> Backed By </div>
          <div>
            <Image src="/ycombinator-ar21.svg" alt="logo" width={100} height={5}/>
          </div>
        </div> */}

      {/* <div className="flex flex-col items-center justify-center text-xl mt-16 space-y-1">
        <span>Backed by</span>
        <span className="flex items-center justify-center gap-2">
          <span className="flex items-center justify-center text-white  bg-orange-600 rounded-md h-8 w-8 font-semibold">
            Y
          </span>
          <span className="text-lg lg:text-xl font-medium">Combinator</span>
        </span>
      </div> */}
      <div className="p-2 ">
        {/* <TeamInfo />
      <JoinWaitlist/> */}
      </div>
    </main>
  );
}
