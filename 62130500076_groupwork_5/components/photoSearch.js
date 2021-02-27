app.component('photo-search', {
    props: {
        'no-photo': Boolean
    },
    data() {
            tempSearchName: '';
    },
    template:
        /*html*/
    `
    <div class="flex ml-20" v-show = "!showSearch">
        <!-- search input form -->
        <input @input="addSearchName" v-model="tempSearchName" @keyup.enter="$emit('do-search')" type="text" placeholder="Enter name of Photo" class="mt-10 ml-12 bg-purple-white shadow rounded border-0 p-3">
        <!-- cancel button -->
        <button @click = "deleteSearchName; $emit('cancel-button')" class="ml-10 mt-10 text-md bg-white hover:bg-gray-200 text-gray-700 font-mono font-medium py-2 px-4 border border-gray-400 rounded shadow">cancel</button>
        <!-- text No Photos -->
        <p v-show = "noResult" class="ml-20 mt-10 font-mono text-red-400 text-4xl">X No Photos</p>
    </div>
    `,
    methods:{
        deleteSearchName(){
            this.tempSearchName = '';
        },
        addSearchName(){
            this.$emit('add-temp-search',this.tempSearchName);
        }
    }

})