const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress =$('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const app={
    currentIndex : 0,
    isPlaying : true,
    isRandom : false,
    isRepeat : false,
    songs:[
        {
            name: "Unstoppable",
            singer: "Sia",
            path : "https://seaf20.ytop1.com/files/2021/5/31/sia_unstoppable_lyrics_8352051114313689087.mp3",
            image :"https://i.ytimg.com/vi/RJ2m3jRKbzI/maxresdefault.jpg"
        },
        {
            name: "Nàng thơ",
            singer: "Hoàng Dũng",
            path: "https://seaf20.ytop1.com/files/2021/5/31/nang_tho_hoang_dung_official_mv_8803641520877252052.mp3",
            image:"https://i.scdn.co/image/ab67616d0000b273248295fbbb32d0e4d71cc7ea"
        },
        {
            name: "Attention",
            singer: "Charlie Puth ",
            path:"https://f.ytop1.com/files/2019/7/1/charlie_puth_attention_lyrics_958249.mp3",
            image:"http://aroma.vn/wp-content/uploads/2018/09/944cba06-hoc-tieng-anh-qua-bai-hat-attention.jpg"
        },
        {
            name: "Tương tư",
            singer: "Wn Nâu",
            path: "https://seaf20.ytop1.com/files/2021/11/30/tuong_3_1_w_n_x_titie_official_mv_ft_nau_4451760143208380486.mp3",
            image: "https://sachhay24h.com/uploads/images/bai-tho-tuong-tu-nguyen-binh-1.jpg"
        },
        {
            name: "Monster",
            singer: "Kaite Shy",
            path:"https://f.ytop1.com/files/2020/5/18/katie_sky_monsters_lyrics_1654470.mp3",
            image: "https://i.ytimg.com/vi/tqZtloacuGM/maxresdefault.jpg"
        },
        {
            name: "Muộn rồi mà sao còn",
            singer: "Sơn Tùng - MTP",
            path: "https://f.ytop1.com/files/2021/4/29/son_tung_m_tp_muon_roi_ma_sao_con_official_music_video_-2939822801412051375.mp3",
            image:"https://i.scdn.co/image/ab67616d0000b27329f906fe7a60df7777b02ee1"
        },
        {
            name: "Chiều hôm ấy",
            singer: "Jaykii",
            path: "https://seaf20.ytop1.com/files/2021/5/31/jaykii_chieu_hom_ay_official_mv_-5601857294642660506.mp3",
            image:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/0/d/0d1fe0b30a319e56dce058a2b30f37d7_1503588020.jpg"
        },
        {
            name: "Lạ Lùng",
            singer: "Vũ",
            path: "https://seaf20.ytop1.com/files/2021/5/31/la_lung_vu_original_-4703196200791998893.mp3",
            image:"https://avatar-ex-swe.nixcdn.com/song/2018/01/26/1/8/9/0/1516930244148_640.jpg"
        },{
            name: "Havana",
            singer: "Camila Cabello",
            path: "https://seaf20.ytop1.com/files/2021/5/31/camila_cabello_havana_lyrics_ft_young_thug_2118471446965791001.mp3",
            image: "https://upload.wikimedia.org/wikipedia/vi/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png"
        },
        {
            name: "Without You",
            singer: "Halsey",
            path: "https://seaf20.ytop1.com/files/2021/5/31/halsey_without_me_lyrics_2141011501604137213.mp30",
            image:"https://eng4viet.com/wp-content/uploads/2020/11/bai-hat-without-you.jpg"
        },
        {
            name: "Despacito",
            singer: "Luis Fonsi",
            path: "https://seaf20.ytop1.com/files/2021/5/31/luis_fonsi_despacito_ft_daddy_yankee_-2228256003390900800.mp3",
            image:"https://cdn.baogiaothong.vn/files/minh.nguyen/2017/08/10/142011-despacito.JPG"
        },
        {
            name: "Thằng điên",
            singer: "Jutatee x Phương Ly",
            path: "https://seaf20.ytop1.com/files/2021/6/1/thang_dien_justatee_x_phuong_ly_official_mv_-5252447269763228750.mp3",
            image:"https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg"
        }
    ],
    
    //Duyệt bài hát
    render : function(){
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index == this.currentIndex ?'active' : ''}" data-index = "${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer} </p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        })
        playlist.innerHTML = htmls.join('')
    },
    defineProperties : function(){
        Object.defineProperty(this,'currentSong',{
            get :function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    loadCurrentSong : function(){
        heading.textContent = app.currentSong.name
        cdThumb.style.backgroundImage = `url('${app.currentSong.image}')`
        audio.src = app.currentSong.path
    },
    nextSong : function(){
        app.currentIndex++
        if (app.currentIndex >= app.songs.length){
            app.currentIndex = 0
        }
        app.loadCurrentSong()
    },
    prevSong : function(){
        app.currentIndex--
        if (app.currentIndex <= 0){
            app.currentIndex = app.songs.length-1
        }
        app.loadCurrentSong()
    },
    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * app.songs.length)
        } while(newIndex == app.currentIndex)
        app.currentIndex = newIndex
        app.loadCurrentSong()
    },
    scrollSongActice: function(){
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior : "smooth",
                block  : 'nearest'
            })
        },300)
    },
    handleEvent : function(){
        _this = this
        const cdWidth = cd.offsetWidth
        const cdThumbAnimate = cdThumb.animate([
            {transform : 'rotate(360deg)'}
        ],{
            duration : 10000, //10 second
            iterations : Infinity
        })
        cdThumbAnimate.pause()
        //Xử lý phóng to thu nhỏ heading
        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth =cdWidth - scrollTop
            cd.style.width =newCdWidth > 0 ? newCdWidth + 'px' : 0 
            cd.style.opacity = newCdWidth / cdWidth
        }


        //Xử lý play / pause bài hát
        playBtn.addEventListener('click',()=>{
            if (_this.isPlaying){
                audio.play()
            }else{
                audio.pause()
            }
        })
        
        audio.addEventListener('play', ()=>{
            this.isPlaying = false
            player.classList.add('playing')
            cdThumbAnimate.play()
        })
        audio.addEventListener('pause',()=>{
            this.isPlaying = true
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        })

        //Xử lý thời gian chạy bài hát
        audio.addEventListener('timeupdate', ()=>{
            if (audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
                progress.value = progressPercent
            }
        })

        //Xử lí tua bài hát
        progress.addEventListener('change', (element) =>{
            const seekTime = audio.duration / 100 * element.target.value
            audio.currentTime = seekTime
        })

        //Xử lí next / prev bài hát
        nextBtn.addEventListener('click',()=>{
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollSongActice()
        })
        prevBtn.addEventListener('click', ()=>{
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollSongActice()
        })

        //Random song
        randomBtn.addEventListener('click', ()=>{
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        })

        //Xử lý next khi ended audio
        audio.addEventListener('ended', ()=>{
            if(_this.isRepeat){
                audio.play()
            }else{
                _this.nextSong()
                audio.play()
                //nextBtn.click()
            }
        })

        //Xử lý repeat khi ended audio
        repeatBtn.addEventListener('click',()=>{
            randomBtn.classList.remove('active')
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        })
        playlist.addEventListener('click',(element)=>{
            const songNode = element.target.closest('.song:not(.active)')
            if (songNode || element.target.closest('.option')){
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
            }
        })
    },
    
    start : function(){
        this.defineProperties()
        this.loadCurrentSong()
        this.handleEvent() 
        this.render()
    }
}

app.start()