const initTabs = () =>{
    const tabs = document.querySelectorAll(".tabIcons ul li");
    const tabContents = document.querySelectorAll(".tabItem");

    const tabCards = 
  document.querySelectorAll(".tabs-menu ul li");


    addClickActiveFunction(tabs, tabContents);
    addClickActiveFunction(tabCards, tabContents);
    // dependency injection
    function clearActiveTabs(tabs) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    }
    function clearActiveContents(tabContents) {
      tabContents.forEach((contents) => {
        contents.classList.remove("active");
      });
    }
    function addClickActiveFunction(tabs, tabContents) {
       tabs.forEach((tab) => {
         tab.addEventListener("click", () => {
           //Clear Active Tabs
           clearActiveTabs(tabs);
           clearActiveContents(tabContents);
           // select tab content
           const tabID = tab.id;
           console.log(tabID);
           const detail = document.querySelector(`#${tabID}-card`);

           //set class to active
           tab.classList.add("active");
           if (detail) {
             detail.classList.add("active");
           }
         });
       });
    }
}


export default initTabs;