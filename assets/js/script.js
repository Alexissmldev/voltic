tailwind.config = {
  theme: {
    extend: {
      colors: {
        "voltic-teal": "#43CADB",
        "voltic-purple-mid": "#8660E7",
        "voltic-purple-dark": "#440885",
        "voltic-purple-light": "#726ECD",
        "voltic-blue": "#382CCE",
      },
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        "2xs": ".65rem",
        "3xs": ".55rem",
      },
    },
  },
};

AOS.init({
  duration: 800,
  once: true,
  offset: 50,
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Verifica que los elementos HTML existan
if (form && successMessage) {
  form.addEventListener("submit", async function (event) {
    // ¡¡ESTA LÍNEA ES LA QUE EVITA LA REDIRECCIÓN!!
    event.preventDefault();

    // Ocultar mensaje de éxito (si estaba visible)
    successMessage.classList.add("hidden");

    // Deshabilitar botón para evitar envíos duplicados
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    const formData = new FormData(form);
    const formAction = form.getAttribute("action");

    try {
      // Envía los datos en segundo plano (AJAX)
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // ¡ÉXITO! Muestra el mensaje profesional
        successMessage.classList.remove("hidden");
        form.reset(); // Limpia el formulario

        // Oculta el mensaje después de 5 segundos
        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000);
      } else {
        // Si Formspree da un error
        alert("Ocurrió un error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (error) {
      // Si hay un error de red (sin internet)
      alert("Ocurrió un error de conexión. Por favor, inténtalo de nuevo.");
      console.error("Error en el envío del formulario:", error);
    } finally {
      // Vuelve a habilitar el botón
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
} else {
  // Mensaje de error para ti (si no encuentra el formulario)
  console.error(
    "Error: No se encontró el formulario ('contactForm') o el mensaje de éxito ('successMessage')."
  );
}
