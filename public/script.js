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

  // Callback function for Project1
  const callbackProject1 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'blur', 'delay-1');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for Project2
  const callbackProject2 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'glow', 'delay-2');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

    // Callback function for Project3
  const callbackProject3 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'glow', 'delay-3');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for Project4
  const callbackProject4 = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'roll', 'delay-4');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for formal education
  const callbackFormalEd = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'spin', 'delay-1');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for skills list
  const callbackSkillsList = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'slide', 'delay-2');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for contact description
  const callbackContactDesc = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'splat', 'delay-1');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Callback function for contact details
  const callbackContactDets = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animation classes to trigger the CSS animation
        entry.target.classList.add('animate', 'pop', 'delay-2');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Create Intersection Observers for each element
  //Introduction Slide
  const observerTitle = new IntersectionObserver(callbackTitle, options);
  const observerSubTitle = new IntersectionObserver(callbackSubTitle, options);

  //About Slide
  const observerProfPic = new IntersectionObserver(callbackProfPic, options);
  const observerAboutContent = new IntersectionObserver(callbackAboutContent, options);

  //Projects Slide
  const observerProject1 = new IntersectionObserver(callbackProject1, options);
  const observerProject2 = new IntersectionObserver(callbackProject2, options);
  const observerProject3 = new IntersectionObserver(callbackProject3, options);
  const observerProject4 = new IntersectionObserver(callbackProject4, options);

  //Education Slide
  const observerFormalEd = new IntersectionObserver(callbackFormalEd, options);
  const observerSkillsList = new IntersectionObserver(callbackSkillsList, options);

  //Contact Slide
  const observerContactDesc = new IntersectionObserver(callbackContactDesc, options);
  const observerContactDets = new IntersectionObserver(callbackContactDets, options);

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
    } else if (element.classList.contains('project1')) {
      observerProject1.observe(element);
    } else if (element.classList.contains('project2')) {
      observerProject2.observe(element);
    } else if (element.classList.contains('project3')) {
      observerProject3.observe(element);
    } else if (element.classList.contains('project4')) {
      observerProject4.observe(element);
    } else if (element.classList.contains('formal-ed')) {
      observerFormalEd.observe(element);
    } else if (element.classList.contains('skills-ed')) {
      observerSkillsList.observe(element);
    } else if (element.classList.contains('contact-desc')) {
      observerContactDesc.observe(element);
    } else if (element.classList.contains('contact-dets')) {
      observerContactDets.observe(element);
    }
  });
});
