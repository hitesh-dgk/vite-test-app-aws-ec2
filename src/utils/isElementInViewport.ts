export function isElementInViewport(element: HTMLInputElement | null) {
    if (!element) {
      return false;
    }
  
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
  
    return elemTop >= 0 && elemBottom <= window.innerHeight;
  }