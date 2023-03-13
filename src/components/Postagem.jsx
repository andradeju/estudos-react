export function Postagem(){
    const textTitulo = "Criatividade";
    const linkImg = "https://blog.portalpos.com.br/app/uploads/2021/06/criatividade.jpg"

    return (
        <section className="container">
            <h2 className="titulo">{textTitulo}</h2>
            <div className="conteudo">
            <img className="img-post" src={linkImg}/>
            <p className="postagem">
            A criatividade é fundamental para o avanço da tecnologia. Ela permite que os profissionais de tecnologia encontrem soluções inovadoras para os desafios enfrentados no desenvolvimento de novas ferramentas e sistemas. Além disso, a criatividade é uma das principais forças motrizes por trás do design de produtos tecnológicos, ajudando a torná-los mais atraentes e intuitivos para os usuários.
            </p>
            </div>
        </section>
    );

}

