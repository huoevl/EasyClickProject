declare function AcEventWrapper(): void;
declare class AcEventWrapper {
    /**
     * 当前Sdk的版本号
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string 例如1.0.1
     */
    version(): string;
    /**
     * 将元素节点变成XML
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 字符串 所有节点的xml字符串
     */
    dumpXml(): string;
    /**
     * 打开通知栏
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true if successful, else return false
     */
    openNotification(): any;
    /**
     * 打开快速设置
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true if successful, else return false
     */
    openQuickSettings(): any;
    /**
     * 返回桌面
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    home(): any;
    /**
     * 分割屏幕
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    splitScreen(): any;
    /**
     * 模拟电源键
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    power(): any;
    /**
     * 返回键
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    back(): any;
    /**
     * 最近使用的APP
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    recentApps(): any;
    /**
     * 通过选择器获取元素文本
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器的
     * @return 字符串数组 文本字符串
     */
    getText(selectors: any): any;
    lockNode(): any;
    releaseNode(): any;
    /**
     * 设置无障碍模式下各种手势模式事件的操作类型，默认是异步
     * @param mode 1 代表异步，2代表同步
     * @return {boolean} true代表成功 false代表失败
     */
    setAccActionMode(mode: any): boolean;
    /**
     * 通过选择器 获取节点信息
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器
     * @return 节点信息集合
     */
    getNodeInfo(selectors: any, timeout: any): NodeInfo[];
    getNodeInfoForNode(nid: any, selectors: any, timeout: any): NodeInfo[];
    /**
     * 长点击选择器选中的元素
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器 {@link S}
     * @return 布尔型 true 成功 false 失败
     */
    longClick(selectors: any): any;
    /**
     * <p>执行从一个坐标到另一个坐标的拖动</p>
     * </p>
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param startX 起始坐标的X轴值
     * @param startY 起始坐标的Y轴值
     * @param endX   结束坐标的X轴值
     * @param endY   结束坐标的Y轴值
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 拖动成功, false 拖动失败
     */
    drag(startX: any, startY: any, endX: any, endY: any, duration: any): any;
    /**
     * 通过选择器拖动某个元素到目标元素
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器 {@link S}
     * @param destObj   目标元素选择器
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 成功 false 失败
     */
    dragTo(selectors: any, destObj: any, duration: any): any;
    /**
     * 通过选择器拖动某个元素到目标X Y 坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 原始元素选择器
     * @param endX      目标 X 坐标
     * @param endY      目标 Y 坐标
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 成功 false 失败
     */
    dragToPoint(selectors: any, endX: any, endY: any, duration: any): any;
    /**
     * 点击某个坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param x X坐标
     * @param y Y坐标
     * @return  布尔型 true 成功，false 失败
     */
    clickPoint(x: any, y: any): any;
    /**
     * 双击某个坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param x X坐标
     * @param y Y坐标
     * @return  布尔型 true 成功，false 失败
     */
    doubleClickPoint(x: any, y: any): any;
    /**
     * 点击某个区域中心坐标点
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param rect 区域
     * @return  布尔型 true 成功，false 失败
     */
    clickCenter(rect: any): any;
    /**
     * 长按点击某个坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param x X坐标
     * @param y Y坐标
     * @return 布尔型  true 代表成功，false 代表失败
     */
    longClickPoint(x: any, y: any): any;
    /**
     * 通过选择器点击元素
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    click(selectors: any): any;
    clickEx(selectors: any): any;
    setFocus(selectors: any): any;
    setFocusNodeInfo(uniqueId: any): any;
    longClickEx(selectors: any): any;
    clickExNodeInfo(uniqueId: any): any;
    longClickExNodeInfo(uniqueId: any): any;
    /**
     * 是否滚动到底部了，如果查不到元素也会返回false
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     * @param direction 滚动方向 UP,DOWN,LEFT,RIGHT
     * @param selectors 选择器
     * @return false 代表未滚动到位，true 代表滚动完成了
     */
    isScrollEnd(direction: any, selectors: any): any;
    /**
     * 通过选择器随机点击元素，有可能选中的是多个元素节点
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    clickRandom(selectors: any): any;
    clickRandomEx(selectors: any): any;
    /**
     * 随机点击区域中的坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param rect 区域 {@link Rect}
     * @return 布尔型 成功或者失败
     */
    clickRandomRect(rect: any): any;
    /**
     * 随机长点击区域中的坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param rect 区域 {@link Rect}
     * @return 布尔型 成功或者失败
     */
    longClickRandomRect(rect: any): any;
    /**
     * 通过选择器输入数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    inputText(selectors: any, content: any): any;
    /**
     * 通过选择器粘贴数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    pasteText(selectors: any, content: any): any;
    /**
     * 当前是否是我们的输入法
     *
     * @return 布尔型 true代表是，false代表不是
     */
    currentIsOurIme(): any;
    /**
     * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param content   数据字符串
     * @param selectors {@link S}
     * @return 布尔型 true 代表成功 false代表失败
     */
    imeInputText(selectors: any, content: any): any;
    imeInputViewShown(): any;
    imeInputKeyCode(selectors: any, content: any): any;
    /**
     * 通过选择器判断元素是否存在
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}
     * @return 布尔型 true 代表成功 false代表失败
     */
    has(selectors: any): any;
    /**
     * 从一个坐标滑动到另一个坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param startX 起始坐标的X轴值
     * @param startY 起始坐标的Y轴值
     * @param endX   结束坐标的X轴值
     * @param endY   结束坐标的Y轴值
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 滑动成功, false 滑动失败
     */
    swipeToPoint(startX: any, startY: any, endX: any, endY: any, duration: any): any;
    /**
     * 通过选择器从上往下滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     * @param distance  滑动距离 单位是像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromUpToDown(selectors: any, distance: any, duration: any): any;
    /**
     * 通过选择器从下往上滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     * @param distance  滑动距离 单位是像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromDownToUp(selectors: any, distance: any, duration: any): any;
    /**
     * 通过选择器从右往左滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     * @param distance  滑动距离 单位是像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromRightToLeft(selectors: any, distance: any, duration: any): any;
    /**
     * 通过选择器从左往右滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     * @param distance  滑动距离 单位是像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromLeftToRight(selectors: any, distance: any, duration: any): any;
    /**
     * 通过选择器滑动到某个坐标
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     * @param endX      结束的X坐标
     * @param endY      结束的Y坐标
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipe(selectors: any, endX: any, endY: any, duration: any): any;
    /**
     * 通过选择器清除文本数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 节点选择器
     */
    clearTextField(selectors: any): any;
    /**
     * 向上滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param distance 滑动距离 单位像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromDownToUpInScreen(distance: any, duration: any): any;
    /**
     * 向下滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param distance 滑动距离 单位像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromUpToDownInScreen(distance: any, duration: any): any;
    /**
     * 向左滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param distance 滑动距离 单位像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromRightToLeftInScreen(distance: any, duration: any): any;
    /**
     * 向右滑动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param distance 滑动距离 单位像素
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 代表成功 false 代表失败
     */
    swipeFromLeftToRightInScreen(distance: any, duration: any): any;
    /**
     * 取得当前运行的Activity类名
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return string 类名字符串
     */
    getRunningActivity(): string;
    /**
     * 取得当前运行的App包名
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return string 包名字符串
     */
    getRunningPkg(): string;
    getCurrentRunningPkg(): string;
    /**
     * 将通知发射处理，相当于点击了通知栏
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param seqId 通知栏的对象ID
     * @return 布尔型 true 代表发射通知成功
     */
    shotNotification(seqId: any): any;
    /**
     * 通知取消处理
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param seqId 通知栏的对象ID
     * @return 布尔型 true 代表取消通知成功
     */
    cancelNotification(seqId: any): any;
    ignoreNotification(seqId: any): any;
    /**
     * 从缓存中清除所有的Toast消息数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     */
    clearAllToast(): any;
    /**
     * 从缓存中清除所有的通知栏消息数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     */
    clearAllNotification(): any;
    /**
     * 从通知栏取得多个消息
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param pkg 包名
     * @param size 需要取得多少个消息
     * @return null 代表没有, 返回的是一个数组
     */
    getLastNotification(pkg: any, size: any): NotificationInfo[];
    /**
     * 从Toast取得多个消息
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param pkg 包名
     * @param size 需要取得多少个消息
     * @return null 代表没有
     */
    getLastToast(pkg: any, size: any): ToastInfo[];
    /**
     * 请求监听状态栏的权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param timeout 请求权限超时时间 单位是秒
     * @return true 代表请求权限成功，false代表失败
     */
    requestNotificationPermission(timeout: any): any;
    /**
     * 检查是否含有状态栏监听权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @return true 有权限,false 代表无权限
     */
    hasNotificationPermission(): any;
    /**
     * 通过选择器 获取第一个节点信息
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors 选择器
     * @return NodeInfo 对象或者null
     */
    getOneNodeInfo(selectors: any, timeout: any): NodeInfo;
    getOneNodeInfoForNode(nid: any, selectors: any, timeout: any): NodeInfo;
    /**
     * 取得父级
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return NodeInfo {NodeInfo 对象|null}
     */
    getNodeInfoParent(uniqueId: any): NodeInfo;
    /**
     * 取得单个子节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param index 子节点的索引
     * @return NodeInfo {NodeInfo 对象|null}
     */
    getNodeInfoChild(uniqueId: any, index: any): NodeInfo;
    /**
     * 取得所有子节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return   NodeInfo 数组 选择到的节点集合
     */
    getNodeInfoAllChildren(uniqueId: any): NodeInfo[];
    /**
     * 当前节点的所有兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return {Array} NodeInfo 数组
     */
    getSiblingNodeInfo(uniqueId: any): any[];
    /**
     * 在当前节点前面的兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return   NodeInfo 数组 选择到的节点集合
     */
    getNextSiblingNodeInfo(uniqueId: any): NodeInfo[];
    /**
     * 在当前节点后面的兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return NodeInfo 数组 选择到的节点集合
     */
    getPreviousSiblingNodeInfo(uniqueId: any): NodeInfo[];
    /**
     * 对某个节点输入数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    inputTextNodeInfo(uniqueId: any, content: any): any;
    pasteTextNodeInfo(uniqueId: any, content: any): any;
    /**
     * 使用输入法对某个节点输入数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    imeInputTextNodeInfo(uniqueId: any, content: any): any;
    imeInputKeyCodeNodeInfo(uniqueId: any, content: any): any;
    /**
     * 清除节点文本数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId  NodeInfo 中的uniqueId属性
     *  @return {boolean} 布尔型| true代表成功
     */
    clearTextFieldNodeInfo(uniqueId: any): boolean;
    /**
     * 刷新节点缓存
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId  NodeInfo 中的uniqueId属性
     */
    refreshNodeInfo(uniqueId: any): any;
    /**
     * 节点信息是否有效
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId  NodeInfo 中的uniqueId属性
     * @return {boolean}|布尔型 true代表有效
     */
    isValidNodeInfo(uniqueId: any): boolean;
    /**
     * 设置获取节点的模式
     * @param mode 1 是增强型， 2 是快速型，默认是增强型
     * @param fetchInvisibleNode 是否抓取隐藏的元素
     * @param fetchNotImportantNode 是否抓取不重要的元素
     * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
     * @return {boolean|*}
     */
    setFetchNodeMode(mode: any, fetchInvisibleNode: any, fetchNotImportantNode: any, algorithm: any): boolean | any;
    setNodeDumpParam(data: any): any;
    /**
     * 设置要屏蔽的节点
     * 设置后，系统不会抓取这些节点数据
     * @param blockNode 字符串，以英文逗号分割，例如 clz,index,bounds
     * @return {boolean|*}
     */
    setBlockNode(blockNode: any): boolean | any;
    removeNodeFlag(flag: any): any;
    addNodeFlag(flag: any): any;
    /**
     * 多点触摸<br/>
     * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2<br/>
     * x: X坐标<br/>
     * y: Y坐标<br/>
     * pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指<br/>
     * delay: 该动作延迟多少毫秒执行
     * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},
     * {"action":2,"x":1,"y":1,"pointer":1,"delay":20}
     * ]
     * @param touch2 第2个手指的触摸点数组
     * @param touch3 第3个手指的触摸点数组
     * @param timeout 多点触摸执行的超时时间，单位是毫秒
     * @return boolean|布尔型
     */
    multiTouch(touch1: any, touch2: any, touch3: any, timeout: any): any;
    multiTouch2(pointArrays: any, timeout: any): any;
    multiTouchEx(pointArrays: any, timeout: any): any;
    /**
     * 向前滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollForward(selectors: any): any;
    scrollForwardNodeInfo(uniqueId: any): any;
    /**
     * 向后滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollBackward(selectors: any): any;
    scrollBackwardNodeInfo(uniqueId: any): any;
    /**
     * 向左滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollLeft(selectors: any): any;
    scrollLeftNodeInfo(uniqueId: any): any;
    /**
     * 向右滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollRight(selectors: any): any;
    scrollRightNodeInfo(uniqueId: any): any;
    /**
     * 向上滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollUp(selectors: any): any;
    scrollUpNodeInfo(uniqueId: any): any;
    /**
     * 向下滚动
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollDown(selectors: any): any;
    scrollDownNodeInfo(uniqueId: any): any;
    readResAutoImage(fileName: any): any;
    /**
     * 获取最近的节点事件出发的时间
     *
     * @return {number} 长整型时间，毫秒级别
     */
    lastNodeEventTime(): number;
    press(x: any, y: any, delay: any): any;
    /**
     * 执行按下输入事件
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchDown(x: any, y: any): any;
    /**
     * 执行移动输入事件
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchMove(x: any, y: any): any;
    /**
     * 执行弹起输入事件
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchUp(x: any, y: any): any;
}
declare var acEvent: AcEventWrapper;
declare function EventWrapper(): void;
declare class EventWrapper {
    /**
     * 当前Sdk的版本号
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string ，例如1.0.1
     */
    version(): string;
    /**
     * 点击坐标点
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param x X坐标
     * @param y Y坐标
     * @return 布尔型 true 点击成功，false点击失败
     */
    clickPoint(x: any, y: any): any;
    /**
     * 双击某个坐标
     *
     * @param x X坐标
     * @param y Y坐标
     * @return  布尔型 true 成功，false 失败
     */
    doubleClickPoint(x: any, y: any): any;
    /**
     * 点击某个区域中心坐标点
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param rect 区域
     * @return  布尔型 true 成功，false 失败
     */
    clickCenter(rect: any): any;
    /**
     * 当前是否是我们的输入法
     *
     * @return 布尔型 true代表是，false代表不是
     */
    currentIsOurIme(): any;
    /**
     * <p>从一个坐标到另一个坐标的拖动
     * </p>
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param startX 起始坐标的X轴值
     * @param startY 起始坐标的Y轴值
     * @param endX   结束坐标的X轴值
     * @param endY   结束坐标的Y轴值
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 拖动成功, false 拖动失败
     */
    drag(startX: any, startY: any, endX: any, endY: any, duration: any): any;
    /**
     * <p>
     * 从一个坐标到另一个坐标的滑动
     * </p>
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param startX 起始坐标的X轴值 X-axis value for the starting coordinate
     * @param startY 起始坐标的Y轴值 Y-axis value for the starting coordinate
     * @param endX   结束坐标的X轴值  X-axis value for the ending coordinate
     * @param endY   结束坐标的Y轴值 Y-axis value for the ending coordinate
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 滑动成功, false 滑动失败
     */
    swipeToPoint(startX: any, startY: any, endX: any, endY: any, duration: any): any;
    /**
     * 执行输入事件
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param action    动作，请看类:  MotionEvent.ACTION_*
     * @param x         x坐标    x coordinate
     * @param y         y坐标    y coordinate
     * @param metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1 any meta info
     * @return 布尔型 true 代表成功 false代表失败
     */
    inputEvent(action: any, x: any, y: any, metaState: any): any;
    /**
     * 执行按下输入事件
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchDown(x: any, y: any): any;
    /**
     * 执行移动输入事件
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchMove(x: any, y: any): any;
    /**
     * 执行弹起输入事件
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param x         x坐标
     * @param y         y坐标
     * @return 布尔型 true 代表成功 false代表失败
     */
    touchUp(x: any, y: any): any;
    /**
     * <p>
     * 获取当前的视图为XML格式，并保存到文件中
     * </p>
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param compressed 是否压缩
     * @return string 文件路径
     */
    dumpWindowHierarchy(compressed: any): string;
    /**
     * 将元素节点变成XML
     * @return string xml数据
     */
    dumpXml(): string;
    /**
     * 取得一张屏幕的截图
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param filename 文件路径
     * @param scale    缩放比例 0 ~ 1
     * @param quality  图片质量 0 - 100
     * @return string 截图的路径
     */
    takeScreenshotMore(filename: any, scale: any, quality: any): string;
    /**
     * 快速截屏幕的截图
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param filename 文件路径
     * @return string 截图的路径
     */
    fastScreenshot(filename: any): string;
    /**
     * 截图为bitmap
     * @return bitmap null或者bitmap对象
     */
    fastScreenshotBitmap(): any;
    /**
     * 冻结设备旋转
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param freeze true 禁止旋转，false 可以旋转
     */
    freezeRotation(freeze: any): void;
    /**
     * 模拟旋转设备
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param dir Left 或者 l, Right 或者 r, Natural 或者 n
     */
    setOrientation(dir: any): void;
    /**
     * 打开通知栏
     *
     * @return 布尔型 true 成功, else 失败
     */
    openNotification(): any;
    /**
     * 打开快速设置
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功, else 失败
     */
    openQuickSettings(): any;
    /**
     * 返回桌面
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return boolean | true 成功 false 失败
     */
    home(): any;
    /**
     * 分割屏幕
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    splitScreen(): any;
    /**
     * 模拟电源键
     * @return 布尔型 true 成功 false 失败
     */
    power(): any;
    /**
     * 返回键
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return  布尔型 true 成功 false 失败
     */
    back(): any;
    /**
     * 打开菜单
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    menu(): any;
    /**
     * Enter键
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    enter(): any;
    /**
     * 删除键
     *
     * @return 布尔型 true 成功 false 失败
     */
    delete(): any;
    /**
     * 最近使用的APP
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    recentApps(): any;
    /**
     * 搜索
     *
     * @return 布尔型 true 成功 false 失败
     */
    search(): any;
    /**
     * 获取屏幕截图并保存到文件中 ,(底层命令截图 速度大概1-2秒)
     *
     * @param fileName 文件路径
     * @return 布尔型 截图成功返回 true
     */
    takeScreenshot(fileName: any): any;
    /**
     * 截图返回autoimage对象 ,(底层命令截图 速度大概1-2秒)
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return AutoImage 对象或者null
     */
    takeScreenshotImage(): any;
    /**
     * 模拟按键,例如home back等
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param key 对应的值分别为 home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power
     * @return 布尔型 true 成功, false 失败
     */
    pressKey(key: any): any;
    /**
     * 模拟键盘输入
     *
     * @param keyCode 键盘的key，参见KeyEvent.KEYCODE_*
     * @return 布尔型 true 代表成功，false 代表失败
     */
    pressKeyCode(keyCode: any): any;
    /**
     * 模拟键盘输入
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param keyCode   keyCode 键盘的key，参见KeyEvent.KEYCODE_*
     * @param metaState metaState  控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1
     * @return 布尔型 true 代表成功，false 代表失败。
     */
    pressKeyCodeWithMetaState(keyCode: any, metaState: any): any;
    /**
     * 唤醒设备
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     */
    wakeUp(): void;
    /**
     * 检查屏幕是否是点亮的
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 是，false 否
     */
    isScreenOn(): any;
    /**
     * 熄灭屏幕
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功 false 失败
     */
    sleepScreen(): any;
    /**
     * 通过选择器清除输入框的文字
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 选择器数组
     * @return boolean 布尔型| true代表成功
     */
    clearTextField(selectors: any): any;
    /**
     * 通过选择器滑动元素到某个坐标点
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 节点选择器
     * @param endX      结束的X坐标
     * @param endY      结束的Y坐标
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 滑动成功，false 滑动失败
     */
    swipe(selectors: any, endX: any, endY: any, duration: any): any;
    /**
     * 通过选择器获取元素文本
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 节点选择器
     * @return 字符串集合 文本字符串
     */
    getText(selectors: any): any;
    lockNode(): any;
    releaseNode(): any;
    /**
     * 通过选择器获取节点信息
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param selectors 节点选择器
     * @return 节点信息集合 节点对象的信息
     */
    getNodeInfo(selectors: any, timeout: any): NodeInfo[];
    getNodeInfoForNode(nid: any, selectors: any, timeout: any): NodeInfo[];
    /**
     * 长点击选择器选中的元素
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 选择器 {@link SelectorList}
     * @return 布尔型 true 成功 false 失败
     */
    longClick(selectors: any): any;
    longClickEx(selectors: any): any;
    /**
     * 长按某个坐标
     *
     * @param x x坐标
     * @param y y坐标
     * @return 布尔型 true 成功，false 失败
     */
    longClickPoint(x: any, y: any): any;
    /**
     * 随机长点击区域中的坐标
     * @param rect 区域 {@link Rect}
     * @return 布尔型 成功或者失败
     */
    longClickRandomRect(rect: any): any;
    /**
     * 通过选择器拖动某个元素到目标元素
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 选择器 {@link SelectorList}
     * @param destObj   目标元素选择器
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 成功 false 失败
     */
    dragTo(selectors: any, destObj: any, duration: any): any;
    /**
     * 通过选择器拖动某个元素到目标X Y 坐标
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 原始元素选择器
     * @param destX     目标 X 坐标
     * @param destY     目标 Y 坐标
     * @param duration 持续时长 单位毫秒
     * @return 布尔型 true 成功 false 失败
     */
    dragToPoint(selectors: any, destX: any, destY: any, duration: any): any;
    /**
     * 通过选择器进行缩小手势
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 元素选择器
     * @param percent   对象斜线长度对夹手势的百分比  0.0f and 1.0f
     * @return 布尔型 true 此手势的所有触摸事件都成功注入 false 失败
     */
    pinchIn(selectors: any, percent: any): any;
    /**
     * 通过选择器进行放大手势
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors 元素选择器
     * @param percent   对象斜线长度对夹手势的百分比 0.0f and 1.0f
     * @return 布尔型 true 此手势的所有触摸事件都成功注入 false 失败
     */
    pinchOut(selectors: any, percent: any): any;
    /**
     * 通过选择器点击元素
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors {@link SelectorList} 元素选择器
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    click(selectors: any): any;
    setFocus(selectors: any): any;
    setFocusNodeInfo(uniqueId: any): any;
    clickEx(selectors: any): any;
    clickExNodeInfo(uniqueId: any): any;
    longClickExNodeInfo(uniqueId: any): any;
    /**
     * 是否滚动到底部了，如果查不到元素也会返回false
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param direction 滚动方向 UP,DOWN,LEFT,RIGHT
     * @param selectors 选择器
     * @return false 代表未滚动到位，true 代表滚动完成了
     */
    isScrollEnd(direction: any, selectors: any): any;
    /**
     * 通过选择器随机点击元素，有可能选中的是多个元素节点
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors {@link SelectorList}元素选择器
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    clickRandom(selectors: any): any;
    clickRandomEx(selectors: any): any;
    /**
     * 通过选择器输入数据
     * <p>
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors {@link SelectorList}元素选择器
     * @param content   数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    inputText(selectors: any, content: any): any;
    pasteText(selectors: any, content: any): any;
    /**
     * 使用输入法输入内容
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param content   数据字符串
     * @param selectors {@link SelectorList}元素选择器
     * @return 布尔型 true 代表成功 false代表失败
     */
    imeInputText(selectors: any, content: any): any;
    imeInputKeyCode(selectors: any, content: any): any;
    /**
     * 设置当前的输入法，用于输入数据
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 代表成功 false代表失败
     */
    setCurrentIme(): any;
    /**
     * 恢复到之前的输入法
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 代表成功 false代表失败
     */
    restoreIme(): any;
    /**
     * 通过选择器判断元素是否存在
     *
     * @param selectors {@link SelectorList}元素选择器
     * @return 布尔型 true 代表成功 false代表失败
     */
    has(selectors: any): any;
    /**
     * 通过选择器截取选中的元素截图,(底层命令截图 速度大概1-2秒)
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param selectors {@link SelectorList}元素选择器
     * @param filePath  最终文件路径
     * @return 布尔型 true 代表成功 false代表失败
     */
    takeNodeScreenshot(selectors: any, filePath: any): any;
    /**
     * 执行shell命令
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param command 命令字符串
     * @return 字符串 shell结果
     */
    execShellCommand(command: any): string;
    /**
     * 执行shell命令，包含正常和错误结果，返回的是JSON数组，自己判断正确还是错误
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param command 命令字符串
     * @return JSON数组 shell结果
     */
    execShellCommandEx(command: any): any;
    /**
     * 取得当前运行的Activity类名
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string 类名字符串
     */
    getRunningActivity(): string;
    /**
     * 取得当前运行的App包名
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string 包名字符串
     */
    getRunningPkg(): string;
    getCurrentRunningPkg(): string;
    /**
     * 随机点击区域中的坐标
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param rect 区域 {@link Rect}
     * @return 布尔型 成功或者失败
     */
    clickRandomRect(rect: any): any;
    /**
     * 将通知发射处理，相当于点击了通知栏
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param seqId 通知信息的序列号
     * @return 布尔型 true 代表发射通知成功
     */
    shotNotification(seqId: any): any;
    /**
     * 通知取消处理
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param seqId 通知栏的对象ID
     * @return 布尔型 true 代表取消通知成功
     */
    cancelNotification(seqId: any): any;
    ignoreNotification(seqId: any): any;
    /**
     * 从缓存中清除所有的Toast消息数据
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     */
    clearAllToast(): void;
    /**
     * 从缓存中清除所有的通知栏消息数据
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     */
    clearAllNotification(): void;
    /**
     * 从通知栏取得多个消息
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param pkg 包名
     * @param size 需要取得多少个消息
     * @return null 代表没有
     */
    getLastNotification(pkg: any, size: any): NotificationInfo[];
    /**
     * 从Toast取得多个消息
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param pkg 包名
     * @param size 需要取得多少个消息
     * @return null 代表没有
     */
    getLastToast(pkg: any, size: any): ToastInfo[];
    /**
     * 关闭屏幕，屏幕不亮，但是依然可以自动点击，不同于sleepScreen
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功，false 失败
     */
    closeScreen(): any;
    /**
     * 点亮屏幕，和closeScreen相反的动作
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 布尔型 true 成功，false 失败
     */
    lightScreen(): any;
    /**
     * 请求监听状态栏的权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param timeout 请求权限超时时间 单位是秒
     * @return true 代表请求权限成功，false代表失败
     */
    requestNotificationPermission(timeout: any): any;
    /**
     * 检查是否含有状态栏监听权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @return true 有权限,false 代表无权限
     */
    hasNotificationPermission(): any;
    /**
     * 通过选择器 获取第一个节点信息
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本:  Android 5.0 以上
     *
     * @param selectors 选择器
     * @return {@link NodeInfo} 对象或者null
     */
    getOneNodeInfo(selectors: any, timeout: any): any;
    getOneNodeInfoForNode(nid: any, selectors: any, timeout: any): NodeInfo;
    /**
     * 取得父级
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return NodeInfo {NodeInfo 对象|null}
     */
    getNodeInfoParent(uniqueId: any): NodeInfo;
    /**
     * 取得单个子节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param index 子节点的索引
     * @return NodeInfo {NodeInfo 对象|null}
     */
    getNodeInfoChild(uniqueId: any, index: any): NodeInfo;
    /**
     * 取得所有子节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return   NodeInfo 数组 选择到的节点集合
     */
    getNodeInfoAllChildren(uniqueId: any): NodeInfo[];
    /**
     * 当前节点的所有兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return NodeInfo 节点集合
     */
    getSiblingNodeInfo(uniqueId: any): NodeInfo[];
    /**
     * 在当前节点前面的兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return   NodeInfo 数组 选择到的节点集合
     */
    getNextSiblingNodeInfo(uniqueId: any): NodeInfo[];
    /**
     * 在当前节点后面的兄弟节点
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @return NodeInfo 数组 选择到的节点集合
     */
    getPreviousSiblingNodeInfo(uniqueId: any): NodeInfo[];
    /**
     * 对某个节点输入数据
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    inputTextNodeInfo(uniqueId: any, content: any): any;
    pasteTextNodeInfo(uniqueId: any, content: any): any;
    /**
     * 使用输入法对某个节点输入数据
     * @param uniqueId NodeInfo 中的uniqueId属性
     * @param rect  NodeInfo 中的rect属性
     * @param content 数据字符串
     * @return 布尔型 true 代表成功 false代表失败
     */
    imeInputTextNodeInfo(uniqueId: any, rect: any, content: any): any;
    imeInputKeyCodeNodeInfo(uniqueId: any, rect: any, content: any): any;
    /**
     * 清除节点文本数据
     * <Br/>
     * 运行环境: 无障碍模式
     * <Br/>
     * 兼容版本: Android 7.0 以上
     *
     * @param uniqueId  NodeInfo 中的uniqueId属性
     */
    clearTextFieldNodeInfo(uniqueId: any): any;
    /**
     * 刷新节点缓存
     * @param uniqueId  NodeInfo 中的uniqueId属性
     */
    refreshNodeInfo(uniqueId: any): any;
    /**
     * 节点信息是否有效
     * @param uniqueId  NodeInfo 中的uniqueId属性
     * @return {boolean}|布尔型 true代表有效
     */
    isValidNodeInfo(uniqueId: any): boolean;
    /**
     * 设置获取节点的模式
     * @param mode 1 是增强型， 2 是快速型，默认是增强型
     * @param fetchInvisibleNode 是否抓取隐藏的元素
     * @param fetchNotImportantNode 是否抓取不重要的元素
     * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
     * @return {boolean|*}
     */
    setFetchNodeMode(mode: any, fetchInvisibleNode: any, fetchNotImportantNode: any, algorithm: any): boolean | any;
    setNodeDumpParam(data: any): any;
    /**
     * 设置要屏蔽的节点
     * 设置后，系统不会抓取这些节点数据
     * @param blockNode 字符串，以英文逗号分割，例如 clz,index,bounds
     * @return {boolean|*}
     */
    setBlockNode(blockNode: any): boolean | any;
    removeNodeFlag(flag: any): any;
    addNodeFlag(flag: any): any;
    /**
     * 多点触摸<br/>
     * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2<br/>
     * x: X坐标<br/>
     * y: Y坐标<br/>
     * pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指<br/>
     * delay: 该动作延迟多少毫秒执行
     * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]
     * @param touch2 第2个手指的触摸点数组
     * @param touch3 第3个手指的触摸点数组
     * @param timeout 多点触摸执行的超时时间，单位是毫秒
     * @return boolean|布尔型
     */
    multiTouch(touch1: any, touch2: any, touch3: any, timeout: any): any;
    multiTouch2(pointArrays: any, timeout: any): any;
    /**
     * 向前滚动
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollForward(selectors: any): any;
    scrollForwardNodeInfo(uniqueId: any): any;
    /**
     * 向后滚动
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollBackward(selectors: any): any;
    scrollBackwardNodeInfo(uniqueId: any): any;
    /**
     * 向左滚动
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollLeft(selectors: any): any;
    scrollLeftNodeInfo(uniqueId: any): any;
    /**
     * 向右滚动
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollRight(selectors: any): any;
    scrollRightNodeInfo(uniqueId: any): any;
    /**
     * 向上滚动
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollUp(selectors: any): any;
    scrollUpNodeInfo(uniqueId: any): any;
    /**
     * 向下滚动
     *
     * @param selectors {@link S}数组
     * @return 布尔型 true 代表点击成功 false代表点击失败
     */
    scrollDown(selectors: any): any;
    scrollDownNodeInfo(uniqueId: any): any;
    readResAutoImage(fileName: any): any;
    /**
     * 获取最近的节点事件出发的时间
     *
     * @return {number} 长整型时间，毫秒级别
     */
    lastNodeEventTime(): number;
    /**
     * 长按住事件
     * @param x x坐标
     * @param y y坐标
     * @param delay 长按时间  毫秒
     * @return {boolean} true 成功 false 失败
     */
    press(x: any, y: any, delay: any): boolean;
    /**
     * 设置代理模式参数
     * @param data 参数表
     *  例子: {"remoteCallTimeout":10000}
     * remoteCallTimeout: 代理调用的超时时间，单位是毫秒，默认是10秒
     * @return {boolean} true 成功 false 失败
     */
    setAgentCallParam(data: any): boolean;
}
declare var agentEvent: EventWrapper;
declare function Console(): void;
declare class Console {
    timerMap: {};
    log(msg: any, ...args: any[]): void;
    logLine(line: any, msg: any, ...args: any[]): void;
    /**
     * 计时开始
     * @param label 标签
     * @return  {number} 当前时间
     */
    time(label: any): number;
    /**
     * 计时结束
     * @param label 标签
     * @return {number} 与计时开始的差值
     */
    timeEnd(label: any): number;
}
declare function HotUpdateWrapper(): void;
declare class HotUpdateWrapper {
    /**
     * 获取热更新得请求结果
     * @return {string} 字符串
     */
    getUpdateResp(): string;
    /**
     * 获取热更新重新的错误
     * @return {string} 字符串
     */
    getErrorMsg(): string;
    /**
     * 请求热更新接口，如果是false，也有可能是无需更新，可以使用getErrorMsg查看具体得信息
     * @param updateUrl 更新地址 不写，就使用update.json配置的数据
     * @param version 当前版本，使用整形数据，例如 1这样的数字
     * @param appendDeviceInfo 是否拼接设备信息数据 true 或者 false
     * @param timeout 请求超时时间 单位是毫秒
     * @return {boolean} true 代表需要更新 false代表无需更新
     */
    updateReq(updateUrl: any, version: any, appendDeviceInfo: any, timeout: any): boolean;
    /**
     * 下载热更新请求到得IEC文件
     * @return {string} 下载后热更新文件得路径，如果为空，也有可能是无需更新
     */
    updateDownload(): string;
}
/**
 * 发送钉钉消息
 * 适合EC 9.11.0+
 * @param url 群组/部门 机器人Webhook地址
 * @param secret 群组/部门 机器人Webhook密钥, 可以不写使用关键字过滤方式
 * @param msg 要发送的消息
 * @param atMobile at手机号，多个用英文逗号隔开
 * @param atAll 是否at所有人，写true或者false
 * @return {string} 调用钉钉返回的json字符串结果,格式 {"errcode":0,"errmsg":"ok"}，errcode=0代表成功其他都是错误
 */
declare function sendDingDingMsg(url: any, secret: any, msg: any, atMobile: any, atAll: any): string;
/**
 * 休眠
 * @param miSecond 毫秒
 */
declare function sleep(miSecond: any): void;
/**
 * 脚本是否处于暂停中
 * 适配 EC 10.0.0+
 * @return {boolean} true 代表脚本处于暂停中
 */
declare function isScriptPause(): boolean;
/**
 * 设置脚本暂停或者继续
 * 适配 EC 10.0.0+
 * @param pause true 代表暂停脚本，false代表继续
 * @param timeout 自动恢复时间单位毫秒，0 代表不自动恢复，等待外部交互后恢复，大于0代表到了时间自动恢复运行
 * @return {boolean} true 代表脚本处于暂停中，false 代表继续运行中
 */
declare function setScriptPause(pause: any, timeout: any): boolean;
declare function toast(msg: any, extra?: any): void;
declare function toast1(msg: any): void;
declare function toast2(msg: any): void;
declare function getHandler(): any;
declare function formatlog(obj: any): any;
/**
 * 设置日志等级,可用于关闭或开启日志
 * @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug<info<warn<error<off，
 * 例如 off代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
 * @param displayToast 是否展示toast消息
 * @return {boolean} 布尔型 true代表成功 false代表失败
 */
declare function setLogLevel(level: any, displayToast: any): boolean;
/**
 * 调试日志
 * @param msg
 */
declare function logd(msg: any, ...args: any[]): void;
declare function logdLine(line: any, msg: any, ...args: any[]): void;
/**
 * 信息日志
 * @param msg
 */
declare function logi(msg: any, ...args: any[]): void;
declare function logiLine(line: any, msg: any, ...args: any[]): void;
/**
 * 错误日志
 * @param msg
 */
declare function loge(msg: any, ...args: any[]): void;
declare function logeLine(line: any, msg: any, ...args: any[]): void;
/**
 * 警告日志
 * @param msg
 */
declare function logw(msg: any, ...args: any[]): void;
declare function logwLine(line: any, msg: any, ...args: any[]): void;
/**
 * 设置保存日志信息到文件中
 * @param save 是否保存
 * @param path 自定义的文件夹
 * @param size 每个文件分隔的尺寸
 * @return 保存日志文件的目录
 */
declare function setSaveLogEx(save: any, path: any, size: any, fileName: any): any;
declare function setSaveLog(save: any, path: any, size: any): any;
/**
 * 打印日志的时候，悬浮窗是否展示行号，正式发布，可以不展示行号，不影响调试和保存在文件的日志
 * @param ds  true 代表显示， false 不显示
 */
declare function setFloatDisplayLineNumber(ds: any): any;
/**
 * 清除日志
 * @param lines 整型，要清除的行数，-1 代表全部清除
 */
declare function clearLog(lines: any): void;
/**
 * 打开EC系统设置页面
 * @return true 成功 false 失败
 */
declare function openECSystemSetting(): any;
/**
 * 打开EC云控设置
 * @return true 成功 false 失败
 */
declare function openECloudSetting(): any;
/**
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "node_service":"需要",<br/>
 *     "proxy_service":"不需要",<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *     "daemon_service":"是",<br/>
 *      "volume_start_tc":"否",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  node_service : 是否需要启动节点获取服务 值有 需要，不需要两种
 *  proxy_service : 是否需要启动底层代理服务 值有 需要，不需要两种
 *  running_mode : 手势执行服务 值有 无障碍，代理两种
 *  auto_start_service : 开机启动服务 值有 是，否 两种
 *  daemon_service : 守护服务 值有 是，否 两种
 *  volume_start_tc : 音量键启停 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 */
declare function setECSystemConfig(params: any): any;
/**
 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.apk)或者是文件路径(例如 /sdcard/ab.apk)加载
 * @return true 载入成功， false载入失败
 */
declare function loadDex(path: any): any;
/**
 * 设置重复加载dex，apk，防止插件过大导致加载时间过长
 * @param r 是否重复加载，true 可以重复加载，false 不可以重复加载
 * @return true 载入成功， false载入失败
 */
declare function setRepeatLoadDex(r: any): any;
/**
 * 执行JS文件或者内容
 * @param type 1=文件，2=直接是JS内容
 * @param content 路径例如/sdcard/a.js或者js的内容
 * @return 布尔型，true代表执行成功， false代表失败
 */
declare function execScript(type: any, content: any): boolean;
/**
 * 载入jar文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.jar)或者是文件路径(例如 /sdcard/ab.jar)加载
 * @return true 载入成功， false载入失败
 */
declare function loadJar(path: any): any;
/**
 * 退出脚本执行
 */
declare function exit(): void;
/**
 * 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
 * @return true 已退出
 */
declare function isScriptExit(): any;
/**
 * 重启脚本，适合无限循环，或者有异常的情况可以下载最新的iec再次执行，避免进入UI才能热更新,
 * 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
 * @param path 新的IEC路径，如果不需要可以填写null
 * @param stopCurrent 是否停止当前的脚本
 * @param delay 延迟多少秒后执行
 * @return {boolean} true 代表成功 false 代表失败
 */
declare function restartScript(path: any, stopCurrent: any, delay: any): boolean;
/**
 * 保存res文件夹中的资源文件到指定的路径
 * @param fileName 文件名称，不要加res前缀
 * @param path 要保存到的路径地址，例如/sdcard/aa.txt
 * @return boolean|布尔型 true代表保存成功
 */
declare function saveResToFile(fileName: any, path: any): any;
/**
 * 读取res文件夹中的资源文件，并返回字符串
 * @param fileName 文件名称，不要加res前缀
 * @return {string} 如果是null代表没内容
 */
declare function readResString(fileName: any): string;
/**
 * 查找IEC的文件
 * 适合版本 EC 8.0.0+
 * @param dir       文件夹名称，null代表只读res/文件夹，没有默认是res文件夹，可以是类似 res/aaa/这样的文件夹
 * @param names     文件名称前缀,null代表不匹配， 例如aaa,多个前缀用|分割，例如 aaa|bb|cc
 * @param ext       文件扩展名 ,null代表不匹配，例如.png,多个扩展用|分割，例如 .png|.jpg|.bmp
 * @param recursion 是否递归子目录，true代表递归
 * @return {array} 文件名称JSON数组
 */
declare function findIECFile(dir: any, names: any, ext: any, recursion: any): any[];
/**
 * 读取IEC文件中的资源文件，并返回字符串
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {string} 如果是null代表没内容
 */
declare function readIECFileAsString(fileName: any): string;
/**
 * 读取IEC文件中的资源文件，并返回java的直接数组
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {字节数组} 如果是null代表没内容
 */
declare function readIECFileAsByte(fileName: any): any;
/**
 * 读取res文件夹中的资源文件，并返Bitmap图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return {Bitmap} 如果是null代表没内容
 */
declare function readResBitmap(fileName: any): any;
/**
 * 启动自动化环境
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
declare function startEnv(): any;
/**
 * 守护自动化环境,
 * 如果是激活或者无障碍保活的情况下，尽量保证自动服务不掉线
 * @param daemon 是否守护自动化环境 true 是，false 否
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
declare function daemonEnv(daemon: any): any;
/**
 * 关闭自动化环境
 * @param skinAccPage 无障碍模式停止失败 是否跳转到开启无障碍页面
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
declare function closeEnv(skinAccPage: any): any;
/**
 * 设置壁纸服务函数
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
declare function setWallpaperService(): any;
/**
 * 是否设置壁纸成功
 * @return 布尔型  true代表成功，false代表失败
 */
declare function isWallpaperServiceSet(): any;
/**
 * 自动化服务是否正常
 * @return 布尔型  true代表正常，false代表不正常
 */
declare function isServiceOk(): any;
/**
 * 设置要执行的IEC文件路径
 * @param path 文件路径
 * @return 布尔型，true代表成功  false代表失败
 */
declare function setIECPath(path: any): any;
/**
 * 获取要执行的IEC文件路径
 * @return {string}，null代表无。ts.iec 代表是包内iec文件，其他代代表存储路径中的文件
 */
declare function getIECPath(): string;
declare function javaString2string(x: any): string;
declare function setStopCallback(callback: any): void;
declare function setExceptionCallback(callback: any): void;
/**
 * 对事件进行监听
 * @param event 事件类型 类型有:
 * activity-change 页面切换，OK
 * notification-show：状态栏通知展示， OK
 * toast-show：Toast消息展示， OK
 * key-down：按键按下， OK
 * key-up：按键弹起 OK
 * acc-service-interrupt：无障碍服务被中断 OK
 * acc-service-destroy： 无障碍服务被销毁 OK
 * acc-event：无障碍节点事件 OK
 * acc-service-connected: 无障碍服务连接成功 OK
 * auto-service-status: 自动化服务可用状态
 *
 * @param callback 事件回调
 * @return {boolean}  | true 成功，false失败
 */
declare function observeEvent(event: any, callback: any): boolean;
/**
 * 取消事件监听
 * @param event 事件类型
 * @return {boolean} | true 成功，false失败
 */
declare function cancelObserveEvent(event: any): boolean;
/**
 * 时间函数
 * @return {number} 毫秒级别的long时间
 */
declare function time(): number;
/**
 * 申请动态权限
 * 适合版本 EC 7.9.0+
 * @param permissionArray 动态权限数组，可以是多个
 * @timeout 申请超时时间 单位是毫秒
 * @return {boolean} true 代表有权限  false代表无权限或申请失败
 */
declare function requestRuntimePermission(permissionArray: any, timeout: any): boolean;
/**
 * 格式化时间函数例如：yyyy-MM-dd HH:mm:ss
 * @return {string} 格式话之后的当前时间
 */
declare function timeFormat(format: any): string;
declare function object2JsonString(o: any): any;
/**
 * 激活自己
 * @param activeType 激活类型，0 自动，1 模式1 2 模式2
 * @param timeout 超时时间
 * @return {string} 激活成功：代表成功，其他都是错误消息
 */
declare function activeSelf(activeType: any, timeout: any): string;
/**
 * 通过IP激活其他设备
 * @param ip 设备的IP
 * @param activeType 激活类型，0 自动，1 模式1 2 模式2
 * @param timeout 超时时间
 * @return {string} 激活成功：代表成功，其他都是错误消息
 */
declare function activeDevice(ip: any, activeType: any, timeout: any): string;
/**
 * 是否同步日志到中控
 * 适合版本 EC 安卓 9.27.0+
 * @param logSyncToCenter true代表同步  false代表不同步
 */
declare function commonLogToCenter(logSyncToCenter: any): void;
/**
 * 取得中控发过来的任务参数信息
 * 中控启动脚本，可以配置参数，在这里使用本函数获取参数，给脚本使用
 * 适合版本 EC 安卓 9.27.0+
 * 注意：这个需要使用参数配置,读取顺序是 优先读取单个设备配置 ，如果单个设备配置无任何数据，就读取 全局配置，
 * 返回参数中 含有 __from_global__ 这样的key，代表是来源于全局参数
 * @return {JSON} 对象
 **/
declare function getCenterTaskInfo(): JSON;
declare var modules: {};
declare var console: Console;
declare var hotupdater: HotUpdateWrapper;
declare function CenterApiWrapper(): void;
declare class CenterApiWrapper {
    /**
     * 取得中控发过来的任务参数信息
     * 中控启动脚本，可以配置参数，在这里使用本函数获取参数，给脚本使用
     * 适合版本 EC 安卓 9.29.0+
     * 注意：这个需要使用参数配置,读取顺序是 优先读取单个设备配置 ，如果单个设备配置无任何数据，就读取 全局配置，
     * 返回参数中 含有 __from_global__ 这样的key，代表是来源于全局参数
     * @return {JSON} JSON对象
     **/
    getCenterTaskInfo(): JSON;
    /**
     * 读取数据文件的内容
     * 适配EC 9.29.0+
     * @param name 文件名称，中控数据功能的数据文件名称
     * @return {JSON} JSON对象
     */
    getFileData(name: any): JSON;
    /**
     * 新增数据文件
     * 适配EC 9.29.0+
     *
     * @param name    文件名称，中控数据功能的数据文件名称
     * @param content 文件内容
     * @param rewrite 是否允许覆盖原有文件， 1 是 2 否，如果参数是2，数据文件存在，将返回错误信息
     * @param append  追加模式， 1 代表是追加内容，2 代表不追加
     * @return {JSON} JSON对象
     */
    addFileData(name: any, content: any, rewrite: any, append: any): JSON;
    /**
     * 删除数据文件
     * 适配EC 9.29.0+
     * @param name 文件名称，中控数据功能的数据文件名称
     * @return {JSON} JSON对象
     */
    deleteFile(name: any): JSON;
    /**
     * 插入数据
     * 适配EC 9.29.0+
     * @param name    文件名称，中控数据功能的数据文件名称
     * @param content 要插入的内容
     * @param create  是否创建文件 1 是 2 否，如果参数是2，文件不存在的情况下，将返回错误信息
     * @param append  追加模式， 1 代表是追加内容，2 代表不追加
     * @return {JSON} JSON对象
     */
    insertFileData(name: any, content: any, create: any, append: any): JSON;
    /**
     * 弹出数据
     * 适配EC 9.29.0+
     * @param name    文件名称，中控数据功能的数据文件名称
     * @param popType 获取数据方式，1 头部获取，2 尾部获取，3 随机获取
     * @return {JSON} JSON对象
     */
    popFileData(name: any, popType: any): JSON;
    /**
     * 删除一行数据
     * 适配EC 9.29.0+
     * @param name    文件名称，中控数据功能的数据文件名称
     * @param content 要删除的内容
     * @return {JSON} JSON对象
     */
    removeOneLineData(name: any, content: any): JSON;
    /**
     * 追加一行数据
     * 适配EC 9.29.0+
     *
     * @param name       文件名称，中控数据功能的数据文件名称
     * @param content    要追加的内容
     * @param appendType 追加位置 1 首部  2 尾部
     * @return {JSON} JSON对象
     */
    appendOneLineData(name: any, content: any, appendType: any): JSON;
}
declare let centerApi: CenterApiWrapper;
declare function DeviceWrapper(): void;
declare class DeviceWrapper {
    /**
     * 取得屏幕宽度
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 整型
     */
    getScreenWidth(): any;
    /**
     * 取得屏幕高度
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 整型
     */
    getScreenHeight(): any;
    /**
     * 获取imei号
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string
     */
    getIMEI(): string;
    /**
     * 取得手机品牌
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return string
     */
    getBrand(): string;
    /**
     * 取得手机机型
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 字符串
     */
    getModel(): string;
    /**
     * 取得手机卡号
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 字符串
     */
    getImsi(): string;
    /**
     * 取得手机ROM序列号
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 字符串
     */
    getSerial(): string;
    /**
     * 取得手机SDK版本号，例如 23
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 整型
     */
    getSdkInt(): any;
    /**
     * 取得手机版本号,例如 6.0等字符串
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 字符串
     */
    getOSVersion(): string;
    /**
     * 取得Android ID
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 字符串
     */
    getAndroidId(): string;
    /**
     * 取得屏幕的亮度
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 整型
     */
    getBrightness(): any;
    /**
     * 设置屏幕的亮度
     *
     * @param b 整型
     */
    setBrightness(b: any): void;
    /**
     * 取得屏幕亮度模式
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @return 整型， 0 手动调节，1 自动调节
     */
    getBrightnessMode(): any;
    /**
     * 设置屏幕亮度调节模式
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param b 0 手动调节，1 自动调节
     */
    setBrightnessMode(b: any): void;
    /**
     * 取得音乐的音量
     * @return {undefined}
     */
    getMusicVolume(): undefined;
    /**
     * 设置音乐的音量
     * @param b 整型
     */
    setMusicVolume(b: any): void;
    /**
     * 获取通知的音量
     * @return {undefined}
     */
    getNotificationVolume(): undefined;
    /**
     * 设置通知的音量
     * @param b 整型
     */
    setNotificationVolume(b: any): void;
    /**
     * 获取闹钟的音量
     * @return {undefined}
     */
    getAlarmVolume(): undefined;
    /**
     * 设置闹钟的音量
     * @param b 整型
     */
    setAlarmVolume(b: any): void;
    /**
     * 获取音乐最大音量
     * @return {undefined}
     */
    getMusicMaxVolume(): undefined;
    /**
     * 获取通知最大音量
     * @return {undefined}
     */
    getNotificationMaxVolume(): undefined;
    /**
     * 获取闹钟最大音量
     * @return {undefined}
     */
    getAlarmMaxVolume(): undefined;
    /**
     * 取得电量
     * @return {undefined}
     */
    getBattery(): undefined;
    /**
     * 取得总内存
     * @return {undefined}
     */
    getTotalMem(): undefined;
    /**
     * 取得可用内存
     * @return {undefined}
     */
    getAvailMem(): undefined;
    /**
     * 是否正在充电
     * @return {undefined}
     */
    isCharging(): undefined;
    /**
     * 发出震动 单位是毫秒
     * @param millis
     */
    vibrate(millis: any): void;
    /**
     * 取消震动
     */
    cancelVibration(): void;
    /**
     * 获取mac地址
     * @return 字符串或者null
     */
    getMacAddress(): string;
    /**
     * 保持屏幕唤醒状态
     */
    keepScreenOn(): void;
    /**
     * 保持设备唤醒
     * @param flag 参考安卓PowerManager中的唤醒标准
     */
    keepAwake(flag: any): void;
    /**
     * 保持设备昏暗状态
     */
    keepScreenDim(): void;
    /**
     * 取消保持唤醒状态
     */
    cancelKeepingAwake(): void;
    /**
     * 取得talkingdata三方统计定义的唯一设备标识
     * @return {字符串}
     */
    tcDeviceId(): string;
}
declare var device: DeviceWrapper;
declare function ECloudWrapper(): void;
declare class ECloudWrapper {
    log(msg: any, ...args: any[]): void;
    /**
     * 普通的打印的日志(logd,logi,logw,loge)是否同步到云控，默认是同步的，可以不使用ecloud.log的时候,云控也可以看到日志
     * @param logSyncToCloud true 代表同步 false 代表不同步
     */
    commonLogToCloud(logSyncToCloud: any): void;
    /**
     * 取得当前任务的信息
     * @return {JSON} 对象
     */
    getTaskInfo(): JSON;
    /**
     * 获取机器编号
     * @return {string} 机器编码或者null
     */
    getDeviceNo(): string;
    /**
     * 通过资源组取得一组资源
     * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
     * @param map 可扩展参数表
     *   例如 {"groupName":"资源组1"}
     *   key定义：
     *   groupName = 资源组名称
     *   pageNum= 页码 例如 1代表第一页
     *   pageSize= 每页个数 例如 10 代表一页有10个
     *
     * @return {JSON} 资源JSON对象
     */
    getResources(map: any): JSON;
    /**
     * 上传要存储的数据
     * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
     * @param map 可扩展参数表
     *   例如
     * {
     *   "groupName":"123",
     *	"dataKey": "11111",
     *  "content":"123"
     * }
     *   key定义：
     *   groupName = 数据的组名，如果云端没有这个组，会自动创建
     *   dataKey = 存储数据的唯一标示
     *   content = 数据字符串
     * @return {boolean} true代表成功 false 代表失败
     */
    uploadStorageData(map: any): boolean;
    /**
     * 通过数据组名取得一组数据
     * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
     * @param map 可扩展参数表
     *   例如 {"groupName":"数据组1"}
     *   {"dataKey":"key"}
     *   key定义： groupName = 数据组名称
     *   dataKey = 数据唯一标示
     *   pageNum= 页码 例如 1代表第一页
     *   pageSize= 每页个数 例如 10 代表一页有10个
     * @return {JSON} JSON对象
     */
    getStorageDatas(map: any): JSON;
    /**
     * 子任务失败
     * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
     *  @param map 可扩展参数表
     *   例如
     * {
     *   "subTaskId":123,
     *	 "msg": "因为找不到XXX失败"
     * }
     * @return {boolean} true代表成功 false 代表失败
     */
    subTaskFail(map: any): boolean;
    /**
     * 子任务成功
     * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
     *  @param map 可扩展参数表
     *   例如
     * {
     *   "subTaskId":123,
     *	"msg": "任务成功"
     * }
     * @return {boolean} true代表成功 false 代表失败
     */
    subTaskOk(map: any): boolean;
    /**
     * 通过数据组名或者数据名称取得数据, 前提是要中云控中存在这个数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key"}
     * key定义： groupName = 数据组名称
     * dataName = 数据名称
     * @return {null|any}
     */
    getData(map: any): null | any;
    /**
     * 通过数据组名或者数据名称取得数据,获取后云控自动删除, 前提是要中云控中存在这个数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key","getType":1,"size":1}
     * key定义： groupName = 数据组名称
     * dataName = 数据名称
     * getType = 获取数据方式，1 头部获取，2 尾部获取，3 随机获取
     * size = 需要获取的数据条数
     * @return {null|json数组} 空或者JSON数组
     */
    getDataPop(map: any): null | Object[];
    /**
     * 新增一组数据，如果组名存在了，会自动最近数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
     * key定义：
     * groupName = 数据组名称
     * dataName = 数据名称
     * content=内容
     * @return {boolean} true代表成功 false ，代表失败
     */
    addData(map: any): boolean;
    /**
     * 修改某个组下面的数据，组名和数据名必填
     * @param map 可扩展参数表
     * 例如
     * {"groupName":"数据组1","dataName":"key","content":"数据"}
     * key定义：
     * groupName = 数据组名称
     * dataName = 数据名称
     * content=内容
     * @return {boolean} true代表成功 false ，代表失败
     */
    updateData(map: any): boolean;
    /**
     * 删除某个组下面的数据，如果只填写组名，该组下面全部被删除，如果组名和数据名都有，就删除该组下数据名相同的数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key"}
     * key定义：
     * groupName = 数据组名称
     * dataName = 数据名称
     * @return {boolean} true代表成功 false ，代表失败
     */
    removeData(map: any): boolean;
    /**
     * 查询该组下面的数据名的内容，并向内容尾追加一条数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
     * key定义：
     * groupName = 数据组名称
     * dataName = 数据名称
     * content=内容
     * @return {boolean} true代表成功 false ，代表失败
     */
    appendOneLineData(map: any): boolean;
    /**
     * 查询该组下面的数据名的内容，并删除其中一条与content相等的数据
     * @param map 可扩展参数表
     * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
     * key定义：
     * groupName = 数据组名称
     * dataName = 数据名称
     * content=内容
     * @return {boolean} true代表成功 false ，代表失败
     */
    removeOneLineData(map: any): boolean;
    /**
     * 获取云控的URL地址
     * @return {string} 云控的URL地址或者null
     */
    getCloudUrl(): string;
    /**
     * 删除脚本文件保证安全
     * @return {boolean} true代表成功 false ，代表失败
     */
    removeScriptFile(): boolean;
    /**
     * 创建或者更新动态数据表结构<br/>
     * 如果columns有增加新的，就自动创建字段，如果少了某个字段，就自动从表中移出字段<br/>
     * 请谨慎操作表，以免数据丢失！！！<br/>
     * 适合版本EC 6.16.0+
     * @param param 参数<Br/>
     * {
     * 	"tableName": "我是牛逼的表",
     * 	"tableNameEn": "niubi_table",
     * 	"columns": [{
     * 			"columnInfo": "姓名",
     * 			"columnName": "name",
     * 			"columnSize": 500
     * 		},
     * 		{
     * 			"columnInfo": "年龄",
     * 			"columnName": "age",
     * 			"columnSize": 500
     * 		},
     * 		{
     * 			"columnInfo": "性别",
     * 			"columnName": "sex",
     * 			"columnSize": 500
     * 		}
     * 	]
     * }<br/>
     * 解释: <br/>
     * tableName: 中文表名，相当于名称，但是不是实际表名<br/>
     * tableNameEn: 英文表名，真实的表名<br/>
     * columns: 表的字段数据，字段类型统一是字符串<br/>
     *      columnInfo: 字段的注释信息<br/>
     *      columnName: 字段名称，要用英文，不要有空格和特殊字符<br/>
     *      columnSize: 字段长度<br/>
     * @return {string} JSON字符串，自行转换为JSON对象
     * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
     * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
     */
    dynamicCreateTable(param: any): string;
    /**
     * 动态查询数据<Br/>
     * 适合版本EC 6.16.0+
     * @param param 参数<Br/>
     * {
     * 	"pageNumber": 1,
     * 	"pageSize": 4,
     * 	"fields": "id,name",
     * 	"query": "and name like '%我是%'",
     * 	"tableNameEn": "niubi_table",
     * 	"search": {
     * 		"id": "1",
     * 		"name": "我是name"
     * 	}
     * }
     * <br/>
     * 解释: <br/>
     * pageNumber: 页码 从1开始<br/>
     * pageSize: 每页条数<br/>
     * fields: 要查下的字段，可以不写，如果填写就是用英文逗号链接，请看例子<br/>
     * query: 自定义的查询条件，遵循sql的写法<br/>
     * tableNameEn: 英文的表名<br/>
     * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
     * search 例子： "id":"1" 代表查询字段id=1的记录
     * @return {string} JSON字符串，自行转换为JSON对象
     * <br/>成功返回示例：{"result":{"data":[{"name":"3","id":2}]}}，data代表返回的数据数组
     * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
     */
    dynamicQuery(param: any): string;
    /**
     * 动态增加数据<Br/>
     * 适合版本EC 6.16.0+<Br/>
     * {
     * 	"tableNameEn": "niubi_table",<Br/>
     * 	"columns": {<Br/>
     * 		"name": "我是牛逼",<Br/>
     * 		"age": "niubi_table2",<Br/>
     * 		"sex": "niubi_table2"<Br/>
     * 	}<Br/>
     * }<Br/>
     * @param param 参数<Br/>
     * 解释: <br/>
     * tableNameEn: 英文的表名<br/>
     * columns: 字段和字段值列表<br/>
     * 例如 "name": "我是牛逼的表"，代表插入一个数据name=我是牛逼的表
     * @return {string} JSON字符串，自行转换为JSON对象
     * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
     * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
     */
    dynamicAdd(param: any): string;
    /**
     * 动态更新数据<Br/>
     * 适合版本EC 6.16.0+
     * @param param 参数<Br/>
     * {
     * 	"tableNameEn": "niubi_table",
     * 	"columns": {
     * 		"name": "我x是牛逼xxxx的表",
     * 		"age": "niubi_table2",
     * 		"sex": "niubi_table2"
     * 	},
     * 	"query": "and id=1",
     * 	"search": {
     * 		"id": "7"
     * 	}
     * }
     * query: 自定义的查询条件，遵循sql的写法<br/>
     * tableNameEn: 英文的表名<br/>
     * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
     * search 例子： "id":"1" 代表查询字段id=1的记录
     * columns: 要更新的字段和字段值列表<br/>
     * 例如 "name": "我是牛逼的表"，代表把name的指更新为 我是牛逼的表
     * @return {string} JSON字符串，自行转换为JSON对象
     * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
     * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
     */
    dynamicUpdate(param: any): string;
    /**
     * 动态删除数据<Br/>
     * 适合版本EC 6.16.0+<Br/>
     * {
     * 	"tableNameEn": "niubi_table",<Br/>
     * 	"query":"and name like '%我%'",<Br/>
     * 	"search": {<Br/>
     * 		"id": "1"
     * 	}<Br/>
     * }<Br/>
     * @param param 参数<Br/>
     * 解释: <br/>
     * query: 自定义的查询条件，遵循sql的写法<br/>
     * tableNameEn: 英文的表名<br/>
     * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
     * search 例子： "id":"1" 代表查询字段id=1的记录
     * @return {string} JSON字符串，自行转换为JSON对象
     * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
     * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
     */
    dynamicRemove(param: any): string;
    /**
     * 新增一个存放在redis的缓存
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
     * key定义：
     * cacheKey = 缓存key
     * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
     * dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
     * content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
     * @return {boolean} true代表成功 false ，代表失败
     */
    addCache(map: any): boolean;
    /**
     * 更新一个redis的缓存
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
     * key定义：
     * cacheKey = 缓存key
     * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
     * dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
     * content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
     * @return {boolean} true代表成功 false ，代表失败
     */
    updateCache(map: any): boolean;
    /**
     * 更新一个redis的缓存过期时间
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key","expireTime":300}
     * key定义：
     * cacheKey = 缓存key
     * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
     * @return {boolean} true代表成功 false ，代表失败
     */
    updateCacheExpire(map: any): boolean;
    /**
     * 删除一个redis的缓存
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cacheKey = 缓存key
     * @return {boolean} true代表成功 false ，代表失败
     */
    removeCache(map: any): boolean;
    /**
     * 获取一个缓存，如果缓存失效了 无数据返回
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cacheKey = 缓存key
     * @return {string} 服务端返回的JSON字符串，解析result节点即可
     */
    getCache(map: any): string;
    /**
     * 追加一个redis set的缓存
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key","content":"数据"}
     * key定义：
     * cacheKey = 缓存key
     * content=数据，作为一整行，追加到redis的set集合中
     * @return {string} 服务端返回的JSON字符串，解析result节点即可
     */
    appendOneLineCache(map: any): string;
    /**
     * 删除一个redis set的缓存元素
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key","content":"数据"}
     * key定义：
     * cacheKey = 缓存key
     * content=数据，作为一整行，从redis的set集合中移出
     * @return {string} 服务端返回的JSON字符串，解析result节点即可
     */
    removeOneLineCache(map: any): string;
    /**
     * redis的自增长计数功能，每次调用这个key的值都会+1
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cacheKey = 缓存key
     * @return {number} 返回redis自增后的值
     */
    incrementCache(map: any): number;
    /**
     * redis push或者pop命令
     * 适合版本 EC 7.8.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cmd = 支持 spop，rpush，lpush，lpop，rpop
     * cacheKey = 缓存key
     * content = push或者pop的内容
     * @return {string} 服务端返回的JSON字符串，解析result节点即可
     */
    popPushCache(map: any): string;
    /**
     * redis的自减计数功能，每次调用这个key的值都会-1
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cacheKey = 缓存key
     * @return {number} 返回redis自减的值
     */
    decrementCache(map: any): number;
    /**
     * 获取一个redis的key剩余的过期时间
     * 适合版本 EC 7.5.0+
     * @param map 可扩展参数表
     * 例如 {"cacheKey":"缓存key"}
     * key定义：
     * cacheKey = 缓存key
     * @return {number} 返回redis剩余的过期时间，负数代表永不过期
     */
    getCacheExpire(map: any): number;
}
declare var ecloud: ECloudWrapper;
/**
 * 文件api封装
 * @constructor
 */
declare function FileWrapper(): void;
declare class FileWrapper {
    /**
     *
     * 读取文件中的所有内容
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 文件路径
     *
     * @return string 文件内容字符串
     */
    readFile(path: any): string;
    /**
     *
     * 删除文件某一行或者根据包含条件删除
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 文件路径
     * @param line 行数，如果是-1 代表这个条件不生效
     * @param contains 包含某个字符串就删除，如果为null代表这个条件不生效
     *
     * @return {boolean} true 成功 false 失败
     */
    deleteLine(path: any, line: any, contains: any): boolean;
    /**
     * 列出文件下的所有文件
     * @param path 路径
     * @return 路径字符串数组
     */
    listDir(path: any): string[];
    /**
     * 将字符串存储到文件中
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param data 字符串 数据
     * @param path 文件
     */
    writeFile(data: any, path: any): any;
    /**
     * 创建一个文件或者文件夹
     *
     * @param path 路径
     * @return 布尔型 true 代表创建成功
     */
    create(path: any): any;
    /**
     * 从APK的assets文件夹中读取数据为字符串
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path assets文件夹中的文件路径，例如 data/a.txt
     * @return string 文件的内容
     */
    readAssets(path: any): string;
    /**
     * 删除所有文件或者文件夹
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 文件或者文件路径
     */
    deleteAllFile(path: any): any;
    /**
     * 写入一行到文件中,追加模式
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param data 行数据
     * @param path 文件或者文件路径
     * @return 布尔型 true代表成功 false代表失败
     */
    appendLine(data: any, path: any): any;
    /**
     * 读取一行数据，如果行号不对，返回的是空
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path   路径
     * @param lineNo 行号
     * @return string 返回一行字符串
     */
    readLine(path: any, lineNo: any): string;
    /**
     * 读取所有数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 路径
     * @return 字符串 返回字符串
     */
    readAllLines(path: any): any;
    /**
     * 创建文件夹
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 文件夹路径
     * @return 布尔型 true 代表成功，false代表失败
     */
    mkdirs(path: any): any;
    /**
     * 文件或者文件夹是否存在
     *
     * @param path 路径
     * @return 布尔型 true 代表存在，false代表不存在
     */
    exists(path: any): any;
    /**
     * 复制文件
     *
     * @param src 源文件路径
     * @param dest 目标文件路径
     * @return 布尔型 true 代表成功
     */
    copy(src: any, dest: any): any;
}
declare var file: FileWrapper;
/**
 * 检查apk主版本是否是8，如果不是会有异常发生
 * 该函数可以在程序中调用，防止iec和apk版本不一致
 * 适合版本 EC 8.2.0+
 */
declare function checkApkVersion8(): any;
/**
 * 检查apk主版本是否是9，如果不是会有异常发生
 * 该函数可以在程序中调用，防止iec和apk版本不一致
 * 适合版本 EC 9.1.0+
 */
declare function checkApkVersion9(): any;
/**
 * 读取JSON中的整型数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param key        配置项目
 * @return 整型 JSON中key对应的整型数据
 */
declare function readConfigInt(key: any): any;
/**
 * 取得配置的JSON
 * @return {any} JSON数据
 */
declare function getConfigJSON(): any;
declare function readConfigDouble(key: any): any;
declare function readConfigBoolean(key: any): any;
/**
 * 更新配置
 * @param key 键
 * @param value  值
 * @return {boolean} true 成功，false失败
 */
declare function updateConfig(key: any, value: any): boolean;
declare function readConfigLong(key: any): any;
/**
 * 读取JSON中的字符串数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param key        配置项目
 * @return string JSON中key对应的字符串数据
 */
declare function readConfigString(key: any): string;
/**
 * 删除UI配置
 *
 * @param key        配置项目
 * @return {boolean} true 代表成功 false 代表失败
 */
declare function deleteConfig(key: any): boolean;
/**
 * 是否是agent模式
 */
declare function isAgentMode(): any;
/**
 * 是否是无障碍模式
 */
declare function isAccMode(): any;
declare function isFastJs(): boolean;
declare function isStableJs(): boolean;
/**
 * 节点选择器集合
 * @constructor
 */
declare function S(): void;
declare class S {
    selectors: any[];
    attr: {};
    createSelector(): void;
    /**
     * 获取节点信息
     * @param timeout 超时时间
     * @return {Array} 节点信息集合
     */
    getNodeInfo(timeout: any): any[];
    /**
     * 通过选择器 获取第一个节点信息
     * @param timeout 等待时间，单位是毫秒
     * @return {NodeInfo} 对象或者null
     */
    getOneNodeInfo(timeout: any): NodeInfo;
    /**
     * 创建一个子节点选择器
     * @return {S} 选择器对象
     */
    child(): S;
    row(row: any): this;
    column(column: any): this;
    rowSpan(rowSpan: any): this;
    columnSpan(columnSpan: any): this;
    rowCount(rowCount: any): this;
    columnCount(columnCount: any): this;
    /**
     * 按照属性 selected 进行选择
     *
     * @param selected true 或者 false
     * @return {S}  节点选择器
     */
    selected(selected: any): S;
    /**
     * 按照属性 visible 进行选择
     *
     * @param visible true 或者 false
     * @return {S}  节点选择器
     */
    visible(visible: any): S;
    nid(nid: any): this;
    /**
     * 按照属性 focused 进行选择
     *
     * @param focused true 或者 false
     * @return {S}  节点选择器
     */
    focused(focused: any): S;
    /**
     * 按照属性 enabled 进行选择
     *
     * @param enabled true 或者 false
     * @return {S} 节点选择器
     */
    enabled(enabled: any): S;
    /**
     * 按照属性 focusable 进行选择
     *
     * @param focusable true 或者 false
     * @return  {S} 节点选择器
     */
    focusable(focusable: any): S;
    /**
     * 按照属性 scrollable 进行选择
     *
     * @param scrollable true 或者 false
     * @return  {S} 节点选择器
     */
    scrollable(scrollable: any): S;
    /**
     * 按照属性 number-clickable 进行选择
     *
     * @param longClickable true 或者 false
     * @return {S} 节点选择器
     */
    longClickable(longClickable: any): S;
    /**
     * 按照属性 clickable 进行选择
     *
     * @param clickable true 或者 false
     * @return {S} 节点选择器
     */
    clickable(clickable: any): S;
    /**
     * 按照属性 checked 进行选择
     *
     * @param checked true 或者 false
     * @return  {S} 节点选择器
     */
    checked(checked: any): S;
    /**
     * 按照属性 checkable 进行选择
     *
     * @param checkable true 或者 false
     * @return {S} 节点选择器
     */
    checkable(checkable: any): S;
    /**
     * 按照属性 id 进行匹配
     *
     * @param id 字符串
     * @return {S} 节点选择器
     */
    id(id: any): S;
    /**
     * 按照属性 id 进行匹配, 支持正则
     *
     * @param id 字符串
     * @return {S} 节点选择器
     */
    idMatch(id: any): S;
    /**
     * 按照属性 pkg 进行匹配
     *
     * @param pkg 字符串
     * @return {S} 节点选择器
     */
    pkg(pkg: any): S;
    /**
     * 按照属性 pkg 进行匹配，支持正则
     *
     * @param pkg 字符串
     * @return {S} 节点选择器
     */
    pkgMatch(pkg: any): S;
    /**
     * 按照属性 desc 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    desc(value: any): S;
    /**
     * 按照属性 desc 进行匹配,支持正则
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    descMatch(value: any): S;
    /**
     * 按照属性 bounds 进行范围
     *
     * @param left 范围左边数值
     *  @param top 范围上边数值
     *  @param right 范围右边数值
     *  @param bottom 范围底边数值
     * @return {S} 节点选择器
     */
    bounds(left: any, top: any, right: any, bottom: any): S;
    /**
     * 按照属性 text 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    text(value: any): S;
    xpath(value: any): this;
    /**
     * 按照属性 text 进行匹配,支持正则
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    textMatch(value: any): S;
    /**
     * 按照属性 clz 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    clz(value: any): S;
    /**
     * 按照属性 clz 进行匹配，支持正则
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    clzMatch(value: any): S;
    /**
     * 按照属性 depth 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    depth(value: any): S;
    /**
     * 按照属性 index 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    index(value: any): S;
    /**
     * 按照属性 drawingOrder 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    drawingOrder(value: any): S;
    /**
     * 按照属性 childCount 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    childCount(value: any): S;
    /**
     * 按照属性 editable 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    editable(value: any): S;
    /**
     * 按照属性 password 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    password(value: any): S;
    /**
     * 按照属性 dismissable 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    dismissable(value: any): S;
    /**
     * 按照属性 multiLine 进行匹配
     *
     * @param value 字符串
     * @return {S} 节点选择器
     */
    multiLine(value: any): S;
    toJSONString(): string;
}
declare namespace S {
    /**
     * 获取节点选择器集合的对象
     * @return {S} 选择器对象
     */
    function get(): S;
}
declare function NotificationInfo(javaNotification: any): void;
declare class NotificationInfo {
    constructor(javaNotification: any);
    seqId: any;
    pkg: any;
    text: any;
    title: any;
    subText: any;
    infoText: any;
    time: any;
    bigText: any;
    titleBig: any;
    summaryBig: any;
    key: any;
    tickerText: any;
}
declare function ToastInfo(javaToast: any): void;
declare class ToastInfo {
    constructor(javaToast: any);
    pkg: any;
    text: any;
    time: any;
}
declare function Point(javaPoint: any): void;
declare class Point {
    constructor(javaPoint: any);
    x: any;
    y: any;
    setX(x: any): this;
    setY(y: any): this;
    toJSONString(): string;
}
declare namespace Point {
    function get(): Point;
    function jsonToObject(res: any): Point;
}
declare function Rect(javaRect: any): void;
declare class Rect {
    constructor(javaRect?: any);
    top: any;
    bottom: any;
    left: any;
    right: any;
    similarity: any;
    /**
     * 取得中间的坐标点
     * @return Point 对象
     */
    center(): Point;
    setLeft(left: any): this;
    setTop(top: any): this;
    setRight(right: any): this;
    setBottom(bottom: any): this;
    toJSONString(): string;
}
declare namespace Rect {
    function jsonToObject(res: any): Rect;
    function get(): Rect;
}
declare function Match(javaMatch: any): void;
declare class Match {
    constructor(javaMatch: any);
    point: Point;
    similarity: any;
    toJSONString(): string;
}
declare function NodeInfo(javaNodeInfo: any): void;
declare class NodeInfo {
    constructor(javaNodeInfo: any);
    bounds: Rect;
    visibleBounds: Rect;
    childCount: any;
    clz: any;
    desc: any;
    pkg: any;
    text: any;
    checkable: any;
    checked: any;
    clickable: any;
    enabled: any;
    focusable: any;
    focused: any;
    longClickable: any;
    scrollable: any;
    selected: any;
    id: any;
    nid: any;
    parentId: any;
    index: any;
    depth: any;
    visible: any;
    drawingOrder: any;
    editable: any;
    password: any;
    multiLine: any;
    dismissable: any;
    row: any;
    column: any;
    rowSpan: any;
    columnSpan: any;
    rowCount: any;
    columnCount: any;
    /**
     * 该节点的父级节点
     * @return NodeInfo 对象 或者null
     */
    parent(): NodeInfo;
    /**
     * 取得单个子节点
     * @param index 子节点索引
     * @return NodeInfo 对象 或者null
     */
    child(index: any): NodeInfo;
    /**
     * 取得所有子节点
     * @return NodeInfo 节点集合
     */
    allChildren(): any[];
    /**
     * 当前节点的所有兄弟节点
     * @return NodeInfo 节点集合
     */
    siblings(): any[];
    /**
     * 在当前节点前面的兄弟节点
     * @return NodeInfo 节点集合
     */
    previousSiblings(): NodeInfo[];
    /**
     * 点击中心点
     * @return 布尔型 true 成功
     */
    clickCenter(): any;
    /**
     * 通过选择器 获取第一个节点信息
     * @param selectors 选择器
     * @param timeout
     * @return {@link NodeInfo} 对象或者null
     */
    getOneNodeInfo(selectors: any, timeout: any): any;
    /**
     * 通过选择器 获取节点信息
     * @param selectors 选择器
     * @param timeout
     * @return {Array} NodeInfo 数组
     */
    getNodeInfo(selectors: any, timeout: any): any[];
    /**
     * 在当前节点后面的兄弟节点
     * @return NodeInfo 节点集合
     */
    nextSiblings(): any[];
    /**
     * 点击节点
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    click(): any;
    /**
     * 无指针点击节点
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    clickEx(): any;
    /**
     * 聚焦
     * @return {*}
     */
    setFocus(): any;
    /**
     * 无指针长点击节点
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    longClickEx(): any;
    /**
     * 向前滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollForward(): any;
    /**
     * 向后滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollBackward(): any;
    /**
     * 向下滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollDown(): any;
    /**
     * 向上滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollUp(): any;
    /**
     * 向左滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollLeft(): any;
    /**
     * 向右滚动
     * @return 布尔型 true 代表成功 false 代表失败
     */
    scrollRight(): any;
    /**
     * 对某个节点粘贴数据
     * @param content 要输入的内容
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    pasteText(content: any): any;
    /**
     * 长点击节点
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    longClick(): any;
    /**
     * 对某个节点输入数据
     * @param content 要输入的内容
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    inputText(content: any): any;
    /**
     * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
     * @param content 要输入的内容
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    imeInputText(content: any): any;
    /**
     * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
     * @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
     * @return boolean|布尔型 true 成功 ,false 失败
     */
    imeInputKeyCode(content: any): any;
    /**
     * 清除节点文本数据
     *  @return boolean 布尔型| true代表成功
     */
    clearText(): boolean;
    /**
     * 该方法会刷新节点缓存
     */
    refresh(): void;
    /**
     * 节点信息是否有效
     */
    isValid(): boolean;
    toJSONString(): string;
}
declare function AutoImage(uuid: any): void;
declare class AutoImage {
    constructor(uuid: any);
    uuid: string;
    mat: boolean;
    toString(): string;
}
/**
 * 点击文本
 * @param text 文本
 * @return boolean|布尔型
 */
declare function clickText(text: any): any;
/**
 * 随机点击选择器的任意元素
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function clickRandom(selectors: any): any;
/**
 * 随机点击选择器的任意元素(无指针模式)
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function clickRandomEx(selectors: any): any;
/**
 * 随机点击区域中的坐标
 * @param rect 区域对象
 * @return boolean|布尔型
 */
declare function clickRandomRect(rect: any): any;
/**
 * 随机长点击区域中的坐标
 * @param rect 区域对象
 * @return boolean|布尔型
 */
declare function longClickRandomRect(rect: any): any;
/**
 * 点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function click(selectors: any): any;
/**
 * 无指针模式点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function clickEx(selectors: any): any;
/**
 * 设置节点聚焦
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function setFocus(selectors: any): any;
/**
 * 无指针模式长按选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function longClickEx(selectors: any): any;
/**
 * 点击某个区域中心坐标点
 * @param rect 区域
 * @return  布尔型 true 成功，false 失败
 */
declare function clickCenter(rect: any): any;
/**
 * 点击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
declare function clickPoint(x: any, y: any): any;
/**
 * 双击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
declare function doubleClickPoint(x: any, y: any): any;
/**
 * 长点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
declare function longClick(selectors: any): any;
/**
 * 长点击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
declare function longClickPoint(x: any, y: any): any;
/**
 * 获取选择器得到的文本数据
 * @param selectors 选择器
 * @return 字符串集合
 */
declare function getText(selectors: any): any;
/**
 * 获取节点属性信息
 * @param selectors 选择器
 * @param attr 属性值,例如 text,className，更多的属性请参考NodeInfo对象属性
 * @return null|字符串数组|Rect对象数组
 */
declare function getNodeAttrs(selectors: any, attr: any): any[];
/**
 * 锁定当前节点，锁定后，后面就算界面刷新，但是节点还是老的信息，需要和releaseNode进行配合才能进行解锁
 */
declare function lockNode(): void;
/**
 * 释放节点的锁，释放后，当界面刷新的时候，节点信息会变成最新的
 */
declare function releaseNode(): void;
/**
 * 设置各种手势模式事件的操作类型，默认是异步,目前只对无障碍模式有效
 * @param mode 1 代表异步，2代表同步
 * @return {boolean} true代表成功 false代表失败
 */
declare function setGestureActionMode(mode: any): boolean;
/**
 * 获取节点信息
 * @param selectors 选择器
 * @param timeout 超时时间，单位是毫秒
 * @return {Array} NodeInfo 数组 节点信息集合
 */
declare function getNodeInfo(selectors: any, timeout: any): any[];
/**
 * 通过Selector 判断元素是否存在
 * @param selectors 选择器
 * @return {boolean}|布尔型
 */
declare function has(selectors: any): boolean;
/**
 * 通过Selector 判断并等待元素是否存
 * @param selectors 选择器
 * @param timeout 超时时间，单位毫秒
 * @return {boolean}|布尔型
 */
declare function waitExistNode(selectors: any, timeout: any): boolean;
/**
 *  等待activity界面出现
 * @param activity 界面名称
 * @param timeout 超时时间，单位毫秒
 * @return {boolean}|布尔型
 */
declare function waitExistActivity(activity: any, timeout: any): boolean;
/**
 * 将元素节点变成XML
 * @return string string|null
 */
declare function dumpXml(): string;
/**
 *  将通知发射处理，相当于点击了通知栏
 * @param seqId
 * @return {boolean}|布尔型
 */
declare function shotNotification(seqId: any): boolean;
/**
 * 将通知进行取消操作
 * @param seqId
 * @return {boolean}|布尔型
 */
declare function cancelNotification(seqId: any): boolean;
declare function ignoreNotification(seqId: any): any;
/**
 * 获取toast数据
 *  @param pkg 指定包名
 * @param size 指定获取的条数
 * @return null|ToastInfo数组
 */
declare function getLastToast(pkg: any, size: any): ToastInfo[];
/**
 * 获取最近通知栏对象
 * @param pkg 指定包名
 * @param size 指定获取的条数
 * @return NotificationInfo数组|null
 */
declare function getLastNotification(pkg: any, size: any): NotificationInfo[];
/**
 * 请求监听状态栏的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
declare function requestNotificationPermission(timeout: any): any;
/**
 * 检查是否含有状态栏监听权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @return true 有权限,false 代表无权限
 */
declare function hasNotificationPermission(): any;
/**
 * 取得当前运行的Activity类名
 * @return {string}
 */
declare function getRunningActivity(): string;
/**
 * 这个获取的不准，请使用  getCurrentRunningPkg 函数
 * 取得当前运行的App包名
 * @return string
 */
declare function getRunningPkg(): string;
/**
 *
 * 取得当前运行的App包名
 * 这个是通过节点获取的，前提是需要打开自动化服务
 * 适配EC 10.6.0+
 * @return string
 */
declare function getCurrentRunningPkg(): string;
/**
 *
 *  @return {boolean} 布尔型| true代表成功
 */
declare function home(): boolean;
/**
 * 返回桌面2
 * 适配EC 安卓 9.16.0+
 * @return {boolean} true 代表成功
 */
declare function home2(): boolean;
/**
 * 分割屏幕
 * @return {boolean} 布尔型| true代表成功
 */
declare function splitScreen(): boolean;
/**
 * 模拟电源键
 * @return 布尔型 true 成功 false 失败
 */
declare function power(): any;
/**
 * 打开快速设置
 * @return 布尔型 true 成功, else 失败
 */
declare function openQuickSettings(): any;
/**
 * 打开通知栏
 *
 * @return 布尔型 true 成功, else 失败
 */
declare function openNotification(): any;
/**
 * 返回按键
 * @return boolean|布尔型
 */
declare function back(): any;
/**
 * 最近APP任务按键
 * @return boolean|布尔型
 */
declare function recentApps(): any;
/**
 * 当前是否是我们的输入法
 * @return boolean|布尔型
 */
declare function currentIsOurIme(): any;
/**
 * 通过Selector输入数据
 * @param selectors  选择器
 * @param content 数据字符串
 * @return boolean|布尔型
 */
declare function inputText(selectors: any, content: any): any;
/**
 * 通过选择器粘贴数据
 * @param selectors  选择器
 * @param content 数据字符串
 * @return boolean|布尔型
 */
declare function pasteText(selectors: any, content: any): any;
/**
 * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
 * 适合没有节点的情况，例如游戏等
 * @param selectors 选择器，可以为空，如果为空，前提是输入框是聚焦的状态
 * @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * 特殊代码： 1000: 模拟搜索按键，1001: 模拟完成按键 1002:模拟go按键，1003:模拟下一个按键，1004:模拟上一个按键 1005:模拟发送按键
 * @return {boolean|布尔型}
 */
declare function imeInputText(selectors: any, content: any): boolean;
/**
 * 使用输入法输入内容时，输入法键盘视图是否展示出来
 * 前提：在EC 系统设置中，勾选了 显示输入法键盘
 * 适配EC 9.18.0+
 * @return {boolean|布尔型} true代表视图展示 false代表未展示
 */
declare function imeInputViewShown(): boolean ;
/**
 * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
 * @param selectors  选择器
 * @param content 整型，具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * @return boolean|布尔型
 */
declare function imeInputKeyCode(selectors: any, content: any): any;
/**
 * 清除文本数据
 * @param selectors 节点选择器
 *  @return boolean 布尔型| true代表成功
 */
declare function clearTextField(selectors: any): any;
/**
 * 通过选择器滑动节点
 * @param selectors 节点选择器
 * @param endX      结束的X坐标
 * @param endY      结束的Y坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
declare function swipe(selectors: any, endX: any, endY: any, duration: any): any;
/**
 * 从一个坐标滑动到另一个坐标
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功, false 滑动失败
 */
declare function swipeToPoint(startX: any, startY: any, endX: any, endY: any, duration: any): any;
/**
 * 通过选择器从下向上滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
declare function swipeFromDownToUp(selectors: any, distance: any, duration: any): any;
/**
 * 通过选择器从上向下滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
declare function swipeFromUpToDown(selectors: any, distance: any, duration: any): any;
/**
 * 通过选择器从右向左滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
declare function swipeFromRightToLeft(selectors: any, distance: any, duration: any): any;
/**
 * 通过选择器从左向右滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
declare function swipeFromLeftToRight(selectors: any, distance: any, duration: any): any;
/**
 * 向上滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功，false 失败
 */
declare function swipeFromDownToUpInScreen(distance: any, duration: any): any;
/**
 * 向下滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
declare function swipeFromUpToDownInScreen(distance: any, duration: any): any;
/**
 * 向左滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
declare function swipeFromRightToLeftInScreen(distance: any, duration: any): any;
/**
 * 向右滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
declare function swipeFromLeftToRightInScreen(distance: any, duration: any): any;
/**
 * 是否滚动到底部了，如果查不到元素也会返回false
 * @param distance 滚动方向 UP,DOWN,LEFT,RIGHT
 * @param selectors 选择器
 * @return false 代表未滚动到位，true 代表滚动完成了
 */
declare function isScrollEnd(distance: any, selectors: any): any;
/**
 * <p>执行从一个坐标到另一个坐标的拖动</p>
 * </p>
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败
 */
declare function drag(startX: any, startY: any, endX: any, endY: any, duration: any): any;
/**
 * 通过选择器拖动某个元素到目标元素
 * @param selectors 选择器 {@link S}
 * @param destObj   目标元素选择器
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
declare function dragTo(selectors: any, destObj: any, duration: any): any;
/**
 * 通过选择器拖动某个元素到目标X Y 坐标
 * @param selectors 原始元素选择器
 * @param endX      目标 X 坐标
 * @param endY      目标 Y 坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
declare function dragToPoint(selectors: any, endX: any, endY: any, duration: any): any;
/**
 * 请求展示浮窗的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
declare function requestFloatViewPermission(timeout: any): any;
/**
 * 展示浮窗
 * @param params js的map对象，包含的
 * var map = {"path":"main.html","tag":"test"};  类似这样的参数
 * <br/>
 * 参数解析:
 * tag:字符串 悬浮窗唯一定位的标示
 * path:字符串 IEC 中的布局文件
 * title:字符串 悬浮窗标题
 * titleBg:字符串 悬浮窗背景，16进制，例如#888888，或者#88000000
 * x:整型 悬浮窗起始X坐标
 * y:整型 悬浮窗起始Y坐标
 * w:整型 悬浮窗起始宽度
 * h:整型 悬浮窗起始高度
 * @return true 代表请求权限成功，false代表失败
 */
declare function showFloatView(params: any): any;
/**
 * 折叠日志悬浮窗，只保留标题
 * 适配EC 9.32.0+
 * @return true 成功，false代表失败
 */
declare function collapseLogView(): any;
/**
 * 关闭浮窗
 * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
 * @return true 成功，false代表失败
 */
declare function closeFloatView(tag: any): any;
/**
 * 展开日志悬浮窗
 * 适配EC 9.32.0+
 * @return true 成功，false代表失败
 */
declare function expandLogView(): any;
/**
 * 关闭所有悬浮窗，但不包含日志悬浮窗
 * @return true 成功，false代表失败
 */
declare function closeAllFloatView(): any;
/**
 * 设置日志窗口大小
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param w 宽度
 * @param h 高度
 * @param textSize 日志的字体大小
 * @param backgroundColor 背景颜色，例如#336699
 */
declare function setLogViewSize(w: any, h: any, textSize: any, backgroundColor: any): void;
/**
 * 设置日志窗口大小扩展函数
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param map 例如
 *  {
 *      "x":100,
 *      "y":100,
 *      "w":100,
 *      "h":200,
 *      "textSize":12,
 *      "backgroundColor":"#ffffff",
 *      "title":"我是日志",
 *      "showTitle":true
 *  }
 *  解释：
 *      x: 起始X位置
 *      y: 起始Y位置
 *      w:宽度
 *      h:高度
 *      textSize:日志的字体大小
 *      backgroundColor:背景颜色，例如#336699
 *      title:日志框标题
 *      showTitle：是否显示标题
 *      backgroundImg 背景图片，放到工程的res文件夹，录入填写res/a.png
 * @return {boolean} true代表成功，false代表失败
 */
declare function setLogViewSizeEx(map: any): boolean;
/**
 * 设置日志固定栏目属性
 * 适合EC 6.17.0+
 * @param map 例如
 *  {
 *      "show":true,
 *      "h":200,
 *      "textSize":12,
 *      "backgroundColor":"#ffffff"
 *  }
 *  解释：
 *      show:是否展示
 *      h:高度
 *      textSize:日志的字体大小
 *      backgroundColor:背景颜色，例如#336699
 * @return {boolean} true代表成功，false代表失败
 */
declare function setLogFixedViewEx(map: any): boolean;
declare function setFixedViewText(msg: any): any;
/**
 * 设置启停控制悬浮窗窗口位置扩展函数
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param map 例如
 *  {
 *      "x":100,
 *      "y":100,
 *      "backgroundColor":"#99000000",
 *  }
 *  解释：
 *      x: 起始X位置
 *      y: 起始Y位置
 *      backgroundColor:背景颜色，例如#336699
 * @return {boolean} true代表成功，false代表失败
 */
declare function setCtrlViewSizeEx(map: any): boolean;
/**
 * 检查是否含有浮窗权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return true 有权限,false 代表无权限
 */
declare function hasFloatViewPermission(): any;
/**
 * 展示日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
declare function showLogWindow(): any;
/**
 * 显示脚本暂停控制悬浮窗
 * 适配EC 10.0.0+
 */
declare function showScriptCtrlFloatView(): void;
/**
 * 关闭脚本暂停控制悬浮窗
 * 适配EC 10.0.0+
 */
declare function closeScriptCtrlFloatView(): void;
/**
 * 展示启停浮窗
 * 兼容版本: Android 4.4 以上
 */
declare function showCtrlWindow(): any;
/**
 * 关闭启停浮窗
 * 兼容版本: Android 4.4 以上
 */
declare function closeCtrlWindow(): any;
/**
 * 关闭日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
declare function closeLogWindow(): any;
/**
 * 展示消息到悬浮窗日志中，颜色是白色的
 * @param msg 消息
 * @param color 颜色值例如  #ffffff
 * @param size 字体大小
 * @return {*}
 */
declare function setLogText(msg: any, color: any, size: any): any;
/**
 * 通过选择器 获取第一个节点信息
 * @param selectors 选择器
 * @param timeout
 * @return {NodeInfo} 对象或者null
 */
declare function getOneNodeInfo(selectors: any, timeout: any): NodeInfo;
/**
 * 取得父级
 * @param nodeinfo NodeInfo对象
 * @return { NodeInfo} {NodeInfo 对象|null}
 */
declare function getNodeInfoParent(nodeinfo: any): NodeInfo;
/**
 * 取得单个子节点
 * @param nodeinfo NodeInfo对象
 * @param index 子节点索引
 * @return {NodeInfo} {NodeInfo 对象|null}
 */
declare function getNodeInfoChild(nodeinfo: any, index: any): NodeInfo;
/**
 * 取得所有子节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
declare function getNodeInfoAllChildren(nodeinfo: any): any[];
/**
 * 当前节点的所有兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
declare function getSiblingNodeInfo(nodeinfo: any): any[];
/**
 * 在当前节点前面的兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return NodeInfo 节点集合
 */
declare function getPreviousSiblingNodeInfo(nodeinfo: any): NodeInfo[];
/**
 * 在当前节点后面的兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
declare function getNextSiblingNodeInfo(nodeinfo: any): any[];
/**
 * 对某个节点输入数据
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return {boolean|布尔型}
 */
declare function inputTextNodeInfo(nodeinfo: any, content: any): boolean ;
/**
 * 对某个节点粘贴数据
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return {boolean|布尔型}
 */
declare function pasteTextNodeInfo(nodeinfo: any, content: any): boolean ;
/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return boolean|布尔型
 */
declare function imeInputTextNodeInfo(nodeinfo: any, content: any): any;
/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param nodeinfo NodeInfo对象
 * @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * @return boolean|布尔型
 */
declare function imeInputKeyCodeNodeInfo(nodeinfo: any, content: any): any;
/**
 * 清除节点文本数据
 *  @param nodeinfo NodeInfo对象
 *   @return {boolean} 布尔型| true代表成功
 */
declare function clearTextFieldNodeInfo(nodeinfo: any): boolean;
/**
 *  刷新节点缓存
 *  @param nodeinfo NodeInfo对象
 */
declare function refreshNodeInfo(nodeinfo: any): void;
/**
 *  节点信息是否有效
 *  @param nodeinfo NodeInfo对象
 *  @return {boolean}|布尔型 true代表有
 */
declare function isValidNodeInfo(nodeinfo: any): boolean;
/**
 * 设置获取节点的模式
 * @param mode 1 是增强型， 2 是快速型，默认是增强型
 * @param fetchInvisibleNode 是否抓取隐藏的元素，默认不抓取
 * @param fetchNotImportantNode 是否抓取不重要的元素
 * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
 * @return boolean|布尔型
 */
declare function setFetchNodeMode(mode: any, fetchInvisibleNode: any, fetchNotImportantNode: any, algorithm: any): any;
/**
 * 设置nsf抓节点参数
 * 适配EC 10.9.0+
 * 不同的深度、抓节点方式，可以增加速度以及节点过多防止内存溢出问题
 * @param data map格式 {"dumpMethod":1,"maxDepth":50}
 *      dumpMethod: NSF算法下的抓节点方式分别是1、2、3，默认是1
 *      maxDepth: 抓节点深度
 * @return boolean|布尔型
 */
declare function setNodeDumpParam(data: any): any;
/**
 * 设置要屏蔽的节点属性
 * 设置后，系统不会抓取这些节点数据属性
 * 适配 EC 9.23.0+
 * @param blockNode 字符串，以英文逗号分割，例如 clz,index,bounds，获取属性值，参考idea节点面板的右侧属性
 * blockNode 设置为 "" , 代表恢复默认
 * @return {boolean|*}
 */
declare function setBlockNodeAttr(blockNodeAttr: any): boolean | any;
/**
 * 加上节点获取的某个标志位
 * @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
 * @return {null|boolean}
 */
declare function addNodeFlag(flag: any): null | boolean;
/**
 * 移除节点获取的某个标志位
 * @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
 */
declare function removeNodeFlag(flag: any): void;
/**
 * 转换成node inf的数组
 * @param d
 * @return NodeInfo {NodeInfo 数组 | null}
 */
declare function nodeInfoArray(d: any): NodeInfo[];
/**
 * 多点触摸集合
 * @constructor
 */
declare function MultiPoint(): void;
declare class MultiPoint {
    mps: any[];
    m: {};
    create(): void;
    /**
     * 创建一个多点触摸下一个对象
     *
     * @return MultiPoint 选择器对象
     */
    next(): this;
    /**
     * 动作，可以参考android的MotionEvent.ACTION_*
     * @param value 一般情况下 按下为0，弹起为1，移动为2
     * @return MultiPoint
     */
    action(value: any): this;
    /**
     * 按下动作
     * @return MultiPoint
     */
    downAction(): this;
    /**
     * 弹起动作
     * @return MultiPoint
     */
    upAction(): this;
    /**
     * 移动动作
     * @return MultiPoint
     */
    moveAction(): this;
    /**
     * 设置X坐标
     * @param value X坐标
     * @return MultiPoint
     */
    x(value: any): this;
    /**
     * 设置X坐标
     * @param value X坐标
     * @return MultiPoint
     */
    y(value: any): this;
    /**
     * 设置第几个手指触摸点，分别是 1，2，3等，代表第n个手机
     * @param value 整型
     * @return MultiPoint
     */
    pointer(value: any): this;
    /**
     * 该动作延迟多少毫秒执行
     * @param value 延迟时间，单位是毫秒
     * @return MultiPoint
     */
    delay(value: any): this;
    /**
     * meta / modifier 键的状态，一般设置为0
     * @param value
     * @return MultiPoint
     */
    metaState(value: any): this;
    toJSON(): any[];
}
declare namespace MultiPoint {
    /**
     * 多点触摸对象
     * @return {MultiPoint} 选择器对象
     */
    function get(): MultiPoint;
}
/**
 * 按照属性 id 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function id(value: any): S;
/**
 * 按照属性 id 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function idMatch(value: any): S;
/**
 * 按照属性 clz 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function clz(value: any): S;
/**
 * 按照属性 clz 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function clzMatch(value: any): S;
/**
 * 按照属性 pkg 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function pkg(value: any): S;
/**
 * 按照属性 pkg 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function pkgMatch(value: any): S;
/**
 * 按照属性 desc 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function desc(value: any): S;
/**
 * 按照属性 desc 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function descMatch(value: any): S;
/**
 * 按照属性 text 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function text(value: any): S;
/**
 * xpath选择器，xpath技术请看 :https://www.jianshu.com/p/c205334122b3 和 https://www.runoob.com/xpath/xpath-syntax.html
 * xpath使用请到idea的节点面板查看xpath属性以及测试xpath功能
 * 适配EC 10.12.0+
 * @param value 例如 //node[@text='易点云测'] 代表选取文本等于易点云测的节点
 * @return {S} 节点选择器
 */
declare function xpath(value: any): S;
declare function row(value: any): S;
declare function column(value: any): S;
declare function rowSpan(value: any): S;
declare function columnSpan(value: any): S;
declare function rowCount(value: any): S;
declare function columnCount(value: any): S;
/**
 * 按照属性 bounds 进行范围
 *
 * @param left 范围左边数值
 *  @param top 范围上边数值
 *  @param right 范围右边数值
 *  @param bottom 范围底边数值
 * @return {S} 节点选择器
 */
declare function bounds(left: any, top: any, right: any, bottom: any): S;
/**
 * 按照属性 text 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function textMatch(value: any): S;
/**
 * 按照属性 visible 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function visible(value: any): S;
/**
 * 按照属性 depth 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function depth(value: any): S;
/**
 * 按照属性 checked 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function checked(value: any): S;
/**
 * 按照属性 drawingOrder 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function drawingOrder(value: any): S;
/**
 * 按照属性 checkable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function checkable(value: any): S;
/**
 * 按照属性 childCount 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function childCount(value: any): S;
/**
 * 按照属性 clickable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function clickable(value: any): S;
/**
 * 按照属性 dismissable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function dismissable(value: any): S;
/**
 * 按照属性 editable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function editable(value: any): S;
/**
 * 按照属性 enabled 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function enabled(value: any): S;
/**
 * 按照属性 focusable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function focusable(value: any): S;
/**
 * 按照属性 focused 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function focused(value: any): S;
/**
 * 按照属性 index 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function index(value: any): S;
/**
 * 按照属性 longClickable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function longClickable(value: any): S;
/**
 * 按照属性 multiLine 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function multiLine(value: any): S;
/**
 * 按照属性 password 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function password(value: any): S;
/**
 * 按照属性 scrollable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function scrollable(value: any): S;
/**
 * 按照属性 selected 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
declare function selected(value: any): S;
/**
 * 多点触摸<br/>
 * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2<br/>
 * x: X坐标<br/>
 * y: Y坐标<br/>
 * pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指<br/>
 * delay: 该动作延迟多少毫秒执行
 * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},
 * {"action":2,"x":1,"y":1,"pointer":1,"delay":20}
 * ]
 * @param touch2 第2个手指的触摸点数组
 * @param touch3 第3个手指的触摸点数组
 * @param timeout 多点触摸执行的超时时间，单位是毫秒，在无障碍模式下，这个参数不生效
 * @return boolean|布尔型
 */
declare function multiTouch(touch1: any, touch2: any, touch3: any, timeout: any): any;
/**
 * 取得某个范围的随机值
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值
 */
declare function random(min: any, max: any): any;
/**
 * 开启一个定时脚本任务
 * @param tag 任务的唯一标示，不能为空，脚本中可以使用readConfigString("jobTaskTag")获取当前tag值，判断是那个任务过来执行的
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning
 * @return 整型 jobid
 */
declare function startJob(tag: any, execTime: any, cancelBeforeRunning: any): any;
/**
 * 取消所有定时任务
 * @return {boolean} true 代表有任务被取消
 */
declare function cancelAllJob(): boolean;
/**
 * 通过tag对定时任务进行取消
 * @param tag tag名称
 * @return {boolean} true 代表有任务被取消
 */
declare function cancelJob(tag: any): boolean;
/**
 * 取得所有的定时任务标签
 * @return 字符串数组或者null
 */
declare function getAllJobTag(): any;
/**
 * 向前滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollForward(selectors: any): boolean;
/**
 * 向后滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollBackward(selectors: any): boolean;
/**
 * 向左滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollLeft(selectors: any): boolean;
/**
 * 向右滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollRight(selectors: any): boolean;
/**
 * 向上滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollUp(selectors: any): boolean;
/**
 * 向下滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
declare function scrollDown(selectors: any): boolean;
declare function clickExNodeInfo(nodeinfo: any): any;
declare function setFocusNodeInfo(nodeinfo: any): any;
declare function longClickExNodeInfo(nodeinfo: any): any;
declare function scrollForwardNodeInfo(nodeinfo: any): any;
declare function scrollBackwardNodeInfo(nodeinfo: any): any;
declare function scrollLeftNodeInfo(nodeinfo: any): any;
declare function scrollRightNodeInfo(nodeinfo: any): any;
declare function scrollUpNodeInfo(nodeinfo: any): any;
declare function scrollDownNodeInfo(nodeinfo: any): any;
/**
 * 读取res文件夹中的资源文件，并返 AutoImage 图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return AutoImage 如果是null代表没内容
 */
declare function readResAutoImage(fileName: any): false | AutoImage;
/**
 * 获取最近的节点事件处罚的时间，可通过时间判断节点服务是否可用
 *
 * @return {number} 长整型时间，毫秒级别
 */
declare function lastNodeEventTime(): number;
/**
 * 长按住事件
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {boolean} true 成功 false 失败
 */
declare function press(x: any, y: any, delay: any): boolean;
/**
 * 执行按下事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
declare function touchDown(x: any, y: any): any;
/**
 * 执行移动事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
declare function touchMove(x: any, y: any): any;
/**
 * 执行弹起事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
declare function touchUp(x: any, y: any): any;
declare function HidEventWrapper(): void;
declare class HidEventWrapper {
    /**
     * [网络模式]设置HID主控地址
     * 适配版本 EC 安卓 9.15.0+
     * @param hidCenterUrl HID主控程序运行的网址
     * @return {string} null 代表成功，其他代表错误消息
     */
    setHidCenter(hidCenterUrl: any): string;
    /**
     * [网络模式]初始化HID设备
     * 适配版本 EC 安卓 9.15.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    initUsbDevice(): string;
    /**
     * [USB模式]初始化HID设备
     * 适配版本 EC 安卓 10.6.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    initUsbDeviceByUsb(): string;
    /**
     * @deprecated
     * 函数已废弃
     * [网络模式]矫正HID坐标
     * 调用 initUsbDevice 再调用这个函数
     * 适配版本 EC 安卓 9.15.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    checkFirstPoint(): string;
    /**
     * [网络模式]关闭HID设备
     * 适配版本 EC 安卓 9.15.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    closeUsbDevice(): string;
    /**
     * [USB模式]关闭HID设备
     * 适配版本 EC 安卓 10.6.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    closeUsbDeviceByUsb(): string;
    /**
     * [网络模式]点击坐标
     * 适配版本 EC 安卓 9.15.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    clickPoint(x: any, y: any): string;
    /**
     * [USB模式]点击坐标
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    clickPointByUsb(x: any, y: any): string;
    /**
     * [网络模式]双击坐标
     * 适配版本 EC 安卓 9.15.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    doubleClickPoint(x: any, y: any): string;
    /**
     * [USB模式]双击坐标
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    doubleClickPointByUsb(x: any, y: any): string;
    /**
     * [网络模式]长按坐标
     * 适配版本 EC 安卓 9.15.0+
     * @param x x坐标
     * @param y y坐标
     * @param delay 按住时间，单位是毫秒
     * @return {string} null 代表成功，其他代表错误消息
     */
    press(x: any, y: any, delay: any): string;
    /**
     * [USB模式]长按坐标
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @param delay 按住时间，单位是毫秒
     * @return {string} null 代表成功，其他代表错误消息
     */
    pressByUsb(x: any, y: any, delay: any): string;
    /**
     * [网络模式]滑动
     * 适配版本 EC 安卓 9.36.0+
     * @param x 起点x坐标
     * @param y 起点y坐标
     * @param ex 终点x坐标
     * @param ey 终点y坐标
     * @param delay 按住时间，单位是毫秒
     * @return {string} null 代表成功，其他代表错误消息
     */
    swipe(x: any, y: any, ex: any, ey: any, delay: any): string;
    /**
     * [USB模式]滑动
     * 适配版本 EC 安卓 10.6.0+
     * @param x 起点x坐标
     * @param y 起点y坐标
     * @param ex 终点x坐标
     * @param ey 终点y坐标
     * @param delay 按住时间，单位是毫秒
     * @return {string} null 代表成功，其他代表错误消息
     */
    swipeByUsb(x: any, y: any, ex: any, ey: any, delay: any): string;
    /**
     * [网络模式]多点触摸
     * 适配版本 EC 安卓 9.15.0+
     * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2
     * x: X坐标
     * y: Y坐标
     * pointer：设置第几个手指触摸点，分别是 1，2，3 等，代表第n个手指
     * delay: 该动作延迟多少毫秒执行, 大于40ms，否则可能出现坐标漂移的现象
     * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":30},{"action":2,"x":1,"y":1,"pointer":1,"delay":30}]
     * @param timeout 多点触摸执行的超时时间，单位是毫秒
     * @return boolean|布尔型
     */
    multiTouch(touch1: any, timeout: any): any;
    /**
     * [USB模式]多点触摸
     * 适配版本 EC 安卓 10.6.0+
     * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2
     * x: X坐标
     * y: Y坐标
     * pointer：设置第几个手指触摸点，分别是 1，2，3 等，代表第n个手指
     * delay: 该动作延迟多少毫秒执行, 大于40ms，否则可能出现坐标漂移的现象
     * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":30},{"action":2,"x":1,"y":1,"pointer":1,"delay":30}]
     * @param timeout 多点触摸执行的超时时间，单位是毫秒
     * @return boolean|布尔型
     */
    multiTouchByUsb(touch1: any, timeout: any): any;
    /**
     * @deprecated
     * 函数已废弃
     * 移动鼠标到坐标点
     * 适配版本 EC 安卓 9.15.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    mouseMove(x: any, y: any): string;
    /**
     * [网络模式]按下
     * 适配版本 EC 安卓 9.19.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchDown(x: any, y: any): string;
    /**
     * [USB模式]按下
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchDownByUsb(x: any, y: any): string;
    /**
     * [网络模式]移动
     * 适配版本 EC 安卓 9.19.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchMove(x: any, y: any): string;
    /**
     * [USB模式]移动
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchMoveByUsb(x: any, y: any): string;
    /**
     * [网络模式]弹起
     * 适配版本 EC 安卓 9.19.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchUp(x: any, y: any): string;
    /**
     * [USB模式]弹起
     * 适配版本 EC 安卓 10.6.0+
     * @param x x坐标
     * @param y y坐标
     * @return {string} null 代表成功，其他代表错误消息
     */
    touchUpByUsb(x: any, y: any): string;
    /**
     * @deprecated
     * 函数已废弃
     * 鼠标参数设置
     * 适配版本 EC 安卓 9.19.0+
     * @param mouseStep 鼠标移动的每次距离，默认是50，不超过127
     * @param mouseSleep 移动间隔单位是毫秒。默认是50
     * @return {string} null 代表成功，其他代表错误消息
     */
    setting(mouseStep: any, mouseSleep: any): string;
    /**
     * [USB模式]重置USB数据流
     * 如果长时间写不进去数据或者失败，尝试重新重置数据流
     * 适配版本 EC 安卓 10.6.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    resetIOByUsb(): string;
    /**
     * [网络模式]home键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    home(): string;
    /**
     * [网络模式] 返回 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    back(): string;
    /**
     * [网络模式] 打开通知栏 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    openNotification(): string;
    /**
     * [网络模式] 最近历史任务 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    recentApps(): string;
    /**
     * [网络模式] hid键盘输入
     * 适配版本 EC 安卓 10.21.0+
     * @param modifiers number 辅助键 306:Left Ctrl,304:Left Shift,308:Left Alt,305:Right Ctrl,303:Right Shift,307:Right Alt,309:left Windows key,310:Right Windows key
     * @param code number 实际键， 详细请参考 https://max.book118.com/html/2018/0108/147954370.shtm 或者 https://wenku.csdn.net/answer/f525e3adc4034414899a2d53fe143c3e
     * 或者百度搜索 搜索 关键字 hid键盘键码值
     * @return {string} null 代表成功，其他代表错误消息
     */
    sendKey(modifiers: any, code: any): string;
    /**
     * [USB模式]home键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    homeByUsb(): string;
    /**
     * [USB模式] 返回 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    backByUsb(): string;
    /**
     * [USB模式] 打开通知栏 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    openNotificationByUsb(): string;
    /**
     * [USB模式] 最近历史任务 键
     * 适配版本 EC 安卓 10.21.0+
     * @return {string} null 代表成功，其他代表错误消息
     */
    recentAppsByUsb(): string;
    /**
     * [USB模式] hid键盘输入
     * 适配版本 EC 安卓 10.21.0+
     * @param modifiers number 辅助键 306:Left Ctrl,304:Left Shift,308:Left Alt,305:Right Ctrl,303:Right Shift,307:Right Alt,309:left Windows key,310:Right Windows key
     * @param code number 实际键， 详细请参考 https://max.book118.com/html/2018/0108/147954370.shtm 或者 https://wenku.csdn.net/answer/f525e3adc4034414899a2d53fe143c3e
     * 或者百度搜索 搜索 关键字 hid键盘键码值
     * @return {string} null 代表成功，其他代表错误消息
     */
    sendKeyByUsb(modifiers: any, code: any): string;
}
declare let hidEvent: HidEventWrapper;
declare function HttpWrapper(): void;
declare class HttpWrapper {
    /**
     * 下载远程文件到本地,支持断点续传
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param remoteUrl 远程文件URL
     * @param file      要保存到本地的文件对象
     * @param timeout   下载超时，单位是毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 布尔型 true 代表成功 false代表失败
     */
    downloadFile(remoteUrl: any, file: any, timeout: any, headers: any): any;
    /**
     * 下载远程文件到本地，支持断点续传，默认超时时间为30秒
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param remoteUrl 远程文件URL
     * @param file      要保存到本地的路径
     * @param headers    头标志例如{"a":"11"}
     * @return 布尔型 true 代表成功 false代表失败
     */
    downloadFileDefault(remoteUrl: any, file: any, headers: any): any;
    /**
     * Http GET 请求
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param url     请求的URL
     * @param timeout 超时时间 单位毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 字符串 请求后返回的字符串
     */
    httpGetDefault(url: any, timeout: any, headers: any): string;
    /**
     * Http GET 请求
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param url     请求的URL
     * @param params  参数Map表 例如 {"a":"1"} 这样的参数或者字符串
     * @param timeout 超时时间 单位毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 字符串 请求后返回的字符串
     */
    httpGet(url: any, params: any, timeout: any, headers: any): string;
    /**
     * Http POST 请求
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param url     请求的URL
     * @param params  参数，例如 {"a":"1"} 这样的参数或者字符串
     * @param files 要上传的文件，例如 {"file1":"/sdcard/a.txt"}
     * @param timeout 超时时间 单位毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 字符串 请求后返回的字符串
     */
    httpPost(url: any, params: any, files: any, timeout: any, headers: any): string;
    /**
     * Http POST 请求扩展，底层使用okhttp实现
     * 运行环境: 无限制
     * 兼容版本: Android 4.4 以上
     * 支持 EC 9.6.0+
     * @param url     请求的URL
     * @param params  参数，例如 {"a":"1"} 这样的参数或者字符串
     * @param files 要上传的文件，例如 {"file1":"/sdcard/a.txt"}
     * @param timeout 超时时间 单位毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 字符串 请求后返回的字符串
     */
    httpPostEx(url: any, params: any, files: any, timeout: any, headers: any): string;
    /**
     * HTTP POST JSON数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param url  请求的URL
     * @param json json数据
     * @param timeout 超时时间 单位毫秒
     * @param headers    头标志例如{"a":"11"}
     * @return 字符串 请求后返回的字符串
     */
    postJSON(url: any, json: any, timeout: any, headers: any): string;
    /**
     * HTTP 请求
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param param  map参数，包含的参数有<Br/>
     * url:字符串 请求的地址<Br/>
     * timeout:整型毫秒，超时时间<Br/>
     * method: POST ,GET,PUT 字符串，代表请求的方法<Br/>
     * proxy: 代理地址，map参数 包含主机和端口 例如 {"host":"11","port":111}<Br/>
     * followRedirects:是否自动跳转 true 或者 false<Br/>
     * requestBody: 请求的body体，如果是JSON，就是JSON字符串<Br/>
     * userAgent:字符串 HTTP 的UA <Br/>
     * ignoreContentType:是否忽略内容类型 true 或者 false <Br/>
     * ignoreHttpErrors:是否忽略错误 true 或者 false  <Br/>
     * maxBodySize : 整型，HTTP BODY最大值  <Br/>
     * referrer:字符串，请求来源  <Br/>
     * header:  HTTP 请求头，map参数,例如 {"UA":"test"} <Br/>
     * cookie: HTTP 请求Cookie，map参数, 例如 {"a":1} <Br/>
     * data:HTTP POST的数据，map参数, 例如 {"a":1} <Br/>
     * file:要上传的文件，集合参数，例如<Br/> [
     *                      {"key":"a1","fileName":"a.txt","filePath":"/sdcard/"},
     *                      {"key":"a1","fileName":"a.jpg","filePath":"/sdcard/","contentType":"image/jpg"}
     *                  ]<Br/>
     *                  其中contentType可有可无
     * responseCharset: 字符串，强制设置响应内容的编码集
     * @return Response 对象或者null
     */
    request(param: any): Response;
    requestEx(param: any): Response;
    /**
     * 创建一个websocket
     * @param url 要连接的地址
     * @param header 参数头
     * @param type 类库类型，1 okhttp 2 javawebsocket
     * @return {@link WebSocket } WebSocket对象
     */
    newWebsocket(url: any, header: any, type: any): any;
}
// declare function Response(data: any): void;
// declare class Response {
//     constructor(data: any);
//     cookie: any;
//     header: any;
//     charset: any;
//     statusMessage: any;
//     contentType: any;
//     statusCode: any;
//     body: any;
// }
// declare function WebSocket(ws: any): void;
// declare class WebSocket {
//     constructor(ws: any);
//     websocketClient: any;
//     /**
//      * 发送心跳函数
//      * 这里调用一次即可，内部已经实现了按照设定的周期时间发送
//      * @param heartDataBinCallback 心跳的二进制数据，一定要返回byte[]数组
//      * @param heartDataStrCallback 心跳的文本数据，直接返回字符串
//      * @param period               心跳周期 时间是毫秒
//      * @param cancelOld            是否取消老的，true 或者false
//      */
//     startHeartBeat(heartDataBinCallback: any, heartDataStrCallback: any, period: any, cancelOld: any): void;
//     /**
//      * 停止心跳函数
//      */
//     stopHeartBeat(): void;
//     /**
//      * 开始异步连接
//      * @param timeout 链接超时时间
//      * @return {boolean} true 代表成功 false代表失败
//      */
//     connect(timeout: any): boolean;
//     /**
//      * EC 6.17.0+ [已过期]
//      * 重置连接
//      * @return {boolean} true 代表成功 false代表失败
//      */
//     reset(): boolean;
//     /**
//      * EC 6.17.0+ [已过期]
//      * 开始同步重新链接
//      * @return {boolean} true 代表链接成功 false代表失败
//      */
//     reconnectBlocking(): boolean;
//     /**
//      * EC 6.17.0+ [已过期]
//      * 开始同步链接
//      * @param timeout 链接超时时间 单位是毫秒
//      * @return {boolean} true 代表链接成功 false代表失败
//      */
//     connectBlocking(timeout: any): boolean;
//     /**
//      * 是否已经关闭
//      * @return true 代表已经关闭，false 未关闭
//      */
//     isClosed(): any;
//     /**
//      * 是否已经连接了
//      * @return true 代表已经连接，false 未连接
//      */
//     isConnected(): any;
//     /**
//      * 关闭链接
//      */
//     close(): void;
//     /**
//      * 适用EC 6.17.0+
//      * 设置自动重连
//      * @param v true 代表自动重连
//      */
//     setAutoReconnect(v: any): void;
//     /**
//      * 适用EC 6.17.0+
//      * 在创建websocket链接类型=2的时候使用
//      * 设置丢失链接超时时间
//      * @param timeout 单位是秒
//      */
//     setConnectionLostTimeout(timeout: any): void;
//     /**
//      * 适用EC 6.17.0+
//      * 在创建websocket链接类型=1的时候使用
//      * 设置数据读取超时时间
//      * @param timeout 单位是秒
//      */
//     setReadTimeout(timeout: any): void;
//     /**
//      * 适用EC 6.17.0+
//      * 在创建websocket链接类型=1的时候使用
//      * 设置数据写入超时时间
//      * @param timeout 单位是秒
//      */
//     setWriteTimeout(timeout: any): void;
//     /**
//      * 适用EC 6.17.0+
//      * 在创建websocket链接类型=1的时候使用
//      * 设置心跳超时时间
//      * @param timeout 单位是秒
//      */
//     setPingInterval(timeout: any): void;
//     /**
//      * 适用EC 6.17.0+
//      * 在创建websocket链接类型=1的时候使用
//      * 设置调用超时时间
//      * @param timeout 单位是秒
//      */
//     setCallTimeout(timeout: any): void;
//     /**
//      * 发送文本消息
//      * @param text 文本信息
//      * @return true 代表成功，false 失败
//      */
//     sendText(text: any): any;
//     /**
//      * 发送字节信息
//      * @param bin
//      * @return true 代表成功，false 失败
//      */
//     sendBinary(bin: any): any;
//     /**
//      * 当连接打开的时候事件回调
//      * @param callback 回调函数
//      */
//     onOpen(callback: any): void;
//     /**
//      * 当有文本信息发送过来的时候回调
//      * @param callback 回调函数
//      */
//     onText(callback: any): void;
//     /**
//      * 当关闭的时候回调
//      * @param callback 回调函数
//      */
//     onClose(callback: any): void;
//     /**
//      * 当发生错误的时候回调
//      * @param callback 回调函数
//      */
//     onError(callback: any): void;
//     /**
//      * 当有二进制数据过来的时候回调
//      * @param callback 回调函数
//      */
//     onBinary(callback: any): void;
// }
declare var http: HttpWrapper;
declare function PointIndex(javaPoint: any): void;
declare class PointIndex {
    constructor(javaPoint: any);
    x: any;
    y: any;
    index: any;
    setX(x: any): this;
    setY(y: any): this;
    setIndex(index: any): this;
    toJSONString(): string;
}
declare namespace PointIndex {
    function get(): PointIndex;
    function jsonToObject(res: any): Point;
}
declare function ImageWrapper(): void;
declare class ImageWrapper {
    /**
     * 设置图色模块初始化参数，可用于多分辨率兼容
     * @param param
     * auto_click_request_dialog: true 自动点击截图权限对话框
     * auto_detect_orientation: true 自动检测方向 false 不检测方向
     */
    setInitParam(param: any): void;
    /**
     * 切换图片存储模式为opencv的mat格式
     * 这个函数调用会初始化OPENCV，所以打包的时候组件要包含opencv组件(找图组件)
     * 适合 EC  10.18.0+
     * 切换后抓图、读取图片、找图、找色等都会切换到mat格式，速度更快内存更少
     * 如果让图片格式切换请参考 imageToMatFormat和matToImageFormat两个函数
     * @param use 1 是 0 否
     * @return {boolean|*}  true 成功 false 失败
     */
    useOpencvMat(use: any): boolean | any;
    /**
     * 截屏时候如果转换mat失败，可以是这个函数试试，一般用不上
     * 这个函数调用会初始化OPENCV，所以打包的时候组件要包含opencv组件
     * 先转为bitmap再转为mat
     * 适合 EC  10.18.0+
     * @param use 1 是 0 否
     * @return {boolean|*}  true 成功 false 失败
     */
    setConvertMatWithBitmap(use: any): boolean | any;
    /**
     * 设置找色找图的算法模式
     * 适合EC 9.10.0+
     * @param type 1 代表老的查找算法，2代表新的查找算法
     * @return {boolean|*}
     */
    setFindColorImageMode(type: any): boolean | any;
    /**
     * 转换Mat存储格式
     * 适合 EC  10.18.0+
     * @param img {AutoImage} 图片对象
     * @return MAT存储格式的AutoImage 对象或者null
     */
    imageToMatFormat(img: AutoImage): AutoImage;
    /**
     * 转换普通image存储格式
     * 适合 EC  10.18.0+
     * @param img {AutoImage} 图片对象
     * @return 普通存储格式的AutoImage 对象或者null
     */
    matToImageFormat(img: AutoImage): AutoImage;
    /**
     * 初始化OPENCV 类库
     * 如果使用找图请先调用这个函数，第一次初始化需要复制类库，时间可能较长，以后再次执行就很快
     *  @return 布尔型 true 代表成功 false代表失败
     */
    initOpenCV(): any;
    /**
     * 向系统申请屏幕截图权限，返回是否请求成功。
     * <p>
     * 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
     * </p>
     * <p>
     * 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
     * </p>
     * 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
     * <p>
     * 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。
     * </P>
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @param timeout 超时时间，单位是毫秒
     * @param type 截屏的类型，0 自动选择，1 代表授权模式，2 代表无需权限模式（该模式前提条件：运行模式为代理模式）
     *
     * @return 布尔型 true 代表成功 false代表失败
     */
    requestScreenCapture(timeout: any, type: any): any;
    /**
     * 释放截屏请求
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     */
    releaseScreenCapture(): void;
    /**
     * 截取当前屏幕并返回一个Image对象。
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * <Br/>
     * 如果区域空或则有负数的，就会是全屏
     * @param retryNumber 重试次数，直到能截到图为止，默认是3
     * @param x 截图的起始X坐标
     * @param y 截图的起始Y坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @return AutoImage AutoImage对象或者null
     */
    captureScreen(retryNumber: any, x: any, y: any, ex: any, ey: any): AutoImage;
    /**
     * 将屏幕抓取为Bitmap对象，如果中间有-1或者宽度、宽度为-1，将会是全屏
     * @param format jpg或者png，代理模式下有用
     * @param x 开始X坐标
     * @param y 开始Y坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param q 图片质量，1 - 100，代理模式下有用
     * @return Bitmap null或者bitmap对象
     */
    captureScreenBitmap(format: any, x: any, y: any, ex: any, ey: any, q: any): any;
    /**
     * 将屏幕抓取为Bitmap对象，在代理模式下和captureScreenBitmap实现不一样，速度比captureScreenBitmap快
     * 适合版本 EC 8.3.+
     * @return Bitmap null或者bitmap对象
     */
    captureScreenBitmapEx(): any;
    /**
     * 抓取全屏
     * @return {null|AutoImage}
     */
    captureFullScreen(): null | AutoImage;
    /**
     * 抓取全屏函数，代理模式下并且requestScreenCapture函数的type为0的时候，会使用截屏函数，尽力消除色差问题。
     * 其他的和captureFullScreen一致
     * @return {null|AutoImage}
     */
    captureFullScreenEx(): null | AutoImage;
    /**
     * 截取当前屏幕并以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *<Br/>
     * 如果区域空或则有负数的，就会是全屏
     * @param retryNumber 重试次数，直到能截到图为止，默认是3
     * @param x 截图的起始X坐标
     * @param y 截图的起始Y坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param path 截图保存路径
     * @return 布尔型 true 截图成功 false 代表不成功
     */
    captureToFile(retryNumber: any, x: any, y: any, ex: any, ey: any, path: any): any;
    /**
     * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
     * 如果文件不存在或者文件无法解码则返回null。
     * [注意]: 如果使用代理模式，但是代理服务未启动，将返回null，可以使用readImageNotAgent读取image对象
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param path 图片路径
     * @return AutoImage AutoImage对象或者null
     */
    readImage(path: any): AutoImage;
    /**
     * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
     * 如果文件不存在或者文件无法解码则返回null。
     * [注意]: 这个函数是将图片读取到app进程中，如果你使用的是代理模式并且已经打开了代理服务，请使用readImage函数
     * 适合版本: EC 9.41.0+
     * @param path 图片路径
     * @return AutoImage AutoImage对象或者null
     */
    readImageNotAgent(path: any): AutoImage;
    /**
     * 将安卓原生的Bitmap对象转换为AutoImage
     * 适合版本: EC 9.41.0+
     * [注意]: 这个函数是将图片读取到app进程中，如果你使用的是代理模式并且已经打开了代理服务，请使用 bitmapToImage 函数
     * @param bitmap {Bitmap}对象
     * @return {AutoImage} 对象
     */
    bitmapToImageNotAgent(bitmap: any): AutoImage;
    /**
     * 将res文件夹的文件转换为AutoImage
     * 适合版本: EC 9.41.0+
     * [注意]: 这个函数是将图片读取到app进程中，如果你使用的是代理模式并且已经打开了代理服务，请使用 readResAutoImage 函数
     * @param res {string} res文件夹下的文件路径
     * @return {AutoImage} 对象
     */
    readResAutoImageNotAgent(res: string): AutoImage;
    /**
     * 读取在路径path的图片文件并返回一个{@link Bitmap}对象。如果文件不存在或者文件无法解码则返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param path 图片路径
     * @return Bitmap android的bitmap对象或者null
     */
    readBitmap(path: any): any;
    /**
     * 返回图片image在点(x, y)处的像素的ARGB值。
     * <p>
     * 该值的格式为0xAARRGGBB，是一个"32位整数"
     * <p>
     * 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
     *
     * @param image1 图片
     * @param x     要获取的像素的横坐标。
     * @param y     要获取的像素的纵坐标。
     * @return 整型
     */
    pixelInImage(image1: any, x: any, y: any): any;
    /**
     * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image1     大图片
     * @param template  小图片（模板）
     * @param x         找图区域 x 起始坐标
     * @param y         找图区域 y 起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Rect 区域坐标对象数组或者null
     */
    findImage(image1: any, template: any, x: any, y: any, ex: any, ey: any, weakThreshold: any, threshold: any, limit: any, method: any): Rect[];
    /**
     * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
     * 找图函数缩放找图，比findImage更精准
     * 适合版本 EC 9.41.0+
     * @param image1     大图片
     * @param template  小图片（模板）
     * @param x         找图区域 x 起始坐标
     * @param y         找图区域 y 起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Rect 区域坐标对象数组或者null
     */
    findImage2(image1: any, template: any, x: any, y: any, ex: any, ey: any, weakThreshold: any, threshold: any, limit: any, method: any): Rect[];
    /**
     * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @param template  小图片（模板）
     * @param x         找图区域 x 起始坐标
     * @param y         找图区域 y 起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Rect 区域坐标对象数组或者null
     */
    findImageEx(template: any, x: any, y: any, ex: any, ey: any, weakThreshold: any, threshold: any, limit: any, method: any): Rect[];
    /**
     * OpenCV模板匹配封装
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image1         大图片
     * @param template      小图片（模板）
     * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param rect          找图区域。参见findColor函数关于 rect 的说明
     * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
     *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Match集合 匹配到的集合
     */
    matchTemplate(image1: any, template: any, weakThreshold: any, threshold: any, rect: any, maxLevel: any, limit: any, method: any): Match[];
    /**
     * OpenCV模板匹配封装
     * 包含缩放找图功能
     * 适配版本 EC 9.41.0+
     * @param image1         大图片
     * @param template      小图片（模板）
     * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param rect          找图区域。参见findColor函数关于 rect 的说明
     * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
     *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Match集合 匹配到的集合
     */
    matchTemplate2(image1: any, template: any, weakThreshold: any, threshold: any, rect: any, maxLevel: any, limit: any, method: any): Match[];
    /**
     * OpenCV模板匹配封装，在当前屏幕截图中进行匹配
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param template      小图片（模板）
     * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param rect          找图区域。参见findColor函数关于 rect 的说明
     * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
     *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
     * @return Match集合 匹配到的集合
     */
    matchTemplateEx(template: any, weakThreshold: any, threshold: any, rect: any, maxLevel: any, limit: any, method: any): Match[];
    /**
     * 找非色
     * 在图片中找到颜色和color完全不相等的点，如果没有找到，则返回null。
     * 适配EC 9.22.0+
     * 兼容版本: Android 5.0 以上
     * @param image1 图片
     * @param color 要寻找的颜色，用ec工具可以生成
     * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标
     * @param y 区域的Y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制个数
     * @param orz 方向，分别从1-8
     * @return 多个 PointIndex 坐标点数组或者null
     */
    findNotColor(image1: any, color: any, threshold: any, x: any, y: any, ex: any, ey: any, limit: any, orz: any): PointIndex[];
    /**
     * 在图片中找到颜色和color完全相等的点，；如果没有找到，则返回null。
     * 运行环境: 无限制
     * 兼容版本: Android 5.0 以上
     * @param image1 图片
     * @param color     要寻找的颜色
     * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标
     * @param y 区域的Y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制个数
     * @param orz 方向，分别从1-8
     * @return 多个 PointIndex 坐标点数组或者null
     */
    findColor(image1: any, color: any, threshold: any, x: any, y: any, ex: any, ey: any, limit: any, orz: any): PointIndex[];
    /**
     * 在图片中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image 图片
     * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
     * @return 多个 PointIndex 坐标点数组或者null
     */
    findColorJ(image1: any, jsonFileName: any): PointIndex[];
    /**
     * 在当前屏幕中找到颜色和color完全相等的点，如果没有找到，则返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param color     要寻找的颜色
     * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标
     * @param y 区域的Y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制个数
     * @param orz 方向，分别从1-8
     * @return 多个 PointIndex 坐标点数组或者null
     */
    findColorEx(color: any, threshold: any, x: any, y: any, ex: any, ey: any, limit: any, orz: any): PointIndex[];
    /**
     * 在当前屏幕中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
     * @return 多个 PointIndex 坐标点数组或者null
     */
    findColorExJ(jsonFileName: any): any;
    /**
     * 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色
     * <p>
     * 整张图片都找不到时返回null
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image1      要找色的图片
     * @param firstColor 第一个点的颜色
     * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
     * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
     * @param x 区域的X起始坐标
     * @param y 区域的Y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制个数
     * @param orz 方向，分别从1-8
     * @return 多个Point 坐标点数组或者null
     */
    findMultiColor(image1: any, firstColor: any, points: any, threshold: any, x: any, y: any, ex: any, ey: any, limit: any, orz: any): Point[];
    /**
     * 多点找色，找到所有符合标准的点，参数从JSON文件中读取，类似于按键精灵的多点找色
     * <p>
     * 整张图片都找不到时返回null
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image1      要找色的图片
     * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
     * @return 多个Point 坐标点数组或者null
     */
    findMultiColorJ(image1: any, jsonFileName: any): any;
    /**
     * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片，类似于按键精灵的多点找色
     * <p>
     * 整张图片都找不到时返回null
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param firstColor 第一个点的颜色
     * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
     * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
     * @param x 区域的X起始坐标
     * @param y 区域的Y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制个数
     * @param orz 方向，分别从1-8
     * @return 多个Point 坐标点数组或者null
     */
    findMultiColorEx(firstColor: any, points: any, threshold: any, x: any, y: any, ex: any, ey: any, limit: any, orz: any): Point[];
    /**
     * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片,参数从JSON文件中读取，类似于按键精灵的多点找色
     * 整张图片都找不到时返回null
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
     * @return 多个Point 坐标点数组或者null
     */
    findMultiColorExJ(jsonFileName: any): any;
    /**
     * 单点或者多点比色，找到所有符合标准的点，如果都符合返回true，否则是false
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param image1 图片
     * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
     * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标，默认填写0全屏查找
     * @param y 区域的Y起始坐标，默认填写0全屏查找
     * @param ex 终点X坐标，默认填写0全屏查找
     * @param ey 终点Y坐标，默认填写0全屏查找
     * @return 布尔型，true代表找到了 false代表未找到
     */
    cmpColor(image1: any, points: any, threshold: any, x: any, y: any, ex: any, ey: any): boolean;
    /**
     * 单点或者多点比色，找到所有符合标准的点，默认自己截图，如果都符合返回true，否则是false
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     *
     * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
     * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标，默认填写0全屏查找
     * @param y 区域的Y起始坐标，默认填写0全屏查找
     * @param ex 终点X坐标，默认填写0全屏查找
     * @param ey 终点Y坐标，默认填写0全屏查找
     * @return 布尔型，true代表找到了 false代表未找到
     */
    cmpColorEx(points: any, threshold: any, x: any, y: any, ex: any, ey: any): boolean;
    /**
     * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @param image1 图片
     * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
     * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标，默认填写0全屏查找
     * @param y 区域的Y起始坐标，默认填写0全屏查找
     * @param ex 终点X坐标，默认填写0全屏查找
     * @param ey 终点Y坐标，默认填写0全屏查找
     * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
     */
    cmpMultiColor(image1: any, points: any, threshold: any, x: any, y: any, ex: any, ey: any): any;
    /**
     * 多点或者多点数组比色，找到所有符合标准的点，自动截屏，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
     * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
     * @param x 区域的X起始坐标，默认填写0全屏查找
     * @param y 区域的Y起始坐标，默认填写0全屏查找
     * @param ex 终点X坐标，默认填写0全屏查找
     * @param ey 终点Y坐标，默认填写0全屏查找
     * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
     */
    cmpMultiColorEx(points: any, threshold: any, x: any, y: any, ex: any, ey: any): any;
    /**
     * 取得宽度
     * @param img 图片对象
     * @return number
     */
    getWidth(img: any): any;
    /**
     * 取得高度
     * @param img 图片对象
     * @return number
     */
    getHeight(img: any): any;
    /**
     * 保存到文件中
     * @param img 图片对象
     * @param path 路径
     * @return {boolean} true代表成功，false 代表失败
     */
    saveTo(img: any, path: any): boolean;
    /**
     * 转成base64的字符串
     * @param img 图片对象
     * @return string
     */
    toBase64(img: any): string;
    /**
     *  转成base64的字符串, jpg格式较小，可以减少内存
     * @param img 图片对象
     * @param format 格式  jpg或者 png
     * @param q 质量  1-100，质量越大 越清晰
     * @return 字符串
     */
    toBase64Format(img: any, format: any, q: any): string;
    /**
     * 剪切图片
     * @param img 图片对象
     * @param x x起始坐标
     * @param y y起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @return AutoImage 对象或者null
     */
    clip(img: any, x: any, y: any, ex: any, ey: any): AutoImage;
    /**
     * 缩放图片
     * 适合EC 9.42.0+
     * @param img 图片对象
     * @param w 目标宽度
     * @param h 目标高度
     * @return AutoImage 对象或者null
     */
    scaleImage(img: any, w: any, h: any): AutoImage;
    /**
     * 取得图片的某个点的颜色值
     * @param img 图片对象
     * @param x x坐标点
     * @param y y坐标点
     * @return number 颜色值
     */
    pixel(img: any, x: any, y: any): any;
    /**
     * 将整型的颜色值转成16进制RGB字符串
     * @param color 整型值
     * @return {string} 颜色字符串
     */
    argb(color: any): string;
    /**
     * 取得Bitmap图片的某个点的颜色值
     * @param bitmap 图片对象
     * @param x x坐标点
     * @param y y坐标点
     * @return number 颜色值
     */
    getPixelBitmap(bitmap: any, x: any, y: any): any;
    /**
     * 取得Bitmap图片的某个区域点的颜色值，等同于 Bitmap.getPixels
     * @param bitmap 图片对象
     * @param arraySize 要返回的区域数组的大小
     * @param offset      写入到pixels[]中的第一个像素索引值
     * @param stride      pixels[]中的行间距个数值(必须大于等于位图宽度)。可以为负数
     * @param x          　从位图中读取的第一个像素的x坐标值。
     * @param y           从位图中读取的第一个像素的y坐标值
     * @param width    　　从每一行中读取的像素宽度
     * @param height 　　　读取的行数
     * @return number 颜色值数组
     */
    getPixelsBitmap(bitmap: any, arraySize: any, offset: any, stride: any, x: any, y: any, width: any, height: any): any;
    /**
     * 是否被回收了
     * @param img 图片对象
     * @return {boolean} true代表已经被回收了
     */
    isRecycled(img: any): boolean;
    /**
     * 回收图片
     * @param img 图片对象
     * @return {*}
     */
    recycle(img: any): any;
    /**
     * 回收所有图片
     * @return {*}
     */
    recycleAllImage(): any;
    toRectList(res: any): Rect[];
    /**
     * 对AutoImage图片进行二值化
     * @param img AutoImage图片对象
     * @param type 二值化类型，一般写1即可
     * 0    灰度值大于阈值为最大值，其他值为<br/>
     * 1    灰度值大于阈值为0，其他值为最大值<br/>
     * 2    灰度值大于阈值的为阈值，其他值不变<br/>
     * 3    灰度值大于阈值的不变，其他值为0<br/>
     * 4    灰度值大于阈值的为零，其他值不变<br/>
     * 7    暂不支持<br/>
     * 8    大津法自动寻求全局阈值<br/>
     * 16    三角形法自动寻求全局阈值<br/>
     * @param threshold 二值化系数，0 ~ 255
     * @return AutoImage 对象或者null
     */
    binaryzation(img: any, type: any, threshold: any): AutoImage;
    /**
     * 自适应二值化，使用了opencv的adaptiveThreshold函数实现
     * 适合版本 EC 8.3.0+
     * @param img AutoImage图片对象
     * @param map MAP 参数
     *  diameter : 去噪直径 参考opencv的bilateralFilter函数
     *  adaptiveMethod：自适应二值化方式分别是0和1 ，ADAPTIVE_THRESH_MEAN_C=0，ADAPTIVE_THRESH_GAUSSIAN_C = 1
     *  blockSize：计算单位是像素的邻域块，邻域块取多大，就由这个值作决定，3，5，7这样的奇数
     *  c: 偏移值调整量，
     *  {
     *   "diameter":20,
     *   "adaptiveMethod":1,
     *   "c":9,"blockSize":51}
     * @return {null|AutoImage}
     */
    binaryzationEx(img: any, map: any): null | AutoImage;
    /**
     * 自适应二值化，使用了opencv的adaptiveThreshold函数实现
     * 适合版本 EC 8.3.0+
     * @param bitmap Bitmap 图片对象
     * @param map MAP 参数
     *  diameter : 去噪直径 参考opencv的bilateralFilter函数
     *  adaptiveMethod：自适应二值化方式分别是0和1 ，ADAPTIVE_THRESH_MEAN_C=0，ADAPTIVE_THRESH_GAUSSIAN_C = 1
     *  blockSize：计算单位是像素的邻域块，邻域块取多大，就由这个值作决定，3，5，7这样的奇数
     *  c: 偏移值调整量，
     *   {"diameter":20,
     *   "adaptiveMethod":1,
     *   "c":9,"blockSize":51}
     * @return Bitmap 对象或者null
     **/
    binaryzationBitmapEx(bitmap: any, map: any): any;
    /**
     * 对安卓的 Bitmap 图片进行二值化
     * @param bitmap Bitmap 图片对象
     * @param type 二值化类型，一般写1即可
     * 0    灰度值大于阈值为最大值，其他值为<br/>
     * 1    灰度值大于阈值为0，其他值为最大值<br/>
     * 2    灰度值大于阈值的为阈值，其他值不变<br/>
     * 3    灰度值大于阈值的不变，其他值为0<br/>
     * 4    灰度值大于阈值的为零，其他值不变<br/>
     * 7    暂不支持<br/>
     * 8    大津法自动寻求全局阈值<br/>
     * 16    三角形法自动寻求全局阈值<br/>
     * @param threshold 二值化系数，0 ~ 255
     * @return Bitmap 对象或者null
     */
    binaryzationBitmap(bitmap: any, type: any, threshold: any): any;
    /**
     * 剪裁图片，请自行判断参数，正确性
     * @param bitmap 图片
     * @param x 开始X坐标
     * @param y 开始Y坐标
     * @param w 剪裁宽度
     * @param h 剪裁高度
     * @return {Bitmap} 安卓的Bitmap对象
     */
    clipBitmap(bitmap: any, x: any, y: any, w: any, h: any): any;
    /**
     * 缩放bitmap
     * 适合EC 9.42.0+
     * @param bitmap 图片
     * @param w 目标宽度
     * @param h 目标高度
     * @return {Bitmap} 安卓的Bitmap对象
     */
    scaleBitmap(bitmap: any, w: any, h: any): any;
    /**
     * base64字符串转为Bitmap图片
     * @param data base64 数据
     * @param flag base64格式的标示，一般为0，
     * 可选参数为 ：0 默认， 1 无填充模式，2 无换行模式，4 换行模式
     * @return {Bitmap} 安卓的Bitmap对象
     */
    base64Bitmap(data: any, flag: any): any;
    /**
     * 将AutoImage转换为安卓原生的Bitmap对象
     * @param img {AutoImage}
     * @return {Bitmap} 对象
     */
    imageToBitmap(img: AutoImage): any;
    /**
     * 将安卓原生的Bitmap对象转换为AutoImage
     * 适合EC 6.15.0+版本
     * @param img {Bitmap}对象
     * @return {AutoImage} 对象
     */
    bitmapToImage(bitmap: any): AutoImage;
    /**
     * bitmap转为base64
     * @param bitmap 图片
     * @param format 格式，jpg或者png
     * @param q 质量  1 - 100
     * @return {string} base64字符串
     */
    bitmapBase64(bitmap: any, format: any, q: any): string;
    /**
     * 保存bitmap图像
     * @param bitmap 图片
     * @param format 要保存图像格式，有 png，jpg，webp
     * @param q 要保存图像质量，1-100
     * @param path 要保存图像路径
     * @return {boolean} true 成功 false 失败
     */
    saveBitmap(bitmap: any, format: any, q: any, path: any): boolean;
    /**
     * 旋转Bitmap
     * 支持EC 10.11.0+
     * @param bitmap 安卓的bitmap对象
     * @param degree 度数，-90代表逆时针旋转90度，home键在右，90度代表顺时针旋转90度，home键在左
     * @return Bitmap 对象或者null
     */
    rotateBitmap(bitmap: any, degree: any): any;
    /**
     * 旋转图片
     * 支持EC 10.11.0+
     * @param img 图片对象
     * @param degree 度数，-90代表逆时针旋转90度，home键在右，90度代表顺时针旋转90度，home键在左
     * @return AutoImage 对象或者null
     */
    rotateImage(img: any, degree: any): AutoImage;
    readResAutoImage(res: any): false | AutoImage;
    /**
     * 使用系统的screencap命令截图AutoImage，适合root或者代理模式, 有root权限或者开启了代理服务
     * 适合版本 EC 6.8.0+
     * @param root 是否优先使用root方式截图
     * @return AutoImage 对象或者null
     */
    screencapImage(root: any): AutoImage;
    /**
     * 使用系统的screencap命令截图为bitmap，适合root或者代理模式, 有root权限或者开启了代理服务
     * 适合版本 EC 6.8.0+
     * @param root 是否优先使用root方式截图
     * @return {Bitmap} 对象
     */
    screencapBitmap(root: any): any;
    convertFirstColorArrayToString(arr: any): any;
    convertMultiColorArrayToString(arr: any): string;
    convertFirstColorArrayToString2(arr: any): string;
    convertMultiCmpColorArrayToString(arr: any): string | string[];
    /**
     * 通过颜色找图，支持透明图，这个不需要处理话opencv
     * <p>
     * 整张图片都找不到时返回null
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 5.0 以上
     * @param image1     大图片
     * @param template  小图片（模板）
     * @param x         找图区域 x 起始坐标
     * @param y         找图区域 y 起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @return 多个Point 坐标点数组或者null
     */
    findImageByColor(image1: any, template: any, x: any, y: any, ex: any, ey: any, threshold: any, limit: any): Point[];
    /**
     * 通过颜色找图，支持透明图，这个不需要处理话opencv
     * <p>
     * 整张图片都找不到时返回null
     * @param image1     大图片
     * @param template  小图片（模板）
     * @param x         找图区域 x 起始坐标
     * @param y         找图区域 y 起始坐标
     * @param ex 终点X坐标
     * @param ey 终点Y坐标
     * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
     * @param extra 扩展函数，map结构例如<Br/>
     * {"firstColorOffset":"#101010","firstColorThreshold":1.0,"firstColorOffset":"#101010","otherColorThreshold":0.9,"cmpColorSucThreshold":1.0}
     * <Br/>firstColorOffset: 第一个匹配到的颜色偏色,例如 #101010 <Br/>
     * firstColorThreshold: 第一个匹配到的颜色偏色系数，例如 0.9<Br/>
     * firstColorOffset: 剩下需要找的颜色 偏色,例如 #101010<Br/>
     * otherColorThreshold: 剩下需要找的颜色 偏色系数，例如 0.9<Br/>
     * cmpColorSucThreshold: 成功匹配多少个颜色系数 就认为是成功的，例如 0.9 = 90%个点<Br/>
     * startX: 第一个点从哪里开始找的X坐标<Br/>
     * startY: 第一个点从哪里开始找的Y坐标<Br/>
     * @return 多个Point 坐标点数组或者null
     */
    findImageByColorEx(image1: any, template: any, x: any, y: any, ex: any, ey: any, limit: any, extra: any): Point[];
}
declare function OCRWrapper(): void;
declare class OCRWrapper {
    newOcr(): OcrInst;
    /**
     * OCR远程服务连接上，只有使用easyedge和paddleocr的时候可用
     * @return {boolean} 成功或者失败
     */
    isOcrServerOk(): boolean;
}
declare function OcrInst(s: any): void;
declare class OcrInst {
    constructor(s: any);
    ocrUtil: any;
    /**
     * 初始化OCR模块
     * @param map map参数表
     * key分别为：<br/>
     * type : OCR类型，值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块，paddleocr=百度离线的paddleocr，easyedge=百度AI OCR<br/>
     * ocrLite = ocrLite, paddleOcrOnline = EC自带的PC端的paddleOcr服务程序<br/>
     * 如果类型是 tess,请将训练的模型放到 /sdcard/tessdata/ 文件夹下 <br/>
     *  - 参数设置为 : {"type":"tess","language":"chi_sim","debug":false,"ocrEngineMode":3}<br/>
     *  - language: 语言数据集文件， 例如 chi_sim.traineddata 代表是中文简体语言，参数就填写 chi_sim,多个可以用+链接，例如:chi_sim+eng+num<br/>
     *  - ocrEngineMode: 识别引擎类型，0 OEM_TESSERACT_ONLY ， 1 OEM_LSTM_ONLY,2 OEM_TESSERACT_LSTM_COMBINED,3 OEM_DEFAULT<br/>
     *  - rilLevel: PageIteratorLevel 参数，-1 自适应， 0: RIL_BLOCK, 1: RIL_PARA, 2: RIL_TEXTLINE, 3: RIL_WORD, 4:RIL_SYMBOL<br/>
     *  - debug: 代码是否设置调试模式，一般设置false即可<br/>
     *  - path： 放tessdata的文件夹路径，不要加上tessdata，是tessdata文件夹的父级<br/>
     * 如果类型是 baiduOnline, 参数设置为 : {"type":"baiduOnline","ak":"xxx","sk":"xx"}<br/>
     *  - ak = api key,sk = secret key, 百度OCR文档地址 : https://ai.baidu.com/ai-doc/OCR/Ck3h7y2ia<br/>
     * 如果类型是 ocrLite,
     *  - 参数设置为 : {"type":"ocrLite","numThread":4,"padding":10,"maxSideLen":0}<br/>
     *  - numThread: 线程数量。 <br/>
     *  - padding: 图像预处理，在图片外周添加白边，用于提升识别率，文字框没有正确框住所有文字时，增加此值。<br/>
     *  - maxSideLen: 按图片最长边的长度，此值为0代表不缩放，例：1024，如果图片长边大于1024则把图像整体缩小到1024再进行图像分割计算，如果图片长边小于1024则不缩放，如果图片长边小于32，则缩放到32。<br/>
     * 如果类型设置为: paddleOcrOnline 请到网盘中下载**EasyClick-PaddleOcr.zip文件解压运行**<br/>
     *  - 例子{
     *  	"type": "paddleOcrOnline",
     *      "ocrType":"ONNX_PPOCR_V3",
     *  	"padding": 50,
     *  	"maxSideLen": 0,
     *  	"boxScoreThresh": 0.5,
     *  	"boxThresh": 0.3,
     *  	"unClipRatio": 1.6,
     *  	"doAngleFlag": 0,
     *  	"mostAngleFlag": 0
     *  }<br/>
     *  - ocrType : 模型 ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3
     *  - serverUrl：paddle ocr服务器地址，可以在其他电脑部署，然后中控链接，例如 192.168.2.8，部署在电脑就改ip地址即可，端口是 9022 可以不写
     *  - padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
     *  - maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
     *  - boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
     *  - boxThresh 同上，自行试验。<br/>
     *  - unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
     *  - doAngleFlag 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
     *  - mostAngleFlag 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
     *  - limit 代表每1秒执行ocr请求个数 默认1000。可以适当降低减少cpu占用<br/>
     *  - checkImage 检查数据是否是图像(1是 0否)默认关闭。<br/>
     * @return {boolean} 布尔型 成功或者失败
     */
    initOcr(map: any): boolean;
    /**
     * 初始化OCR远程服务，只有使用easyedge和paddleocr的时候需要调用
     * @param timeout 超时时间，毫秒
     * @return {boolean} 成功或者失败
     */
    initOcrServer(timeout: any): boolean;
    /**
     * 设置OCR实现方式
     * @param type 值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块
     * @return {boolean} 成功或者失败
     */
    setOcrType(type: any): boolean;
    /**
     * 设置是否守护OCR服务
     * 适合版本 EC 6.9.0+
     * @param daemon true 代表守护，false代表不守护
     * @param delay 每次守护间隔，单位是毫秒
     * @return {boolean} 成功或者失败
     */
    setDaemonServer(daemon: any, delay: any): boolean;
    /**
     * 释放OCR占用的资源
     * @return {boolean} 成功或者失败
     */
    releaseAll(): boolean;
    /**
     * 获取错误消息
     * @return {string} null代表没有错误
     */
    getErrorMsg(): string;
    /**
     * 对Bitmap进行OCR，返回的是JSON数据，其中数据类似于与：
     *
     * [{
     *    "label": "奇趣装扮三阶盘化",
     *    "confidence": 0.48334712,
     *    "x": 11,
     *    "y": 25,
     *    "width": 100,
     *    "height": 100
     * }]
     *  <br/>
     *  label: 代表是识别的文字
     *  confidence：代表识别的准确度
     *  x: 代表X开始坐标
     *  Y: 代表Y开始坐标
     *  width: 代表宽度
     *  height: 代表高度
     * @param bitmap 图片
     * @param timeout 超时时间 单位毫秒
     * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
     * @return {JSON} JSON对象
     */
    ocrBitmap(bitmap: any, timeout: any, extra: any): JSON;
    ocrImage(img: any, timeout: any, extra: any): any;
}
declare function Yolov8Wrapper(): void;
declare class Yolov8Wrapper {
    /**
     * 初始化yolov8实例
     * 适配EC 10.15.0+
     * @return  Yolov8Util 实例对象
     */
    newYolov8(): Yolov8Util;
}
declare function Yolov8Util(instance: any): void;
declare class Yolov8Util {
    constructor(instance: any);
    yolov8Instance: any;
    /**
     * 获取YOLOV8错误消息
     * 适配EC 10.15.0+
     * @return string 字符串
     */
    getErrorMsg(): any;
    /**
     * 获取 yolov8 默认配置
     * 适配EC 10.15.0+
     * @param model_name 模型名称 默认写  yolov8s-640 即可
     * @param input_size yolov8训练时候的imgsz参数，默认写640即可
     * @param box_thr 检测框系数，默认写0.25即可
     * @param iou_thr 输出系数，，默认写0.35 即可
     * @param bind_cpu 是否绑定CPU，选项为ALL,BIG,LITTLE 三个,默认写ALL
     * @param use_vulkan_compute 是否启用硬件加速，1是，0否
     * @param obj_names JSON数组，训练的时候分类名称例如 ["star","common","face"]
     * @return JSON数据
     */
    getDefaultConfig(model_name: any, input_size: any, box_thr: any, iou_thr: any, bind_cpu: any, use_vulkan_compute: any, obj_names: any): {
        name: string;
        input_size: number;
        box_thr: number;
        iou_thr: number;
        ver: number;
        bind_cpu: string;
        use_vulkan_compute: number;
        input_name: string;
        names: any[];
        outputs: {
            name: string;
            stride: number;
            anchors: number[];
        }[];
    };
    /**
     * 初始化yolov8模型
     * 具体如何生成param和bin文件，请参考文件的yolo使用章节，通过yolo的pt转成ncnn的param、bin文件
     * 适配EC 10.15.0+
     * @param map 参数表 参考 getDefaultConfig函数获取默认的参数
     * @param paramPath param文件路径
     * @param binPath bin文件路径
     * @return boolean true代表成功 false代表失败
     */
    initYoloModel(map: any, paramPath: any, binPath: any): any;
    /**
     * 检测图片
     * 适配EC 10.15.0+
     * 返回数据例如
     * [{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]
     * name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
     * @param bitmap 安卓的bitmap对象
     * @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
     * @return string 字符串数据
     */
    detectBitmap(bitmap: any, obj_names: any): any;
    /**
     * 检测Image
     * 适配EC 10.16.0+
     * 返回数据例如
     * [{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]
     * name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
     * @param img AutoImage对象
     * @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
     * @return string 字符串数据
     */
    detectImage(img: any, obj_names: any): any;
    /**
     * 释放yolov8资源
     * 适配EC 10.15.0+
     * @return boolean
     */
    release(): any;
}
declare var image: ImageWrapper;
declare var ocr: OCRWrapper;
declare let yolov8Api: Yolov8Wrapper;
declare function EcNetCardWrapper(): void;
declare class EcNetCardWrapper {
    version: string;
    /**
     * [网络验证]获取卡密信息
     * 这个可以在UI中调用，将信息显示在界面上
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param appId 应用的appId，用户中心后台获取
     * @param appSecret 应用的密钥，用户中心后台获取
     * @param cardNo 卡号数据
     * @return {null|JSON} 返回JSON对象,{"code":0,"msg":"",}
     */
    getCardInfo(appId: any, appSecret: any, cardNo: any): null | JSON;
    /**
     * [网络验证]初始化卡密
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param appId 应用的appId，用户中心后台获取
     * @param appSecret 应用的密钥，用户中心后台获取
     * @return {boolean} true 成功 false 失败
     */
    netCardInit(appId: any, appSecret: any): boolean;
    /**
     * 设置错误提示回调
     * @param back 回调函数
     */
    setErrorCallback(back: any): void;
    /**
     * [网络验证]绑定卡密
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param cardNo 卡号，用户中心后台获取
     * @return {null|JSON} 返回JSON对象,{"code":0,"msg":"",}
     */
    netCardBind(cardNo: any): null | JSON;
    /**
     * [网络验证]解绑卡密
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param cardNo 卡号，用户中心后台获取
     * @param password 解绑密码 ，如果设置过解绑密码 需要填写
     * @return {null|JSON} 返回JSON对象,{"code":0,"msg":"",}
     */
    netCardUnbind(cardNo: any, password: any): null | JSON;
    /**
     * [网络验证-远程变量]获取远程变量
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param key 远程变量名称
     * @return {null|JSON} 返回JSON对象,{"code":0,"msg":""}
     */
    netCardGetCloudVar(key: any): null | JSON;
    /**
     * [网络验证-远程变量]更新远程变量
     * 提卡网址 [http://uc.ieasyclick.com]
     * 适配版本 EC 安卓 9.13.0+
     * @param key 远程变量名称
     * @param value 远程变量内容
     * @return {null|JSON} 返回JSON对象,{"code":0,"msg":""}
     */
    netCardUpdateCloudVar(key: any, value: any): null | JSON;
}
declare let ecNetCard: EcNetCardWrapper;
declare function ShellWrapper(): void;
declare class ShellWrapper {
    /**
     * 安装 apk
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 文件路径
     * @return 布尔型 true 代表安装成功，false 代表安装失败
     */
    installApp(path: any): any;
    /**
     * 卸载应用程序
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 应用程序的包名
     * @return 布尔型 true 代表卸载成功，false 代表卸载失败
     */
    uninstallApp(packageName: any): any;
    /**
     * 停止正在执行的应用
     * <Br/>
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 应用程序的包名
     * @return 布尔型 true 代表成功，false 代表失败
     */
    stopApp(packageName: any): any;
    /**
     * 执行Shell命令
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param command 命令，例如安装App ： pm install /sdcard/app.apk
     * @return string 命令执行后返回的字符串结果
     */
    execCommand(command: any): string;
    /**
     * 执行root模式下，相关的命令，需要有root权限
     * 运行环境: 无限制
     * @param command 命令
     * @return {string|null}
     */
    sudo(command: any): string | null;
    /**
     * 请求授予root权限
     * 运行环境: 无限制
     * @return {boolean} true代表有root权限
     */
    su(): boolean;
    /**
     * 新增root命令
     * 运行环境: 无限制
     * @param cmd 新的命令
     * @return {boolean} true
     */
    addSuBin(cmd: any): boolean;
    /**
     * 执行shell命令
     * <Br/>
     * 运行环境: 代理模式,需要启动代理服务
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param command 命令字符串
     * @return 字符串 shell结果
     */
    execAgentCommand(command: any): string;
    /**
     * 执行shell - Shizuku命令
     * <Br/>
     * 运行环境: 代理模式,需要启动代理服务
     * <Br/>
     * 支持EC 9.9.0
     * @param command 命令字符串
     * @return 字符串 shell结果
     */
    execShizukuCommand(command: any): string;
    /**
     * Shizuku服务是否正常
     * 支持EC 9.9.0
     * @return {boolean} true代表支持 false代表不正常
     */
    isShizukuOk(): boolean;
    /**
     * 执行shell命令，包含正常和错误结果，返回的是JSON数组，自己判断正确还是错误
     * <Br/>
     * 适合EC 7.6.0+ 版本
     * 运行环境: 代理模式
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param command 命令字符串
     * @return JSON数组 shell结果
     */
    execAgentCommandEx(command: any): any;
}
declare var shell: ShellWrapper;
declare function JsSocket(): void;
declare class JsSocket {
    scSocket: any;
    /**
     * 关闭socket
     */
    close(): void;
    /**
     * 链接socket到远程
     * @param hostName ip或者域名
     * @param port 端口号
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    connect(hostName: any, port: any): boolean;
    /**
     * 设置超时时间
     * @param timeout 超时时间 单位是毫秒
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setSoTimeout(timeout: any): boolean;
    /**
     * 设置TCP不延迟
     * @param b true 或者false
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setTcpNoDelay(b: any): boolean;
    /**
     * 地址端口复用
     * @param b true 或者false
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setReuseAddress(b: any): boolean;
    /**
     * 保持链接
     * @param b true 或者false
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setKeepAlive(b: any): boolean;
    /**
     * 设置接收缓冲区大小
     * @param b 大小
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setReceiveBufferSize(b: any): boolean;
    /**
     * 设置发送缓冲区大小
     * @param b 大小
     * @return {boolean} 布尔型 ，true代表成功  false代表失败
     */
    setSendBufferSize(b: any): boolean;
    /**
     * 读取一行数据，服务端发送的数据必须是\n结尾，否则可能无法正确读取
     * @return {string} 字符串
     */
    readLine(): string;
    /**
     * 写入文本数据
     * @param text 文本数据
     * @param flush 布尔型，是否刷新缓冲区
     * @return {string} 字符串
     */
    writeText(text: any, flush: any): string;
    /**
     * 获取Socket对象，这里socket是java的socket对象，当其他函数无法满足，可以使用Socket扩展
     * @return {socket} 对象
     */
    getSocket(): any;
    /**
     * 获取InputStream对象，这里是java的 InputStream 对象
     * @return {InputStream} 对象
     */
    getInputStream(): any;
    /**
     * 获取 OutputStream 对象，这里是java的 OutputStream 对象
     * @return {OutputStream} 对象
     */
    getOutputStream(): any;
    /**
     * 链接是否关闭
     * @return {boolean} true代表关闭
     */
    isClosed(): boolean;
    /**
     * 获取错误消息
     * @return {string} 字符串 ,null代表没有问题
     */
    getErrorMsg(): string;
}
declare function SqliteApiWrapper(): void;
declare class SqliteApiWrapper {
    /**
     * 创建或者链接一个数据库
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param dbName 数据库名称
     * @return boolean true 代表请求权限成功，false代表失败
     */
    connectOrCreateDb(dbName: any): any;
    /**
     * 创建或者链接一个数据库
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param dbName 数据库名称
     * @param version 版本
     * @return boolean true 代表请求权限成功，false代表失败
     */
    connectOrCreateDbEx(dbName: any, version: any): any;
    /**
     * 获取上一次执行sql的错误信息
     * @return {string} null代表无错误信息
     */
    getErrorMsg(): string;
    /**
     * 创建数据表
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param tableName 表名称
     * @param columns 列名称，例如 ["name","pwd"]
     * @return boolean true 代表请求权限成功，false代表失败
     */
    createTable(tableName: any, columns: any): any;
    /**
     * 插入数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param tableName 表名
     * @param map 数据的map表
     * @return boolean true 代表请求权限成功，false代表失败
     */
    insert(tableName: any, map: any): any;
    /**
     * 删除数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param sql sql语句
     * @return boolean true 代表请求权限成功，false代表失败
     */
    delete(sql: any): any;
    /**
     * 更新数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param tablename 表名称
     * @param map 数据的map表
     * @param where 条件语句
     * @return boolean true 代表请求权限成功，false代表失败
     */
    update(tablename: any, map: any, where: any): any;
    /**
     * 执行sql
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param sql sql语句
     * @return boolean true 代表请求权限成功，false代表失败
     */
    execSql(sql: any): any;
    /**
     * 删除数据库
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @return boolean true 代表请求权限成功，false代表失败
     */
    dropDatabase(): any;
    /**
     * 删除表
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param table 表名
     * @return boolean true 代表请求权限成功，false代表失败
     */
    dropTable(table: any): any;
    /**
     * 查询数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param sql sql语句
     * @return JSON | 数据集合对象
     */
    query(sql: any): any;
    /**
     * 关闭数据库链接，释放资源
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @return boolean true 代表请求权限成功，false代表失败
     */
    close(): any;
}
declare function JdbcApiWrapper(): void;
declare class JdbcApiWrapper {
    /**
     * 初始化JDBC链接
     * @param jdbcDriver JDBC得驱动，mysql填写:com.mysql.jdbc.Driver
     * @param dbUrl JDBC链接得URL,例如 jdbc:mysql://{ip}:{port}/{db}?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true
     * @param user 数据库用户名
     * @param password 数据库密码
     * @return {boolean} true 代表成功 false 代表失败
     */
    init(jdbcDriver: any, dbUrl: any, user: any, password: any): boolean;
    /**
     * 获取最近的错误
     * @return {string} 错误字符串,null 代表没错误
     */
    getLastError(): string;
    /**
     * 链接数据库，该方法在init函数执行后调用
     * @return {boolean} true 代表成功 false 代表失败
     */
    connect(): boolean;
    /**
     * 查询数据
     * @param sql SQL语句
     * @param timeout 超时时间 单位是秒，0 代表永不超时
     * @return {string} JSON字符串
     */
    query(sql: any, timeout: any): string;
    /**
     * 创建一个预处理SQL语句
     * @param sql 预处理语句
     * @param timeout 超时时间 单位是秒，0 代表永不超时
     * @return  {boolean} true 代表成功 false 代表失败
     */
    createPreparedStatement(sql: any, timeout: any): boolean;
    /**
     * 执行之前创建得预处理语句
     * @return {string} JSON字符串
     */
    psqlQuery(): string;
    /**
     * 预处理语句设置字符串条件参数
     * @param index 条件索引
     * @param input 字符串
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetString(index: any, input: any): boolean;
    /**
     * 预处理语句设置long条件参数
     * @param index 条件索引
     * @param input long数据
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetLong(index: any, input: any): boolean;
    /**
     * 预处理语句设置int条件参数
     * @param index 条件索引
     * @param input int数据
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetInt(index: any, input: any): boolean;
    /**
     * 预处理语句设置float条件参数
     * @param index 条件索引
     * @param input float数据
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetFloat(index: any, input: any): boolean;
    /**
     * 预处理语句设置boolean条件参数
     * @param index 条件索引
     * @param input boolean数据
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetBoolean(index: any, input: any): boolean;
    /**
     * 预处理语句设置日期条件参数
     * @param index 条件索引
     * @param dataFormat 日期格式，例如 yyyy-MM-dd
     * @param input 日期字符串
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetDate(index: any, dateFormat: any, input: any): boolean;
    /**
     * 预处理语句设置时间戳条件参数
     * @param index 条件索引
     * @param dataFormat 日期格式，例如 yyyy-MM-dd
     * @param input 日期字符串
     * @return  {boolean} true 代表成功 false 代表失败
     */
    psqlSetTimestamp(index: any, dateFormat: any, input: any): boolean;
    /**
     * 是否设定为批量提交
     * @return {boolean} true 代表成功 false 代表失败
     */
    psqlAddBatch(): boolean;
    /**
     * 执行更新操作
     * @return {number} 更新影响到行数量
     */
    psqlExecuteUpdate(): number;
    /**
     * 结束预处理语句
     * @return {boolean} true 代表成功 false 代表失败
     */
    psqlClose(): boolean;
    /**
     * 关闭数据库链接
     * @return {boolean} true 代表成功 false 代表失败
     */
    connectionClose(): boolean;
}
declare var sqlite: SqliteApiWrapper;
declare var jdbc: JdbcApiWrapper;
declare function ThreadWrapper(): void;
declare class ThreadWrapper {
    /**
     * 设置多少周期进行执行一次，在子线程中执行
     *
     * @param runnable 函数
     * @param interval 周期时间，单位是毫秒
     * @return 线程对象ID  该对象可以进行取消
     */
    setInterval(runnable: any, interval: any): any;
    /**
     * 取消周期执行的函数
     *
     * @param t 线程对象ID
     */
    cancelInterval(t: any): any;
    /**
     * 设定延迟多少毫秒后执行函数，在子线程中执行
     * @param runnable 要执行的函数
     * @param timeout 延迟时间，单位是毫秒
     * @return 对象 线程对象ID
     */
    setTimeout(runnable: any, timeout: any): any;
    /**
     * 取消延迟执行
     * @param t 线程对象ID
     * @return {null|null|number}
     */
    cancelTimeout(t: any): null | null | number;
    /**
     * 异步执行线程，这里会将Runnable放到线程池中进行管理
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param runnable Runnable对象
     * @param string，线程对象ID
     */
    execAsync(runnable: any): any;
    /**
     * 取消线程的执行
     * @param t 线程对象ID
     * @return boolean
     */
    cancelThread(t: any): boolean;
    /**
     * 取消线程的执行
     * @param t 线程对象ID
     * @return boolean true代表已经取消了，false表示未取消
     */
    isCancelled(t: any): any;
    /**
     * 取消所有正在运行的线程
     */
    stopAll(): void;
    /**
     * 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param condition 条件函数
     * @param timeout   超时时间，单位是毫秒
     * @return 布尔型 返回一个布尔型值
     */
    execSync(condition: any, timeout: any): any;
}
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/**
 * 设定延迟多少毫秒后执行函数，在子线程中执行
 * @param func 要执行的函数
 * @param timeout 延迟时间，单位是毫秒
 * @return 线程对象ID  该对象可以进行取消
 */
declare function setTimeout(func: any, timeout: any): any;
/**
 * 取消延迟执行
 * @param t 要取消的线程对象ID
 */
declare function cancelTimeout(t: any): any;
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/**
 * 设置多少周期进行执行一次，在子线程中执行
 *
 * @param func 函数
 * @param interval 周期时间，单位是毫秒
 * @return 线程对象ID  该对象可以进行取消
 */
declare function setInterval(func: any, interval: any): any;
/**
 * 取消周期执行的函数
 * @param t 要取消的函数
 */
declare function cancelInterval(t: any): any;
/**
 * 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param condition 条件函数
 * @param timeout   超时时间，单位是毫秒
 * @return 布尔型 返回一个布尔型值
 */
declare function execSync(condition: any, timeout: any): any;
declare var thread: ThreadWrapper;
declare function UIWrapper(): void;
declare class UIWrapper {
    /**
     * 显示Toast信息
     * @param msg 信息
     */
    toast(msg: any): any;
    /**
     * 读取IEC包中的res文件夹某个文件资源，并变成android的Bitmap对象返回
     * @param path res文件夹中的资源文件路径
     * @return Bitmap 图像对象或者null
     */
    resResAsBitmap(path: any): any;
    /**
     * 读取IEC包中的res文件夹某个文件资源，并变成android的Drawable对象返回
     * @param path res文件夹中的资源文件路径
     * @return Drawable 图像对象或者null
     */
    resResAsDrawable(path: any): any;
    /**
     * 调试日志打印
     * @param msg 打印的消息
     * @return {null}
     */
    logd(msg: any): null;
    /**
     * 脚本是否处于暂停中
     * 适配 EC 10.0.0+
     * @return {boolean} true 代表脚本处于暂停中
     */
    isScriptPause(): boolean;
    /**
     * 显示脚本暂停控制悬浮窗
     * 适配EC 10.0.0+
     */
    showScriptCtrlFloatView(): void;
    /**
     * 关闭脚本暂停控制悬浮窗
     * 适配EC 10.0.0+
     */
    closeScriptCtrlFloatView(): void;
    /**
     * 设置脚本暂停或者继续
     * 适配 EC 10.0.0+
     * @param pause true 代表暂停脚本，false代表继续
     * @param timeout 自动恢复时间单位毫秒，0 代表不自动恢复，等待外部交互后恢复，大于0代表到了时间自动恢复运行
     * @return {boolean} true 代表脚本处于暂停中，false 代表继续运行中
     */
    setScriptPause(pause: any, timeout: any): boolean;
    /**
     * 创建一个布局并设置到当前的页面中
     * @param name tab标签的名称
     * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
     * @return 布尔型 true代表成功， false代表失败
     */
    layout(name: any, content: any): any;
    /**
     * 解析布局并返回
     * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
     * @return View android的View对象，解析有问题就是null
     */
    parseView(content: any): any;
    /**
     * 通过tag查找到一个视图
     * @param tag 标签值
     * @return View android原生的View对象
     */
    findViewByTag(tag: any): any;
    /**
     * 设置事件
     * @param view 要设置事件的视图，可以是事件的tag值
     * @param eventType 时间类型： click：点击，checkedChange：单选和多选按钮的选中状态改变事件，itemClick：列表的项目点击，itemSelected：列表的项目选中
     * @param eventCallback 事件回调函数
     * @return 布尔型 true代表设置成功， false代表设置失败
     */
    setEvent(view: any, eventType: any, eventCallback: any): any;
    setUIvar(): void;
    /**
     * 存储数据到存储区中，脚本可以使用
     * @param key 键
     * @param value 值
     * @return 布尔型 true成功 false失败
     */
    putShareData(key: any, value: any): any;
    /**
     * 从存储区获取在UI模块存储的数据
     * @param key 键
     * @return 存储的数据
     */
    getShareData(key: any): any;
    /**
     * 清理所有存储区的数据
     * @return true 或者 false
     */
    clearAllShareData(): any;
    /**
     * 将所有的tag转换成UI的对象直接调用
     * @return {null}
     */
    resetUIVar(): null;
    /**
     * 取得当前的activity对象
     * @return Activity 对象或者null
     */
    getActivity(): any;
    getContext(): any;
    /**
     * 取得当前的Handler对象
     * @return Handler 对象或者null
     */
    getHandler(): any;
    /**
     * 取得当前的根视图对象，因为有可能是多标签的页面，返回的有可能是个集合
     * @return View 对象列表
     */
    getRootView(): any[];
    /**
     * 启动脚本
     * @return 布尔型 true代表成功  false代表失败
     */
    start(): any;
    /**
     * 是否有浮窗权限
     * @return 布尔型 true代表有权限 false代表无权限
     */
    hasFloatViewPermission(): any;
    /**
     * 异步请求浮窗权限
     * @param timeout 超时时间
     * @param callback 回调函数
     * @return 布尔型 true代表有权限 false代表无权限
     */
    requestFloatViewPermissionAsync(timeout: any, callback: any): any;
    /**
     * 取得所有UI配置
     * @return JSON字符串
     */
    getConfigJSON(): any;
    /**
     * 取得单个UI配置项
     * @param key 配置的key
     * @return 字符串
     */
    getConfig(key: any): any;
    /**
     * 打开EC的系统设置
     * @return 布尔型 true代表成功 false代表失败
     */
    openECSystemSetting(): any;
    /**
     * 保存UI参数值
     * @param key UI的key
     * @param value UI的值
     * @return 布尔型 true代表成功 false代表失败
     */
    saveConfig(key: any, value: any): any;
    /**
     * 移出所有保存的UI参数值
     * @return 布尔型 true代表成功 false代表失败
     */
    removeAllUIConfig(): any;
    /**
     * 根据设置的tag，保存所有配置
     * @return 布尔型 true 保存成功，false 保存失败
     */
    saveAllConfig(): any;
    /**
     * 设置视图的值
     * @param tagOrView 视图的tag或者视图对象
     * @param value 值，字符串或者是布尔型
     * @return 布尔型 true代表成功 false代表失败
     */
    setViewValue(tagOrView: any, value: any): any;
    /**
     * 取得视图的值
     * @param tagOrView 视图的tag或者视图对象
     * @return 字符串或者布尔型
     */
    getViewValue(tagOrView: any): string | number | boolean;
    /**
     * 是否是无障碍运行模式
     * @return 布尔型 true 是 false 否
     */
    isAccMode(): any;
    /**
     * 是否是代理运行模式
     * @return 布尔型 true 是 false 否
     */
    isAgentMode(): any;
    /**
     * 自动化服务是否正常
     * @return 布尔型 true 是 false 否
     */
    isServiceOk(): any;
    /**
     * 设置运行模式
     * @param mode 1 代表是代理模式  2 代表无障碍模式
     * @return 布尔型 true 是 false 否
     */
    setRunningMode(mode: any): any;
    /**
     * 设置EC的系统参数
     * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
     * {<br/>
     *     "node_service":"需要",<br/>
     *     "proxy_service":"不需要",<br/>
     *     "running_mode":"无障碍",<br/>
     *     "auto_start_service":"是",<br/>
     *     "daemon_service":"是",<br/>
     *      "volume_start_tc":"否",<br/>
     *      "log_float_window":"否",<br/>
     *      "ctrl_float_window":"否"<br/>
     * }<br/>
     *  参数解释有：<br/>
     *  node_service : 是否需要启动节点获取服务 值有 需要，不需要两种
     *  proxy_service : 是否需要启动底层代理服务 值有 需要，不需要两种
     *  running_mode : 手势执行服务 值有 无障碍，代理两种
     *  auto_start_service : 开机启动服务 值有 是，否 两种
     *  daemon_service : 守护服务 值有 是，否 两种
     *  volume_start_tc : 音量键启停 值有 是，否 两种
     *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
     *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
     *
     * @return 布尔型 true 是 false 否
     */
    setECSystemConfig(params: any): any;
    /**
     * 启动环境
     * @return 布尔型 true代表启动成功，false代表启动失败
     */
    startEnv(): any;
    /**
     * 开启一个定时任务
     * @param tag
     * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
     * @param cancelBeforeRunning 是否取消之前的任务
     * @return 整型 jobid
     */
    startJob(tag: any, execTime: any, cancelBeforeRunning: any): any;
    /**
     * 取消所有的定时任务
     * @return 布尔型 true代表成功，false代表失败
     */
    cancelAllJob(): any;
    /**
     * 取消指定标签的任务
     * @param tag 标签
     * @return 布尔型 true代表成功，false代表失败
     */
    cancelJob(tag: any): any;
    /**
     * 获取所有定时任务TAG
     * @return JSON字符串
     */
    getAllJobTag(): any;
    /**
     * 停止当前运行的测试任务
     * @return 布尔型 true代表成功，false代表失败
     */
    stopTask(): any;
    /**
     * 显示日志浮窗
     * @return 布尔型 true代表成功，false代表失败
     */
    showLogWindow(): any;
    /**
     * 关闭日志浮窗
     * @return 布尔型 true代表成功，false代表失败
     */
    closeLogWindow(): any;
    /**
     * 新增启停浮窗按钮
     * @param tag 按钮的标签
     * @param icon 按钮的图标路径，工程中的res/文件下的图片，例如填写 res/a.png
     * @param width 按钮的宽度，单位是dp，系统按钮是36
     * @param height 按钮的高度，单位是dp，系统按钮是36
     * @param index 按钮的加入索引，-1代表往后添加，0代表的是加入到第一位
     * @param onClickListener 按钮的点击回调
     * @return 布尔型 true代表成功，false代表失败
     */
    addCtrlView(tag: any, icon: any, width: any, height: any, index: any, onClickListener: any): any;
    /**
     * 更新启停浮窗按钮
     * @param tag 按钮的标签
     * @param icon 按钮的图标路径，工程中的res/文件下的图片，例如填写 res/a.png
     * @param onClickListener 按钮的点击回调
     * @return 布尔型 true代表成功，false代表失败
     */
    updateCtrlView(tag: any, icon: any, onClickListener: any): any;
    /**
     * 删除启停浮窗按钮
     * @param tag 按钮的标签，默认都有main_page_ctrl: 主页，log_window_ctrl:日志窗口控制，script_status_ctrl:脚本启停，log_close_ctrl: 日志框关闭
     * @return 布尔型 true代表成功，false代表失败
     */
    removeCtrlView(tag: any): any;
    /**
     * 删除所有启停浮窗按钮
     * @return 布尔型 true代表成功，false代表失败
     */
    removeAllCtrlView(): any;
    /**
     * 重置启停浮窗按钮
     * @return 布尔型 true代表成功，false代表失败
     */
    resetDefaultCtrlView(): any;
    /**
     * 显示启停浮窗
     * @return 布尔型 true代表成功，false代表失败
     */
    showCtrlWindow(): any;
    /**
     * 关闭启停浮窗
     * @return 布尔型 true代表成功，false代表失败
     */
    closeCtrlWindow(): any;
    /**
     * 异步启动环境
     * @param callback
     */
    startEnvAsync(callback: any): void;
    /**
     * 监听UI所在的activity事件
     * @param eventType 事件类型，分别为：onResume：Activity恢复时， onPause: Activity暂停时， onStop：Activity停止时， onDestroy：Activity销毁时
     * @param callback 回调函数
     */
    onActivityEvent(eventType: any, callback: any): void;
    /**
     * 打开一个activity，通过map参数
     * @param map 例如{"action":""},key的固定只有
     * action,
     * uri,pkg,className,flag,其他的都是参数了
     * @return 布尔型 true 代表成功，false 代表失败
     */
    openActivity(map: any): any;
    /**
     * alert，弹窗
     * @param map 例如{"title":""},key的固定只有
     * title 标题
     * msg: 消息
     * cancelText: 取消按钮文字
     * okText: 确定按钮文字
     * cancelable: 是否可取消
     * @param okBtnCallback 点击确认按钮的回调
     * @param cancelBtnCallback 点击取消按钮的回调
     * @param dismissListener 对话框消失的回调
     * @return 布尔型 true 代表成功，false 代表失败
     */
    alert(map: any, okBtnCallback: any, cancelBtnCallback: any, dismissListener: any): any;
    /**
     * inputDialog 输入框弹窗
     * @param map 例如{"title":""},key的固定只有
     * title 标题
     * msg: 消息
     * cancelText: 取消按钮文字
     * okText: 确定按钮文字
     * cancelable: 是否可取消
     * @param okBtnCallback 点击确认按钮的回调
     * @param cancelBtnCallback 点击取消按钮的回调
     * @param dismissListener 对话框消失的回调
     * @return 布尔型 true 代表成功，false 代表失败
     */
    inputDialog(map: any, okBtnCallback: any, cancelBtnCallback: any, dismissListener: any): any;
    /**
     * 自定义对话框
     *  @param params 例如{"cancelable":""},key的固定只有
     * fullScreen 是否全屏
     * cancelable: 是否可取消
     * @param view 原生的视图
     * @param onViewBind 视图绑定时候回调函数
     * @param dismissListener 对话框消失的回调
     * @return 布尔型 true 代表成功，false 代表失败
     */
    customDialog(params: any, view: any, onViewBind: any, dismissListener: any): any;
    /**
     * 在主线程进行运行函数，相当于 getHandler.post
     * @param delayTime 延迟时间，单位毫秒，如果是0就是理解执行
     * @param callback 回调
     */
    run(delayTime: any, callback: any): any;
    /**
     * 向网页中注入一个JS函数，H5可以调用该函数，以实现脚本和HTML的互通扩展
     * @param funcName 注入的函数名称
     * @param callback 回调
     * @return 布尔型 true 代表成功，false 代表失败
     */
    registeH5Function(funcName: any, callback: any): any;
    /**
     * 取消向网页中注入一个JS函数
     * @param funcName 注入的函数名称
     * @return 布尔型 true 代表成功，false 代表失败
     */
    unregisteH5Function(funcName: any): any;
    /**
     * 设置加载网页的webview组件组件类型，默认是X5浏览器
     * @param type 1：系统自带的webview， 2：X5浏览器
     * @return 布尔型 true 代表成功，false 代表失败
     */
    setWebViewType(type: any): any;
    /**
     * 脚本是否正在运行
     * @return 布尔型 true 代表成功，false 代表失败
     */
    isScriptRunning(): any;
}
declare var ui: UIWrapper;
declare function UtilsWrapper(): void;
declare class UtilsWrapper {
    /**
     * 请求展示浮窗的权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param timeout 请求权限超时时间 单位是秒
     * @return true 代表请求权限成功，false代表失败
     */
    requestFloatViewPermission(timeout: any): any;
    /**
     * 展示浮窗
     * @param params js的map对象，包含的
     * var map = {"path":"main.html","tag":"test"};  类似这样的参数
     * <br/>
     * 参数解析:
     * tag:字符串 悬浮窗唯一定位的标示
     * path:字符串 IEC 中的布局文件
     * title:字符串 悬浮窗标题
     * titleBg:字符串 悬浮窗背景，16进制，例如#888888，或者#88000000
     * x:整型 悬浮窗起始X坐标
     * y:整型 悬浮窗起始Y坐标
     * w:整型 悬浮窗起始宽度
     * h:整型 悬浮窗起始高度
     * @return true 代表请求权限成功，false代表失败
     */
    showFloatView(params: any): any;
    /**
     * 关闭浮窗
     * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
     * @return true 成功，false代表失败
     */
    closeFloatView(tag: any): any;
    /**
     * 折叠日志悬浮窗，只保留标题
     * 适配EC 9.32.0+
     * @return true 成功，false代表失败
     */
    collapseLogView(): any;
    /**
     * 展开日志悬浮窗
     * 适配EC 9.32.0+
     * @return true 成功，false代表失败
     */
    expandLogView(): any;
    /**
     * 关闭所有悬浮窗，但不包含日志悬浮窗
     * @return true 成功，false代表失败
     */
    closeAllFloatView(): any;
    /**
     * 检查是否含有浮窗权限
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @return true 有权限,false 代表无权限
     */
    hasFloatViewPermission(): any;
    /**
     * 设置日志窗口大小
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param w 宽度
     * @param h 高度
     * @param textSize 日志的字体大小
     * @param backgroundColor 背景颜色，例如#336699
     */
    setLogViewSize(w: any, h: any, textSize: any, backgroundColor: any): any;
    /**
     * 设置日志顶部固定窗口属性
     * 适合EC 6.17.0+
     * @param show 是否展示
     * @param h 高度
     * @param textSize 日志的字体大小
     * @param textColor 日志的字体颜色，例如#336699
     * @param backgroundColor 背景颜色，例如#336699
     */
    setLogFixedViewEx(p: any): any;
    /**
     * 设置日志顶部固定窗口属性
     * 适合EC 6.17.0+
     * @param msg 消息
     * @return true代表成功 false代表失败
     */
    setFixedViewText(p: any): any;
    setLogViewSizeEx(p: any): any;
    setCtrlViewSizeEx(p: any): any;
    /**
     * 展示日志浮窗
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     */
    showLogWindow(): any;
    showCtrlWindow(): any;
    hideCtrlWindow(): any;
    /**
     * 展示日志到浮窗中
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     * @param log 日志
     * @param color 颜色
     * @param size 大小
     */
    setLogText(log: any, color: any, size: any): any;
    /**
     * 隐藏日志浮窗
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     */
    hideLogWindow(): any;
    /**
     * 显示消息
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param msg 消息内容
     */
    toast(msg: any): any;
    /**
     * 打开APP
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 程序的包名
     * @return 布尔型 true 代表成功，false 代表失败
     */
    openApp(packageName: any): any;
    /**
     * 拼接打开APP命令
     *
     * @param packageName 程序的包名
     * @return {string} 命令字符串
     */
    getStartAppCmd(packageName: any): string;
    /**
     * 拼接启动activity命令，通过map参数
     * @param map 例如{"action":""},key的固定只有
     * action,
     * uri,pkg,className,flag,其他的都是参数了
     * @return {string} 命令字符串
     */
    getStartActivityCmd(map: any): string;
    /**
     * 打开一个activity，通过map参数
     * @param map 例如{"action":""},key的固定只有
     * action,
     * uri,pkg,className,flag,其他的都是参数了
     * @return 布尔型 true 代表成功，false 代表失败
     */
    openActivity(map: any): any;
    /**
     * 通过Action打开某个界面
     * @param action action动作，例如 android.settings.ACCESSIBILITY_SETTINGS = 辅助功能，
     * 如果改方法不满足要求，可以直接使用intent进行打开：
     * 常用的action有：
     * android.settings.ACCESSIBILITY_SETTINGS //辅助功能
     * android.settings.ADD_ACCOUNT_SETTINGS //添加账户
     * android.settings.AIRPLANE_MODE_SETTINGS //系统设置首页
     * android.settings.APN_SETTINGS //APN设置
     * android.settings.APPLICATION_SETTINGS //应用管理
     * android.settings.BATTERY_SAVER_SETTINGS //节电助手
     * android.settings.BLUETOOTH_SETTINGS //蓝牙
     * android.settings.CAPTIONING_SETTINGS //字幕
     * android.settings.CAST_SETTINGS //无线显示
     * android.settings.DATA_ROAMING_SETTINGS //移动网络
     * android.settings.DATE_SETTINGS //日期和时间设置
     * android.settings.DEVICE_INFO_SETTINGS //关于手机
     * android.settings.DISPLAY_SETTINGS //显示设置
     * android.settings.DREAM_SETTINGS //互动屏保设置
     * android.settings.HARD_KEYBOARD_SETTINGS //实体键盘
     * android.settings.HOME_SETTINGS //应用权限,默认应用设置,特殊权限
     * android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS //忽略电池优化设置
     * android.settings.INPUT_METHOD_SETTINGS //可用虚拟键盘设置
     * android.settings.INPUT_METHOD_SUBTYPE_SETTINGS //安卓键盘语言设置(AOSP)
     * android.settings.INTERNAL_STORAGE_SETTINGS //内存和存储
     * android.settings.LOCALE_SETTINGS //语言偏好设置
     * android.settings.LOCATION_SOURCE_SETTINGS //定位服务设置
     * android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS //所有应用
     * android.settings.MANAGE_APPLICATIONS_SETTINGS //应用管理
     * android.settings.MANAGE_DEFAULT_APPS_SETTINGS //与ACTION_HOME_SETTINGS相同
     * android.settings.action.MANAGE_OVERLAY_PERMISSION //在其他应用上层显示,悬浮窗
     * android.settings.MANAGE_UNKNOWN_APP_SOURCES //安装未知应用 安卓8.0
     * android.settings.action.MANAGE_WRITE_SETTINGS //可修改系统设置 权限
     * android.settings.MEMORY_CARD_SETTINGS //内存与存储
     * android.settings.NETWORK_OPERATOR_SETTINGS //可用网络选择
     * android.settings.NFCSHARING_SETTINGS //NFC设置
     * android.settings.NFC_SETTINGS //网络中的 更多设置
     * android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS //通知权限设置
     * android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS //勿扰权限设置
     * android.settings.ACTION_PRINT_SETTINGS //打印服务设置
     * android.settings.PRIVACY_SETTINGS //备份和重置
     * android.settings.SECURITY_SETTINGS //安全设置
     * android.settings.SHOW_REGULATORY_INFO //监管信息
     * android.settings.SOUND_SETTINGS //声音设置
     * android.settings.SYNC_SETTINGS //添加账户设置
     * android.settings.USAGE_ACCESS_SETTINGS //有权查看使用情况的应用
     * android.settings.USER_DICTIONARY_SETTINGS //个人词典
     * android.settings.VOICE_INPUT_SETTINGS //辅助应用和语音输入
     * android.settings.VPN_SETTINGS //VPN设置
     * android.settings.VR_LISTENER_SETTINGS //VR助手
     * android.settings.WEBVIEW_SETTINGS //选择webview
     * android.settings.WIFI_IP_SETTINGS //高级WLAN设置
     * android.settings.WIFI_SETTINGS //选择WIFI,连接WIFI
     * com.android.settings.Settings$DevelopmentSettingsActivity
     * @return {null|boolean|*}
     */
    openIntentAction(action: any): null | boolean | any;
    /**
     * 打开APP，通过应用名称
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param appName 程序名称，比如今日头条
     * @return 布尔型 true 代表成功，false 代表失败
     */
    openAppByName(appName: any): any;
    /**
     * App是否已经安装
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 应用程序的包名
     * @return 布尔型 true 代表已经安装，false代表未安装
     */
    isAppExist(packageName: any): any;
    /**
     * 取得已安装的程序的版本整型标示
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 应用程序的包名
     * @return 整型 返回版本代码
     */
    getAppVersionCode(packageName: any): any;
    /**
     * 取得已安装的程序的版本字符串标示
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param packageName 应用程序的包名
     * @return string 例如 1.0.0
     */
    getAppVersionName(packageName: any): string;
    /**
     * 取得App文件的包名
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param filePath 文件路径
     * @return string 例如com.tencent.mm
     */
    getApkPkgName(filePath: any): string;
    /**
     * 将图片插入到相册中，此方法会立刻更新相册数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 图片路径
     */
    insertImageToAlbum(path: any): any;
    /**
     * 将视频插入到相册中，此方法会立刻更新相册数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param path 视频路径
     */
    insertVideoToAlbum(path: any): any;
    /**
     * 文件的MD5
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param filePath 文件路径
     * @return string 文件MD5字符串或者null
     */
    fileMd5(filePath: any): string;
    /**
     * 数据计算出来的MD5
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param data 数据
     * @return string 数据MD5字符串或者null
     */
    dataMd5(data: any): string;
    /**
     * 读取JSON中的整型数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param jsonObject JSON对象
     * @param key        配置项目
     * @return 整型 JSON中key对应的整型数据
     */
    readJSONInt(jsonObject: any, key: any): any;
    /**
     * 读取JSON中的字符串数据
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param jsonObject JSON对象
     * @param key        配置项目
     * @return string JSON中key对应的字符串数据
     */
    readJSONString(jsonObject: any, key: any): string;
    /**
     * 判断一个对象为空
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param obj 对象
     * @return 布尔型 true或者false
     */
    isObjectNull(obj: any): any;
    /**
     * 判断一个对象不为空
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param obj 对象
     * @return 布尔型 true或者false
     */
    isObjectNotNull(obj: any): any;
    /**
     * 判断布尔型对象是否为真
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param r 布尔型对象
     * @return 布尔型 true 或者 false
     */
    isTrue(r: any): any;
    /**
     * 取得比例，例如10参数，就是返回10%的比例，如果是true，说明随机比例正确，否则不正确
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param ratio 浮点型 1-100
     * @return 布尔型 true或者false
     */
    getRatio(ratio: any): any;
    /**
     * 随机整型数据，参数是整型长度
     *
     * @param length 位数，要随机产生多少位的整型数据
     * @return 整型 返回指定长度的整型数据
     */
    randomInt(length: any): any;
    /**
     * 取得随机的数字和字母，参数是长度
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param length 长度
     * @return string 字符串数字混合
     */
    randomCharNumber(length: any): string;
    /**
     * 取得某个范围的随机值
     * <Br/>
     * 运行环境: 无限制
     * <Br/>
     * 兼容版本: Android 4.4 以上
     *
     * @param min 最小值
     * @param max 最大值
     * @return 整型 在min和max中间的值, 包含最大和最小值
     */
    getRangeInt(min: any, max: any): any;
    /**
     * 设置剪贴板文本
     * @param text 文本
     * @return boolean
     */
    setClipboardText(text: any): any;
    /**
     * 读取剪贴板文本
     * @return string
     */
    getClipboardText(): string;
    /**
     * 播放mp3音乐
     * @param path 文件路径 例如 /sdcard/a.mp3
     * @param loop 是否循环播放 true代表是
     * @return {boolean} true 代表成功 false 代表失败
     */
    playMp3(path: any, loop: any): boolean;
    /**
     * 播放mp3音乐，等待结束
     * 适配EC 10.3.0+
     * @param path 文件路径 例如 /sdcard/a.mp3
     * @param loop 是否循环播放 true代表是
     * @return {boolean} true 代表成功 false 代表失败
     */
    playMp3WaitEnd(path: any, loop: any): boolean;
    /**
     * 停止播放mp3音乐
     * @return {boolean} true 代表成功 false 代表失败
     */
    stopMp3(): boolean;
    /**
     * 生成一个二维码
     * @param content 二维码字符串内容
     * @param width 图像宽度
     * @param height 图像高度
     * @param logo 图像中心的logo，非必填项，Bitmap 对象，文件转Bitmap请看image模块
     * @return {Bitmap} Android的Bitmap对象，保存到文件请看image模块
     */
    createQRCode(content: any, width: any, height: any, logo: any): any;
    /**
     * 解析一个二维码
     * @param src 图像 Bitmap 对象，文件转Bitmap请看image模块
     * @return {string} 解析后的字符串
     */
    decodeQRCode(src: any): string;
    /**
     * 将zip文件解压到一个文件夹中
     * @param zipFile 目标zip文件的路径
     * @param passwd 目标ip文件密码
     * @param destDir 要解压到的目标文件夹
     * @return {boolean} true 代表成功  false代表失败
     */
    unzip(zipFile: any, passwd: any, destDir: any): boolean;
    /**
     * 解压文件
     * 将zip文件解压到一个文件夹中
     * 适合EC 10.0.0+
     * @param zipFile 目标zip文件的路径
     * @param passwd 目标ip文件密码
     * @param destDir 要解压到的目标文件夹
     * @param fileNameEncode 文件名的编码，Windows压缩的写GBK，其他平台都是UTF-8
     * @return {boolean} true 代表成功  false代表失败
     */
    unzipWithEncode(zipFile: any, passwd: any, destDir: any, fileNameEncode: any): boolean;
    /**
     * 将多个文件压缩成一个zip文件
     * @param zipFile 目标zip文件的路径
     * @param passwd 目标ip文件密码
     * @param files 要压缩的文件或者文件夹，文件数组例如: ["/sdcard/a.txt","/sdcard/bb/"]
     * @return {boolean} true 代表成功  false代表失败
     */
    zip(zipFile: any, passwd: any, files: any): boolean;
    /**
     * 从zip文件中读取数据
     * @param zipFile zip文件的路径
     * @param passwd zip文件密码
     * @param filePathInZip 文件在zip中的路径，例如 a/b.txt
     * @return {string} 解析后的字符串
     */
    readFileInZip(zipFile: any, passwd: any, filePathInZip: any): string;
}
declare function EncodeDecodeWrapper(): void;
declare class EncodeDecodeWrapper {
    /**
     * 获取上一次加解密的错误信息
     * @return {string} null代表无错误
     */
    getErrorMsg(): string;
    /**
     * AES加密
     * @param data 数据字符串
     * @param password 密码，至少8个字符
     * @return {string} 加密后的base64字符串
     */
    aesEncrypt(data: any, password: any): string;
    /**
     * AES解密
     * @param data 加密后的base64字符串
     * @param password 密码，至少8个字符
     * @return {string} 解密后的字符串
     */
    aesDecrypt(data: any, password: any): string;
    /**
     * DES加密
     * @param data 数据字符串
     * @param password 密码，至少8个字符
     * @return {string} 加密后的base64字符串
     */
    desEncrypt(data: any, password: any): string;
    /**
     * DES解密
     * @param data 加密后的base64字符串
     * @param password 密码，至少8个字符
     * @return {string} 解密后的字符串
     */
    desDecrypt(data: any, password: any): string;
    /**
     * 3DES加密,算法是 DESede/CBC/PKCS5Padding
     * @param data 数据字符串
     * @param password 密码
     * @return {string} 加密后的base64字符串
     */
    des3Encrypt(data: any, password: any): string;
    /**
     * 3DES解密，算法是 DESede/CBC/PKCS5Padding
     * @param data 加密后的base64字符串
     * @param password 密码
     * @return {string} 解密后的字符串
     */
    des3Decrypt(data: any, password: any): string;
    /**
     * RSA 私钥加密，算法是RSA/ECB/PKCS1Padding
     * @param data 数据字符串
     * @param password 私钥
     * @return {string} 加密后的base64字符串
     */
    rsaEncryptByPrivate(data: any, password: any): string;
    /**
     * RSA 私钥解密，算法是RSA/ECB/PKCS1Padding
     * @param data 加密后的base64字符串
     * @param password 私钥
     * @return {string} 解密后的字符串
     */
    rsaDecryptByPrivate(data: any, password: any): string;
    /**
     * RSA 公钥加密，算法是RSA/ECB/PKCS1Padding
     * @param data 数据字符串
     * @param password 私钥
     * @return {string} 加密后的base64字符串
     */
    rsaEncryptByPublic(data: any, password: any): string;
    /**
     * RSA 公钥解密，算法是RSA/ECB/PKCS1Padding
     * @param data 加密后的base64字符串
     * @param password 私钥
     * @return {string} 解密后的字符串
     */
    rsaDecryptByPublic(data: any, password: any): string;
}
declare function FloatyWrapper(): void;
declare class FloatyWrapper {
    requestFloatViewPermission(timeout: any): any;
    hasFloatViewPermission(): any;
    /**
     * 显示一个XML悬浮窗
     * @param tag 悬浮窗的标签
     * @param xml xml路径或者内容
     * @param x 起始X位置
     * @param y 起始Y位置
     * @return {View} android的View对象
     */
    showFloatXml(tag: any, xml: any, x: any, y: any): any;
    /**
     * 显示一个View悬浮窗
     * @param tag 悬浮窗的标签
     * @param view android的View对象
     * @param x 起始X位置
     * @param y 起始Y位置
     * @return {View} android的View对象
     */
    showFloatView(tag: any, view: any, x: any, y: any): any;
    /**
     * 设置悬浮窗X坐标
     * @param tag 悬浮窗的标签
     * @param x X位置
     * @return {boolean} true成功 false 失败
     */
    updateX(tag: any, x: any): boolean;
    /**
     * 设置悬浮窗Y坐标
     * @param tag 悬浮窗的标签
     * @param y Y位置
     * @return {boolean} true成功 false 失败
     */
    updateY(tag: any, y: any): boolean;
    /**
     * 获取浮窗位置X坐标
     * @param tag 悬浮窗的标签
     * @return {number} -1 代表失败 其他都是坐标
     */
    getX(tag: any): number;
    /**
     * 获取浮窗位置Y坐标
     * @param tag 悬浮窗的标签
     * @return {number} -1 代表失败 其他都是坐标
     */
    getY(tag: any): number;
    /**
     * 获取浮窗宽度
     * @param tag 悬浮窗的标签
     * @return {number} -1 代表失败 其他都是坐标
     */
    getWidth(tag: any): number;
    /**
     * 获取浮窗高度
     * @param tag 悬浮窗的标签
     * @return {number} -1 代表失败 其他都是坐标
     */
    getHeight(tag: any): number;
    /**
     * 设置悬浮窗大小
     * @param tag 悬浮窗的标签
     * @param w 宽度
     * @param h 高度
     * @return {boolean} true成功 false 失败
     */
    updateSize(tag: any, w: any, h: any): boolean;
    /**
     * 关闭悬浮窗
     * @param tag 悬浮窗的标签
     * @return {boolean} true成功 false 失败
     */
    close(tag: any): boolean;
    /**
     * 设置悬浮窗聚焦
     * @param focusable 是否聚焦
     * @return {boolean} true成功 false 失败
     */
    focusable(tag: any, focusable: any): boolean;
    /**
     * 设置悬浮窗可触摸
     * @param touchable 是否可触摸
     * @return {boolean} true成功 false 失败
     */
    touchable(tag: any, touchable: any): boolean;
    showLogWindow(): any;
    closeLogWindow(): any;
    setLogViewSizeEx(p: any): any;
}
/**
 * 数据存储类
 */
declare function StoragesWrapper(): void;
declare class StoragesWrapper {
    /**
     * 创建存储对象
     * @param name 存储对象名称
     * @return {StorageApiWrapper} 存储对象实例
     */
    create(name: any): StorageApiWrapper;
}
declare function StorageApiWrapper(name: any): void;
declare class StorageApiWrapper {
    constructor(name: any);
    name: any;
    /**
     * 清空存储
     * @return {boolean} true成功 false 失败
     */
    clear(): boolean;
    /**
     * 是否包含某个key
     * @param key 键
     * @return {boolean} true成功 false 失败
     */
    contains(key: any): boolean;
    /**
     * 移出key对应的值
     * @param key 键
     * @return {boolean} true成功 false 失败
     */
    remove(key: any): boolean;
    /**
     * 存储字符串
     * @param key 键
     * @param value 字符串
     * @return {boolean} true成功 false 失败
     */
    putString(key: any, value: any): boolean;
    /**
     * 存储整型数据
     * @param key 键
     * @param value 整型数据
     * @return {boolean} true成功 false 失败
     */
    putInt(key: any, value: any): boolean;
    /**
     * 存储布尔型数据
     * @param key 键
     * @param value 布尔型数据
     * @return {boolean} true成功 false 失败
     */
    putBoolean(key: any, value: any): boolean;
    /**
     * 存储浮点型数据
     * @param key 键
     * @param value 浮点型数据
     * @return {boolean} true成功 false 失败
     */
    putFloat(key: any, value: any): boolean;
    /**
     * 存储并加密字符串数据
     * @param key 键
     * @param value 字符串数据
     * @return {boolean} true成功 false 失败
     */
    putEncrypt(key: any, value: any): boolean;
    /**
     * 获取解密字符串数据
     * @param key 键
     * @return {string} 解密后的字符串
     */
    getDecryptString(key: any): string;
    /**
     * 获取字符串数据
     * @param key 键
     * @return {string} 字符串
     */
    getString(key: any, defaultValue: any): string;
    /**
     * 获取整型数据
     * @param key 键
     * @return {string} 整型
     */
    getInt(key: any, defaultValue: any): string;
    /**
     * 获取布尔型数据
     * @param key 键
     * @return {string} 布尔型
     */
    getBoolean(key: any, defaultValue: any): string;
    /**
     * 获取浮点型数据
     * @param key 键
     * @return {string} 浮点型
     */
    getFloat(key: any, defaultValue: any): string;
    /**
     * 获取所有的key
     * @return {string} JSON字符串
     */
    keys(): string;
    /**
     * 获取所有的key和值
     * @return {string} JSON字符串
     */
    all(): string;
}
declare var utils: UtilsWrapper;
declare var encodeDecoder: EncodeDecodeWrapper;
declare var floaty: FloatyWrapper;
declare var storages: StoragesWrapper;
