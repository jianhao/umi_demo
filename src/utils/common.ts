/** 倒计时时间差转换为倒计时时间格式
 *@params tm{String/Number} 倒计时时间差（毫秒）
 *@params type{String} 想要返回的时间类型 d: 以天为单位   h： 以小时为单位
 *@returns 剩余时间
 */
export function formatCountdown(tm: number, type: string) {
  let d = 0;
  let h = 0;
  let m = 0;
  let s = 0;
  if (tm >= 0) {
    d = Math.floor(tm / 1000 / 3600 / 24);
    h = Math.floor((tm / 1000 / 60 / 60) % 24);
    m = Math.floor((tm / 1000 / 60) % 60);
    s = Math.ceil((tm / 1000) % 60); // 倒计时不满一秒按一秒算
  }

  switch (type) {
    case 'd':
      return `${d}天${h}时${m}分${s}秒`;
    case 'h':
      return `${h + d * 24}时${m}分${s}秒`;
    default:
      return { day: d, hour: h, minute: m, second: s };
  }
}
