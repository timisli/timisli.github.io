const ap = new APlayer({
    container: document.getElementById('aplayer'),
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 100,
    autoplay: true,
    audio: [
        {
            name: '不分手的恋爱',
            artist: '1个球',
            url: "/music/bgm.flac",
            cover: '/img/1.gif',
        }
    ]
});

