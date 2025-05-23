(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
})();

/**
 * Animation
 */

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");

  const isSectionVisible = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

  const toggleSectionActive = () => {
    if (isSectionVisible(aboutSection)) {
      aboutSection.classList.add("active");
    } else {
      aboutSection.classList.remove("active");
    }
  };

  document.addEventListener("scroll", toggleSectionActive);
  toggleSectionActive();
});

/**
 * End Animation
 */

/**
 * Animation About
 */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".about");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});
// End Animation About

/**
 * Animation Training
 */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".latihan");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});
// End Animation Training

/**
 * Animation Trainers
 */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".kartu");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});
// End Animation Trainers

/**
 * Animation Contact
 */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".contact");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});
// End Animation Contact

// Formulir

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".bordering");

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
  });

  portfolioItems.forEach((item) => {
    observer.observe(item);
  });
});

/**
 * Back to top button
 */
let backtotop = document.querySelector(".back-to-top");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBacktotop);
  window.addEventListener("scroll", toggleBacktotop); // Fix the `onscroll` part
}

/**
 * Back To Index
 */
backtotop.addEventListener("click", () => {
  window.location.href = "#hero";
});
