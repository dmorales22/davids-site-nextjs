import Navbar from "@/components/Navbar";

export default function Index() {
  const content_arr = [
    {
      title: "RenRate",
      type: "professional",
      description:
        "A professional project that I'm developing for my company innovativeManage, Inc. This is a major project for the company. This is a property management software that allows for property managers to manage units, properties, residents, pets, leases, communication, parking and much more for rental properties. Stripe API is used for payment processing for services like parking reservations, invoice generation, and rents. I designed, developed, and deployed almost the entire project so far.",
      backend: "Node.js",
      frontend: "React.js w/ Chakra UI",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      image: "",
      is_weblink: true,
      weblink: "https://app.renrate.com",
      repository: "Proprietary code",
      is_repo_weblink: false,
      status: "Active",
    },
    {
      title: "Simple CRM",
      type: "professional",
      description:
        "A professional project that I developed for my company innovativeManage, Inc. It was the first major project I've worked on in my professional career. The project was meant to be dynamic CRM for multiple use cases like election campaigns, techinal support, resident outreach, and much more. The project used the Twilio API to send and receive calls and texts with a built in web browser dialer. I designed, developed, and deployed almost the project. The project was ultimately shelved for other projects.",
      backend: "Node.js",
      frontend: "React.js",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      image: "",
      is_weblink: false,
      weblink: "N/A",
      repository: "Proprietary code",
      is_repo_weblink: false,
      status: "Inactive",
    },
    {
      title: "AVERT",
      type: "Education",
      description:
        "This was my senior project for my software engineering class. We were tasked to develop a evidence gathering program for pentesting. Our clients work for US Army and perform security tests on their equipment. This tool can automatically collect system information like command history, process history, automatically screenshot and take video, window history, and capture network packets. I mainly worked on the backend CRUD functions in Python using the MongoDB driver and worked on a few features like capturing command and window history.",
      backend: "",
      frontend: "React.js",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      image: "",
      is_weblink: false,
      weblink: "N/A",
      repository: "https://github.com/Team-3-CS4311/avert-api",
      is_repo_weblink: true,
      status: "Finished",
    },
    {
      title: "Dave's Secret Server",
      type: "personal",
      description:
        "A personal project to reliably and securely store and send out keys and passwords for servers, applications, and development teams through an API. The main goal is to phase out insecure methods like env files and messaging keys through messaging apps and emails that can easily be retrieved if there is a server breach or poor chain of custody. I am developing a secure security model to ensure safe exchange of data for the customer. There will subscription tier service that will have a free tier, a team tier, and an enterprise tier. It will use a Stripe integration.",
      backend: "Node.js",
      frontend: "Next.js w/ Chakra UI",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      image: "",
      is_weblink: false,
      weblink: "TBA",
      repository: "TBA",
      is_repo_weblink: false,
      status: "Active",
    },
    {
      title: "Autoplanta v2",
      type: "personal",
      description:
        "There will subscription tier service that will have a free tier, a team tier, and an enterprise tier. It will use a Stripe integration.",
      backend: "Node.js",
      frontend: "Next.js w/ Chakra UI",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      weblink: "TBA",
      is_weblink: false,
      repository: "TBA",
      is_repo_weblink: false,
      status: "Active",
    },
    {
      title: "Autoplanta v1",
      type: "personal",
      description: "This is personal",
      backend: "Node.js",
      frontend: "Next.js w/ Chakra UI",
      database: "MongoDB",
      web_server: "NGINX",
      hosting: "AWS (Ubuntu instance)",
      is_weblink: false,
      weblink: "TBA",
      repository: "TBA",
      is_repo_weblink: false,
      status: "Inactive",
    },
  ];
  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="flex flex-wrap px-2 md:px-4 justify-center">
            {content_arr.map((content, index) => (
              <div
                key={index}
                className={"w-full m-1 p-2 h-full border-2 rounded-md border-white"}
              >
                <p className="text-xl text-center font-bold md:text-2xl leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
                  {content.title}
                </p>
                <p className="text-md md:text-lg leading-8 text-white p-4">
                  {content.description}
                </p>
                <p className="text-lg text-center font-bold">Technologies</p>
                <ol
                  className={
                    "list-disc text-md md:text-lg leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12"
                  }
                >
                  <li>Backend: {content.backend}</li>
                  <li>Frontend: {content.frontend}</li>
                  <li>Database: {content.database}</li>
                  <li>Web Server: {content.web_server}</li>
                  <li>Hosting: {content.hosting}</li>
                </ol>
                <p className="text-lg text-center font-bold">Links/Demos</p>
                {content.is_repo_weblink ? (
                  <p className="text-md md:text-lg leading-8 text-white px-4 py-1">
                    Repository:{" "}
                    <a href={content.repository} target="_blank">
                      {content.repository}
                    </a>
                  </p>
                ) : (
                  <p className="text-md md:text-lg leading-8 text-white px-4 py-1">
                    Repository: {content.repository}
                  </p>
                )}
                {content.is_weblink ? (
                  <p className="text-md md:text-lg leading-8 text-white px-4 py-1">
                    Weblink:{" "}
                    <a href={content.weblink} target="_blank">
                      {content.weblink}
                    </a>
                  </p>
                ) : (
                  <p className="text-md md:text-lg leading-8 text-white px-4 py-1">
                    Weblink: {content.weblink}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
