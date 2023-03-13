//export define que a função pode ser importada
export function Mensagem(){
    const textoTitulo = "Motherfucking placeholder text motherfucking";
    const nomeAutor = "Samuel L. Ipsum";
    const linkImagem = "https://www.codigofonte.com.br/wp-content/uploads/2013/08/slipsum.jpg";

    return (
        <section className="mensagem">
            <h2 className="titulo">{textoTitulo}</h2>
            <img src={linkImagem}/>
            <p className="paragrafo">Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
            </p>
            <small>Esta frase foi dita por {nomeAutor}</small>
        </section>
    );
}