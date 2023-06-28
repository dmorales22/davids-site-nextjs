import Navbar from "@/components/Navbar";

export default function Index() {
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
            />
          </div>
          <p className="mt-2 font-bold text-lg text-center leading-4 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            Bio
          </p>
          <p className="mt-6 text-md md:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            I am a software engineer that specializes in web development,
            computer security, and server management. I graduated from the
            University of Texas at El Paso (UTEP) in 2021 with BS in Computer
            Science with a concentration in Secure Cyber Systems.
          </p>
          <p className="mt-6 text-md md:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            I currently work at a software start up called innovativeManage,
            Inc. Which specializes in property management software for the
            multi-family rental industry.
          </p>
          <p className="mt-6 font-bold text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
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
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>Bash</li>
                <li>Scala</li>
                <li>PHP</li>
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
                <li>Database Design and Management (NoSQl and SQL)</li>
                <li>MongoDB, Mongoose, mySQL, SQLite, MariaDB, CouchDB</li>
                <li>NGINX & Apache</li>
                <li>SCRUM and Agile Development</li>
                <li>REST API Development</li>
                <li>Fullstack Developer</li>
                <li>Linux Server Management</li>
                <li>Algorithms and Data Structures</li>
                <li>Cyber Security, Pentesting, and Computer Security</li>
                <li>Cloud Services (AWS, Linode, Azure)</li>
                <li>Requirements Engineering</li>
                <li>Git Version Control</li>
                <li>Computer Networking and Network Protocols</li>
                <li>Advanced Linux usage (Debian, Ubuntu, Arch, Mint)</li>
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
                <li>Tri-State Electric - Telecommunications & Fiber Optics (2020-2021)</li>
                <li>innovativeManage, Inc - Software Engineer Intern (2021-2022)</li>
                <li>innovativeManage, Inc - Software Engineer (2022-)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
