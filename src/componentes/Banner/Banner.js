import './Banner.css'

function Banner() {
    //JSX - como react le a função e transforma no DOM - parece html mas nao eh
    return(
        <header className="banner">
            <img src="./imagens/banner.png" alt="O banner principal da página dop Organo"/>
        </header>
    )
}

export default Banner;