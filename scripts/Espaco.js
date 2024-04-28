//---------------------------- ESPAÇO ----------------------------------------------->
function getEspaço(){
    Constrution.person(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`)
    Constrution.description(`./gifs/Miguel.gif`, `Miguel`, `20 anos`, `New York`, `Um jovem estudante que sempre sonhou em ser um astronauta. E hoje é um tripulante da maior missão espacial que já existiu e está preste a se tornar o novo subcomandante das missões espaciais.`, `getEspaçoM()`)
    Constrution.description(`./gifs/Rafael.gif`, `Rafael`, `33 anos`, `Hollywood`, `Um homem que teve uma infancia horrivél, mas mostrou que mesmo apesar das dificuldades foi possivel vencer na vida. Hoje é o subcomandante da maior missão espacial.`, `getEspaçoR()`)
    music(audios.espaco0,audios.espaco1)
}
function getEspaçoM(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Parece que o Miguel tá numa situação complicada! É uma baita responsa levar informações tão importantes pro comandante, ainda mais quando pode afetar toda a missão. Mas, se o Marcos tá certo, é crucial resolver o pepino antes do lançamento.

    Acho que o Miguel vai ter que confiar nos seus instintos e decidir qual é o melhor lance. Talvez ele possa pedir ajuda pros outros membros do time pra dar uma revisada nos cálculos e confirmar se a informação tá certa. Com certeza não é uma decisão fácil, mas é essencial pra garantir a segurança de todo mundo a bordo.`)
    Constrution.choice(`Não comentar`, `getEspaçoM1()`, `left`, `blue`)
    Constrution.choice(`Falar com o comandante`, `getEspaçoM2()`, `right`, `blue`)
}
function getEspaçoM1(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Pô, que confusão danada! O Marcos sumiu e agora rolou essa treta de que alguém esfaqueou ele. Que loucura!

    Aí o comandante chamou o Miguel pra bater um papo, mas parece que tão tentando jogar a culpa nele. Será que o Marcos tá metido nessa parada ou tem mais alguém no meio?
    
    E aí, será que a missão vai decolar mesmo depois de tudo isso? Tô ficando tenso só de pensar!`)
    Constrution.choice(`Falar com o comandante`, `getEspaçoM4()`, `left`, `blue`)
    Constrution.choice(`Ir para o foguete`, `getEspaçoM3()`, `right`, `blue`)
}
function getEspaçoM2(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Ah, deixa pra falar com ele amanhã. Hoje tô acabado, e o comandante vai chiar se me vir circulando por aí.

    No dia seguinte, o comandante apareceu em todos os quartos mandando a gente se preparar. Comandante: "E aí, Miguel, pronto pra decolar?"; Miguel: "Na real, chefe, tenho uma parada bem importante pra falar."; Comandante: "Então, manda ver, meu filho!"; Miguel: "O Marcos me disse que as chances do foguete explodir são altas e que tem alguém na operação querendo ver o circo pegar fogo."; Comandante: "Mais alguém sabe disso?"; Miguel: "Não, só eu e o Marcos."; Comandante: "Beleza, filho."
    
    Aí o comandante veio pra cima de mim com uma faca que parecia ter sangue e começou a me atacar. Miguel: "Peraí, então você quer ver o circo pegar fogo? Por quê?"; Comandante: "Porque eu quero voltar pra casa." O comandante abriu a boca, e uma língua gigante e pontuda saiu e perfurou meu ombro. "Que p* é essa? Espera, voltar pra casa? Ele não é humano?" O comandante veio de novo com a faca, mas dessa vez eu consegui tirar dele. Só que tomei uma cabeçada de brinde. Foi na lata, e depois ele me jogou no chão e me segurou. Comandante: "Desculpa, Miguel, mas eu preciso voltar pra casa." Rafael: "Para aí, comandante!"; Miguel: "Rafael, ele é um monstro, atira nele."; Comandante: "Rafael, me ajuda, ele ficou louco."; Rafael: "Desculpa, comandante, mas eu vi sua língua. Solta ele já."; Comandante: "Ai, ai, Rafael, eu vou acabar com você, depois do Miguel." O comandante enfiou a língua na minha cabeça, e a última coisa que ouvi foi um tiro de arma.`)
    Constrution.end()
}
function getEspaçoM3(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Rafael: "Ei, Miguel, vamos nessa?"; Miguel: "Claro, vamos lá." Entrei no foguete e fiquei esperando pela decolagem.
    Enquanto isso, lá fora, Vini gritou: "3, 2, 1, decolagem!" Ele deu a partida no foguete. Marcos saiu correndo da enfermaria, dizendo que os cálculos estavam todos errados e que havia 90% de chance do foguete explodir. Mas já era tarde demais. O foguete subiu uns 10 metros e BOOM! Explodiu, mandando tudo pelos ares e criando uma nuvem de cogumelo gigante no céu.`)
    Constrution.end()
}
function getEspaçoM4(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Vou falar com o comandante, ele precisa saber disso. Comecei a procurá-lo e o encontrei na enfermaria, onde ele estava enforcando o Marcos e perguntando: "O que eu preciso fazer para a antimatéria não explodir? Diga-me, homem!" Marcos perguntou: "Você vai me deixar vivo?" O comandante respondeu: "Sim, Marcos." Ele soltou o pescoço de Marcos, que disse: "Você precisa diminuir meio tanque." O comandante agradeceu e Marcos começou a gritar. O comandante abriu a boca e perfurou o peito de Marcos com sua língua antes de ir para o foguete. Fiquei chocado com o que vi. "Que coisa louca!", pensei.
    "Miguel, você vai ficar bem, eu vou te ajudar", eu disse a Marcos. Mas ele respondeu: "Não se preocupe comigo, vá atrás dele. Esse alienígena não pode fazer o lançamento; ele pretende servir todos os tripulantes como comida para o povo do seu planeta." E agora? Não posso deixar Marcos morrer, mas se o comandante decolar, todos os meus amigos vão estar em perigo. O que fazer?`)
    Constrution.choice(`Ajudar Marcos primeiro`, `getEspaçoM5()`, `left`, `blue`)
    Constrution.choice(`Impedir o comandante`, `getEspaçoM6()`, `right`, `blue`)
}
function getEspaçoM5(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Miguel - Cara, eu vou te dar um help primeiro. Comecei a procurar ataduras, linha, agulha e um bisturi. "Caramba, onde foi que eu coloquei isso?". Marcos - Pensa direito, Miguel, corre salvar os outros. Miguel - Não rola te deixar nessa, mano. Achado!

    Aí, apareceu uma enfermeira na parada e perguntou o que tava rolando. Miguel - Dá um jeito nesse cara aí? Enfermeira - Claro, mas que que aconteceu? Miguel - Depois te conto, mas tô de pressa agora.
    
    "Espero que dê tempo", pensei correndo feito um louco pra alcançar o foguete. Mas quando cheguei na sala, a porta já tinha trancado, e escutei algo que fez meu coração bater mais forte. Vini - 3, 2, 1, Vai! O foguete engatilhou, e eu tava lá dentro.
    
    Quando o foguete ligou, o fogo e a explosão da antimatéria me atingiram de cheio, me deixando em cinzas instantaneamente.`)
    Constrution.end()
}
function getEspaçoM6(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactia`, `blue`, `#0000ff33`, `Miguel - Mano, foi massa te conhecer.
    Marcos - Tranquilo, Miguel. Agora vai lá salvar os caras.
    Saí bolando pra encontrar o comandante, mas trombei com a enfermeira no corredor.
    Miguel - Mano, desculpa aí, mas corre pra enfermagem. O Marcos tá numa situação feia, vai lá ajudar ele que ele te explica tudo.
    Saí correndo de novo e entrei no foguete, indo direto atrás do comandante. Ele deve estar lá no motor.
    
    Miguel - Peguei você, seu monstro!
    Comandante - Ah, então você já tá sabendo! Beleza, vou ter que te calar. Tentei sacar minha arma, mas o comandante foi mais rápido e acertou minha mão com aquela língua dele, fazendo minha arma cair no chão. Peguei minha faca e fui pra cima, mas ele foi mais ágil, correndo na minha direção antes mesmo de eu conseguir dar um passo.
    
    Consegui enfiar três facadas no comandante, mas num vacilo ele me jogou contra a parede. Bati a cabeça no extintor, que caiu no chão.
    Comandante - Miguel, vou te devorar e depois seus amigos.
    Um pouco antes de apagar, vi o comandante pisar no extintor, que explodiu no pé dele, deixando ele todo machucado, como se o frio o enfraquecesse.
    
    Quando acordei, tava meio grogue, pois o comandante me dopou. Não lembro muito dessa parte, mas lembro de olhar pela janela e ver outro planeta na nossa frente.
    Miguel - Eita, a gente chegou no destino. Que raios!`)
    Constrution.end()
}
function getEspaçoR(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `E aí? Tranquilo? Meu nome é Rafael, sou subcomandante desta missão espacial. Olha, vou te contar, não tem sido fácil. Acabei de recrutar o décimo segundo tripulante da missão, o Miguel. No começo achei ele um pé no saco, mas hoje em dia ele é meu melhor amigo.

    Comandante: Tripulação, formar! "Aff! Esse velho manda quer falar." Comandante: Eu os chamei aqui hoje para dizer que o governo dos Estados Unidos autorizou o lançamento do nosso foguete e agradeceu a vocês pela bravura. A missão começará amanhã às 10 horas. Vão descansar.
    
    Fiquei aliviado com essa notícia. O governo dos Estados Unidos é muito rígido e não ia deixar a gente executar o lançamento se não tivesse certeza que não haveria perigo. Juro, essa foi minha pior semana. O cheiro do hotel onde todos nós fomos dormir era horrível.
    
    Vini: Ei, Rafa, consegue resolver isso pra mim? Eu preciso descansar um pouco, estou estressado e não consigo pensar. Rafael: Claro, mas o quê... Vini: Valeu, Rafinha. Esse boi me deixou aqui e nem me explicou o que é isso. Rafael: Ah, não, é conta. Aff! Comandante: Tripulante Rafael, o que faz em pé ainda? Vai descansar, homem! Rafael: Nada, senhor, apenas contas. Sim, senhor. "Velho manda".
    
    E agora? Eu vou dormir e amanhã cedo eu resolvo isso? Ou resolvo agora?`)
    Constrution.choice(`Fazer as contas`, `getEspaçoR1()`, `left`, `blue`)
    Constrution.choice(`Dormir, mó sonho`, `getEspaçoR2()`, `right`, `blue`)
}
function getEspaçoR1(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Bah, é só duas contas, bora fazer. Depois de 30 minutos resolvendo, eu saco que aquilo tem a ver com combustão, será que? Caramba, os números aqui são menos favoráveis a uma decolagem tranquila, preciso fazer alguma coisa! Pego o papel e fico tentando reduzir aquele número e depois de duas horas eu consigo, a única maneira de diminuir é tirando metade do combustível e deixando ele guardado. Beleza, vou lá fazer isso, afinal não quero explodir pelos ares.

    Passei a noite toda lá, mas pelo menos resolvi essa parada. Tripulante: "Pô, Rafael, o comandante tá te chamando no quarto dele." Rafael: "Tranks." "Puts, será que ele descobriu?" Rafael: "Fala, chefe." Comandante: "Senta aí, Rafael. Onde tu tava pela manhã?" Rafael: "Resolvendo as paradas que o Vinicius pediu." Comandante: "George, vai chamar o Vinicius pra mim." Rafael: "Pô, o que rolou?" Comandante: "Mano, o Marcos tomou uma facada de madrugada e tô te interrogando porque não te encontrei no teu quarto pela manhã." Vinicius: "E aí, qual é a parada?" Comandante: "Tu pediu pro Rafael fazer algo pra ti?" Vinicius: "Sim, mano, pedi pra ele resolver duas paradas pra mim." Rafael: "As contas, chefe, mostraram que o foguete pode explodir. Fiquei a noite toda buscando como mudar isso e quando descobri, fui resolver. Por isso que passei a noite em claro, chefe." Comandante: "Beleza, tu tá cheirando a combustível. Chama o Miguel e diz que tô te esperando no quarto dele, mas não fala nada do assunto." Rafael: "Ok, chefe." Ufa, ele não ficou pistola. Passei lá no quarto dele, mas não tava lá, mas quando saí esbarrei com ele. Rafael: "Miguel, o comandante tá te chamando lá no seu quarto." Miguel: "Pra quê?" Rafael: "Não sei, mano, vai lá." Preciso falar com o Vinicius sobre isso, mas mano, eu só quero dormir.`)
    Constrution.choice(`Dormir, to cansadão`, `getEspaçoR3()`, `left`, `blue`)
    Constrution.choice(`Falar com o Vinicius`, `getEspaçoR4()`, `right`, `blue`)
}
function getEspaçoR2(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Caramba, vou dormir, amanhã dou um jeito nessas contas, não parecem ser tão difíceis assim. No outro dia, "Poxa, acordei cedo hoje", beleza, bora dar uma olhada nessas contas. Quando termino de resolver, saco que é porcentagem, tipo as chances de dar ruim na decolagem. Fiquei bolado quando vi isso, e lembrei que hoje era o dia do lançamento. Saí correndo atrás do Vini e quando achei ele, mostrei tudo. Vini: "Cara, são 8 da manhã." Rafael: "E daí?" Vini: "E aí que tu tá cedo pra caramba, mas fala logo o que tu descobriu." Rafael: "As contas tão mostrando que o foguete pode explodir!" Vini: "Sério? E tu não contou pro comandante?" Rafael: "Não achei ele ainda." Vini: "Vai lá correndo falar com ele, vou dar um jeito nisso."

    Saí atrás do comandante, procurei em todo lugar, mas nada. Rafael: "Ei, galera, alguém viu o comandante?" Tripulante: "Ele tava conversando com o Miguel." Rafael: "Beleza, valeu." Corri pro quarto do Miguel e escutei os caras conversando. Miguel: "Espera, então tu tá afim de ver tudo pegar fogo? Por quê?" Comandante: "Porque eu quero voltar pra casa." "Que? O comandante cravou a língua no ombro do Miguel? Que loucura!" O comandante deu um tranco no Miguel e derrubou ele. Comandante: "Desculpa, Miguel, mas eu preciso voltar pra casa." "Preciso fazer alguma coisa!" Rafael: "Comandante, pára!" Miguel: "Rafael, o cara é um monstro, atira nele!" Comandante: "Rafael, me ajuda, ele endoidou!" Rafael: "Desculpa, comandante, mas eu vi tuas paradas, larga ele!" Comandante: "Ai, ai, Rafael, eu vou dar um jeito em ti depois que resolver o Miguel!" Ele meteu a língua na cabeça do meu amigo e veio pra cima de mim. Dei dois tiros na cabeça dele e derrubei o cara. Peguei a faca dele quando levei um choque de taser. Acordei na cadeia, acusado de duplo homicídio e condenado à cadeira elétrica.
    
    Já faz 15 dias e hoje é o dia do meu julgamento, os policiais estão abrindo a cela agora.`)
    Constrution.end()
}
function getEspaçoR3(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Bah, vou dormir, o comandante já tá ligado, duvido que não vá resolver isso. E, olha só, já tirei o combustível, então não vai rolar explosão mesmo.

    Quando cheguei no meu quarto, capotei e dormi. Não sei se foi por causa da parada do combustível, mas tive um sonho louco. Tava eu, atrasadão, correndo pra entrar no foguete antes do lançamento. E lá, vejo o Miguel, de boas, pensando na vida. Chamo ele e a gente entra juntos. Daí, Vini liga o foguete e... BOOM! Explode tudo. Bizarro, né? Ainda bem que foi só um sonho.
    
    Acordei faltando vinte minutos pro lançamento, me arrumei e fui lá. Tava dentro do foguete quando vi o Miguel lá fora, todo nervoso. Cheguei e disse: "E aí, Miguel, bora?" Miguel: "Bora." Entrei no foguete e esperei decolar.
    
    Enquanto isso, lá fora: Vini: "3, 2, 1, decolar!" Vini liga o foguete. Marcos sai correndo da enfermaria, gritando que as contas tavam erradas e que ia explodir, mas já era tarde demais. O foguete sobe uns 10 metros e... PÁ! Explode tudo, destruindo uns 10km ao redor. No céu, formou uma baita nuvem em forma de cogumelo.`)
    Constrution.end()
}
function getEspaçoR4(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Pô, lembro que vi uma parada no quarto do Miguel que me chamou atenção, era a mesma conta que eu tinha resolvido de noite, mas não entendi, como ele tinha isso? Será que o Vini pediu pra ele resolver também? Fica na dúvida, mas vou lá falar com ele. Chegando na sala de operações, dou de cara com o Vini e conto o que descobri. Vini: "Então, se a gente diminuir o combustível, o foguete não explode?" Rafael: "É isso aí." Vini: "Beleza, Rafael, vou dar um jeito nisso, valeu." Rafael: "Relaxa, já arrumei isso ontem à noite." Vini: "Show, então se prepara pro embarque, meu camarada. Espero que você se dê bem lá." Rafael: "Valeu." "Espera aí, 'espero que você se dê bem lá'? Que que será que ele quis dizer?" Melhor eu ir me arrumar pro embarque.

    Vini: "3, 2, 1, decolar." Finalmente tô aqui dentro do foguete. Tripulante: "Rafael, outros tripulantes ouviram uns barulhos no motor e parece que teve treta." Rafael: "Blz, vamos ver o que é, George, fica esperto." George: "Tranquilo, chefe." Quando desço pra sala de motor, encontro dois tripulantes com bala na cabeça e outro com um buraco no peito. "Estranho, acho que tinha mais alguém aqui. O extintor não explodiu à toa. Cadê o Miguel?" Rafael: "Tripulante, chama todo mundo pra sala principal, precisamos bater um papo." Tripulante: "Combinado, chefe." De repente, escuto um barulho.`)
    Constrution.choice(`Ver o que foi esse barulho`,`getEspaçoR5()`, `left`, `blue`)
    Constrution.choice(`Deve ter sido só impressão`, `getEspaçoR6()`, `right`, `blue`)
}
function getEspaçoR5(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Fui ver o que era o barulho, mas quando cheguei lá, o comandante tava todo ferrado. "Rafael, me ajuda", ele falou. Aí, eu e mais um tripulante levamos ele pra enfermaria. Chegando lá, o cara apagou e eu fui pra sala principal. Todo mundo tava me esperando. "Então, tem um traidor no meio da gente. Já mandou três tripulantes pro espaço e lascou o comandante", soltei. A galera começou a falar (tipo, "que loucura!" e "e agora, o que fazemos?"). "Relaxa, pessoal. A gente tem uma masmorra. Vamos enfiar todos os suspeitos lá até descobrir quem é o culpado ou os culpados. Fim da reunião."

    Na hora, tive que manter a calma, mas tava preocupado e chateado, mano. O Miguel sumiu e tem um traidor na parada. Será que é ele? Preciso achá-lo! Mas antes, vou dar uma descansada, tô cansado e ainda tenho que dar uma conferida no comandante.`)
    Constrution.choice(`Ver o comandante`, `getEspaçoR7()`, `left`, `blue`)
    Constrution.choice(`Faz 24 horas que não durmo, Sonão`, `getEspaçoR8()`, `left`, `blue`)
    Constrution.choice(`Procurar Miguel`, `getEspaçoR9()`, `left`, `blue`)
}
function getEspaçoR6(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura integalactica`, `blue`, `#0000ff33`, `Tripulante: "Ei, tudo na boa, chefe?"
    Rafael: "É isso aí, bora lá."
    
    Chegando lá, todo mundo tava me esperando.
    Rafael: "Então, tem um traidor entre nós. Já mandou quatro tripulantes pro espaço."
    Geral começou a falar (tipo, "que história é essa?" e "e agora, o que a gente faz?").
    Rafael: "Calma aí, gente, deixa comigo. A gente tem uma masmorra. Vamos jogar todos os suspeitos lá até acharmos o culpado ou culpados. Fim da reunião."
    
    Assim que saí da sala principal, me deparei com o comandante jogado no chão todo ferrado.
    Rafael: "Galera, me ajuda aqui!"
    Aí, eu e outro tripulante pegamos o comandante e levamos ele pra enfermaria. Chegando lá, o cara apagou. "Como que isso aconteceu? Ei, cadê o Miguel? Preciso achar ele. Mas e se eu largar o comandante aqui e o traidor voltar pra terminar o serviço?"`)
    Constrution.choice(`Ficar na enfermagem`, `getEspaçoR10()`, `left`,`blue`)
    Constrution.choice(`Procurar Miguel`, `getEspaçoR9()`, `right`, `blue`)
}
function getEspaçoR7(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Pô, primeiro vou dar uma olhada no comandante, ele tá muito ferrado. Fui até a enfermagem e ele tava com duas enfermeiras cuidando dele. "Beleza, ele tá em boas mãos. E agora, o que eu faço?"`)
    Constrution.choice(`Ir descansar`, `getEspaçoR8()`, `left`, `blue`)
    Constrution.choice(`Procura Miguel`, `getEspaçoR9()`, `right`, `blue`)
}
function getEspaçoR8(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Preciso mesmo descansar. "Ei, José!"
    José: "Fala, chefe!"
    "Faça a guarda do comandante, preciso de uma soneca, passei a noite em claro."
    José: "Pode deixar, chefe."
    Ufa, agora vou dar um cochilo.
    
    Acordo assustado com sons de tiros. "Que...?" Saio para ver de onde estão vindo os disparos, mas cheguei tarde demais. Encontro dois tripulantes desfigurados, sem pernas, e, caramba, são mordidas? Na hora, lembro do comandante! Corro para a enfermagem e, quando chego lá, vejo duas enfermeiras com o pescoço quebrado e o comandante e José desaparecidos. "Que droga, cadê eles?" Foi então que vi uma folha no chão, perto da cama onde o comandante estava deitado. "Espera aí, é a folha de Miguel!"`)
    Constrution.choice(`Procurar o comandante`, `getEspaçoR11()`, `left`, `blue`)
    Constrution.choice(`Procurar Miguel`, `getEspaçoR12()`, `right`, `blue`)
}
function getEspaçoR9(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Vou atrás do meu camarada, afinal, fui eu que trouxe ele pra esse inferno, e se ele for o traidor, vou resolver essa parada com ele. Procurei o Miguel por toda a nave, mas não achei. Comecei a me perguntar se ele chegou mesmo a entrar na nave. Perguntei pra galera se alguém viu o Miguel, mas ninguém viu ele entrando na nave. Que droga.
    
    De repente, ouvi tiros vindo do armazém. Corri pra lá o mais rápido possível, mas já era tarde demais. Encontrei dois tripulantes desfigurados, sem pernas, e, caramba, eram mordidas? Na hora, lembrei do comandante! Corri pra enfermaria e, quando cheguei lá, vi duas enfermeiras com o pescoço quebrado e o comandante e José sumidos. "Que raios, onde eles estão?" Foi então que vi uma folha no chão, perto da cama onde o comandante tava deitado. "Espera aí, é a folha do Miguel!"`)
    Constrution.choice(`Procurar o comandante`, `getEspaçoR11()`, `left`, `blue`)
    Constrution.choice(`Continuar atrás de Miguel`, `getEspaçoR12()`, `right`, `blue`)
}
function getEspaçoR10(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Depois vou atrás do Miguel, afinal, ele pode ser o traidor. Vou vigiar o comandante e, quando ele melhorar, vou atrás dele.

    Passou um tempo e as enfermeiras voltaram pra medicá-lo de novo. Foi quando ele começou a se contorcer e os machucados sumiram. O comandante quebrou o pescoço das duas enfermeiras. "Que loucura, por que ele fez isso?" Ele veio pra cima de mim com uma força absurda. "Ele quer me matar também, tenho que sair daqui!" Chutei o rosto dele e corri pro armazém. Pra minha sorte, encontrei o George, o José e o Tiago.
    
    "Galera, me ajuda, o comandante tá atrás de mim, acho que ele pirou!" O comandante parou na porta e se transformou num animal, uma fera, e começou a rir. "Vocês não podem comigo, seres desprezíveis." Sacamos as armas, mas de repente o José atirou no George e abriu a boca pra que sua língua pontiaguda perfurasse o Tiago. Atirei no comandante, mas ele era mais rápido que eu. Percebi que tava no meio do José e do comandante. Joguei a arma descarregada no José e peguei uma espada que o Tiago tava guardando e entrei em combate com os dois.
    
    O comandante veio pra cima com muita velocidade, mas consegui cortar um de seus braços com um movimento só. Ele não parou o ataque. Fui arremessado na parede. O José pegou uma madeira pra me nocautear, mas desviei e acabei cortando só a madeira. Aí ouvi um disparo e caí no chão. "Você foi o meu melhor soldado, Rafael, mas agora morra." O comandante me deu outro tiro, direto na cabeça.`)
    Constrution.end()
}
function getEspaçoR11(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura integalactica`, `blue`, `#0000ff33`, `Resolvi ir atrás do comandante, pensei que ele podia estar em perigo. Procurei ele por todo lugar, mas nada. Voltei pro armazém pra investigar o que aconteceu e me deparo com uma cena horrível: o comandante e o José estavam comendo os restos dos corpos que estavam lá. José me viu, maldição! "Duarte, ele nos viu." O comandante virou uma fera e veio na minha direção, enquanto o José levava os corpos pro triturador. Desviei do ataque do comandante e caí no chão, dando dois tiros na barriga dele. Quando percebi que o José vinha pelas minhas costas, me defendi do ataque dele e bati com a arma na cabeça dele, mas ele me deu um chute nos meus "amigos" e me arremessou longe. Quando caí, vi uma espada na minha frente. Joguei a arma no José e peguei a espada, mas quando me dei conta, tava cercado pelos dois.

    Os dois vieram pra cima de mim, mas dei um passo em direção ao comandante e cortei a língua dele, rolando por baixo dele enquanto ele atacava pelo ar. Ele acabou dando de cara com o José, que ficou meio atordoado, mas o comandante não, ficou furioso. Veio pra cima de novo, só que agora muito mais rápido. Com um movimento, consegui cortar um dos braços dele, mas ele não parou o ataque. Fui arremessado na parede. O José pegou uma madeira pra me nocautear, mas desviei e acabei cortando só a madeira. Foi então que ouvi um disparo e caí no chão. "Você foi o meu melhor soldado, Rafael, mas agora morra." O comandante me deu outro tiro, só que dessa vez direto no meu crânio.`)
    Constrution.end()
}
function getEspaçoR12(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `Saí correndo atrás do Miguel, precisava encontrar meu amigo ou impedi-lo. Quando tava chegando perto da navegação, percebi sangue no chão. Saco minha arma e arrebento a porta. "Comandante, José! O que... O que vocês são?" O comandante responde: "Não, Rafael. Eu queria te levar pra casa pra devorar com a minha esposa, mas agora vou ter que acabar com você." Ele salta na minha direção, e sem pensar duas vezes, atiro na cabeça dele.`)
    Constrution.choice(`Correr`, `getEspaçoR13()`, `left`, `blue`)
    Constrution.choice(`Lutar com José`, `getEspaçoR14()`, `right`, `blue`)
}
function getEspaçoR13(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `José vem na sua direção e você corre o mais rápido possível até a sala de reuniões. Lá, ele acerta sua perna e você cai. "Você já era!", ele diz. É quando você escuta um tiro. "Afaste-se, maldito!", grita um dos tripulantes. Todos começam a atirar até que ele fica em cima do descarte de lixo e suas balas acabam. "Isso é tudo que têm, seus idiotas", ele diz. Eu vi ele sacando a arma, foi quando corri e puxei a alavanca e ele foi ejetado junto com o lixo para fora. Pensei que tinha acabado, mas ouvi passos. Quando olhei. "Droga, se escondam, é o comandante. Ele também é um monstro."`)
    Constrution.choice(`Lutar`, `getEspaçoR15()`, ``, `blue`)
}
function getEspaçoR14(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `José veio na minha direção, virei e chutei a cara dele. Ele caiu e dei dois tiros, mas quando virei as costas, ele voltou e arrancou meu braço. Atirei de novo, mas só afastou ele. Veio na minha direção de novo. Sabia que ia morrer, mas ia segurar ele o máximo possível. Saquei minha espada e com um golpe decapitei ele. Senti uma dor insuportável. "Rafael, você era bom, o melhor da tripulação, mas não pense que nós morremos assim fácil. Somos mais fortes, mais espertos e mais famintos." O comandante e o José pularam em cima de mim e começaram a me devorar. Comecei a rir. José perguntou o que era engraçado e eu respondi: "A granada no meu bolso. Está sem o anel."

    CABUM!!!`)
    Constrution.end()
}
function getEspaçoR15(){
    Constrution.history(`./imagines/espaço.png`, `Perdidos no espaço - Uma aventura intergalactica`, `blue`, `#0000ff33`, `O comandante veio na minha direção com muita raiva. Descarreguei a arma, mas não funcionou, ele ainda estava de pé. "Agora acabou pra você, Rafael. Vou devorá-lo e roer seus ossos", ele rosnou. "Quero ver você tentar", eu respondi. O comandante se transformou numa besta horrível e avançou na minha direção. Saquei minha katana e... Caramba, ele é rápido! Só consegui me defender. Espera, ele tá vindo de novo. Nossa, dessa vez consegui acertá-lo, mas peraí, cadê meu braço? Ele arrancou meu braço em poucos segundos. Consegui acertá-lo uma vez, vamos lá, se acalma, você consegue. Ele veio de novo, mas dessa vez consegui acompanhar. "Te peguei", gritei, cortando seus tendões de Aquiles. "Como? Ninguém nunca foi capaz de tamanha façanha", ele disse, aproveitando meu deslize e me jogando contra a parede. Minha espada caiu longe de mim. "Suas últimas palavras?", ele perguntou. "Toma essa, otário", respondi, acertando ele com um extintor de incêndio. Ele começou a se contorcer só de estar perto. Foi quando tive uma ideia. Joguei o extintor nele e saí correndo, pegando os outros extintores da sala e jogando nele. "Tripulantes, fogo!", gritei. Todos começaram a atirar até acabar as balas. Assim que terminou, peguei minha katana e fui lá. O comandante ergueu a mão e riu, dizendo que era tarde demais. Eu o decapitei e o descartei no lixo, da mesma maneira que fiz com o José. "Rafael, olhe!", gritou um tripulante. Meu Deus, agora estamos fud***s.

    Enquanto isso:
    
    Miguel: Quando acordei, fiquei um bom tempo sem consciência, pois o comandante estava me dopando. Então não lembro muito dessa parte, mas me lembro quando olhei pela janela e vi outro planeta na nossa frente. "Então a gente chegou ao destino. Porcaria!"`)
    Constrution.end()
}