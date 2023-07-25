import styles from './index.less';

export default function IndexPage() {
  /**
+ * 判断一个字符是不是中文
+ * @param {string} char 要检验的字符
+ * @returns {boolean} 是否为中文
+ */
  const isChineseChar = (char: string): boolean => {
    const c = char.charCodeAt(0);
    return !((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f));
  };

  /**
  + * 判断字符串长度，其中中文算两个字符长度
  + * @param {string} str 字符串
  + * @returns {number}
  + */
  const getStringLen = (str: string): number => {
    let len = 0;
    for (const char of str) {
      len += isChineseChar(char) ? 2 : 1;
    }
    return len;
  };
  // label 太长格式化
  const labelFormatter = (value: string, length = 18) => {
    // 如果长度超出，则截取
    if (getStringLen(value) > length) {
      let len = 0;
      let end = 0;
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < value.length; i++) {
        len += isChineseChar(value[i]) ? 2 : 1;
        end = i;
        if (len > length) break;
      }
      return `${value.slice(0, end)}...`;
    } else {
      return value;
    }
  };

  return (
    <div>
      <h1 className={styles.title}>
        {labelFormatter(' woshi ygie henchagn dfajskdf ')}
      </h1>
    </div>
  );
}
