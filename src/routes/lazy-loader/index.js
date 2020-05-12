import React, {useState, useEffect, useRef} from 'react';

import './index.css';
const imgUrls = [
    'http://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589876494&t=44422161b98d1bb4bd17515e590783f4',
    'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589881745&t=d81226b2f0b1d11ac1da782c3ae6b106',
    'http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589881745&t=8a90330058c97a9ffa39b2a567498148',
    'http://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589881745&t=1120f18f5faf969ef922775a0adb6569',
    'http://t9.baidu.com/it/u=86853839,3576305254&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589881745&t=eb0ef971a5800e95f8b4723cd344f617',
    'http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589881745&t=210fdc22a93fe32de80f0192102fe98f'
];

export default React.memo(props => {
    const imgRef = useRef();

    useEffect(() => {
        check();
        window.addEventListener('scroll', e => {
            check();
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, [window]);

    // 判断并加载图片
    const check = () => {
        const imgEls = imgRef.current.children;
        for(let i = 0; i < imgEls.length; i++) {
            if (inSight(imgEls[i])){
                loadImg(imgEls[i]);
            }
        }
    };

    // 加载图片
    const loadImg = img => {
        if (!img.src) {
            img.src = img.dataset.src;
        }
    };

    // 判断是否在视口区域内
    const inSight = el => {
        const top = el.getBoundingClientRect().top;
        const clientHeight = window.innerHeight;
        return top <= clientHeight;
    };

    return (<div ref={imgRef}>
        {
            imgUrls.map(url =><img data-src={url} alt=""/>)
        }
    </div>);
});