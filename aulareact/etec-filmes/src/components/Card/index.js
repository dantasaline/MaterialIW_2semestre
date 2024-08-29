import styles from "./Card.module.css";

function Card({id}){
    return(
        <section className={styles.card}>
            <a 
            href={`https://youtu.be/fQ-O4p5VOOE?si=${id}`}
            rel="noreferrer noopener"
            target="_blank">
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="Capa" />
            </a>
        </section>
    );
}

export default Card;