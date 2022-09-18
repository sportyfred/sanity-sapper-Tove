<script context="module">
  export async function preload({ params }) {
    try {
    
      const res = await this.fetch('api/works/works2');
      const { posts } = await res.json()

      return { posts };

    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }


  
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Works</title>
</svelte:head>
<div id="result"></div>
<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li>{post.title} ({formatDate(post.publishedAt)}) 
<br>
{post.authors[0].author.name}
<br>
{#each post.categories as category}
<li>{category.title}</li>{/each}
<br>

     </li>
  {/each}
</ul>
