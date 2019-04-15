function loadFAQFiles(dir) {
    let stat = fs.lstatSync(dir);
    if (!stat.isDirectory()) {
        return [];
    } else {
        const files = fs.readdirSync(dir);
        let f, l = files.length;

        const response = [];

        for (let i = 0; i < l; i++) {
            f = path.join(path, files[i]);
            const c = fs.readFileSync(f, 'utf-8');
            response.push(c);
        }

        return response;
    }
}

function listFAQ(key) {
    return loadFAQFiles(key ? './' + key : './faq');
}

function parseFAQItem(content) {
    return {
        title: "How to Mine wallet",
        content: content || "How to be **cooler**"
    };
}

module.exports = {
    listFAQ: listFAQ,
    parceFAQItem: parceFAQItem
};
