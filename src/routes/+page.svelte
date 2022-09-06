<script>
	/** @type {import('./$types').PageData} */
	export let data;
  
  </script>
  
  <h1>Todo List</h1>
  <p>Below you will find a list of tasks that are available in our EdgeDB:</p>
  
  <ul>
	  {#if data.todos.length==0}
	  <li><span class="error">No todos found :(</span></li>
	  {:else}
		  {#each data.todos as todo}
			  <li><span class="title">{todo.title}</span></li>
		  {/each}
	  {/if}
  </ul>
  
  <style>
	  li{
		  background-color: #fff;
		  border:1px solid #efefef;
		  margin-bottom:5px;
		  padding:10px;
	  }
  
	  .title{
		  font-size: 22px;
		  font-weight: bold;
	  }
  
	  .error{
		  color:crimson;
	  }
  </style>
  