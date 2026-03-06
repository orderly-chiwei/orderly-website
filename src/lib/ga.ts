export const initGoogleAnalytics = () => {
  const getGAID = () => {
    if (window.location.hostname === "orderly.network") {
      return "G-N1SWYG7W4E";
    }
    return "G-7TY9TF6N3K";
  };
  const gaID = getGAID();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
  document.head.appendChild(script);

  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: any[]) {
    // @ts-ignore
    window.dataLayer.push(arguments);
  }
  // @ts-ignore
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaID);

  document.addEventListener("click", function (e) {
    let target = e.target as HTMLElement | null;
    const maxDepth = 5;
    let currentDepth = 0;

    while (target && target !== document.body && currentDepth < maxDepth) {
      const tagName = target.tagName;
      const classList = target.classList ? Array.from(target.classList) : [];
      const className =
        target.className && typeof target.className === "string"
          ? target.className
          : "";

      const isButton = tagName === "BUTTON";
      const isLink = tagName === "A";
      const isRoleButton = target.getAttribute("role") === "button";
      const isInputButton =
        tagName === "INPUT" &&
        ["button", "submit"].includes((target as HTMLInputElement).type);
      const hasButtonClass = classList.some(
        (cls) =>
          cls.includes("btn") ||
          cls.includes("button") ||
          cls.includes("cursor-pointer")
      );
      if (
        isButton ||
        isRoleButton ||
        isInputButton ||
        isLink ||
        hasButtonClass
      ) {
        const buttonText = target.innerText
          ? target.innerText.substring(0, 100)
          : "";
        const elementId = target.id || "";
        const elementClass = className;
        // @ts-ignore
        let linkUrl = target.href || "";
        if (!linkUrl && target.closest) {
          const parent = target.closest("a");
          if (parent) {
            linkUrl = parent.href || "";
          }
        }

        gtag("event", "element_click", {
          button_text: buttonText,
          element_id: elementId,
          element_class: elementClass,
          link_url: linkUrl,
        });
        break;
      }

      target = target.parentElement;
      currentDepth++;
    }
  });
};

export const trackPageView = (url: string) => {
  // @ts-ignore
  if (typeof window.gtag === "function") {
    // @ts-ignore
    window.gtag("event", "page_view", { page_path: url });
  }
};
