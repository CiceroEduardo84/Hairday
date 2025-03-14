import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// gera evento de click para cada lista(manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de click na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");
      const { id } = item.dataset;

      // Confirma que o di foi selecionado
      if (id) {
        // Confirma se o usuário que cancelar
        const isConform = confirm(
          "Tem certeza que deeja cancelar o agendamento?"
        );

        if (isConform) {
          // Faz a requisição na Api para cancelar
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
