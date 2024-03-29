const util = require('../../../utils/util.js');
var mockData = { "data": { "current_page": 1, "data": [{ "goods_id": 15, "goods_name": "\u5357\u6cc9\u5c71\u5bfa8\u5bf8\u5706\u6ee1\u89c2\u97f3\uff08\u7fe0\u7389\u9576\u91d1\uff09", "goods_cover": "http:\/\/qn.fayuanhui.cn\/2d2da218534518a64eee630d33132d5e.jpg", "goods_storage": 3, "goods_price": "4666.00" }, { "goods_id": 16, "goods_name": "\u5357\u6cc9\u5c71\u5bfa8\u5bf8\u5706\u6ee1\u4e09\u5b9d\u4f5b\uff08\u7fe0\u7389\u9576\u91d1\uff09", "goods_cover": "http:\/\/qn.fayuanhui.cn\/efcd450e04ff4aa8b1a689e5c31da9ac.png", "goods_storage": 3, "goods_price": "4666.00" }, { "goods_id": 17, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u51b0\u66dc\u89c2\u97f3", "goods_cover": "http:\/\/qn.fayuanhui.cn\/c3c45db2fc6d98d1ace84ac2446e377d.jpg", "goods_storage": 95, "goods_price": "166.00" }, { "goods_id": 18, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u4e0d\u9000\u83e9\u8428", "goods_cover": "http:\/\/qn.fayuanhui.cn\/10800518fb59ab2d22df128093c59d31.jpg", "goods_storage": 20, "goods_price": "7999.00" }, { "goods_id": 19, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u6c89\u9999", "goods_cover": "http:\/\/qn.fayuanhui.cn\/d6be21a44e2b4b3cb7d42a594a76fc4d.jpg", "goods_storage": 99, "goods_price": "66.00" }, { "goods_id": 20, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u51e4\u773c\u624b\u4e32", "goods_cover": "http:\/\/qn.fayuanhui.cn\/f124951e9c4a2c69e4f267176fba873d.jpg", "goods_storage": 8, "goods_price": "299.00" }, { "goods_id": 21, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u4f5b\u7f18\u5409\u7965\u597d\u8fd0\u4f5b\u724c\uff08\u5973\u6b3e\uff09", "goods_cover": "http:\/\/qn.fayuanhui.cn\/ccb115cebc8a4520ef647113cc032c0e.jpg", "goods_storage": 10, "goods_price": "566.00" }, { "goods_id": 22, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u560e\u4e4c\u76d2\uff08\u5973\u6b3e\uff09", "goods_cover": "http:\/\/qn.fayuanhui.cn\/347a52dd1117d1a95c54e27253620310.jpg", "goods_storage": 10, "goods_price": "599.00" }, { "goods_id": 23, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u82b1\u4e1d\u89c2\u97f3\u83e9\u8428", "goods_cover": "http:\/\/qn.fayuanhui.cn\/a8c8a72e667744700122d26bdda73be5.jpg", "goods_storage": 10, "goods_price": "799.00" }, { "goods_id": 24, "goods_name": "\u5357\u6cc9\u5c71\u5bfa\u91d1\u521a\u83e9\u63d0\u9879\u94fe", "goods_cover": "http:\/\/qn.fayuanhui.cn\/84eee1526ef439d4b31ecde4448b1df3.jpg", "goods_storage": 197, "goods_price": "166.00" }], "per_page": 10, "total": 36 }, "msg": "", "code": 200 }
Page({
    data: {
        isSHowSearch: false,
        searchTxt: "",
        history: ["撒的发多少", "撒的发多少"],
        curPage: 0,
        isLoadData: true,   // 是否可加载数据
        isLogin: false,
        totalPages: 1,           // 所有页数
        curPage: 1,              // 当前页数
        goodsList: []
    },
    // 删除操作************************************
    // 勾选单品删除
    selectDeleted: function (e) {
        var that = this;
        var goodsId = e.currentTarget.dataset.id;
        var flag = e.currentTarget.dataset.deleted;
        var product = e.currentTarget.dataset.item;

        this.data.cartItems.forEach((item, index) => {
            var goods = 'cartItems[' + index + '].List';
            if (product.ID == item.ID) {
                item.List.forEach((goodsItem, goodsIndex) => {
                    if (goodsId == goodsItem.ID) {
                        var deleted = goods + '[' + goodsIndex + '].deleted';
                        if (deleted) {
                            that.setData({
                                [deleted]: !flag
                            })
                        }
                    }
                })
            }
        })

        // 检测当前商店
        this.checkShopDeleted(product);
        // 检测所有
        this.checkAllDeleted();
    },
    // 勾选商店删除
    selectShopDeleted: function (e) {
        var that = this;
        var id = e.currentTarget.dataset.id;
        var flag = e.currentTarget.dataset.deleted;
        var deleted = "";
       
        this.data.cartItems.forEach((item, index) => {
            deleted = 'cartItems[' + index + '].deleted';
            
            if (deleted) {
                if (id == item.ID) {
                    console.log(deleted)
                    that.setData({
                        [deleted]: !flag
                    })
                }
            }
        })

        // 检测商店子商品全选非全选
        this.checkDeletedGoods(id, flag);

        // 检测所有
        this.checkAllDeleted();
    },
    // 检测商店子商品全选非全选删除状态
    checkDeletedGoods: function (id, flag) {
        var that = this;
        this.data.cartItems.forEach((item, index) => {
            var goods = 'cartItems[' + index + '].List';
            if (id == item.ID) {
                item.List.forEach((goodsItem, goodsIndex) => {
                    var deleted = goods + '[' + goodsIndex + '].deleted';
                    if (deleted) {
                        that.setData({
                            [deleted]: !flag
                        })
                    }
                })
            }
        })

        // 计算删除数量
        this.calTotalDeletedNum()
    },
    // 检测商店删除全选非全选
    checkShopDeleted: function (product) {
        // 全部选中则全选点亮
        var that = this;
        var checkAllFlags = true;
        var checkIndex = "";    // 需要检索的商店
        this.data.cartItems.forEach((item, index) => {
            if (product.ID == item.ID) {
                checkIndex = index;
                item.List.forEach((goodsItem, goodsIndex) => {
                    checkAllFlags = checkAllFlags && goodsItem.deleted;
                })
            }
        })

        // 操作
        var deleted = 'cartItems[' + checkIndex + '].deleted';
        if (deleted) {
            that.setData({
                [deleted]: checkAllFlags
            })
        }

        // 计算删除数量
        this.calTotalDeletedNum()
    },
    // 检测所有全选非全选
    checkAllDeleted: function () {
        // 全部选中则全选点亮
        var that = this;
        var checkAllFlags = true;
        var checkIndex = "";    // 需要检索的商店
        this.data.cartItems.forEach((item, index) => {
            item.List.forEach((goodsItem, goodsIndex) => {
                checkAllFlags = checkAllFlags && goodsItem.deleted;
            })
        })

        // 操作全选标志
        this.setData({
            isAllSelectDeleted: checkAllFlags
        })
    },
    // 计算删除勾选的商品数
    calTotalDeletedNum: function () {
        var that = this;
        // var totalMoney = 0;
        var totalNum = 0;

        // 设置选定数量
        that.setData({
            totalNum2: totalNum
        })

        this.data.cartItems.forEach((item, index) => {
            var goods = 'cartItems[' + index + '].List';
            item.List.forEach((goodsItem, goodsIndex) => {
                if (goodsItem.deleted) {
                    totalNum += 1;
                    // 设置选定数量
                    that.setData({
                        totalNum2: totalNum
                    })
                }
            })
        })
    },
    // 点击全选 flag:true 选中全选 false 取消全选
    allSelectDeleted: function (e) {
        var that = this;
        var flag = e.currentTarget.dataset.flag;
        // this.data.allSelectBtn = flag;
        var deleted = "";

        // 全选标志
        this.setData({
            isAllSelectDeleted: !flag
        })

        this.data.cartItems.forEach((item, index) => {
            deleted = 'cartItems[' + index + '].deleted';
            // 全选商店
            if (deleted) {
                that.setData({
                    [deleted]: !flag
                })
            }

            // 全选商品
            var goods = 'cartItems[' + index + '].List';
            item.List.forEach((goodsItem, goodsIndex) => {
                var deleted = goods + '[' + goodsIndex + '].deleted';
                if (deleted) {
                    that.setData({
                        [deleted]: !flag
                    })
                }
            })
        })
        // 计算总数量
        this.calTotalDeletedNum();
    },
    // 删除所选项
    goDeleted: function () {
        var that = this;
        var selectGoods = [];
        var item = {};
        this.data.cartItems.forEach((item, index) => {
            item.List.forEach((goodsItem, goodsIndex) => {
                if (goodsItem.deleted) {
                    item.CID = goodsItem.ID
                    selectGoods.push(item)
                }
            })
        })
        wx.showModal({
            title: '提示',
            content: '确定删除所选项吗？',
            confirmColor: "#f6819e",
            success: function (res) {
                if (res.confirm) {
                    // 执行删除接口
                    var url = "deleteCollectGoods.ashx";
                    var params = new Object();
                    params.LstCollectGoods = selectGoods;

                    util.POST({
                        url: url,
                        params: JSON.stringify(params),
                        success: function (res) {
                            var oData = res.data[0]
                            wx.showToast({
                                icon: 'none',
                                title: oData.Msg,
                                duration: 1000
                            })
                            if (oData.Status === "200") {
                                // 过滤有删除标记的商品
                                var newCartItems = [];
                                var newGoods = [];
                                that.data.cartItems.forEach((item, index) => {
                                    if (!item.deleted) {
                                        newGoods = item.List.filter((goodsItem, goodsIndex) => {
                                            return !goodsItem.deleted;
                                        })
                                        item.List = newGoods;
                                        newCartItems.push(item)
                                    }
                                })

                                that.setData({
                                    cartItems: newCartItems
                                })
                            } else {
                                
                            }
                        },
                        fail: function () {
                            wx.showToast({
                                icon: 'none',
                                title: "失败"
                            })
                        },
                    })
                    
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    getMsg(type, page) {
        this.setData({
            ["goodsList"]: mockData.data.data
        })
        console.log(this.data.goodsList)
        var that = this;
        var url = "getMyCollectionList.ashx";
        var params = new Object();
        params.Size = size;
        params.Page = page;
        util.POST({
            url: url,
            params: JSON.stringify(params),
            success: function (res) {
                var oData = res.data[0]
                if (oData.Status === "200") {
                    that.setData({
                        curPage: page,
                    })
                    // 如果页码为1，不进行列表叠加
                    if (page == 0) {
                        that.setData({
                            ["cartItems"]: oData.Data
                        })
                    } else {
                        var data = that.data.ListList.concat(oData.Data[0].List);
                        that.setData({
                            ["cartItems"]: data
                        })
                    }

                    if (oData.Data[0].Page >= oData.Data[0].PageCount - 1) {
                        that.setData({
                            isLoadData: false
                        })
                    } else {
                        that.setData({
                            isLoadData: false
                        })
                    }
                } else {
                    wx.showToast({
                        icon: 'none',
                        title: oData.Msg,
                        duration: 1000
                    })
                }
            },
            fail: function () {
                wx.showToast({
                    icon: 'none',
                    title: "失败"
                })
            },
        })
    },
    goUrl (e) {
        var index = e.currentTarget.dataset.index;
        var number = e.currentTarget.dataset.number;
        wx.navigateTo({
            url: "/pages/goodsDetail/index?index="+index+"&number="+ number,
            
        })
    },
    onLoad: function (options) {
        this.getMsg(0, 0)
    },
    // 切换搜索
    toggleSearch() {
        this.setData({
            isSHowSearch: !this.data.isSHowSearch
        })
    },
    // 清除历史搜索
    clearHistory() {
        this.setData({
            history: []
        })
    },
    // 清除搜索
    clear() {
        this.setData({
            searchTxt: ""
        })
    },
    // 输入搜索
    bindKeyInput: function (e) {
        this.setData({
            searchTxt: e.detail.value
        })
    },
    changeTab (e) {
        var type = e.currentTarget.dataset.type;
        this.setData({
            curType: type
        })
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.isLoadData) {
            var type = this.data.curType;
            var page = this.data.curPage + 1
            this.getMsg(type, page);
        }
    }
})