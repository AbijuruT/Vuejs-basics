const assignmentApp = Vue.createApp({
    data() {
        return {
            name: 'Thor',
            age: 10035,
            imgUrl: 'https://e0.pxfuel.com/wallpapers/660/480/desktop-wallpaper-thor-iphone-thor-ragnarok-thumbnail.jpg',
            inputVal: ''
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5
        },
        generateNumber() {
            const randomNumber = Math.floor(Math.random()*2)
            return randomNumber
        },
        

    }
})

assignmentApp.mount('#assignment')