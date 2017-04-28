-- Databasschemat;

CREATE TABLE Category
(
    category_id SERIAL PRIMARY KEY, -- Ifall man vill ändra Category title efterhand;
    name varchar(40) NOT NULL UNIQUE
);

CREATE TABLE Subcategory
(
    subcategory_id SERIAL PRIMARY KEY,
    name varchar(40) NOT NULL UNIQUE,
    parent_category int NOT NULL,

    FOREIGN KEY (parent_category) REFERENCES Category(category_id)
);

CREATE TABLE Article
(
    article_id SERIAL PRIMARY KEY,
    title varchar(40) NOT NULL,
    content TEXT NOT NULL,
    subcategory int NOT NULL,
    created_at TIMESTAMP NOT NULL,

    FOREIGN KEY (subcategory) REFERENCES Subcategory(subcategory_id)
);

CREATE TABLE Author
(
    socialsecuritynumber bigint NOT NULL PRIMARY KEY,
    firstname varchar(30) NOT NULL,
    surname varchar(30) NOT NULL,
    comment text
);

CREATE TABLE Article_author
(
    article_id int,
    socialsecuritynumber bigint,

    PRIMARY KEY (article_id, socialsecuritynumber),

    FOREIGN KEY (article_id) REFERENCES Article(article_id),
    FOREIGN KEY (socialsecuritynumber) REFERENCES Author(socialsecuritynumber)
);

CREATE TABLE Article_comment
(
    article_comment_id SERIAL PRIMARY KEY,
    commenter varchar(40) NOT NULL,
    comment varchar(160) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    article_id int NOT NULL,

    FOREIGN KEY (article_id) REFERENCES Article(article_id)
);

CREATE TABLE Image
(
    image_id SERIAL PRIMARY KEY,
    image_ref varchar NOT NULL,
    subcategory int NOT NULL,
    alt_text varchar(30) NOT NULL,

    FOREIGN KEY (subcategory) REFERENCES Subcategory(subcategory_id)
);

CREATE TABLE Article_image
(
    article_id int NOT NULL,
    image_id int NOT NULL,
    text varchar(60),
    
    PRIMARY KEY (article_id, image_id),
    FOREIGN KEY (article_id) REFERENCES Article(article_id),
    FOREIGN KEY (image_id) REFERENCES Image(image_id)
);
