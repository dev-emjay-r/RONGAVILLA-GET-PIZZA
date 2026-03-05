function initAccordion(){
    const accordionsYear = document.querySelectorAll(".accordionYear");
    const accordionsContent = document.querySelectorAll(".accordionContent");
    accordionsYear.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        
        
        if (accordion.classList.contains("active")) {
          //clear all active item
          clearActiveAccordions();
          clearActiveContent();
        } else {
          //clear all active item
          clearActiveAccordions();
          clearActiveContent();

          //get id
          const id = accordion.id;
          const accordionContent = document.querySelector(`#${id}-content`);
          accordionContent.classList.toggle("active");
          accordion.classList.toggle("active");
        }
      });
    });

    function clearActiveAccordions() {
      accordionsYear.forEach((accordions) => {
        accordions.classList.remove("active");
      });
    }
    function clearActiveContent() {
      accordionsContent.forEach((content) => {
        content.classList.remove("active");
      });
    }
}

export default initAccordion;