//
//  koby.dev | 2022
//  twitter: @builtbymax
//  instagram: @koby.dev
//

function pageReady(callback) {
    if (document.readyState !== "loading") {
      callback();
    } else document.addEventListener("DOMContentLoaded", callback);
  }
  
  pageReady(() => {
    Section.init();
  });
  
  const Section = {
    init: () => {
      Section.getMousePosition();
    },
  
    getMousePosition: () => {
      const boxNodeList = document.querySelectorAll(".teaser-element-container");
      if (boxNodeList.length === 0) return;
  
      boxNodeList.forEach(box => {
        document.addEventListener("mousemove", e => {
          const rect = box.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
  
          box.style.setProperty("--y__mouse__coordinate", `${y}px`);
          box.style.setProperty("--x__mouse__coordinate", `${x}px`);
        });
      });
    } };
  
  
  const Config = {
    hasClass: (element, property) => element.classList.contains(property),
    findElement: (element, parentClass) => {
      const parent = element.parentElement;
      if (!Config.hasClass(parent, parentClass)) {
        return Config.findElement(parent, parentClass);
      }
      return parent;
    } };