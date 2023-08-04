// 同查找 _U 一样, 查找 KievRPSSecAuth、_RwBf 的值并替换下方的xxx
const _U = '1ZfK8vJsU5qHc2zwnM-jIAU6qvoZBrN2b11IV8LwKhBkZ-BljIcBwwCE4pnt20mFilvYcTuyH8rTgH2JFjH_eS3so5aqMydcZMgkRdG_RqWJajkvXh8fO-Da0HkFMdjqNZxXdMrELsX0TFDDdRwiqxEwakXZ4Bo53e6A8xRO-UPFwAZ7lQzd8V7Rq-O3hIiVQGCs5baz43216j800Or1_7dLgYufXaZW4uJfs8BmZZB0'
const KievRPSSecAuth = 'FAB6BBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACAsBugOpSXiZOASkQHTcLHyeW0ZxvH1NnwGW6zJXL9iwwictqHlDw5bdrhqEsUvNQRuaf5rF6C2O7wLF3//5su786zaCZvr00/KZVPfZcw6vLiKvdNLms9geoDKHQNyOfOgvbS3hjpPP4PpUo4zGzp+v0Gi98l0OT98hrjfX7EMC06PSkRHHIBJHS2yuHSqvP2CB7IzRqfaDzYSoAN9aRD8BiM8Kap3mowu5gsAVAFM8hpEIJc5zDq/mJj+YvLCcr+wquvWTx6xmvuNznjCFASeYRYf+r3AIGdtpctCmu9RRx8+hzKolXz4bG9jsoBthoqNSrrlaY4qG4iHETMniXTL7ntBb9mKxbWwEZZrsiQpJQXM5/yv3ABAT4WQv4/BVGoboiOhUXqpzu6nxX0GmTpw4oKzB1HKsxrMNymt3fg0IM4dV2CTWVv+mpOax9CAD84LuGHhbpXNyWtK5YY9p6EcbCnZjU1ooA4jg/vzmiPP65vPhRXcqli9sSeMDm/HSDI0WfLfjML5V5vu8NwCEu7k6LTiSRTf1oWARGpM9wjdZk13TB7sqkq8uBe5fCC6CQNLy2HzhKt+B4KC5A/4YOGbR+5wZIm+fh79P2WKPGBZzykeRC9t0QDXHNa0nqwKdPnXmW6TpM9/ELXAR/+CI59l6SNvR3YPMKfXEKRRZih+CfWx4XxiitR9YtTlIyr5m0vf520Pcnc6n1EBysiA55nePbNAxQ4UoTBCQGVqRqOHsIqIj21LpB03bUEf8XtLiuU6qdFZsaj3EwJhJIkF8SF8vdYf1Vi0mfAn2aVZIm0UlDnYmXD3cVoaR7La7JgdgPh94/N2S3RWYnyBHxl0he8T+6tT/T3qE3TOykQdzaKz6jfjU82zuMmLCJyb6b8iqXoGLR9DwGNhbZ8PJmqwYauaQys/nlIc8m25Pyab+IGYMGWvCG+pP8YtibE55Nwcx7bXGGiP/a1KSonKzUPEJgmEGAhqrO76L+ZpB6G6yCww0GEXPOlWeucxe/juqHb/8ZgKotZ4G7i1nX1e9kUCpktYIc6dJ4sYx3DW67WSmvSp0MtjnOO7E0aXlnZW9mFa7WdvzSA9SLkHsB9b1ery5JmTuO6VWSiNqyJTBELFB0ZBNDn5pzMSlZepBIxmX0ndixbZrzkk3wCRczTvwYZzaqtDZljMPsmLv6wjg/6Gry+7MZWGQAIrkd/aWXc8FBqN2iL/jU9Cxi4WD28GixVlpJhXt2OtHxS7sDBTd95Fm/m9R9NO1Wo8R/S+bwXp17vIcTruMRVvusuvu63Q1s+Zp6HxluyBxXM0hk62olZJ7H/tQln8ewfw6PWG6ejJ2k4kJ2O+pg6x3SDB4Ho7MDQVgEI0pcSmD8Yuqx6dv274LulwlUFFyY3YIkMkKq72WUiYanxyLEFrcPBmly/bxSDRWcEslUn0qH798cs0rV6PF1E1rhDwUABPITNdrtih+Aj3E8Ucztx+bTHv4';
const _RwBf = 'ilt=1&ihpd=1&ispd=0&rc=93&rb=93&gb=0&rg=0&pc=93&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=5&l=2023-08-03T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=bingcopilotwaitlist&c=MY00IA&t=2774&s=2023-02-14T05:31:01.1721955+00:00&ts=2023-08-04T02:36:53.6347715+00:00&rwred=0&wls=2&lka=0&lkt=0&TH=&dci=0&W=1&r=1&mta=0&e=aAWD0Fno3KJLH6HW7MyYMXOMC63LmZdGIOz9dHc9sE62dBp4rWOYQgQY78mH9k-a1Qe3Bv7_7fAEt5bQ-XuFMQ&A=D1BCA46A0D6D6706993797ECFFFFFFFF';
const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
];
const IP_RANGE = [
  ['3.2.50.0', '3.5.31.255'], //192,000
  ['3.12.0.0', '3.23.255.255'], //786,432
  ['3.30.0.0', '3.33.34.255'], //205,568
  ['3.40.0.0', '3.63.255.255'], //1,572,864
  ['3.80.0.0', '3.95.255.255'], //1,048,576
  ['3.100.0.0', '3.103.255.255'], //262,144
  ['3.116.0.0', '3.119.255.255'], //262,144
  ['3.128.0.0', '3.247.255.255'], //7,864,320
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://raw.githubusercontent.com/Sherwood01/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
  } else {
    url = baseUrl + 'web/index.html';
  }
  const res = await fetch(url);
  const newRes = new Response(res.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};


export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;
    if (!cookie.includes('_U=')) {
      cookies += '; _U=' + _U
    }
    if (!cookie.includes('KievRPSSecAuth=')) {
       cookies += '; KievRPSSecAuth=' + KievRPSSecAuth
    }
    if (!cookie.includes('_RwBf=')) {
      cookies += '; _RwBf=' + _RwBf
    }
    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent');
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });
    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const newRes = new Response(res.body, res);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};