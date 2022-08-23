import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    // We have access to req.params.slug because the filename has [slug] in it.
   
  

    const query = "*[_type == 'frontpage']{_id, slug, title, image, bio, name}";
    const frontpage = await client.fetch(query)
    res.end(JSON.stringify({ frontpage }));
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};
