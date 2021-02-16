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
            <div className="card-text-container">
                <h3 className="card-title">
                    {title}
                </h3>
                <p className="card-timeline">
                    {yearStart} &mdash; {yearEnd}
                </p>
                <p className="card-text">
                    {children}
                </p>
                <a className="card-link" href="#">
                    Ler sobre →
                </a>
            </div>
            <figure className="card-icon-container">
                <img src={imageSource} className="card-icon" />
            </figure>
        </div>
        <style jsx>{`
            .card {
                display: flex;
                margin-bottom: 40px;
                padding-bottom: 40px;
                border-bottom: solid 1px #eee;
            }
            .card-title {
                font-size: 1.75em;
                font-weight: lighter;
                line-height: 100%;
                margin-bottom: 10px;
            }
            .card-timeline {
                margin-top: 0;
                color: gray;
            }
            .card-icon-container {
                margin: 0;
                padding: 0;
                width: 200px;
                text-align: right;

                ${isMobile ? `
                    position: relative;
                    padding-top: 10px;
                    box-shadow: 0 0 10px 0px #999;
                    border: solid #555;
                    border-width: 10px 5px;
                    border-radius: 25px;
                    background-color: ${mobileColor};
                ` : ``}
            }
            .card-icon-container::before {
                ${isMobile ? `
                    content: '';
                    display: inline-block;
                    width: 40%;
                    height: 8px;
                    background-color: #555;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    border-radius: 0 0 6px 6px;
                ` : ``}
            }
            .card-icon {
                display: block;

                ${isMobile ? `
                    width: 100%;
                    border-radius: 15px;
                ` : `
                    float: right;
                    width: 75%;
                    border-radius: 100%;
                `}
            }
            .card-text-container {
                flex: 1;
                padding-right: 40px;
            }
            .card-text {
                color: #333;
                margin-bottom: 20px;
                font-style: italic;
            }
            .card-link {
                font-size: .9em;
                text-transform: uppercase;
                text-decoration: none;
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
                    yearStart="Setembro, 2015"
                    yearEnd="presente"
                >
                    Uma coleção de bibliotecas e ferramentas de linha
                    de comando de código aberto em JavaScript com foco na
                    solução de problemas voltados à língua portuguesa.
                </Card>
                <Card
                    title="cpf"
                    imageSource="/images/logo-cpf.png"
                    link="https://github.com/theuves/cpf"
                    yearStart="Dezembro, 2015"
                    yearEnd="presente"
                >
                    Uma biblioteca em JavaScript criada em 2015 para ajudar
                    programadores a implementarem soluções com a validação,
                    formatação e geração de números de CPF.
                </Card>
                <Card
                    title="Portal do Paciente"
                    isMobile
                    imageSource="/images/print-portal.png"
                    link="https://portal.cerdil.com.br"
                    yearStart="Agosto, 2019"
                    yearEnd="Dezembro, 2019"
                >
                    Um aplicativo web desenvolvido para a
                    Cerdil com o objetivo de dar aos pacientes um acesso fácil
                    e rápido às imagens e laudos realizados.
                </Card>
                <Card
                    title="LocAlug"
                    isMobile
                    imageSource="/images/print-localug.png"
                    mobileColor="#16a085"
                    yearStart="Outubro, 2019"
                    yearEnd="Fevereiro, 2020"
                >
                    Um aplicativo web privado criado para o controle de
                    locações de imóveis com o agendamento, cadastro de
                    clientes e muitas outras funcionalidades.
                </Card>
                <Card
                    title="ufgd2019face.club"
                    isMobile
                    imageSource="/images/print-workshop.png"
                    mobileColor="#3f51b5"
                    yearStart="Maio, 2019"
                    yearEnd="Maio, 2019"
                >
                    Um aplicativo mobile web desenvolvido para um evento da
                    FACE da UFGD com o objetivo  apresentar aos participantes
                    um caso de uso de gameficação.
                </Card>
            </div>
        </>
    )
}