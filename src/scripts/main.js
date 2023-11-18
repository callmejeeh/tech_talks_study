AOS.init();

const dataEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distantiaAteEvento = timeStampEvento - timeStampAtual;

    const DiaemMS = 1000 * 60 * 60 * 24;
    const HoraEmMS = 1000 * 60 * 60;
    const minEmMS = 1000* 60;

    const diasAteEvento = Math.floor(distantiaAteEvento / (DiaemMS));
    const HorasAteEvento = Math.floor((distantiaAteEvento % (DiaemMS)) / (HoraEmMS));
    const minAteEvento = Math.floor((distantiaAteEvento % (HoraEmMS)) / (minEmMS));
    const segAteEvento = Math.floor((distantiaAteEvento % (minEmMS)) / (1000));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${HorasAteEvento}h ${minAteEvento}min ${segAteEvento}s`;

    if (distantiaAteEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
}, 1000);