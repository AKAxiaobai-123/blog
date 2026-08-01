# 演示音频

本目录下的音频是用 Python 标准库本地合成的原创演示音轨（无版权风险），
只用于验证音乐条交互。替换为真实歌曲时，更新文件名或 `src/data/music.ts`
里的 `src` 路径即可，组件不需要改动。

- `morning-dew.wav`：C 大调九和弦铺底
- `window-rain.wav`：A 小调七和弦铺底
- `lazy-afternoon.wav`：G 六和弦铺底
- `night-walk.wav`：D 小调九和弦铺底

歌单中的《张家明和婉君》（李荣浩）需要自行放入授权音频
`zhang-jia-ming-he-wan-jun.mp3`，并在 `src/data/music.ts` 中补充你有权使用的歌词；
在音频与歌词就位前，播放器会显示“音频待补充”。
