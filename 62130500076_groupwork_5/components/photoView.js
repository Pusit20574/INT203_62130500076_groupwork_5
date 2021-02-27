app.component('photo-view', {
    props: ['photo-index'],
    template:
        /*html*/
    `
    <div class="mt-5 ml-20 bg-black w-full h-screen">
        <!-- bg -->
        <div class="h-1/6 flex justify-end">
            <p class="material-icons text-3xl mt-6 mr-10 text-red-500">favorite</p>
            <button @click="$emit('expand-pic')" class="material-icons h-1/2 text-5xl mr-8 mt-2 text-white">close</button>
        </div>
        <!-- display expand photo -->
        <div class="flex justify-center">
            <img class="h-full pb-2 -mt-8" :src="photoIndex">
        </div>
    </div>
    `

})