import router from '@/router';

function navigator(route: string): void {
  router.push(route);
}

export default navigator;
