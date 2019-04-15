type FAQItem = {
    title: string;
    content: string;
};

interface PlarkFAQ {
    listFAQ(key?: string): string[];

    parseFAQItem(content: string): FAQItem;
}

declare const PlarkFAQ: PlarkFAQ;

export default PlarkFAQ;
