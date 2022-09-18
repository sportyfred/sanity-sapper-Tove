<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
      const res = await this.fetch(`api/blog/frontpage`);
      const { frontpage } = await res.json();
      return { frontpage };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>
<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";

  export let frontpage;
</script>
<style>
	
</style>

<svelte:head>
	<title>{frontpage[0].name}</title>
</svelte:head>

<h1>{frontpage[0].name}</h1>


  <BlockContent blocks={frontpage[0].image} {serializers} />
   <BlockContent blocks={frontpage[0].bio} {serializers} />
