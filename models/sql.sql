SELECT art.title, art.content, art.subcategory, art.created_at, img1.image_ref 
FROM article AS art INNER JOIN Article_image AS artimg1 ON art.article_id = artimg1.article_id 
INNER JOIN Image AS img1 ON img1.image_id = artimg1.image_id 
GROUP BY art.article_id, img1.image_ref 
ORDER BY art.created_at DESC



SELECT art.title, art.content, art.subcategory, art.created_at, img1.image_ref, auth.firstname, auth.surname
FROM article AS art 
INNER JOIN Article_image AS artimg1 ON art.article_id = artimg1.article_id 
INNER JOIN Image AS img1 ON img1.image_id = artimg1.image_id
INNER JOIN Article_author AS artauth on art.article_id = artauth.article_id
INNER JOIN Author as auth on artauth.socialsecuritynumber = auth.socialsecuritynumber 
GROUP BY art.article_id, img1.image_ref, artauth.socialsecuritynumber, auth.firstname, auth.surname
ORDER BY art.created_at DESC
