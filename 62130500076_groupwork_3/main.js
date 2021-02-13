const app = {
    data() {
        return {
            // heart: [{heart: './images/heart.png', done:false}],
            allPic: [{url: './images/1.jpg',name:'Firstday, US', done: false},
                     {url: './images/2.jpg',name:'Midnight, Australia', done: false},
                     {url: './images/3.jpg',name:'Evening, Newzealand', done: false}],
            
        }
    },
    methods:{
        showFavIcon(index){
            this.allPic[index].done = !this.allPic[index].done;
        }
    },
    computed:{
        countLike(){
            return this.allPic.filter(s => s.done).length;
        },
        countShow(){
            return this.allPic.length;
        }
    }
}

Vue.createApp(app).mount('#app')
