import router from "@/router";

async function navigator(route: string) {
  await router.push(route);
}

export default navigator;
