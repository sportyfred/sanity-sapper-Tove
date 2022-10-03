<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

  let checked = '';

function handleClick() {
    (checked == 'checked') ? checked = '': checked = 'checked';
}
</script>

<style>
	
</style>


<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={checked} />
   <div class="flex flex-col drawer-content">
      <div class="lg:hidden navbar w-full">  
    <label for="my-drawer-2" class="drawer-button"><iconify-icon width="48" icon="typcn:waves"></iconify-icon>

        </label>
      </div>
      <div class="p-4 overflow-x-auto"><article class="prose max-w-none">
     

<article class="prose lg:prose-xl">
  <slot></slot></article>

      </div>
    </div> 
    <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     <Nav {segment}/>
    </ul>
  
    </div>
</div>
