const app = Vue.createApp({
    data() {
        return {
            allPic: [{url: './images/1.jpg',name:'Firstday, Canada', done: false},
                     {url: './images/2.jpg',name:'Midnight, Australia', done: false},
                     {url: './images/3.jpg',name:'Evening, Newzealand', done: false}],
            showSearch: true,
            searchName: '',
            enterSearchName: '',
            noResult: false,
            expandPhoto: false,
            photoIndex: '',
        }
    },
    methods:{
        showFavIcon(index){
            if(this.resultQuery.length == 2){
                this.allPic[index++];
                this.allPic[index].done = !this.allPic[index].done;          
            }else{
                this.allPic[index].done = !this.allPic[index].done;     
            }
        },
        doSearch(){
            this.enterSearchName = this.searchName;
            if(this.resultQuery.length == 0){
                this.noResult = true
            }else { this.noResult = false; }
        },
        cancel(){
            this.searchName = this.enterSearchName = '';
            this.noResult = false;
            this.showSearch = true;
        },
        expandPic(index){
            if(!this.expandPhoto){
                this.photoIndex = index;
            }
            this.expandPhoto = !this.expandPhoto;
        },
        addSearchNames(name){
            this.searchName = name;
        }
        
    },
    computed:{
        countLike(){
            return this.allPic.filter(s => s.done).length;
        },
        countShow(){
            return this.allPic.length;
        },
        resultQuery() {
            return this.allPic.filter((i) => {
                return i.name.toLowerCase().includes(this.enterSearchName.toLowerCase());
            })        
        }
           
    }
})
