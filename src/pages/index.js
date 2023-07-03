import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { ipGetter } from "../../utilities/ipgetter";
import { useRouter } from "next/router";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export default function Home() {
  const links = [
    { name: "About Me", href: "about-me" },
    { name: "How to contact me", href: "contact" },
    { name: "My projects", href: "projects" },
    { name: "My blog :)", href: "blog" },
  ];
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
            route: "/",
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
        <div className="bg-gradient-to-r min-h-screen max-h-full from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-">
              <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
                Welcome visitors and friends!
              </h2>
              <p className="text-2xl text-center justify-center tracking-tight text-white sm:text-3xl">
                David Morales
              </p>
              <p className="text-xl text-center justify-center tracking-tight text-white sm:text-lg">
                Full Stack Developer - Software Engineer
              </p>
              <p className="mt-6 text-xl text-center sm:text-lg leading-8 text-gray-200 p-2">
                This is my personal portfolio website to showcase some projects
                that I am working on, and my professional blog to document my
                career and progression of knowledge in the software industry. I
                also do freelance work (depending availability) if you or your
                organization is interested in contract work.
              </p>
            </div>
            <p className={"flex justify-center text-white text-xl"}>Resume</p>
            <div className={"flex justify-center"}>
              <iframe
                src="https://drive.google.com/file/d/1LSROYqEduFxtg1PHbg3NXfO7OIIdWtxa/preview"
                width="auto"
                height="400px"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="p-2 mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="justify-center grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
            <div className={"flex justify-center"}>
              <button className={"m-4"}>
                <a
                  href={"https://www.linkedin.com/in/david-morales22/"}
                  target="_blank"
                >
                  <svg
                    className={"h-12 w-12"}
                    fill={"white"}
                    viewBox={"0 0 24 24"}
                  >
                    <path
                      d={
                        "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      }
                    />
                  </svg>
                </a>
              </button>
              <button className={"m-1"}>
                <a href={"https://github.com/dmorales22"} target="_blank">
                  <svg className="h-12 w-12" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
