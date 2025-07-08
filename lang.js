// lang.js

const langSelect = document.getElementById("language-select");

langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  fetch(`${lang}.json`)
    .then((res) => res.json())
    .then((translations) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });
    })
    .catch((err) => console.error("Language load error:", err));
});
