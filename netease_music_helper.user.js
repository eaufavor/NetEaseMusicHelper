// ==UserScript==
// @name       网易云音乐海外助手
// @namespace    
// @updateURL 
// @version      0.1
// @description  修改网易云音乐海外用户状态
// @author       eaufavor
// @match        http://music.163.com/*
// @grant        none
// ==/UserScript== 

(function() {
    var be = NEJ.P,
        bZ = NEJ.O,
        co = NEJ.F,
        bj = be("nej.v"),
        bH = be("nej.j"),
        bK = be("nej.ut"),
        Fp = be("nej.e"),
        bm = be("nej.u"),
        bo = be("nm.l"),
        bq = be("nm.x"),
        bp = be("nm.d");
    if (!bp.np) return;
    var bW = bp.np.bL({
        onresourceload: bkZ
    });

    function bkZ(bDM, cF, bl, bQ) {
        alert(bDM)
        var bk = [];
        switch (parseInt(bDM)) {
            case 2:
                bk = bl;
                break;
            case 13:
                bk = bl.tracks;
                break;
            case 18:
                bk.push(bl);
                break;
            case 19:
            case 21:
                bk = bl.songs;
                break;
            case 22:
                if (bl.mp && bl.mp.fee && bl.mp.pl <= 0) {
                    bq.bLT(bl.data.id, bl.mp.fee);
                    return
                }
                break
        }
        if (bq.bwp(bk, true)) {
            return
        }
        bq.ep({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bQ.message
        })
    }

    
    bq.bNA = function(eD) {
        var bOj = eD.privilege;
        if (eD.program) {
            return 0
        } else if (window.GAbroad) {
            window.GAbroad = false;
            return 0
        }
        if (bOj) {
            if (bOj.pl > 0) {
                return 0
            } else {
                if (bOj.fee > 0) {
                    bOj.fee = 0
                    return 0
                } else {
                    return 0
                }
            }
        } else {
            if (eD.status < 0) {
                if (eD.fee > 0) {
                    eD.fee = 0
                    return 0
                } else {
                    return 0
                }
            } else {
                return 0
            }
        }
    }
})();



/**
还需要修改hosts：

113.107.112.212  m2.music.126.net
175.25.168.31 m10.music.126.net
104.236.189.178 music.163.com
**/
