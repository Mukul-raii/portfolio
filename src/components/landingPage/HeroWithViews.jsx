import { getPageViews } from "@/app/actions/getPageViews";
import Hero from "./Hero";

// Server component — fetches views then renders the client Hero with the count
export default async function HeroWithViews() {
  const views = await getPageViews();
  return <Hero views={views} />;
}
