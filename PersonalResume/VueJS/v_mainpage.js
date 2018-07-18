var vm = new Vue({
    el: '#firstpage',
    data: {
        trigger: true
    },
    methods: {
        switchContent: function (e) {
            if (this.trigger) {
                this.showMoreInfomation();
            }
            else {
                this.hideMoreInformation();
            }
            this.trigger = !this.trigger;
        },
        showMoreInfomation: function (e) {
            var titleimg = document.getElementById("fp_titleimg");
            var content = document.getElementById("fp_content");
            var title1 = document.getElementById("title1");
            var title2 = document.getElementById("title2");
            var trigger = document.getElementById("trigger");
            titleimg.style.backgroundImage = "linear-gradient(rgba(235,235,235,0),rgba(235,235,235,1)),url(../Images/bgzp.jpg)";
            content.style.height = "1000px";
            title1.style.opacity = "0";
            title2.style.opacity = "1";
            trigger.innerHTML = "&#8679;<br />点此收缩";
        },
        hideMoreInformation: function (e) {
            var titleimg = document.getElementById("fp_titleimg");
            var content = document.getElementById("fp_content");
            var title1 = document.getElementById("title1");
            var title2 = document.getElementById("title2");
            var trigger = document.getElementById("trigger");
            titleimg.style.backgroundImage = "url(../Images/bgzp.jpg)";
            content.style.height = "0px";
            title1.style.opacity = "1";
            title2.style.opacity = "0";
            trigger.innerHTML ="点此开始<br />&#8681;";
        }
    }
})