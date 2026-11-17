document.querySelectorAll(".links button").forEach((button) => {
   button.addEventListener("click", () => {
      const text = button.textContent.trim();

      if (text === "Curtir" || text === "Curtido") {
         const isLiked = button.classList.toggle("liked");
         button.textContent = isLiked ? "Curtido" : "Curtir";
      }

      if (text === "Repostar" || text === "Repostado") {
         const isReposted = button.classList.toggle("reposted");
         button.textContent = isReposted ? "Repostado" : "Repostar";
      }
   });
});
