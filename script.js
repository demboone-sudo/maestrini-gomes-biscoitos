// =========================================================
// NÚMERO OFICIAL DO WHATSAPP (55 + DDD + NÚMERO)
// =========================================================
const WHATSAPP_NUMBER = "5527998009005"; // Substitua pelo seu número de WhatsApp

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animação suave ao rolar a página
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // 2. Clique nas etiquetas da vitrine seleciona o produto e rola até o pedido
  const productSelect = document.getElementById("productSelect");
  document.querySelectorAll(".select-pack").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (productSelect) {
        productSelect.value = btn.dataset.pack;
      }
      document.getElementById("encomenda").scrollIntoView({ behavior: "smooth" });
    });
  });

  // 3. Envio direto para WhatsApp
  const form = document.getElementById("whatsappForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("clientName").value.trim();
      const pack = document.getElementById("productSelect").value;
      const qty = document.getElementById("quantity").value;
      const notes = document.getElementById("notes").value.trim();

      const text =
        `Olá, Gabriela Maestrini e Paula Gomes! ⚜\n` +
        `Gostaria de encomendar os biscoitos inéditos de *Fécula de Batata, Caramelo Tostado e Sal*:\n\n` +
        `👤 *Cliente/Empresa:* ${name}\n` +
        `🎁 *Apresentação:* ${pack}\n` +
        `📦 *Quantidade:* ${qty} unidade(s)` +
        `${notes ? `\n📝 *Observação:* ${notes}` : ""}`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
});