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

function parseFAQItem(baseContent) {
    if (Buffer.isBuffer(baseContent)) {
        baseContent = baseContent.toString();
    }

    const re = /^#\s?(.*)/m;
    const title = re.exec(baseContent)[1] || undefined;

    let lines = baseContent.split('\n');
    // remove one line, starting at the first position
    lines.splice(0, 1);
    // join the array back into a single string
    let content = lines.join('\n');

    return {
        title: title,
        content: content.trim(),
    };
}

module.exports = {
    listFAQ: listFAQ,
    parseFAQItem: parseFAQItem
};
