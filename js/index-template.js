async function loadTemplate(url, elementId) {
  try {
    const response = await fetch(url);
    console.log(`Fetching template from ${url}...`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const placeholder = document.getElementById(elementId);
    if (placeholder) {
      // Create a template element to hold the fetched HTML
      const template = document.createElement("template");
      template.innerHTML = html;
      // Append the content to the placeholder
      placeholder.appendChild(template.content.cloneNode(true));
    }
  } catch (error) {
    console.error(`Error loading template from ${url}:`, error);
  }
}
loadTemplate("./partials/_header.html", "header-placeholder");
loadTemplate("./partials/_footer.html", "footer-placeholder");
loadTemplate("./partials/_cta.html", "cta-placeholder");
loadTemplate("./partials/_menu.html", "menu-placeholder");