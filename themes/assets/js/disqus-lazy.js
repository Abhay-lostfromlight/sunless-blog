// Disqus lazy load script
function initDisqus() {
  var disqus_config = function () {
    var container = document.getElementById("disqus_thread_container");
    this.page.url = container.getAttribute("data-page-url");
    this.page.identifier = container.getAttribute("data-page-identifier");
  };

  // Detect if the user has scrolled to the comment section
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the comment section is in view and comments are not loaded, load comments
        if (!window.disqusLoaded) {
          loadDisqus();
        }
        // Stop observing after loading once
        observer.unobserve(entry.target);
      }
    });
  }

  // Function to lazy load Disqus comments
  window.loadDisqus = function () {
    if (window.disqusLoaded) return;
    window.disqusLoaded = true;

    // Hide the load button
    document.getElementById("load-disqus").style.display = "none";

    // Load Disqus embed script
    var d = document,
      s = d.createElement("script");
    s.src = "https://" + DISQUS_SHORTNAME + ".disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  };

  // Create Intersection Observer to trigger lazy loading
  var observer = new IntersectionObserver(handleIntersection, {
    rootMargin: "0px 0px 200px 0px", // Start loading when the comment section is 200px from the bottom of the viewport
  });

  // Set up the observer on the comment container
  var commentContainer = document.getElementById("disqus_thread_container");
  if (commentContainer) {
    observer.observe(commentContainer);
  }
}

// Initialize after page load
document.addEventListener("DOMContentLoaded", initDisqus);
