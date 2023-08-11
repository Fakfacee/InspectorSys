export function getRouteByName(routeName, routers) {
  return routers.find((item) => {
    return item.name == routeName;
  });
}
