import Navbar from "../molecules/Navbar";
import TeamMemberCard from "../molecules/TeamMemberCard"; // Adjust the path based on your project structure

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Iklilun Nafisi",
      role: "Lead Group",
      photoUrl: "src/assets/iklilunNafisi.png",
    },
    {
      name: "Ilham Fahrezy",
      role: "Lead Developer",
      photoUrl: "src/assets/ilhamFahrezy.png",
    },
    {
      name: "M Harist",
      role: "UI/UX Designer, Frontend Developer",
      photoUrl: "src/assets/profile.png",
    },
    {
      name: "Andhika Fairuz",
      role: "Backend Developer",
      photoUrl: "src/assets/profile.png",
    },
    {
      name: "Vivit Ardiansyah",
      role: "Backend Developer - Database Engineer",
      photoUrl: "src/assets/vivitArdiansyah.png",
    },
    {
      name: "Arfani Zarrodin",
      role: "QA Engineer",
      photoUrl: "src/assets/profile.png",
    },
    {
      name: "Yoyon Rudiharto",
      role: "Backend Developer",
      photoUrl: "src/assets/profile.png",
    },
    {
      name: "Hanif Nur Irsyaad",
      role: "QA Engineer",
      photoUrl: "src/assets/profile.png",
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen overflow-y-scroll">
      <Navbar />
      <div className="container p-8">
        <h1 className="text-3xl font-bold mb-2">Meet Our Team</h1>
        <p className="text-gray-500 mb-5">
          Alhamdulillah, With great power comes great responsibility.
        </p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
