import styles from './section.module.css';
import React from "react";

interface SectionProps {
    children: React.ReactNode
    id: string
}

export default function Section({children, id}: SectionProps) {
    return (
        <section className={`${styles.section}`} id={id}>
            {children}
        </section>
    )
}
