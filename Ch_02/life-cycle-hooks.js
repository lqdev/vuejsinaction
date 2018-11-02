var APP_LOG_LIFECYLE_EVENTS = true;

var webstore = new Vue({
    el: '#app',
    data: {
        sitename: 'Vue.js Pet Depot'
    }, 
    beforeCreate: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("beforeCreate");
        }
    },
    creates: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("created");
        }
    },
    beforeMount: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("beforeMount");
        }
    },
    mounted: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("mounted");
        }
    },
    beforeUpdated: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("beforeUpdate");
        }
    },
    updated: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("updated");
        }
    },
    beforeDestroyed: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("beforeDestroy");
        }
    },
    destroyed: function(){
        if(APP_LOG_LIFECYLE_EVENTS) {
            console.log("destroyed");
        }
    }
});