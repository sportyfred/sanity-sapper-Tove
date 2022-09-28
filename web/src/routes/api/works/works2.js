import client from '../../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
  const filter = '*[_type == "post" && categories[0]->title == "Works" && publishedAt < now()]|order(publishedAt desc)';
   
const projection = `
      
{...,  authors[0]{author->{name}}  }      
      
    `;

 */
export async function get (req, res) {
  try {
    const filter = '*[_type == "post" && publishedAt < now()]|order(publishedAt desc)';
   
const projection = `
      
{...,  authors[0]{author->{name}},
categories[]->{title}  }      
      
    `;

    const query = filter + projection;
        const posts = await client.fetch(query);

    res.end(JSON.stringify({ posts }));
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};

