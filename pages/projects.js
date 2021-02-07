const Card = ({
    title,
    imageSource,
    link,
    isMobile = false,
    mobileColor = "white",
    yearStart,
    yearEnd,
    children
}) => (
    <>
        <div className="card">
            <figure className="card-icon-container">
                <img src={imageSource} className="card-icon" />
            </figure>
            <div className="card-text-container">
                <h3 className="card-title">
                    {title}
                </h3>
                <p className="card-timeline">
                    {yearStart}-{yearEnd}
                </p>
                <p className="card-text">
                    {children}
                </p>
                {link && (
                    <a href={link} className="card-button">
                        Visitar página
                    </a>
                )}
            </div>
        </div>
        <style jsx>{`
            .card {
                display: flex;
                margin-bottom: 40px;
                padding-bottom: 40px;
                border-bottom: solid 1px #eee;
                ${isMobile ? 'flex-direction: row-reverse;' : ''}
            }
            .card-title {
                margin-bottom: 0;
            }
            .card-timeline {
                margin-top: 0;
                color: gray;
            }
            .card-icon-container {
                margin: 0;
                padding: 0;

                ${isMobile ? `
                    position: relative;
                    width: 200px;
                    padding-top: 10px;
                    box-shadow: 0 0 10px 0px #999;
                    border: solid #ddd;
                    border-width: 10px 5px;
                    border-radius: 25px;
                    background-color: ${mobileColor};
                ` : `
                    width: 128px;
                `}
            }
            .card-icon-container::before {
                ${isMobile ? `
                    content: '';
                    display: inline-block;
                    width: 40%;
                    height: 8px;
                    background-color: #ddd;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 0 0 6px 6px;
                ` : ``}
            }
            .card-icon {
                width: 100%;
                display: block;
                border-radius: ${isMobile ? '15px' : '100%'};
            }
            .card-text-container {
                flex: 1;
                padding-left: ${isMobile ? '0' : '40px'};
                padding-right: ${isMobile ? '40px' : '0'};
            }
            .card-text {
                color: #333;
            }
            .card-button {
                padding: 6px 12px;
                border-radius: 100px;
                text-decoration: none;
                color: white;
                background-color: #2980b9;
            }
            .card-button:hover {
                background-color: #3498db;
            }
        `}</style>
    </>
)

export default function Projects() {
    return (
        <>
            <div>
                <Card
                    title="PortuJS"
                    imageSource="/images/logo-portujs.png"
                    link="https://github.com/portujs"
                    yearStart="2015"
                    yearEnd={(new Date()).getFullYear().toString()}
                >
                    PortuJS é uma coleção de bibliotecas e ferramentas de linha
                    de comando de código aberto em JavaScript com foco na
                    solução de problemas voltados à língua portuguesa.
                    Idealizei e desenvolvi projetos como Extenso.js, Piii.js e
                    Pluralizador.js que contam com centenas de usuários e
                    dezenas de colaboradores.
                </Card>
                <Card
                    title="cpf"
                    imageSource="/images/logo-cpf.png"
                    link="https://github.com/theuves/cpf"
                    yearStart="2015"
                    yearEnd="2019"
                >
                    Uma biblioteca em JavaScript criada em 2015 para ajudar
                    programadores a implementarem soluções em manipulação de
                    números de CPF permitindo a validação, formatação e
                    geração. Atualmente o projeto conta com cerca de 500 mil
                    instalações e centenas de implementações em repositórios
                    públicos no GitHub.
                </Card>
                <Card
                    title="Portal do Paciente"
                    isMobile
                    imageSource="/images/print-portal.png"
                    link="https://portal.cerdil.com.br"
                    yearStart="2019"
                    yearEnd="2019"
                >
                    Portal do Paciente é aplicativo web desenvolvido em
                    React.js para a Cerdil com integrações aos sistemas
                    hospitalares da clínica com o objetivo de dar aos pacientes
                    acesso fácil e fácil a todo o seu histório de exames com
                    imagens e laudos.
                </Card>
                <Card
                    title="LocAlug"
                    isMobile
                    imageSource="/images/print-localug.png"
                    mobileColor="#16a085"
                    yearStart="2019"
                    yearEnd="2020"
                >
                    LocAlug é um Progressive Web App criado em 2019 como
                    parte de um projeto para um cliente específico com o
                    objetivo de facilitar o controle de locações de imóveis
                    permitindo o agendamento, cadastro de clientes,
                    gerenciamento financeiro de comissões entre muitas outras
                    funcionalidades necessários aos usuários.
                </Card>
                <Card
                    title="II Workshop"
                    isMobile
                    imageSource="/images/print-workshop.png"
                    mobileColor="#3f51b5"
                    yearStart="2019"
                    yearEnd="2019"
                >
                    Desenvolvi em maio de 2019 para o "II Workshop de Pesquisa
                    e Extensão da FACE" na UFGD um aplicativo mobile web com o
                    objetivo de apresentar aos mais de 200 participantes do
                    evento um caso de uso de gameficação sob orientação do
                    professor Fábio Mascarenhas. Participei de todo o processo
                    de desenvolvimento do sistema utilizando tecnologias como
                    React.js, Firebase e Netlify para hospedagem.
                </Card>
            </div>
        </>
    )
}