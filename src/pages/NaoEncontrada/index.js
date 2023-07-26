import React from "react"
import styles from "./NaoEncontrada.module.css"

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2> Ops! </h2>
            <p>O conteudo que você procura nçao foi encontrado!</p>
        </section>
    )
}