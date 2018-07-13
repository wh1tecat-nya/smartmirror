<template>
	<div id="dashboard">
		<Clock></Clock>
	</div>
</template>

<script>
import Clock from "./modules/Clock.vue"
export default {
	name: "DashBoard",
	components: {
		Clock
	}
}
</script>