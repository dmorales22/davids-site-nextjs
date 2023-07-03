import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { ipGetter } from "../../../utilities/ipgetter";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export default function Index() {
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
            route: "/blog",
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
            My Blog :)
          </h2>
          <p className="mt-6 text-md md:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            This page is under construction 🚧
          </p>
        </div>
      </div>
    </main>
  );
}
