import { allNav } from "./allNav";
export const getNav = (role) => {
  const menu = [];
  allNav.forEach((nav) => {
    if (nav.role === role) {
      menu.push(nav);
    }
  });
  return menu;
};
