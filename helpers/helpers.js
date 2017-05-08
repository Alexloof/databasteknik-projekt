const resultCleaner = function (apiResult) {
    const cleanResult = [];
    let currentArticle = apiResult[0].article_id;

    let insertArticle = {
        article_id: currentArticle,
        title: "",
        content: "",
        created_at: "",
        subcategory: "",
        authors: [],
        images: []
    }
    apiResult.map((row, index) => {
        if (row.article_id === currentArticle) {
            insertArticle.title = row.title;
            insertArticle.content = row.content;
            insertArticle.created_at = row.created_at;
            insertArticle.subcategory = row.subcategory;

            if (insertArticle.authors.length === 0) {
                insertArticle
                    .authors
                    .push({firstname: row.firstname, surname: row.surname});
            } else {
                if (!insertArticle.authors.find((author) => {
                    return author.firstname === row.firstname && author.surname == row.surname
                })) {
                    insertArticle
                        .authors
                        .push({firstname: row.firstname, surname: row.surname});
                }
            }

            if (insertArticle.images.length === 0) {
                insertArticle
                    .images
                    .push({image_ref: row.image_ref, alt_text: row.alt_text, text: row.text});
            } else {
                if (!insertArticle.images.find((images) => {
                    return images.image_ref === row.image_ref && images.alt_text == row.alt_text
                })) {
                    insertArticle
                        .images
                        .push({image_ref: row.image_ref, alt_text: row.alt_text, text: row.text});
                }
            }

        } else {
            if (!cleanResult.includes(insertArticle)) {
                cleanResult.push(insertArticle);
            }
            currentArticle = row.article_id;
            insertArticle = {
                article_id: row.article_id
            }
            insertArticle.title = row.title;
            insertArticle.content = row.content;
            insertArticle.created_at = row.created_at;
            insertArticle.subcategory = row.subcategory;
            insertArticle.authors = [];
            insertArticle.images = [];

            if (insertArticle.authors.length === 0) {
                insertArticle
                    .authors
                    .push({firstname: row.firstname, surname: row.surname});
            } else {
                if (!insertArticle.authors.find((author) => {
                    return author.firstname === row.firstname && author.surname == row.surname
                })) {
                    insertArticle
                        .authors
                        .push({firstname: row.firstname, surname: row.surname});
                }
            }

            if (insertArticle.images.length === 0) {
                insertArticle
                    .images
                    .push({image_ref: row.image_ref, alt_text: row.alt_text, text: row.text});
            } else {
                if (!insertArticle.images.find((images) => {
                    return images.image_ref === row.image_ref && images.alt_text == row.alt_text
                })) {
                    insertArticle
                        .images
                        .push({image_ref: row.image_ref, alt_text: row.alt_text, text: row.text});
                }
            }
        }
    });
    //sätta in sista artikeln
    if (!cleanResult.includes(insertArticle)) {
        cleanResult.push(insertArticle);
    };

    return cleanResult;
}

module.exports = resultCleaner;
