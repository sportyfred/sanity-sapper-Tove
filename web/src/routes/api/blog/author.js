import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    // We have access to req.params.slug because the filename has [slug] in it.
   
  

    const query = "*[_type == 'author']{_id, slug, title, image, bio, name, studier, publikationer, utstallningar, stipendier}";
    const author = await client.fetch(query)
    res.end(JSON.stringify({ author }));
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};
