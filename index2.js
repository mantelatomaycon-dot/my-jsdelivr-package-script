document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.createElement("h1");
  h1.textContent = "Hello, World!";
  Object.assign(h1.style, {
    color: "#000000",
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
