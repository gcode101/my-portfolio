document.addEventListener("DOMContentLoaded", function() {
  // Elements to be animated
  const animatedElements = document.querySelectorAll('.animated');

  // Options for the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01 // Trigger when 1% of the element is in view
  };

  // Callback function for name title
  const callbackTitle = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

    // Callback function for subtitle
  const callbackSubTitle = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'delay-2');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for Profile Picture
  const callbackProfPic = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'slide');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for About Content
  const callbackAboutContent = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'drop');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Create Intersection Observers for each element
  const observerTitle = new IntersectionObserver(callbackTitle, options);
  const observerSubTitle = new IntersectionObserver(callbackSubTitle, options);
  const observerProfPic = new IntersectionObserver(callbackProfPic, options);
  const observerAboutContent = new IntersectionObserver(callbackAboutContent, options);

  // Start observing the elements
  animatedElements.forEach(element => {
    if (element.classList.contains('title')) {
      observerTitle.observe(element);
    } else if (element.classList.contains('subtitle')){
      observerSubTitle.observe(element);
    } else if (element.classList.contains('img-thumbnail')) {
      observerProfPic.observe(element);
    } else if (element.classList.contains('about-body')) {
      observerAboutContent.observe(element);
    }
  });
});
