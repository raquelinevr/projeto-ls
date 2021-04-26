export async function creatoCard(){
  const title = ['Skagen','Hillerod','Aarhus','Roskilde','Odense','Frederiksberg']
  const descr= ['Skagen é uma cidade marítima localizada no país Dinamarca, bem no extremo norte da ilha de Vendsyssel-Thy e do condado de Nordjutlândia. Skagen possui variás praias bonitas com águas claras e areia branca. Sede o maior porto de pesca da Dinamarca.','Hillerød é uma cidadezinha de 30 mil habitantes e um dos castelos mais bonitos da Europa. O palácio Frederiksborg foi erguido no centro da cidade no século 17 pelo rei Christian IV. Hoje é um museu que abriga uma grande coleção de pinturas históricas.','Aarhus é uma cidade da Dinamarca, que fica na costa este da península de Jutlândia, Den Gamle By é um museu ao ar livre da cidade velha, com casas de enxaimel centenárias. Nas proximidades situam-se as estufas do Jardim Botânico de Aarhus.','A maior atração da cidade é a Catedral de Roskilde, é a única na ilha da Zelândia, até ao século XX. Seu interior, encontram-se enterrados vários monarcas dinamarqueses. Outra atração turística importante é o Museu de barcos vikings de Roskilde.','Odense está na ilha de Fyn, a aproximadamente 2 horas de Copenhagen, e é outra das cidades mais bonitas da Dinamarca! Se tornou ponto turístico famoso porque foi onde nasceu Hans Christian Andersen, autor de contos de fadas famosos como o Patinho Feio.','Bem ao lado de Copenhagen, a 15 minutos do Centro, está Frederiksberg, o melhor centro de compras da Dinamarca. Embora parecer um bairro perto do Centro de CP, é cidade independente , é pra lá que deve ir se quiser comprar presentes e aproveitar as ofertas!']
  const icon = ['fa-umbrella-beach','fa-fort-awesome','fa-leaf','fa-church','fa-book','fa-shopping-cart']

  title.map((item,index) => {
    console.log(item)
    console.log(index)

    const section = document.createElement('div')
    const div = document.createElement('div')
    div.classList.add('cardes')

    const i = document.createElement('i')
    i.classList.add(icon[index])
    i.classList.add('fas')
    i.classList.add('fab')

    const h3 = document.createElement('h3')
    h3.textContent = item

    const p = document.createElement('p')
    p.textContent = descr[index]

    section.appendChild(div)
    div.appendChild(i)
    div.appendChild(h3)
    div.appendChild(p)

    document.querySelector('.cardes-box').appendChild(section)
  })
}
