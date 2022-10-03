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

<table class="table table-normal w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>Studier</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
      <tbody>
 {#each author[0].studier.rows as authstud}
   
      <!-- row 2 -->
      <tr>
       
{#each authstud.cells as authcell}
       
        <td>{authcell}</td>
       {/each}
      </tr>
     
{/each}
    </tbody>

     <thead>
      <tr>
        <th>Utställningar</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
      <tbody>
 {#each author[0].utstallningar.rows as authuts}
   
      <!-- row 2 -->
      <tr>
       
{#each authuts.cells as authutcell}
       
        <td>{authutcell}</td>
       {/each}
      </tr>
     
{/each}
    </tbody>

     <thead>
      <tr>
        <th>Publikationer</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
      <tbody>
 {#each author[0].publikationer.rows as authpub}
   
      <!-- row 2 -->
      <tr>
       
{#each authpub.cells as authpubcell}
       
        <td>{authpubcell}</td>
       {/each}
      </tr>
     
{/each}
    </tbody>

     <thead>
      <tr>
        <th>Stipendier</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
      <tbody>
 {#each author[0].stipendier.rows as authstip}
   
      <!-- row 2 -->
      <tr>
       
{#each authstip.cells as authstipcell}
       
        <td>{authstipcell}</td>
       {/each}
      </tr>
     
{/each}
    </tbody>
  </table>









   


