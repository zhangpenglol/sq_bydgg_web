import request from '@/utils/request.js';
import md5 from 'js-md5';

export function login(params) {
    return request({
        url: '/dbbase/login?name=' + params.name + '&pwd=' + md5(`${params.pwd}`) + '&verifyCode=' + params.verifyCodes + '&verifyCodeKey=' + params.finalcodekey,
        method: 'get',
    })
}
