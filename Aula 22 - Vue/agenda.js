var contatos = [
    {
        nome: "Manjeridog",
        telefone: "(11) 99999-9999",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VHNilOy3k7DpdWirY5VifB1aj93moHwpTw&s",
        favorito: true,
    },
    {
        nome: "Lulu",
        telefone: "(21) 88888-8888",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYH01ebD85pHL8TqWUg92I8oQNGaGIbXCJA&s",
        favorito: true,
    },
    {
        nome: "Elimar",
        telefone: "(31) 77777-7777",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUJToI7K0Z4fkpH6Mq-Qb6T0AwnQU5x71bA&s",
        favorito: false,
    },
    {
        nome: "Beto",
        telefone: "(41) 66666-6666",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_llCdyV0jsgfgecdMf7ttcNIxZlwIbN8jk_wDgi3LeQ&s",
        favorito: false,
    },
];

const agenda = {
    data() {
        return {
            título: "Minha agenda de contatos com Vue.js",
            msg: "Olá, Vue!",
            contatos: window.contatos,
        };
    },
};

Vue.createApp(agenda).mount("#app");
