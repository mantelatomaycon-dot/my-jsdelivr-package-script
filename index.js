document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Hello! My script via jsDelivr is working perfectly.";
  Object.assign(h1.style, {
    color: "#007bff",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "50px",
    fontSize: "2.5rem",
    fontWeight: "600",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    userSelect: "none"
  });
  document.body.appendChild(h1);
});
