import router from "@/router";
import onTop from "./onTop";

async function navigator(route: string) {
  await router.push(route);
  onTop();
}

export default navigator;
