document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (btn && sidebar) {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-view]");
    if (!link) return;

    e.preventDefault();
    setActiveView(link.dataset.view);

    if (sidebar) sidebar.classList.remove("open");
  });
});

function setActiveView(view) {
  document.querySelectorAll(".view").forEach(v =>
    v.classList.remove("active")
  );

  const target = document.getElementById(`view-${view}`);
  if (target) target.classList.add("active");
}
