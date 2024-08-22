import styles from "./Card.module.css";

function Card(){
    return(
        <section className={styles.card}>
            <a 
            href="https://youtu.be/fQ-O4p5VOOE?si=me8ddhHSfv1k2yrv"
            rel="noreferrer noopener"
            target="_blank">
                <img src="https://i.ytimg.com/vi/wWW8h3Po3h0/mqdefault.jpg" alt="Capa" />
            </a>
        </section>
    );
}

export default Card;