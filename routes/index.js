const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

const connectionString = 'postgres://ag7949:6n9id9en@pgserver.mah.se:5432/ag7949';
//const connectionString = 'postgres://postgres@localhost:5432/dbprojekt';


// stöd funktioner (refactor bort till annan fil sen kanske)

const getNewTimestamp = () => new Date().toJSON().slice(0,10) + " " + new Date(new Date()).toString().split(' ')[4];

// Server start message
console.log("Server is up on 'localhost:3000'");

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('../public/index.html')
});

// GET ROUTES BELOW :)
// GET CATEGORIES
router.get('/api/getcategories', (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM Category ORDER BY name ASC', (err, result) => {

            if (err) {
                done();
                return res.status(500).json({success: false, data: err});
            }

            done();
            return res.json({result});
        })
    })
});

// GET SUBCATEGORIES
router.get('/api/getsubcategories', (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM Subcategory ORDER BY name ASC', (err, result) => {

            if (err) {
                done();
                return res.status(500).json({success: false, data: err});
            }

            done();
            return res.json({result});
        })
    })
});

// GET AUTHORS
router.get('/api/getauthors', (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM Author ORDER BY firstname ASC', (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }

            done();
            return res.json({result});
        })
    })
});

// GET IMAGES
router.get('/api/getimages', (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM Image ORDER BY subcategory ASC', (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }

            done();
            return res.json({result});
        })
    })
});

router.get('/api/getarticles', (req, res, next) => {
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('SELECT * FROM Article ORDER BY created_at ASC', (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }

            done();
            return res.json({result});
        })
    })
});




// DELETE ROUTES BELOW! :)
router.post('/api/deletecategory', (req, res, next) => {
    const category_id = req.body.category_id;
    pg.connect(connectionString, (err, client, done) => {
        // Error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM Category WHERE category_id = ($1)', [category_id], (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err}); 
            }
            done();
            return res.json({'message': 'success!'});
        })
    })
});

router.post('/api/deletesubcategory', (req, res, next) => {
    const subcategory_id = req.body.subcategory_id;
    pg.connect(connectionString, (err, client, done) => {
        // Error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM Subcategory WHERE subcategory_id = ($1)', [subcategory_id], (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err}); 
            }
            done();
            return res.json({'message': 'success!'});
        })
    })
});

router.post('/api/deleteauthor', (req, res, next) => {
    const socialsecuritynumber = req.body.socialsecuritynumber;
    pg.connect(connectionString, (err, client, done) => {
        // Error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM Author WHERE socialsecuritynumber = ($1)', [socialsecuritynumber], (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err}); 
            }
            done();
            return res.json({'message': 'success!'});
        })
    })
});

router.post('/api/deleteimage', (req, res, next) => {
    const imageId = req.body.image_id;
    pg.connect(connectionString, (err, client, done) => {
        // Error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM Image WHERE image_id = ($1)', [imageId], (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err}); 
            }
            done();
            return res.json({'message': 'success!'});
        })
    })
});

router.post('/api/deletearticle', (req, res, next) => {
    const article_id = req.body.article_id;
    pg.connect(connectionString, (err, client, done) => {
        // Error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        client.query('DELETE FROM Article WHERE article_id = ($1)', [article_id], (err, result) => {

            if (err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err}); 
            }
            done();
            return res.json({'message': 'success!'});
        })
    })
});

// POST ROUTES BELOW! :)
/*  
skapa ny CATEGORY
skicka in namn på ny kategori - kategorinamn är unika
så man kan inte skapa dubbletter
{
    "category":"Ny Kategori"
}
*/ 
router.post('/api/createcategory', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        
        // sätta in Category i postgres
        client.query('INSERT INTO Category(name) values($1)', [data.category], function(err, result) {

            if (err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
skapa ny SUBCATEGORY
skicka in namn på ny subkat samt category_id för huvudkategorin
{
    "subcategory":"Ny subkategori",
	"parent_category": 7
} 
*/
router.post('/api/createsubcategory', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        
        // sätta in Category i postgres
        client.query('INSERT INTO Subcategory(name, parent_category) values($1, $2)', 
            [data.subcategory, data.parent_category], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
skapa ny ARTIKEL
skicka in namn, title, content för ny Artikel 
samt subcategory_id från existernade subkategori
{
    "title": "Ny Artikel Titel",
    "content": "Här är artikelns text",
    "subcategory": 1 (ett int för subkategori id)
} 
*/
router.post('/api/createarticle', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            console.log("error from pg.connect connectionstring");
            return res.status(500).json({success: false, data: err});
        }
        // skapa timestamp
        const newTimestamp = getNewTimestamp();
        // sätta in Category i postgres
        client.query('INSERT INTO Article(title, content, subcategory, created_at) values($1, $2, $3, $4)', 
            [data.title, data.content, data.subcategory, newTimestamp], function(err, result) {

            if(err) {
                done();
                console.log("error from if err after client.query");
                return  res.status(500).json({success: false, data: err});
            }
        });
        client.query('SELECT article_id from Article WHERE title = $1 AND content = $2 AND subcategory = $3 AND created_at = $4',
            [data.title, data.content, data.subcategory, newTimestamp], function(err, result) {
            
            if(err) {
                done();
                console.log("error from if err after client.query");
                return  res.status(500).json({success: false, data: err});
            }
            done()
            return res.json({result});       
        });
    });
});

/*  
lägg in ny AUTHOR
skicka in socialsecuritynumber, firstname, surname
valfritt att skicka in comment: för ny Author
{
    "socialsecuritynumber": 198408071234,
    "firstname": "Förnamnet",
    "surname": "Efternamnet",
    "comment": "en sträng för kommentar om skribenten (valfri)"
} 
*/
router.post('/api/createauthor', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        
        // sätta in Category i postgres
        client.query('INSERT INTO Author(socialsecuritynumber, firstname, surname, comment) values($1, $2, $3, $4)', 
            [data.socialsecuritynumber, data.firstname, data.surname, data.comment], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
länka AUTHOR till ARTICLE
skicka in socialsecuritynumber och article_id
{
    "article_id": 1 (int för article_id),
    "socialsecuritynumber": 198408071234 (int)
} 
*/
router.post('/api/createarticleauthor', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        
        // sätta in Category i postgres
        client.query('INSERT INTO Article_author(article_id, socialsecuritynumber) values($1, $2)', 
            [data.article_id, data.socialsecuritynumber], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
skapa ARTICLE_COMMENT
skicka in "commenter", comment, created_at, article_id
{
    "commenter": "Grodan Boll",
    "comment": "Tjena! Vilken trevlig artikel du skrivit Kalle, kul att du nämner lilla mig!",
    "article_id": 1 (int för article_id)
} 
*/
router.post('/api/createarticlecomment', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        // skapa timestamp
        const newTimestamp = getNewTimestamp();

        // sätta in Category i postgres
        client.query('INSERT INTO Article_comment(commenter, comment, created_at, article_id) values($1, $2, $3, $4)', 
            [data.commenter, data.comment, newTimestamp, data.article_id], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
skapa IMAGE
skicka in image_ref, subcategory (id), alt_text
{
    "image_ref": "http://bildurl.något",
    "subcategory": 6,
    "alt_text": "En bild på framtiden"
} 
*/
router.post('/api/createimage', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // sätta in Category i postgres
        client.query('INSERT INTO Image(image_ref, subcategory, alt_text) values($1, $2, $3)', 
            [data.image_ref, data.subcategory, data.alt_text], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});

/*  
skapa länk mellan IMAGE och ARTICLE (ARTICLE_IMAGE)
skicka in article_id, image_id, text
{
    "article_id": 6,
    "image_id": 2,
    "text": "En bild på fantastisk teknologi"
} 
*/
router.post('/api/createarticleimage', (req, res, next) => {
    const data = req.body;
    pg.connect(connectionString, (err, client, done) => {
        // error handler
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // sätta in Category i postgres
        client.query('INSERT INTO Article_image(article_id, image_id, text) values($1, $2, $3)', 
            [data.article_id, data.image_id, data.text], function(err, result) {

            if(err) {
                done();
                return  res.status(500).json({success: false, data: err});
            }
            done();
            return res.json({'message': 'success!'});
        });
    });
});





module.exports = router;
