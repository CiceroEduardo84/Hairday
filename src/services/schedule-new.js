import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    // Fazendo a requisição para enviar os addos do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento concluído com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Não foi possivel agendar tente novamente mais tarde!");
  }
}
