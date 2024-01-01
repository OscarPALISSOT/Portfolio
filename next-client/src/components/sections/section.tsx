import styles from './Section.module.css';
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
