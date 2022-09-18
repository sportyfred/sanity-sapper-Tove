<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	
</style>

<div class="row">

<div class="three columns"><Nav {segment}/>
</div>

<div class="nine columns">
<main>
	<slot></slot>
</main>
</div>
</div>