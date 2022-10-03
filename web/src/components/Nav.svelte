<script>
	export let segment;
</script>

<style>

</style>


		<li><a on:click={() => {document.getElementById('my-drawer-2').click()}} class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a on:click={() => {document.getElementById('my-drawer-2').click()}} class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a on:click={() => {document.getElementById('my-drawer-2').click()}} rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>works</a></li>
		<li><a on:click={() => {document.getElementById('my-drawer-2').click()}} rel=prefetch class='{segment === "works" ? "selected" : ""}' href='works'>works</a></li>
