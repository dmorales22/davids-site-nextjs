import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { ipGetter } from "../../../utilities/ipgetter";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export default function Index() {
  const programmingLanguages = [
    "JavaScript",
    "React JS",
    "Node.js",
    "Next.js",
    "Python",
    "Java",
    "C",
    "Bash",
    "Scala",
    "PHP",
  ];
  const technicalSkills = [
    "Database Design and Management (NoSQl and SQL)",
    "MongoDB, Mongoose, mySQL, SQLite, MariaDB, CouchDB",
    "NGINX & Apache",
    "SCRUM and Agile Development",
    "REST API Development",
    "Fullstack Developer",
    "Linux Server Management",
    "Algorithms and Data Structures",
    "Cyber Security, Pentesting, and Computer Security",
    "Cloud Services (AWS, Linode, Azure)",
    "Requirements Engineering",
    "Git Version Control",
    "Computer Networking and Network Protocols",
    "Advanced Linux usage (Debian, Ubuntu, Arch, Mint)",
  ];
  const workHistory = [
    "Tri-State Electric - Telecommunications & Fiber Optics (2020-2021)",
    "innovativeManage, Inc - Software Engineer Intern (2021-2022)",
    "innovativeManage, Inc - Software Engineer (2022-)",
  ];

  const bio =
    "I am a software engineer that specializes in web development, computer security, and server management. I graduated from the University of Texas at El Paso (UTEP) in 2021 with BS in Computer Science with a concentration in Secure Cyber Systems.";
  const bioFollowUp =
    "I currently work at a software start up called innovativeManage, Inc. Which specializes in property management software for the multi-family rental industry.";
  useEffect(() => {
    async function logInteraction() {
      try {
        const ip = await ipGetter();
        const response = await axios.post(
          //Sends POST request to the server
          baseUrl + "/api/v1/page-interaction",
          {
            interaction_type: "public-page",
            interaction_descriptor: "page-visit",
            route: "/about-me",
            origin_type: "site",
            ipv4: ip.ipv4,
            ipv6: ip.ipv6,
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err);
      }
    }
    logInteraction();
  }, []);

  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r min-h-screen max-h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
            About Me!
          </h2>
          <div className="flex w-full justify-center items-center">
            <img
              className={"rounded-full w-24 md:w-32 lg:w-48"}
              src={"images/1649098743702.jpg"}
              alt="a picture of david"
            />
          </div>
          <p className="mt-2 font-bold text-xl text-center leading-4 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            Bio
          </p>
          <p className="mt-6 text-md lg:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            {bio}
          </p>
          <p className="mt-6 text-md md:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            {bioFollowUp}
          </p>
          <p className="mt-6 font-bold text-xl text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            My Knowledge
          </p>
          <div className="flex flex-wrap px-4 justify-center">
            <div
              className={
                "w-[280px] md:w-[320px] lg:w-[360px] m-2 h-full border-2 rounded-md border-white"
              }
            >
              <p className="text-md text-center font-bold md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
                Programming Languages
              </p>
              <ol
                className={
                  "list-disc text-md md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12"
                }
              >
                {programmingLanguages.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ol>
            </div>
            <div
              className={
                "w-[280px] md:w-[320px] lg:w-[360px] m-2 h-full border-2 rounded-md border-white"
              }
            >
              <p className="text-md text-center font-bold md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
                Technical Skills
              </p>
              <ol
                className={
                  "list-disc text-md md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12"
                }
              >
                {technicalSkills.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ol>
            </div>
            <div
              className={
                "w-[280px] md:w-[320px] lg:w-[360px] m-2 h-full border-2 rounded-md border-white"
              }
            >
              <p className="text-md text-center font-bold md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
                Work History
              </p>
              <ol
                className={
                  "list-disc text-md md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12"
                }
              >
                {workHistory.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
