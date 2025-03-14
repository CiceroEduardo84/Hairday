import { schedulesDay } from "../schedules/load.js";

// Selecionar o input de data
const selecteDate = document.getElementById("date");

// Recarrega a lista de horários quando o input de data mudar.
selecteDate.onchange = () => schedulesDay();
