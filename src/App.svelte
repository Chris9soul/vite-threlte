<script lang="ts">
	import { Canvas } from '@threlte/core'
	import { HTML } from '@threlte/extras'
	import { World, Debug } from '@threlte/rapier'
	import AdvancedScene from './AdvancedScene.svelte'

</script>

<Canvas>
	<World gravity={{ y: 0 }}>
    <AdvancedScene type={'static'}  />
		<HTML slot="fallback" transform>
			<p>
				It seems your browser<br />
				doesn't support WASM.<br />
				I'm sorry.
			</p>
		</HTML>
	</World>
</Canvas>

<style>
	p {
		font-size: 0.75rem;
		line-height: 1rem;
	}
</style>