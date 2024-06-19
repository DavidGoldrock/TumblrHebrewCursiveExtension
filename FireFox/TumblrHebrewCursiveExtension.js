(() => {const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      runCode();
    });
  });

function runCode() {
    var elements = document.querySelectorAll('.k31gt .G6Sn4');
    for(var i=0; i<elements.length; i++){
        elements[i].style.fontFamily  = "Fairwater, Guttman Yad, Georgia,Times,Times New Roman,serif";
    }
}
// Set up a MutationObserver to detect changes


  // Configuration for the observer
  const config = {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  };

  // Start observing the document body
  function startObserving() {
    const targetNode = document.body;

    if (targetNode) {
      observer.observe(targetNode, config);
      console.log('Observer started.');
      // Initial run
      runCode();
    } else {
      console.log('Target node not found.');
    }
  }

  // Ensure the script runs after the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserving);
  } else {
    startObserving();
  }
})()
