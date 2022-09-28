<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/${params.slug}`);
      const { post } = await res.json();
      return { post };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../../components/serializers";

  export let post;
 
</script>


<style>
  
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
  <article class="prose lg:prose-xl">  
<h1>{post.title}</h1>

  <BlockContent blocks={post.body} {serializers} />


</article>

