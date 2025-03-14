import dayjs from "dayjs";

// Seleciona as sessões mnhã, tarde, noite
const periodMorning = document.getElementById("period-morning");
const periodafternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa a lista
    periodMorning.innerHTML = "";
    periodafternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adicona o id do agendamento.
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Cria o ícone de camcela o agendamento
      const cancelIcon = document.createElement("img");

      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // Adiciona o tempo, nome e ícone no item.
      item.append(time, name, cancelIcon);

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão (manhã, tarde ou noite).
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodafternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.error(error);
    alert("Não foi possivel exibir os agendamentos!");
  }
}
