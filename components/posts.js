export default () => (
    <div className="last-posts">
        <div className="post">
            <div className="post-date">Maio 7, 2020</div>
            <div className="post-title">
            <a className="post-link" href="#">Impedindo que a tela desligue com JavaScript</a>
            </div>
        </div>
        <div className="post">
            <div className="post-date">Jan 19, 2019</div>
            <div className="post-title">
            <a className="post-link" href="#">Um pouco sobre CSS Grid Layout</a>
            </div>
        </div>
        <div className="post">
            <div className="post-date">Dez 23, 2018</div>
            <div className="post-title">
            <a className="post-link" href="#">Largura e altura exatas no CSS</a>
            </div>
        </div>
        <div className="post">
            <div className="post-date">Dez 17, 2018</div>
            <div className="post-title">
            <a className="post-link" href="#">Arredondando números com JavaScript</a>
            </div>
        </div>
        <div className="post">
            <div className="post-date">Dez 16, 2018</div>
            <div className="post-title">
            <a className="post-link" href="#">Números grandes em JavaScript com BigInt</a>
            </div>
        </div>
        <style jsx>{`
            .post {
                display: flex;
                margin-bottom: 5px;
            }
            .post-date {
                width: 130px;
                color: #666;
            }
            .post-title {
                flex: 1;
            }
            .post-link {
                color: var(--link-color);
                padding: 0 5px;
                transition: linear .05s;
                text-decoration: none;
            }
            .post-link:hover {
                background-color: #eee;
            }
            .post-link:active {
                background-color: #ddd;
            }
        `}</style>
    </div>
)