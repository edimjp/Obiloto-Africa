/*const loadComponent = (selector, file, callback) => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load ${file}`);
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      if (typeof callback === "function") callback();
    })
    .catch((error) => {
      console.error(error);
    });
};

//This is to Load content on the web page

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#navbar", "navBar.html", () => {
    import("./navScroll.js").then((module) => {
      module.initNavScroll();
    });
  });

  loadComponent("#asideBar", "aside.html", () => {
    import("./navScroll.js").then((module) => {
      module.initNavScroll();
    });
  });
});

*/

// Utility function to load HTML into a DOM element
const loadComponent = async (selector, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Could not load ${file}`);
    }

    const data = await response.text();
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Selector "${selector}" not found in the DOM.`);
    }

    element.innerHTML = data;
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // Load components in parallel
  await Promise.all([
    loadComponent("#navbar", "navBar.html"),
    loadComponent("#asideBar", "aside.html"),
  ]);

  // Import the navScroll module once after both components are loaded
  try {
    const module = await import("./navScroll.js");
    if (typeof module.initNavScroll === "function") {
      module.initNavScroll();
    } else {
      console.warn("initNavScroll is not a function in navScroll.js");
    }
  } catch (error) {
    console.error("Failed to load navScroll.js:", error);
  }
});
