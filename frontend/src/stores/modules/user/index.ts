import { ref } from 'vue';
import { defineStore } from 'pinia';
import cookies from '@/utils/cookies';
import { sleep } from '@/utils/utils';
import sysconfApi from '@/api/sysconf';
import { ApiResultCode } from '@/api/model/ApiResult';
import type { SysConfig } from '@/api/model/sysconf/SysConfig';

export const useUserStore = defineStore(
  'user-store',
  () => {
    const maxTryCreateConversationIdCount = 10;
    const userTokenCookieName = '1ZfK8vJsU5qHc2zwnM-jIAU6qvoZBrN2b11IV8LwKhBkZ-BljIcBwwCE4pnt20mFilvYcTuyH8rTgH2JFjH_eS3so5aqMydcZMgkRdG_RqWJajkvXh8fO-Da0HkFMdjqNZxXdMrELsX0TFDDdRwiqxEwakXZ4Bo53e6A8xRO-UPFwAZ7lQzd8V7Rq-O3hIiVQGCs5baz43216j800Or1_7dLgYufXaZW4uJfs8BmZZB0';
    const userKievRPSSecAuthCookieName = 'FAB6BBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACAsBugOpSXiZOASkQHTcLHyeW0ZxvH1NnwGW6zJXL9iwwictqHlDw5bdrhqEsUvNQRuaf5rF6C2O7wLF3//5su786zaCZvr00/KZVPfZcw6vLiKvdNLms9geoDKHQNyOfOgvbS3hjpPP4PpUo4zGzp+v0Gi98l0OT98hrjfX7EMC06PSkRHHIBJHS2yuHSqvP2CB7IzRqfaDzYSoAN9aRD8BiM8Kap3mowu5gsAVAFM8hpEIJc5zDq/mJj+YvLCcr+wquvWTx6xmvuNznjCFASeYRYf+r3AIGdtpctCmu9RRx8+hzKolXz4bG9jsoBthoqNSrrlaY4qG4iHETMniXTL7ntBb9mKxbWwEZZrsiQpJQXM5/yv3ABAT4WQv4/BVGoboiOhUXqpzu6nxX0GmTpw4oKzB1HKsxrMNymt3fg0IM4dV2CTWVv+mpOax9CAD84LuGHhbpXNyWtK5YY9p6EcbCnZjU1ooA4jg/vzmiPP65vPhRXcqli9sSeMDm/HSDI0WfLfjML5V5vu8NwCEu7k6LTiSRTf1oWARGpM9wjdZk13TB7sqkq8uBe5fCC6CQNLy2HzhKt+B4KC5A/4YOGbR+5wZIm+fh79P2WKPGBZzykeRC9t0QDXHNa0nqwKdPnXmW6TpM9/ELXAR/+CI59l6SNvR3YPMKfXEKRRZih+CfWx4XxiitR9YtTlIyr5m0vf520Pcnc6n1EBysiA55nePbNAxQ4UoTBCQGVqRqOHsIqIj21LpB03bUEf8XtLiuU6qdFZsaj3EwJhJIkF8SF8vdYf1Vi0mfAn2aVZIm0UlDnYmXD3cVoaR7La7JgdgPh94/N2S3RWYnyBHxl0he8T+6tT/T3qE3TOykQdzaKz6jfjU82zuMmLCJyb6b8iqXoGLR9DwGNhbZ8PJmqwYauaQys/nlIc8m25Pyab+IGYMGWvCG+pP8YtibE55Nwcx7bXGGiP/a1KSonKzUPEJgmEGAhqrO76L+ZpB6G6yCww0GEXPOlWeucxe/juqHb/8ZgKotZ4G7i1nX1e9kUCpktYIc6dJ4sYx3DW67WSmvSp0MtjnOO7E0aXlnZW9mFa7WdvzSA9SLkHsB9b1ery5JmTuO6VWSiNqyJTBELFB0ZBNDn5pzMSlZepBIxmX0ndixbZrzkk3wCRczTvwYZzaqtDZljMPsmLv6wjg/6Gry+7MZWGQAIrkd/aWXc8FBqN2iL/jU9Cxi4WD28GixVlpJhXt2OtHxS7sDBTd95Fm/m9R9NO1Wo8R/S+bwXp17vIcTruMRVvusuvu63Q1s+Zp6HxluyBxXM0hk62olZJ7H/tQln8ewfw6PWG6ejJ2k4kJ2O+pg6x3SDB4Ho7MDQVgEI0pcSmD8Yuqx6dv274LulwlUFFyY3YIkMkKq72WUiYanxyLEFrcPBmly/bxSDRWcEslUn0qH798cs0rV6PF1E1rhDwUABPITNdrtih+Aj3E8Ucztx+bTHv4';
    const userRwBfCookieName = 'ilt=1&ihpd=1&ispd=0&rc=93&rb=93&gb=0&rg=0&pc=93&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=5&l=2023-08-03T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=bingcopilotwaitlist&c=MY00IA&t=2774&s=2023-02-14T05:31:01.1721955+00:00&ts=2023-08-04T02:36:53.6347715+00:00&rwred=0&wls=2&lka=0&lkt=0&TH=&dci=0&W=1&r=1&mta=0&e=aAWD0Fno3KJLH6HW7MyYMXOMC63LmZdGIOz9dHc9sE62dBp4rWOYQgQY78mH9k-a1Qe3Bv7_7fAEt5bQ-XuFMQ&A=D1BCA46A0D6D6706993797ECFFFFFFFF';
    const randIpCookieName = 'BingAI_Rand_IP';
    const authKeyCookieName = 'BingAI_Auth_Key';
    const historyEnable = ref(true);
    const themeMode = ref('auto');

    const sysConfig = ref<SysConfig>();

    const getSysConfig = async () => {
      const res = await sysconfApi.getSysConfig();
      if (res.code === ApiResultCode.OK) {
        sysConfig.value = {
          ...sysConfig.value,
          ...res.data,
        };
      }
      return res;
    };

    const getConversationExpiry = () => {
      const B = new Date();
      return B.setMinutes(B.getMinutes() + CIB.config.sydney.expiryInMinutes), B;
    };

    const tryCreateConversationId = async (tryCount = 0) => {
      if (tryCount >= maxTryCreateConversationIdCount) {
        console.log(`已重试 ${tryCount} 次，自动创建停止`);
        return;
      }
      const conversationRes = await fetch('/turing/conversation/create', {
        credentials: 'include',
      })
        .then((res) => res.json())
        .catch((err) => `error`);
      if (conversationRes?.result?.value === 'Success') {
        console.log('成功创建会话ID : ', conversationRes.conversationId);
        CIB.manager.conversation.updateId(conversationRes.conversationId, getConversationExpiry(), conversationRes.clientId, conversationRes.conversationSignature);
      } else {
        await sleep(300);
        tryCount += 1;
        console.log(`开始第 ${tryCount} 次重试创建会话ID`);
        cookies.set(randIpCookieName, '', -1);
        tryCreateConversationId(tryCount);
      }
    };

    const getUserToken = () => {
      const userCookieVal = cookies.get(userTokenCookieName) || '';
      return userCookieVal;
    };

    const checkUserToken = () => {
      if (historyEnable.value) {
        CIB.vm.sidePanel.isVisibleDesktop = true;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'left');
        // 设置历史记录侧边栏的高度为 90vh
        document.querySelector('cib-serp')?.shadowRoot?.querySelector('cib-side-panel')?.shadowRoot?.querySelector('div.scroller')?.setAttribute('style', 'height: 90vh');
      } else {
        CIB.vm.sidePanel.isVisibleDesktop = false;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'center');
      }
      const token = getUserToken();
      if (!token) {
        // 未登录不显示历史记录
        CIB.config.features.enableGetChats = false;
        CIB.vm.sidePanel.isVisibleMobile = false;
        CIB.vm.sidePanel.isVisibleDesktop = false;
        document.querySelector('cib-serp')?.setAttribute('alignment', 'center');
      }
      // 创建会话id
      tryCreateConversationId();
    };

    const saveUserToken = (token: string) => {
      cookies.set(userTokenCookieName, token, 7 * 24 * 60, '/');
    };

    const setAuthKey = (authKey: string) => {
      cookies.set(authKeyCookieName, authKey);
    };

    const clearCache = async () => {
      // del storage
      localStorage.clear();
      sessionStorage.clear();
      // del sw cache
      const cacheKeys = await caches.keys();
      for (const cacheKey of cacheKeys) {
        await caches.delete(cacheKey);
        console.log(`del cache : `, cacheKey);
        // await caches.open(cacheKey).then(async (cache) => {
        //   const requests = await cache.keys();
        //   return await Promise.all(
        //     requests.map((request) => {
        //       console.log(`del cache : `, request.url);
        //       return cache.delete(request);
        //     })
        //   );
        // });
      }
    };

    const getUserKievRPSSecAuth = () => {
      const userCookieVal = cookies.get(userKievRPSSecAuthCookieName) || '';
      return userCookieVal;
    };

    const saveUserKievRPSSecAuth = (token: string) => {
      cookies.set(userKievRPSSecAuthCookieName, token, 7 * 24 * 60, '/');
    };

    const getUserRwBf = () => {
      const userCookieVal = cookies.get(userRwBfCookieName) || '';
      return userCookieVal;
    };

    const saveUserRwBf = (token: string) => {
      cookies.set(userRwBfCookieName, token, 7 * 24 * 60, '/');
    };

    const resetCache = async () => {
      cookies.set(userTokenCookieName, '', -1);
      cookies.set(randIpCookieName, '', -1);
      cookies.set(authKeyCookieName, '', -1);
      cookies.set(userKievRPSSecAuthCookieName, '', -1);
      cookies.set(userRwBfCookieName, '', -1);
      await clearCache();
    };

    return {
      sysConfig,
      getSysConfig,
      getUserToken,
      checkUserToken,
      saveUserToken,
      resetCache,
      setAuthKey,
      getUserKievRPSSecAuth,
      saveUserKievRPSSecAuth,
      getUserRwBf,
      saveUserRwBf,
      historyEnable,
      themeMode,
    };
  },
  {
    persist: {
      key: 'user-store',
      storage: localStorage,
      paths: ['historyEnable', 'themeMode'],
    },
  }
);
