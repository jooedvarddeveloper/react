// Props
// típusok

import { PropsWithChildren } from "react";
// import './Paragraph.css';
import styles from './Paragraph.module.css';

interface ParagraphProps {
    title: string,
    description: string,
}

type ParagraphWithChildren = PropsWithChildren<ParagraphProps>;


function Paragraph({ title, description, children }: ParagraphWithChildren) {
    return <div>
        <h1 className={styles.focim}>{title}</h1>
        {children}
        <p>{description}</p>
    </div>
}

export default Paragraph;