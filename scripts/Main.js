//-------------------------------------JSON-------------------------------------------
const dados = [
    {
        name:"campo",
        url:"./imagines/campo.png",
        local:"./scripts/Campo.js" ,
        nameHist:"Campo do silencio - O labirinto de Azazel",
        lancamento:"2024-04-21",
        click:"getCampo()",
        ambiente:["./music/campoCarro.mp3","./music/campoMato.mp3"]
    },
    {
        name:"espaco",
        url:"./imagines/espaço.png",
        local:"./scripts/Espaco.js" ,
        nameHist:"Perdidos no espaço - Uma aventura intergalactia",
        lancamento:"2024-04-21",
        click:"getEspaço()",
        ambiente:["./music/espaçoNave.mp3","./music/espaçoFoguete.mp3"]
    },
    {
        name:"sala",
        url:"./imagines/sala.png",
        local:"./scripts/Sala.js" ,
        nameHist:"Meu quarto - Preso em meus pensamentos",
        lancamento:null,
        click:"getSala()"
    },
    {
        name:"portoes",
        url:"./imagines/portoes.png",
        local:"./scripts/Portoes.js" ,
        nameHist:"Portões das sombras - A luta contra os pesadelos",
        lancamento:null,
        click:"getPortoes()"
    },
    {
        name:"neve",
        url:"./imagines/neve.png",
        local:"./scripts/Neve.js" ,
        nameHist:"Deixados no Alasca - O inferno congelante",
        lancamento:null,
        click:"getNeve()"
    },
    {
        name:"apocalipse",
        url:"./imagines/apocalipse.png",
        local:"./scripts/Apocalipse.js" ,
        nameHist:"Apocalipse - O começo de uma nova ordem",
        lancamento:null,
        click:"getApocalipse()"
    }
]
//-----------------------------------VARIAVEIS----------------------------------------
const Top = document.getElementById('cabeçalho')
const His = document.getElementById('conteudo')
const audio = document.getElementById("musica")
const cumprimento = document.getElementById("cumprimento")
const pesBox = document.getElementById('procurar')
const imgButton = document.getElementById('lupa')
const html = document.getElementById('html').innerHTML
let indiceSearch = 0
let indiceMusic = 0
const audios = {}
//------------------------------------BARRA DE PESQUISA-------------------------------
function select(pes_box){
    if(indiceSearch===0){
        pes_box.classList.remove('ini')
        pes_box.classList.add('open')
        pes_box.focus()
        indiceSearch++
        console.log("open")
    }else if(indiceSearch===1){
        pes_box.classList.remove('open')
        pes_box.classList.add('ini')
        indiceSearch--
        console.log("fechado")
    }
}
function removeSearch(id){
    const elemento = document.getElementById(id) 
    if (elemento) {
        elemento.remove()
    }
}
function search(){
    let query = document.getElementById("procurar").value.toLowerCase()
    let elementos = document.querySelectorAll(".historias")
    elementos.forEach(function(elemento){
        let nomeJogo = elemento.querySelector("button").innerText.toLowerCase()
        if (nomeJogo.includes(query)) {
            elemento.style.display = "block"
        } else {
            elemento.style.display = "none"
        }
    })
}
//---------------------------------OBJETO CONSTRUTION---------------------------------
const Constrution = {
    history: (imgUrl, nameHist, shadowColor, funColor, text)=>{
        const Top = document.getElementById('cabeçalho')
        const His = document.getElementById('conteudo')
        His.innerHTML = ``
        removeStyles("./styles/homePage.css")
        addStyles("./styles/insideGame.css")
        document.body.style.backgroundImage = `url("${imgUrl}")`
        Top.style.background = 'linear-gradient(gray, black)'
        if(indiceMusic==0){
            Top.innerHTML = ``
            const nameHistory = document.createElement("h1")
            nameHistory.id = 'nameHistory'
            nameHistory.style.textShadow = `3px 3px 3px ${shadowColor}`
            nameHistory.textContent = `${nameHist}`
            Top.appendChild(nameHistory)
            indiceMusic++
        }
        const fun = document.createElement("main")
        fun.id = "fundo"
        fun.style.backgroundColor = `${funColor}`
        const png = document.createElement("p")
        png.id = "texto"
        png.innerText = `${text}`
        const Voltar = document.createElement("label")
        Voltar.id = "voltar"
        Voltar.textContent = "Voltar ao inicio"
        Voltar.addEventListener('click',voltar)
        removeSearch("pesquisa")
        His.appendChild(fun)
        fun.appendChild(png)
        His.appendChild(Voltar)
    },
    choice: (text, func, dire, color)=>{
        const btn = document.createElement('buttom')
        btn.setAttribute('class', 'opçoes')
        btn.setAttribute('type', 'buttom')
        btn.setAttribute('id', `${text}`)
        btn.setAttribute('onclick', `${func}`)
        btn.style.float = `${dire}`
        btn.style.color = `${color}`
        btn.innerText = `${text}`
        const Fun = document.getElementById('fundo')
        Fun.appendChild(btn)
    },
    end:()=>{
        const fim = document.createElement('h3')
        fim.setAttribute('id', 'fim')
        fim.innerText = `Fim!`
        const Fun = document.getElementById('fundo')
        Fun.appendChild(fim)
    },
    person:(imgUrl, nameHist, shadowColor, funColor)=>{
        const Top = document.getElementById('cabeçalho')
        const His = document.getElementById('conteudo')
        His.innerHTML = ``
        removeStyles("./styles/homePage.css")
        addStyles("./styles/insideGame.css")
        document.body.style.backgroundImage = `url("${imgUrl}")`
        document.body.style.backgroundSize = '100% 100%'
        Top.style.background = 'linear-gradient(gray, black)'
        if(indiceMusic==0){
            Top.innerHTML = ``
            const nameHistory = document.createElement("h1")
            nameHistory.id = 'nameHistory'
            nameHistory.style.textShadow = `3px 3px 3px ${shadowColor}`
            nameHistory.textContent = `${nameHist}`
            Top.appendChild(nameHistory)
            indiceMusic++
        }
        const fun = document.createElement("main")
        fun.id = "fundo"
        fun.style.backgroundColor = `${funColor}`
        fun.style.textAlign = `center`
        const tit2 = document.createElement("h2")
        tit2.classList.add("tit2")
        tit2.textContent = "Escolha seu personagem:"
        const list = document.createElement("ul")
        list.id = "containerPerson"
        const Voltar = document.createElement("label")
        Voltar.id = "voltar"
        Voltar.textContent = "Voltar ao inicio"
        Voltar.addEventListener('click',voltar)
        removeSearch("pesquisa")
        His.appendChild(fun)
        fun.appendChild(tit2)
        fun.appendChild(list)
        His.appendChild(Voltar)
    },
    description:(imgUrl, namePerson, years, city, personHist, func)=>{
        const containerPerson = document.getElementById('containerPerson')
        containerPerson.innerHTML += 
        `<li class="persons">
            <h3 class="tit3">${namePerson}</h3><br>
            <img src="${imgUrl}" alt="${namePerson}" class="person"><br>
            <div id="dados">
            <label class="profile">Perfil</label>
            <h5 class="tit5">Idade:</h5>
            <p class="ficha">${years}</p>
            <h5 class="tit5">Cidade:</h5>
            <p class="ficha">${city}</p>
            <h5 class="tit5">Descrição:</h5>
            <p class="ficha">${personHist}</p>
            <button type="button" id="${namePerson}" class="personBtn" onclick="${func}">Escolho você!</button>
            </div>
        </li>`
    }
}
//---------------------------------ADICONAR E TIRAR ESTILOS---------------------------
function addStyles(nameStyles){
    const link = document.createElement('link')
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = nameStyles;
    document.head.appendChild(link)
}
function removeStyles(nameStyles){
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(function(link){
        if(link.href === nameStyles){
            link.remove();
        }
    });
}
//---------------------------------PAGINA INICIAL-------------------------------------
function addScripts(local,name){
    const script = document.createElement("script")
    script.src = local
    script.id = name
    script.setAttribute("defer", "")
    document.body.appendChild(script)
}
function addCard(url,name,nameHist,click,estado){
    const historias = document.createElement("div")
    historias.setAttribute("class","historias")
    const img = document.createElement("img")
    img.src = url
    img.setAttribute("class","capa")
    const btn = document.createElement("button")
    btn.type = "button"
    btn.id = name
    btn.setAttribute("onclick",`${click}`)
    btn.setAttribute("class","btn")
    btn.classList.add(estado)
    btn.innerText = nameHist
    const priLow = document.querySelector("div.priLow")
    priLow.appendChild(historias)
    historias.appendChild(img)
    historias.appendChild(btn)
}
function iniPage(){
    dados.map((jogos)=>{
        addCard(jogos.url, jogos.name, jogos.nameHist,jogos.click, corte_de_lancamentos(jogos.lancamento))
        addScripts(jogos.local, jogos.name)
    })
}
function voltar(){
    document.documentElement.innerHTML = html
    const Top = document.getElementById('cabeçalho')
    const His = document.getElementById('conteudo')
    const audio = document.getElementById("musica")
    const cumprimento = document.getElementById("cumprimento")
    const pesBox = document.getElementById('procurar')
    const imgButton = document.getElementById('lupa')
    indiceMusic=0
    musica()
    setTimeout(iniPage,500)
    document.getElementById("procurar").addEventListener("input",()=>{search()})
    imgButton.addEventListener('click', ()=>{select(pesBox)})
    cumprimento.addEventListener("click",()=>{
        if(audio.paused){
            audio.play();
        }else{
            audio.pause()
        }
    })
}
function mensager(alerta){
    alert(alerta)
}
//---------------------------------TROCA DE LANÇAMENTOS-------------------------------
function corte_de_lancamentos(date){
    if(date == null){
        return "inexistente"
    }else{
        const dataEspecifica = new Date(date)
        const diferencaEmMilissegundos = Date.now() - dataEspecifica.getTime()
        let diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24))
        if (diferencaEmDias > 60){
            return "jaAdicionadas"
        }else{
            return "lançamentos"
        }
    }
}
//----------------------------------MUSICAS DE FUNDO----------------------------------
function music(...musicas){
    const div = document.getElementById("audios")
    div.innerHTML = ""
    let musicaAtual = 0
    for(ind=0;ind<musicas.length;ind++){
        const audio = document.createElement("audio")
        audio.controls = true
        audio.loop = false
        audio.id = `musica${ind}`
        audio.src = musicas[ind]
        div.appendChild(audio)
        audio.addEventListener("ended",()=>{
            if(musicaAtual < musicas.length-1){
                musicaAtual++
                console.log(musicaAtual)
                const proximaMusica = document.getElementById(`musica${musicaAtual}`)
                proximaMusica.play()
            }else{
                musicaAtual=0
                const proximaMusica = document.getElementById(`musica${musicaAtual}`)
                proximaMusica.play()
            }
        })
    }
    const namePause = document.getElementById("nameHistory");
    namePause.addEventListener("click",()=>{
        const audioAtual = document.getElementById(`musica${musicaAtual}`)
        if(audioAtual.paused){
            audioAtual.play()
        }else{
            audioAtual.pause()
        }
    })
    const primeiraMusica = document.getElementById(`musica0`)
    primeiraMusica.play()
}
function musica(){
    for(let i=0; i<dados.length;i++){
        if(dados[i].ambiente){
            for(let ind=0; ind<dados[i].ambiente.length; ind++){
                const aplicar1 = `${dados[i].name}${ind}`
                audios[aplicar1] = `${dados[i].ambiente[ind]}`
            }
        }
    }
}
//-----------------------------TESTE E EXECUÇÕES--------------------------------------
musica()
setTimeout(()=>{iniPage()},500)
document.getElementById("procurar").addEventListener("input",()=>{search()})
imgButton.addEventListener('click', ()=>{select(pesBox)})
cumprimento.addEventListener("click",()=>{
    if(audio.paused){
        audio.play();
    }else{
        audio.pause()
    }
})
setTimeout(()=>{mensager("Controles de audio se localizam nos títulos das histórias e na página inicial se localiza no Bem Vindo:)")},1000)