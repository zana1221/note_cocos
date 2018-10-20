//富文本格式
var str = L('');
var rh = new X.bRichText({
    size: 20,
    maxWidth: node.width,
    lineHeight: 32,
    outlineSize: 2,
    outlineColor: '#ffffff',
    color: '#ffffff'
});
rh.text(str);
rh.setPosition(cc.p(node.width / 2, node.heigth / 2));
node.removeAllChildren();
node.addChild(rh);

//动画添加格式
G.class.ani.show({
    json: "ani",
    addTo: node,
    x: node.width / 2,
    y: node.height / 2,
    repeat: true,
    autoRemove: false,
    onload: function(sender, action) {
        action.playWithCallback('open', false, function() {
            callback();
        });

        action.gotoFrameAndPlay(0, false);

        //停止节点下动画
        node.stopAllActions();

    },
    onkey: function() {

    },
    onend: function() {

    },
});
//粒子动画添加
X.loadParticle(ui, json, callback)


//给一个节点设置红点
if (G.DATA.hongdian['name'] >= 1) {
    me.menu.addHongDian('3');
} else {
    me.menu.removeHongDian('3', false, 'name');
}

//事件发送，监听
G.event.once('name', function() {
    callback();
});
G.event.emit('name', {});

//接口格式
G.ajax.send(api, args, function(d) {
    if (!d) return;
    var d = JSON.parse(d);
    if (d.s == 1) {
        me.DATA = data.d;
        callback && callback.call();
    }
});



//ListView格式
var listView = panel.find('listview');
cc.enableScrollBar(listView);
listView.removeAllChildren();
var listitem = panel.finds("list");
var setItem = function(item, data, idx) {

};
for (var i = 0; i < 3; i++) {
    var item = listItem.clone();
    setItem(item, data, i);
    listView.pushBackCustomItem(item);
    item.show();
}

//listview无法调顶端高度

//scrollview格式
var table = me.table = new X.TableView(scrollview, list, "横向个数", function(ui, data) {
    me.setItem(ui, data);
}, null, null, 1, 10);
table.setData(data);
table.reloadDataWithScroll(true);



//预加载图片
me.preLoadRes = ['qqq.plist', 'qqq.png'];

//设置进度条
jdt.setPercent(min / max * 100);

//数组处理
X.inArray(array, value);
//合并数组
var arr = [].concat(array || []);
//返回最大最小值
minOfArray(array)
maxOfArray(array)
//对json数据按指定key排序
sortByKey(array, key)
//获取随机数
X.rand(min, max) 
//获取数组中的随机元素
X.arrayRand(arr)
//在数组中查找，返回下标
X.arrayFind(array,item,key)
//时间差格式化
X.timeFormat(t1,t2)
//四舍五入
X.toFixed(num)
//数组洗牌，随机排序
X.arrayShuffle(arr)
//找到所有的key
X.keysOfObject(object)
//克隆数值
X.clone(v)


//节点综合
//标签
node.setTag("666");
me.ui.getChildByTag("666");

//将NODE从父节点移除
node.removeFromParent(true);



//时间综合
//详见base.js
X.timeout(node, node, cd, function() {
    callback();
}, left_txt, right_txt, txt);
//周一时间
X.getLastMondayZeroTime()
//今天0点时间
X.getTodayZeroTime()
//获取到指定时间的差值
X.getF5Time(f5time)



//调用充值接口
G.event.once('paysuccess', function(txt) {
    try {
        callback();
    } catch (e) {}
});
G.event.emit('doSDKPay', {
    pid: sender.idx,
    money: sender.data.money,
    pname: sender.data.pname
});


//排序
//升序排序
array.sort(function(a, b) {
    return a - b < 0 ? -1 : 1;
});

//判断对象类型
X.instanceOf = function(o, type) {
    return toString.apply(o) === ('[object ' + type + ']') || typeof o === type.toLowerCase();
};

//比较数量选择容器
X.lengthChangeByPanel(arr, layout, listview, args)

//居中对齐
X.alignCenter_new(target, arr, {
    name: false,
    touch: true,
    scale: 0.65,
    interval: 0.5,
    mapItem: function(item) {
    }
});




//格式化最大数值
X.fmtValue(data,type)
//格式化成9999999+
X.fmtValueToValAdd(data,maxVal)
//取指定位整数
X.round(v, key)
//整数变汉字
X.num2Cn(v)










