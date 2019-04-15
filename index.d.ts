export type FAQItem = {
    title: string;
    content: string;
};

export function parseFAQItem(content: string): FAQItem;

export function listFAQ(key?: string): string[];
