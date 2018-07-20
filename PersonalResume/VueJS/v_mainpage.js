var v_firstpage = new Vue({
    el: '#firstpage',
    data: {
        trigger: true,
        isShown: false
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
            content.style.height = "auto";
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
            trigger.innerHTML = "点此开始<br />&#8681;";
        },
        showRemarks: function () {
            $.getJSON("../Files/remarks.json", function (data) {
                var remarks = data["remarks"];
                var parent = document.getElementById("divRemarks");
                parent.innerHTML = "";
                $.each(remarks, function (remarks, value) {
                    var divRemark = document.createElement("div");
                    var divRremark = document.createElement("div");
                    var divRdate = document.createElement("div");
                    divRemark.className = "remark";
                    divRdate.className = "remark_date";
                    divRremark.className = "remark_remark";
                    divRdate.innerHTML = value.date;
                    divRremark.innerHTML = value.remark;
                    divRemark.appendChild(divRremark);
                    divRemark.appendChild(divRdate);
                    parent.appendChild(divRemark);
                })
            });
            this.isShown = true;
        },
        hideRemarks: function () {
            var parent = document.getElementById("divRemarks");
            parent.innerHTML = "";
            this.isShown = false;
        }
    }
})