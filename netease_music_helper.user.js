// ==UserScript==
// @name       网易云音乐海外助手
// @namespace    http:/sudodev.cn/
// @version      0.1
// @description  让海外的用户能正常听网易云音乐
// @author       Bob
// @match        http://music.163.com/*
// @grant        none
// ==/UserScript==
window.GAbroad=false;
/**
如果是在浏览器控制台，你也可以把这句代码：window.GAboard=window.contentFrame.GAbroad = false; 执行，目前来说，可以达到相同的效果
**/