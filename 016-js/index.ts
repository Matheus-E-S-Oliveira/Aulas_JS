class aluno{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }   
}
console.log(new aluno("Maria", 12));
/*  npm install <nome-do-pacote> //para instalar na pasta do projeto
    npm i <nome-do-pacote> // mesma função do install
    npm install -g <nome-do-pacote> // para instalar goblasmente
    npm i -g <nome-do-pacote> // atalho do goblalmente
    npm update <nome-do-pacote> // para atualizar especifico
    npm update // para todos localmente
    npm update -g <nome-do-pacote> // para atualizar especifico goblalmente
    npm update -g // para todos localmente
    npm uninstall <nome-do-pacote> // exclusão de pacote especifico
    npm un <nome-do-pacote> //atalho
    npm uninstall -g <nome-do-pacote> // excluir apcote especifico goblamente
    npm un -g <nome-do-pacote>//atalho
    npm list // verifica quais pacotes estão instalado localmente
    npm list -g// verifica pacotes instalados goblamente
    npm outdated // verifica se a atualizações nos pacotes localmente
    npm outdated -g //verifica se a atualizaçõe spara os goblais

    Ganchos(hooks)
    preinstall: Executado antes de qualquer instalação de dependências.

    install: Executado após a instalação de dependências.

    postinstall: Executado após a instalação de dependências. Ideal para executar tarefas como construir ou preparar o projeto após a instalação.

    preuninstall: Executado antes da desinstalação de dependências.

    uninstall: Executado após a desinstalação de dependências.

    postuninstall: Executado após a desinstalação de dependências.

    prepack: Executado antes do empacotamento do projeto. Ideal para tarefas como testes ou linting antes de publicar.

    pack: Executado durante o processo de empacotamento.

    postpack: Executado após o empacotamento do projeto.

    prepublish: Executado antes da publicação. (Este hook é obsoleto; use prepublishOnly ou prepare em vez disso.)

    prepublishOnly: Executado somente antes da publicação do pacote.

    prepare: Executado após a instalação e antes da publicação, e também quando npm link é usado.

    postpublish: Executado após a publicação do pacote.

    pretest: Executado antes dos testes.

    test: Executado quando você executa npm test.

    posttest: Executado após os testes.

    prestart: Executado antes de iniciar o aplicativo com npm start.

    start: Executado quando você executa npm start.

    poststart: Executado após o início do aplicativo.

    prestop: Executado antes de parar o aplicativo com npm stop.

    stop: Executado quando você executa npm stop.

    poststop: Executado após parar o aplicativo.

    para bloquear a versão com ^ e ~
    format das versões MAJOR.MINOR.PATCH
    ^ bloqueia atualização (10).9.1 a primeiro conjunto(MAJOR)
    ^bloqueia (10.9).1 o primeiro conjunto e segundo(MAJOR.MINOR)
    Versão Exata: "1.2.3"
    Somente a versão 1.2.3 será instalada. Sem atualizações automáticas.
    Maior ou Igual a: ">=1.2.3"
    Qualquer versão maior ou igual a 1.2.3 será instalada.
    Menor que: "<1.3.0"
    Qualquer versão menor que 1.3.0 será instalada.
*/
