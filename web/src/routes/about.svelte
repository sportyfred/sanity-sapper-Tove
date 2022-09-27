<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/author`);
      const { author } = await res.json();
      return { author };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";

  export let author;
</script>

<style>
  
</style>
<svelte:head>
  <title>{author[0].name}</title>
</svelte:head>




<h1>{author[0].name}</h1>

  <BlockContent blocks={author[0].image} {serializers} />
   <BlockContent blocks={author[0].bio} {serializers} />



