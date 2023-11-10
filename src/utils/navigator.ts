import router from "@/router";

async function navigator(route: string) {
  await router.push(route);
  onTop();
}

function onTop(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export default navigator;
