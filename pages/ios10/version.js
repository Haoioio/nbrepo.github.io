if(
    !/\b10_\S+ like Mac OS X/.test(navigator.userAgent)
    //&& !/\b11_\S+ like Mac OS X/.test(navigator.userAgent)
)
{
    // #i_can_haz_buttloop
    (window.crypto.subtle || window.crypto.webkitSubtle).digest(
        {'name':'SHA-1'},
        str2ab(window.location.hash)
    ).then(function(x) {
        if(hexlify(new Uint8Array(x)) != '9e04130fa02fc3c416f28ba556f0165da4d93054')
            throw null;
    }).catch(function(){
        document.title = 'iOS10在线越狱';
        var body = document.body;
        while(body.firstChild)
        {
            body.removeChild(body.firstChild);
        }
        var center = document.createElement('div');
        center.className = 'center';
        center.appendChild(document.createElement('h1')).textContent = 'Hello from the NSA!';
        center.appendChild(document.createElement('h2')).textContent = "很不幸，这款越狱软件仅支持iOS10系统。您当前的系统版本不符，请勿尝试安装。千万不要这么做。这会导致设备故障。绝非危言耸听。就当从未听闻此事。";
        body.appendChild(center);
        body.className = 'incompatible';

        window.ontouchmove  = undefined;
        window.ontouchend   = undefined;
        window.onmousemove  = undefined;
        window.onmouseup    = undefined;
        window.ontouchstart = function(e)
        {
            e.preventDefault();
            return false;
        };
    });
}