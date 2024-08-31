import { menuData } from './sampleMenuData';

export const fetchMenuData = async () => {
  // Simulate a fetch operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuData);
    }, 1000); // Simulate a 1-second delay
  });
};
