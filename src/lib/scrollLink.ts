export const handleScroll = (id: string) => {
  const targetDiv = document.getElementById(id);
  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: "smooth" });
  }
};
