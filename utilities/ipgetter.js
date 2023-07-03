import { publicIp, publicIpv4, publicIpv6 } from "public-ip";
async function ipGetter() {
  const getClientIPV4 = await publicIpv4();
  let getClientIPV6 = "";

  try {
    //Gets IPV6 address, but catches error if there is no IPV6.
    getClientIPV6 = await publicIpv6();
  } catch (e) {
    console.log("Cannot get IPV6");
  }

  return {
    ipv4: getClientIPV4,
    ipv6: getClientIPV6,
  };
}

export { ipGetter };
