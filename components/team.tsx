import Image from "next/image";

const teamMembers = [
  {
    name: "Rajeswari Sriram",
    title: "Chapter's Advisor",
    bio: "Leading Student Energy OAU towards sustainable energy innovation and community engagement.",
    imageUrl: "/Chapter Coordinator Image/Rajeswari Sriram (Chapter's Advisor).jpg",
  },
  {
    name: "Balogun Oluwafernami Victor",
    title: "President",
    bio: "Leading Student Energy OAU towards sustainable energy innovation and community engagement.",
    imageUrl: "/student Energy executives/Balogun Oluwafernami Victor (president).jpg",
  },
  {
    name: "Abimbola Johnson Opeyemi",
    title: "Programs Chair",
    bio: "Organizing impactful programs and events to advance energy education and awareness.",
    imageUrl: "/student Energy executives/Abimbola Johnson Opeyemi (Programs Chair).jpg",
  },
  {
    name: "Adedire Testimony Olaitan",
    title: "Membership & Community Engagement Chair",
    bio: "Building and nurturing our vibrant community of energy enthusiasts and changemakers.",
    imageUrl: "/student Energy executives/Adedire Testimony Olaitan ( membership or community Engagement chair).jpg",
  },
  {
    name: "Omooluwa Jacob Oluwatobiloba",
    title: "Director of Communications & Media",
    bio: "Managing our communications strategy and amplifying our impact through digital media.",
    imageUrl: "/student Energy executives/Omooluwa Jacob Oluwatobiloba (director of communications and media).png",
  },
  {
    name: "Opeyemi Oyeyemi",
    title: "Director of Communications & Media",
    bio: "Managing our communications strategy and amplifying our impact through digital media.",
    imageUrl: "/student Energy executives/Opeyemi.jpg",
  },
];

const Team = () => {
  return (    <div className="flex flex-col justify-center py-8 sm:pt-12 sm:pb-20 px-6 lg:px-8 max-w-screen-xl mx-auto">
      <b className="text-muted-foreground font-semibold">Our Leadership</b>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tighter">
        Meet the Student Energy OAU Executives
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Passionate leaders driving sustainable energy innovation and community engagement at OAU.
      </p>

      <div className="mt-14 sm:mt-20 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            <p className="mt-3">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
