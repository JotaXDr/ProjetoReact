import styles from "./Header.module.css"; // Importe o arquivo de módulo CSS

function Header() {
    return (
        <div className={styles.DivHeader}> {/* Aplicar a classe de estilo */}
            <img src="/1 1.png" alt="" />
            <nav>
                <p>Inicio</p>
                <p>Sobre</p>
                <p>Contato</p>
                <p>Sobre nós</p>
            </nav>
        </div>
    );
}

export default Header;






