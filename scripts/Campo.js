//---------------------------- CAMPO ------------------------------------------------>
function getCampo(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`"Eu sou o Jack, um cara de 20 anos que se mandou pra cidade grande pra correr atrás do meu trampo dos sonhos. Sabe como é, é osso viver de engenheiro em cidade pequena. Mas é isso, resumindo minha parada.
    Tô indo dar um pulo na minha família no interior. A estrada tá suave, só campo pra todo lado.
    Gritos: "Socorro!" - Jack: "Que que tá rolando?" - Gritos: "Alguém me ajuda, pelo amor de Deus!" - Jack: "Essa voz tá vindo lá do mato."
    Paro o carro e chego mais perto do mato gigante e berro: "E aí!" - Gritos: "Me ajuda, tô perdido aqui dentro há horas." Era um guri. - Jack: "Ei, muleque, consegue me ouvir?" - Muleque: "Tô com a perna zuada, não consigo nem andar." "Pô, vou ter que entrar lá e dar uma força pro piá."
    Meti o pé naquele mato e uma parada me veio à mente: "Por que diabos esse guri tá sozinho aqui? Acho que tem mais gente na jogada."
    `)
    Constrution.choice(`Ligar para ajuda`, `getCampo1()`, `left`, `green`)
    Constrution.choice(`Entrar no campo`, `getCampo2()`, `right`, `green`)
    music(audios.campo0,audios.campo1)
}
function getCampo1(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`"Mano, eu peguei o telefone e tentei chamar a polícia, mas meu celular tava sem sinal. Que raiva, sem como pedir ajuda. Voltei pro carro e aí veio uma dor de cabeça daquelas, acabei apagando dentro do carro e tive um sonho.
    No sonho, eu entrei nesse mato pra achar o garoto, mas quando encontrei, o moleque tava morto, parecia que já fazia uns dias. Aí o mato começou a mexer. Saí correndo que nem louco, mas não conseguia sair.
    Depois de muito andar, dei de cara com os pais do garoto e, põe surpresa nisso, o garoto tava lá, vivo! Como assim? De repente, os pais saem correndo e sinto uma mão no meu ombro. Quando ia virar, levei uma facada nas costas. Acordei todo suado no carro e lá no fundo o moleque pedindo ajuda.
    Fui de novo pra frente do mato pensando: 'Que sonho doido, será que é um aviso?' Gritos: 'Você ainda tá aí? Alguém?' Dane-se, vou entrar, não posso deixar o moleque sozinho lá."
    `)
    Constrution.choice(`Entrar no campo`, `getCampo2()`, `left`, `green`)
}
function getCampo2(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`"Eu gritei pro moleque: 'Tá sozinho aí?' O menino respondeu: 'Não, minha mãe e meu padrasto também tão perdidos aqui.' 'Beleza', entrei no campo pra procurá-lo e continuei batendo papo pra distrair.

    Jack: 'Qual seu nome, garoto?'
    Zael: 'Me chamo Zael. E o seu?'
    Jack: 'Jack. Quantos anos você tem?'
    Zael: '8 anos. Ei, Jack?'
    Jack: 'Fala, Zael.'
    Zael: 'Você vai me ajudar?'
    
    Enquanto ele falava, eu consegui ver ele pelo mato. Jack: 'Tô aqui perto.' 'Te achei.' O moleque tava sentado num tronco de costas pra mim. 'Esse menino é esquisito, eu mexo no mato perto dele e ele nem liga. Relaxa, Jack, ele é só um garoto.'
    
    Chamei ele de novo, mas ele nem se mexeu. 'Caramba, que que tá rolando com esse moleque?' Jack: 'Ei, Zael?' Pus a mão no ombro dele e tava gelado. O moleque apontou pra frente e disse: 'Jack, tá vendo ela?' Quando vi alguém ali escondido, 'Que loucura é essa?'`)
    Constrution.choice(`Ir embora`, `getCampo3()`, `left`, `green`)
    Constrution.choice(`Ver quem está ali`, `getCampo4()`, `right`, `green`)
}
function getCampo3(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`"Eu saí dali no tranco, corri pro carro e tentei ligar, mas o danado não pegava. Aí ouvi uma voz mó sinistra vindo do mato: 'Jack, tá pensando que vai pra onde? Volta aqui!' Enquanto isso, o carro teimava em não ligar. 'Pô, por que esse carro não pega?' Gritos: 'Jack, cê não vai me ajudar, não?' 'Caramba, essa voz é do muleque. Meu Deus, tenho que sair daqui. Anda logo, carro, liga!'
    Quando finalmente o carro pegou, acelerei com tudo. No retrovisor, vi uma figura toda esquisita, um muleque com um sorriso de dar arrepio. Ele gritou uma última vez: 'Nos vemos, Jack.' 'Que loucura é essa? Esse muleque não era humano.'
    Fiquei bolado. Cheguei na casa da minha família, "Finalmente, cheguei! Que estranho, a porta tá arreganhada."
    Jack: 'Mãe.' Entrei e vi uma cena mó doida. Minha mãe tava morta, a sala toda manchada de sangue. Fiquei chocado, perdi até as pernas e caí no chão, começando a chorar. De repente, vi algo rolando na minha direção. Me levantei cagado de medo quando percebi que era a cabeça do meu pai. Olhei pro lado e vi quem tinha jogado.
    O muleque tava na porta, rindo. Jack: 'O que você quer de mim?' Muleque: 'Quero você, Jack.' Jack: 'Como assim? Você ficou lá no mato.' Muleque: 'Mas você nunca saiu de lá, Jack. Você ainda tá no mato.' Jack: 'Mentira!' Muleque: 'Jack, Jack, vou te contar o que rolou. Você ouviu eu te chamando pro mato, né? Quando parou o carro e entrou, eu te apunhalei pelas costas. Jack, você ainda tá lá, morto."
    !`)
    Constrution.end()
}
function getCampo4(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Eu fui ali dar uma olhada e quando me aproximei, eu vi uma mulher sair correndo, eu corri atrás dela, pois ela poderia ser a mãe do garoto, mas eu a perdi de vista, porcaria de campo, foi quando derrepente eu escuto uma risada muito alta, desesperado eu sai correndo para o lugar de onde eu vim e quando eu chego ali eu não vejo mais o menino, mas não tive tempo para pensar nele, pois quando olho para traz, eu vejo uma mulher, toda suja se aproximando, eu continuo correndo até que eu não vi o buraco e eu tropiquei, cai e bati a cabeça e tudo começou a escurecer.
    Eu acordei amarrado, menino -Mamãe ele acordou; mulher -Olá Jack, meu nome é Melry; Jack -Como você sabe meu nome? E porque eu estou amarrado?; Melry -Eu escutei você conversando com Azazel e você está amarrado para minha segurança e a do meu filho Kater; Jack -Espera, o nome do menino é Zael e não Azazel e eu não vou machucar vocês, eu vim aqui para ajudar; Kater -Mamãe ele também foi enganado?; Melry -Sim filho; Melry soltou as cordas e me disse Melry -Jack, o menino com quem você conversou, não era um menino e sim um demonio, seu nome é Azazel, se quiser ir fique a vontade, mas ninguem consegue sair do Campo do Silêncio; "isso não é possivel, espera, se bem que aquele menino estava gelado, meu Deus e agora?"`)
    Constrution.choice(`Ficar e ver o que descobre`, `getCampo6()`, `left`, `green`)
    Constrution.choice(`Procurar a saída`, `getCampo5()`, `right`, `green`)
}
function getCampo5(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Jack: "Melry, valeu pela força, mas preciso dar o fora. Minha mãe tá deve tá doida me procurando. Boa sorte pra você e pro Kater. Se eu conseguir sair daqui, juro que chamo ajuda pra vocês, tá ligado?"
    Melry: "Cara, você é meio doido, mas valeu pela moral. Boa sorte pra você também."
    Saí dali e comecei a caminhar pelo campo, mas não conseguia sair. Andei por horas e nada. Foi quando vi o menino de novo.
    Jack: "Ei, Zael, bora dar o fora daqui. Tem uma maluca assustadora rondando."
    Zael: "Você viu ela?"
    Jack: "Vi sim, mas não é da nossa conta. Vamos cair fora!"
    Zael: "Devia ter dado ouvidos pra ela, Jack."
    O moleque se transformou num cara de terno branco e gravata vermelha, tirou uma faca. Na hora que vi aquilo, saí correndo. Só que, pra minha má sorte, voltei pro lugar onde tavam a Melry e o Kater. Parei na frente deles, mas eles saíram correndo. Quando fui atrás, Zael me apunhalou pelas costas. Enquanto caía, ele olhou pra mim no chão e soltou:
    Zael: "Quando sua alma chegar no inferno, fala que foi Azazel que mandou.
    `)
    Constrution.end()
}
function getCampo6(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Jack: "Melry, que que tá rolando?"
    Melry: "É simples, a gente, você, eu e meu moleque, caímos numa roubada. Azazel se fingiu de garoto perdido e meu filho caiu na dele, entrou nesse mato pra ajudar. Eu nem percebi, tava dormindo. Quando acordei e vi que meu moleque não tava ali, vi pegadas indo pro mato. Fui atrás e peguei Azazel matando meu filho. Parti pra cima, peguei a faca dele e meti nas costas. Ele se deu mal, largou o Kater e eu peguei meu filho e saí correndo."
    Jack: "Caramba, mas e agora? A gente sai daqui?"
    Melry: "Claro, chega de papo. Vai dormir, eu fico de olho."
    Jack: "De jeito nenhum. Você tá cansada, vai descansar um pouco e depois eu durmo."
    Melry: "Desculpa, Jack, mas não confio em você."
    Jack: "Se eu quisesse te machucar, já tinha feito."
    Melry foi descansar um pouco, e eu acabei pegando no sono depois de um tempo.
    Acordei de manhã com o Kater gritando.
    Kater: "Mãe, sonhei com ele!"
    Melry: "Calma, filho, foi só um sonho."
    Jack: "Ei, Kater, o que você sonhou?"
    Melry: "Sério, Jack? Foi só um sonho, vamo cair fora antes que ele nos ache."
    `)
    Constrution.choice(`Lutar com Azazel`, `getCampo7()`, `left`, `green`)
    Constrution.choice(`Ir embora`, `getCampo3()`, `right`, `green`)
}
function getCampo7(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Jack: "Você acha que sou burro, né? Não tem como sair desse campo enquanto você estiver aqui, não é?"

    Fui pra cima de Azazel, mas o cara desviou e acabou quebrando meu braço. Ele me encarou e soltou: "Tolo, até fiquei fraco depois daquele golpe da Melry, mas ainda tenho energia pra manter vocês trancados aqui. Não subestime, sou um príncipe do inferno."
    
    Jack: "Eu já sabia que o punhal ia acabar com você."
    
    Azazel: "Pois é, mas você foi um idiota. Teve a chance de fugir com o punhal, mas desperdiçou tudo. Tudo por causa de um garoto que mal conhece e uma mulher que nem te contou a verdade sobre ela, o filho e até mesmo como você foi parar aqui!"
    
    Jack: "Vai pro inferno!"
    
    Foi aí que Melry apareceu e cravou o punhal nele. Azazel caiu no chão se contorcendo. Mesmo sendo um príncipe do inferno, caiu feito um pato. Aproveitei o momento e, sem ele perceber, entreguei o punhal pra Melry. Quando ele terminou de falar, ela deu o golpe final.
    
    Jack: "Finalmente acabou."
    
    Ele começou a derreter, virou lava e foi sugado pelo chão. Que cena maluca!
    
    Melry: "Kater, você tá bem? Vamos embora, acabou."
    
    Kater: "Tô de boa."
    
    Jack: "Partiu, Melry? Tô cansado desse campo."
    
    Saímos do campo, e parecia que eu tinha acabado de entrar. Meu ferimento tinha sumido, mas tava mais curioso do que nunca sobre esse pacto da Melry. Assim que a gente sair daqui, vou ter que perguntar. Afinal, é um assunto delicado.`)
    Constrution.choice(`Perguntar sobre o pacto`, `getCampo8()`, `left`, `green`)
    Constrution.choice(`Deixar isso pra lá`, `getCampo9()`, `right`, `green`)
}
function getCampo8(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Jack: "Melry."
    Melry: "E aí."
    Jack: "Que que o Azazel tava falando? Você fez um pacto com ele? Por quê?"
    Melry: "Pois é, fiz sim, mas tinha uma razão."
    Jack: "Qual?"
    Melry: "Kater tava doente pra caramba, quase batendo as botas. Eu tava desesperada e o Azazel apareceu no hospital, prometendo salvar o moleque. Só que o preço era vir pra essa estrada no dia 20 de junho de 2020."
    Jack: "Entendi. Se fosse meu filho, faria o mesmo."
    Melry: "Cê não tá bravo comigo então?"
    Jack: "Claro que não, Melry. Só mostrou que aquele ditado é verdadeiro."
    Melry: "Qual ditado?"
    Jack: "Que mãe faria qualquer coisa pra salvar seu filho."
    Ela me deu um sorriso e um olhar igualzinho ao da noite passada. Fiquei meio sem jeito e comecei a dirigir. Um clima bem esquisito, saca?
    Cheguei na casa da minha mãe, eu e Melry viramos amigos. Depois de um tempo, pedi ela em namoro, e ela topou. Kater adorou a ideia, me via como um pai já. Já se passaram 6 anos desde aquele dia, e sabe o que é mais louco? Hoje vou me casar com Melry, e ela tá esperando nossa garotinha.
    Bom, não sou de acreditar em contos de fadas ou filmes melosos, mas esse foi o meu final feliz.
    `)
    Constrution.end()
}
function getCampo9(){
    Constrution.history(`./imagines/campo.png`, `Campo do silêncio - O labirinto de Azazel`, `green`, `#ffffff33`,`Cheguei na casa da minha mãe e, com o tempo, eu e a Melry acabamos virando amigos de verdade. Até que um dia, tomei coragem e chamei ela pra sair. E não é que ela topou? A partir daí, começamos a namorar. O Kater ficou todo animado com a ideia, já que me via como um segundo pai.

    Passaram-se seis anos desde aquele dia louco, e adivinha só: hoje é o dia do meu casamento com a Melry, e ela tá esperando nossa princesinha chegar.
    
    Bom, nunca fui de acreditar em contos de fadas ou em finais de filmes, mas esse aqui, com certeza, é o meu final feliz de verdade.`)
    Constrution.end()
}