import { ReactNode } from "react";
import AccordionItem from "./accordion-item";

type AccordionItem = {
    title: string;
    content: ReactNode;
}

type AccordionProps = {
  items: AccordionItem[];
  wrapperClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
  itemClassName?: string;
};

export default function Accordion ({items, buttonClassName, contentClassName, itemClassName, wrapperClassName}:AccordionProps) {
    return(
        <div className={wrapperClassName}>
        {items.map(item => (
            <AccordionItem
                key={item.title}
                title={item.title}
                content={item.content}
                buttonClassName={buttonClassName}
                className={itemClassName}
                contentClassName={contentClassName}
            />
        ))}
        </div>
    )
}