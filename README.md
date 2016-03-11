#[UserScripts]修改网易云音乐海外用户状态


##使用说明
Chrome用户： 在Tampermonkey中安装此脚本 https://raw.githubusercontent.com/eaufavor/NetEaseMusicHelper/master/netease_music_helper.user.js

并且修改hosts地址：
```
175.25.168.31 m10.music.126.net
158.69.209.100 music.163.com
```

##版本历史
* 2015.9： 直接修改GAbroad（借鉴[在海外使用网易云音乐](http://www.sudodev.cn/music-163-access-abroad/)
），去除播放列表灰色

* 2015.12： 旧方法失效，改为修改core.js 
