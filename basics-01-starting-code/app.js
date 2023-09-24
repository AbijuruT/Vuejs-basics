const app = Vue.createApp({
    // Doing this because in modern Js if the value of a prorety is a function
    // We usually turn that property to a function itself
    // And this data function should always return an obj
    data() {
        return {
            
        }
    }
})

app.mount('#user-goal')