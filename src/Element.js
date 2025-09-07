
class Element {

  createElement(element, classEl) {
    const el = document.createElement(element);
    el.classList = classEl;
    return el;
  }

}

export { Element }

