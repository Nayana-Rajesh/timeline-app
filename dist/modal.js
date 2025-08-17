export function setupModal(timeline, modal) {
    const modalTitle = modal.querySelector("h2");
    const modalContent = modal.querySelector("p");
    const closeModalBtn = modal.querySelector('button[aria-label="Close Modal"]');
    if (!modalTitle || !modalContent || !closeModalBtn)
        return;
    // Delegate clicks from timeline
    timeline.addEventListener("click", (e) => {
        const target = e.target;
        if (target.tagName.toLowerCase() !== "button")
            return;
        const article = target.closest("article");
        if (!article)
            return;
        modalTitle.textContent = article.querySelector("h2")?.textContent ?? "";
        const pList = article.querySelectorAll("p");
        modalContent.textContent = pList[pList.length - 1]?.textContent ?? "";
        modal.removeAttribute("hidden");
    });
    closeModalBtn.addEventListener("click", () => {
        modal.setAttribute("hidden", "");
    });
}
