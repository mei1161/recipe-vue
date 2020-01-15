<template>
  <div>
    <form>
      <button @click="search()">SEARCH ID</button>
      <p>id: <input type="text" v-model="searchId"></p>
      <p>id: {{ searchId }}</p>
    </form>
    <div class="task-list">
      <label class="task-list__item"
             v-for="recipe in recipes">
        <span> {{ recipe.title }}</span>
             <ul>
                <li></li>
                <li>{{recipe.making_time}}</li>
                <li>{{recipe.serves}}</li>
                <li>{{recipe.ingredients}}</li>
                <li>{{recipe.cost}}</li>
             </ul>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recipes : [
        {title : 'トマトスープ', making_time: '15分', serves: '5人', ingredients: '玉ねぎ,トマト,スパイス,水', cost: 450, id: 1 },
        {title : 'チキンカレー', making_time: '45分', serves: '4人', ingredients: '玉ねぎ,肉,スパイス', cost: 1000, id: 2 },
        {title : 'オムライス', making_time: '30分', serves: '5人', ingredients: '玉ねぎ,卵,スパイス,醤油', cost: 700, id: 3 },
      ],
      searchId: ""
    }
  },
  methods: {
    search: function(event) {
      let id = searchId;
      console.log(id);
      for(let i = this.recipes.length - 1; i >= 0; i--){
        if(this.recipes[i].id == id){
          this.recipes.splice(i,1);
        }
      }
    },
    removeTodo: function (event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>