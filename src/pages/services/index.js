import Navbar from "@/components/Navbar";
const content_arr = [
  {
    title: "Freelance React JS UX/UI Design",
    description:
      "A professional project that I'm developing for my company innovativeManage, Inc. This is a major project for the company. This is a property management software that allows for property managers to manage units, properties, residents, pets, leases, communication, parking and much more for rental properties. Stripe API is used for payment processing for services like parking reservations, invoice generation, and rents. I designed, developed, and deployed almost the entire project so far.",
    status: "Active",
  },
];
export default function Index() {
  return (
    <main>
      <Navbar />
      <div className="z-10 w-full justify-center font-mono text-sm">
        <div className="bg-gradient-to-r h-screen from-purple-500 to-pink-500 relative isolate overflow-hidden bg-gray-900 py-10">
          <h2 className="text-3xl text-center justify-center font-bold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
          <p className="mt-6 text-md md:text-lg text-center leading-8 text-white px-4 sm:px-4 md:px-8 lg:px-12">
            Todo
          </p>
        </div>
      </div>
    </main>
  );
}
