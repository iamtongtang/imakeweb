<template  v-for="result in results">
  <div class="columns medium-3">
	  <div class="card">
	  	<img :src="result.image">
	    <div class="card-divider">
	      {{ result.title }}
	    </div>
	    <div class="card-section">
	      <p>{{ result.abstract }}.</p>
	    </div>
	  </div>
	</div>
</template>

<script>
module.exports = {
	data: function(){
		return{
			results: results
		}
	},
	components:{
		App
	}
}
</script>