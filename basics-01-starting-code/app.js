const app = Vue.createApp({
    // Doing this because in modern Js if the value of a property is a function
    // We usually turn that property to a function itself
    // And this data function should always return an obj
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: 'Master Vue and build amazing apps',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumer = Math.random()
            if (randomNumer < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})

app.mount('#user-goal')