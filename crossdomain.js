var CrossDomain = function (baseUrl) {

    this.visit = function (args) {
        var oldEle = document.getElementById('cross_domain_transfer');
        oldEle && document.body.removeChild(oldEle);

        var iframe = document.createElement('iframe');
        iframe.style.width = 0;
        iframe.style.height = 0;
        iframe.style.border = 0;
        iframe.src = baseUrl + '?args=' + encodeURIComponent(args);
        document.body.appendChild(iframe);
    }

}