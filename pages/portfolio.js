function Card({ name, link = '#', image, children }) {
    return (
        <div>
            <h2>{name}</h2>
            {image && (
                <div>
                    <img src={image} />
                </div>
            )}
            <p>{children}</p>
            <p>
                <a href={link}>Visitar website</a>
            </p>
        </div>
    )
}

export default function Portfolio() {
    return (
        <>
            <Card
                name="PortuJS"
                link="#"
            >
                Uma coleção de bibliotecas e ferramentas para linha de comando
                de código aberto em JavaScript com foco na solução de problemas
                voltados para falantes da língua portuguesa sendo os principais
                projetos: Extenso.js, Piii.js e Pluralizador.js com centenas de
                usuários e dezenas de contribuidores em diversos países.
            </Card>
            <Card
                name="Portal do Paciente"
                link="#"
                image="/images/portfolio-portal.png"
            >
                Um Progressive Web App construído na Cerdil para que pacientes
                cadastrem-se e visualizem imagens e laudos de todos os exames
                realizados na clínica com funções para atualização de dados
                cadastrais e compartilhamento de exames com médicos.
            </Card>
            <Card
                name="LocAlug"
                link="#"
            >
                Um Progressive Web App desenvolvido para que um cliente e seus
                colaboradores possam realizar o controle de locações de imóveis
                com agendamento, cadastro de pessoas, registro de comissão,
                entre muitas outras funções específicas.
            </Card>
            <Card
                name="ufgd2019face.club"
                link="#"
            >
                Um aplicativo desenvolvido para o II Workshop de Pesquisa e
                Extensão da FACE na UFGD ocorrido em maio de 2019 com o
                objetivo de apresentar aos participantes o conceito de
                gameficação permitindo que os usuários dêm feedbacks com votos
                e comentários nas apresentações do evento com o foco na
                acumulação de pontos.
            </Card>
        </>
    )
}