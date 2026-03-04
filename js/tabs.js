const initTabs = () =>{
    const tabs = document.querySelectorAll(".tabIcons ul li");
    const tabContents = document.querySelectorAll(".tabItem");

    tabs.forEach((tab)=> {
      tab.addEventListener("click",() => {
        //Clear Active Tabs
        clearActiveTabs();
        clearActiveContents();
        console.log("hello");
        // select tab content
        const tabID = tab.id;
        console.log(tabID);
        const detail = document.querySelector(`#${tabID}-card`);

        //set class to active
        tab.classList.add("active");
        if (detail) {
          detail.classList.add("active");
        }
      })
    });

    function clearActiveTabs() {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
    }
    function clearActiveContents() {
      tabContents.forEach((contents) => {
        contents.classList.remove("active");
      });
    }
}


export default initTabs;