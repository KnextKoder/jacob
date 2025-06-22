import Image from "next/image";

const features = [
  {
    title: "Make an Impact",
    description:
      "Develop projects and campaigns that make a real difference in sustainability and energy.",
    image: "/why join/make an impact.png",
  },
  {
    title: "Learn & Collaborate",
    description:
      "Collaborate with and learn from industry experts, thought leaders, and diverse peers.",
    image: "/why join/learn and collaborate.png",
  },
  {
    title: "Build Your Network & Skills",
    description:
      "Enhance leadership, communication, and project management skills while building a valuable network.",
    image: "/why join/build your network and skill.png",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Why Join Student Energy OAU?
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full rounded-xl"
                  width={500}
                  height={500}
                />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
