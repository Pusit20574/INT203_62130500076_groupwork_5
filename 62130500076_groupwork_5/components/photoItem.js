app.component('photo-item', {
    props: {
        'result-query': Array
    },
    template:
        /*html*/
    `
        <div v-for="(picture,index) in resultQuery" class="mt-6">
            <!-- white border -->
            <div class="flex ml-16 bg-gray-200 hover:shadow" style="width: 29.2rem; height: 9rem;">
                <!-- picture display -->
                <img :src = 'picture.url' @click="showFavIcon(index)" @click="expandPic(picture.url)" class="flex ml-3 mt-2 max-w-20 max-h-32 rounded-lg"></>
                <!-- picture name and heart display -->
                <div class="flex ml-5 mt-14">
                    <p class="font-mono">{{picture.name}}</p>
                    <p v-show="picture.done" class="material-icons ml-2 flex text-red-500">favorite</p>
                </div>
            </div>
        </div>
        
    `,
    methods:{
        showFavIcon(index){
            this.$emit('show-fav-icon', index)            
        },
        expandPic(index){
            this.$emit('expand-pic', index)
        }
    }

})