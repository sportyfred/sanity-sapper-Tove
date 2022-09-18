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
  console.log(JSON.stringify(post,null,4));
</script>


<style>
  
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
    {JSON.stringify(post,null,4)}
<h1>{post.title}</h1>

  <BlockContent blocks={post.body} {serializers} />




