import Navbar from "@/components/Navbar";
const content_arr = [
  {
    title: "Freelance React JS UX/UI Design",
    description:
      "I offer React JS UX/UI design and implementation. I can create responsive, quick-loading, user-friendly, accessible, and maintainable UI for a wide variety of use cases and projects. Whether you need a responsive and dynamic form, or a interactive dashboard that need to display real-time information.",
    pricing: "$30hr",
    status: "Active",
  },
  {
    title: "Freelance Backend Design and Implementation (Node.js and Python)",
    description:
      "I offer backend design and implementation. I proficient in creating fast and secure backend systems. I can design and implement databases in both relational and document-oriented structures (NoSQL and SQL).",
    pricing: "$40hr",
    status: "Active",
  },
  {
    title: "Requirement Engineering and Documentation",
    description: "",
    pricing: "$35hr",
    status: "Active",
  },
  {
    title: "Server Management",
    description: "",
    pricing: "Ask for pricing.",
    status: "Active",
  },
  {
    title: "Pentesting",
    description: "",
    pricing: "$25hr",
    status: "Active",
  },
];
export default function Index() {
  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <div className="flex flex-wrap px-2 md:px-4 justify-center">
            {content_arr.map((content, index) => (
              <div
                key={index}
                className={
                  "w-full m-1 p-2 h-full border-2 rounded-md border-white"
                }
              >
                <p className="text-xl text-center font-bold md:text-2xl leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
                  {content.title}
                </p>
                <p className="text-md md:text-lg leading-8 text-white p-4">
                  {content.description}
                </p>
                <p className="text-md md:text-lg leading-8 text-white p-4">
                  Pricing: {content.pricing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
