const { select, input } = require("@inquirer/prompts");

let meta = {
    value: "Tomar 3 listro de agua todo dia.",
    checked: false,
};

let metas = [meta];

const cadastrarMetas = async () => {
    const meta = await input({ message: "Digite a meta: " });

    if (meta.length == 0) {
        console.log("A meta na pode ser vazia.");
        return;
    }

    metas.push({
        value: meta,
        checked: false,
    });
};

const start = async () => {
    while (true) {
        const opcao = await select({
            message: "Menu > ",
            choices: [
                {
                    name: "Cadastrar Meta",
                    value: "cadastrar",
                },
                {
                    name: "Listar Metas",
                    value: "listar",
                },
                {
                    name: "Sair",
                    value: "sair",
                },
            ],
        });
        switch (opcao) {
            case "cadastrar":
                await cadastrarMetas();
                console.log(metas);
                break;
            case "listar":
                console.log("Vamos listar!");
                break;
            case "sair":
                console.log("Até a proxima!");
                return;
        }
    }
};

start();
