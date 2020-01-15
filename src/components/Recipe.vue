<template>
  <div>
    <form>
      <button @click="search()">SEARCH ID</button>
      <router-link :to="{ name: 'Recipe', params: { id: searchId }}" >hoge Link</router-link >
      <p>id: <input type="text" v-model="searchId"></p>
      <p>id: {{ searchId }}</p>
      This is hoge page.   value is {{ $route.params.id }} 
    </form>
    <div class="task-list">
        <span> {{ recipes[$route.params.id].title }}</span>
             <ul>
                <li>{{recipes[$route.params.id].making_time}}</li>
                <li>{{recipes[$route.params.id].serves}}</li>
                <li>{{recipes[$route.params.id].ingredients}}</li>
                <li>{{recipes[$route.params.id].cost}}</li>
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
      recipes : {
        1: {title : 'トマトスープ', making_time: '15分', serves: '5人', ingredients: '玉ねぎ,トマト,スパイス,水', cost: 450, id: 1 },
        2: {title : 'チキンカレー', making_time: '45分', serves: '4人', ingredients: '玉ねぎ,肉,スパイス', cost: 1000, id: 2 },
        3: {title : 'オムライス', making_time: '30分', serves: '5人', ingredients: '玉ねぎ,卵,スパイス,醤油', cost: 700, id: 3 },
      },
      searchId: ""
    }
  },
  methods: {
    search: function(event) {
        
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