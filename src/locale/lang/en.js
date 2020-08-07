/**
 * 英文 - 只是列举出来了部分时间和提示相关的文案，这个可以根据具体需求进行更改和添加
 * 注意和中文或者其它语言对齐
 */
export default {
  discuzq: {
    // 测试，不用的时候可以删掉
    hello: 'Hello',
    // 常用
    ok: 'Ok',
    close: 'Close',
    cancel: 'Cancel',
    // 日期相关
    date: {
      now: 'Now',
      today: 'Today',
      year: '',
      month1: 'January',
      month2: 'February',
      month3: 'March',
      month4: 'April',
      month5: 'May',
      month6: 'June',
      month7: 'July',
      month8: 'August',
      month9: 'September',
      month10: 'October',
      month11: 'November',
      month12: 'December',
      week: 'week',
      weeks: {
        sun: 'Sun',
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat',
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec',
      },
      morning: 'morning',
      afternoon: 'afternoon',
    },
    // 列表加载提示相关
    list: {
      loading: 'Loading',
      noMatch: 'No matching data',
      noData: 'No data',
      noMoreData: 'No more data！',
    },
    // 提示框
    msgbox: {
      title: 'Message',
      confirm: 'OK',
      cancel: 'Cancel',
    },
    // 上传
    upload: {
      delete: 'Delete',
      preview: 'Preview',
      continue: 'Continue',
    },
    // 图片
    image: {
      error: 'FAILED',
      imageUploading: 'Image uploading...',
    },
    // 导航
    pageHeader: {
      title: 'Back',
    },
    // @人员页面
    atMember: {
      atTitle: 'Select @ member',
      selectedMember: 'Selected member',
      notSelected: 'Not selected',
      selected: '@ Selected',
    },
    role: {
      noRole: 'No role',
    },
    // 发布页
    post: {
      note: 'You can also enter {num} words',
      placeholder: 'What do you want to say ...',
      post: 'Post',
      paymentAmount: 'Payment amount',
      freeWordCount: 'Free word count',
      selectToViewFreeWordCount: 'Select to view free word count',
      chooseCategory: 'Choose category',
      selectToViewPaymentAmount: 'Select to view payment amount',
      cancel: 'Cancel',
      enterToViewPaymentAmount: 'Enter to view payment amount',
      enterTheWordCount: 'Enter the word count',
      free: 'Free',
      yuan: 'yuan',
      customize: 'Customize',
      theContentCanNotBeBlank: 'the content can not be blank',
      imageCannotBeEmpty: 'Image cannot be empty',
      videoCannotBeEmpty: 'Video cannot be empty',
      pleaseWaitForTheVideoUploadToComplete: 'Please wait for the video upload to complete',
      failedToObtainSignature: 'Failed to obtain signature',
      fromWeChatApplet: 'From WeChat applet',
    },
  },
  uploader: {
    uploadFailed: 'Upload failed',
    uploadedSuccessfully: 'Uploaded successfully',
    videoUploadedSuccessfully: 'Video upload successful',
    videoUploading: 'Upload the video...',
  },
  core: {
    register_close: 'Site registration prohibited',
    bind_error: 'Binding errors',
    noavatar: 'No head',
    thousand: 'Thousand',
    content: 'Content',
    not_authenticated: 'Please log in',
    admin_login: 'Administrator login',
    back_home: '返回首页',
    back_history: '返回上一级页面',
    close: '点击关闭',
    page_not_found: '页面没有找到',
    page_not_found_detail: '您要访问的页面可能已被删除，已更改名称或者暂时不可用',
    not_install: '该站点未安装',
    postTypesDoNotMatch: '帖子类型不匹配，请重新进入本页面',
    cancel: '取消',
    generatePoster: '生成海报',
    wxShare: '微信分享',
    default: '系统错误，请联系管理员',
    access_denied: '拒绝访问',
    category_not_found: '请选择分类',
    censor_not_passed: '抱歉，您填写的内容包含不良信息',
    model_not_found: '您访问的内容不存在或已被删除',
    post_not_found: '您访问的内容不存在或已被删除',
    noViewPermission: '没有查看权限，请点击返回上一级',
    route_not_found: '路由未找到',
    no_bind_user: '未绑定用户',
    account_has_been_bound: '用户或微信已绑定',
    thread_count_fail: '主题数操作错误',
    thread_behavior_fail: '主题状态异常',
    thread_action_fail: '主题操作异常',
    reply_content_cannot_null: '内容不能为空',
    upload_error: '上传图片失败',
    scale_sum_not_10: '分成比例相加必须为 10',
    cannot_delete_category_with_threads: '无法删除存在主题的分类',
    permission_denied: '没有权限，请联系站点管理员',
    validation_error: '验证错误',
    user_update_error: '修改信息失败',
    upload_time_not_up: '上传头像频繁，一天仅允许上传一次头像',
    order_post_not_found: '订单主题不存在',
    order_type_not_found: '订单类型有误',
    order_create_failure: '订单创建失败',
    status_cash_freeze: '钱包已冻结提现',
    available_amount_error: '钱包可用金额不足',
    operate_type_error: '操作类型不存在',
    wallet_status_error: '钱包状态有误',
    file_type_not_allow: '文件类型不允许',
    file_size_not_allow: '文件大小不允许',
    sms_verify_error: '验证码错误',
    operate_forbidden: '非法操作',
    login_failed: '帐号或密码错误',
    login_failures_times_toplimit: '密码错误次数达到5次，请15分钟后再次尝试',
    site_closed: '站点已关闭！',
    ban_user: '您的帐号被禁用，无法访问本站点',
    thread_deleted: '当前主题已被删除',
    post_deleted: '当前评论已被删除',
    register_validate: '帐号审核中，请审核通过后尝试',
    registerValidate: '注册成功，请等待审核',
    waitValidate: '感谢您的注册，站点开启了人工验证注册用户，请等待审核',
    validate_reject: '您的注册申请未通过,无法登录',
    validate_ignore: '您的注册申请还未处理,请稍后尝试',
    mobile_is_already_bind: '手机已经绑定',
    setting_fill_register_reason: '注册时的注册原因必须必填',
    faceid_error: '身份信息验证不通过',
    invalid_emoji_path: '无效的表情目录',
    notification_is_missing_template_config: '微信推送信息不全',
    tencent_secret_key_error: '腾讯云Secretid或SecretKey不正确',
    tencent_vod_transcode_error: '腾讯云云点播转码模板未设置',
    tencent_vod_subappid_error: '腾讯云云点播子应用错误',
    tencent_qcloud_close_current: '腾讯云API配置没有开启',
    pay_password_failures_times_toplimit:
      '您输入的密码错误次数已超限，请点击忘记密码找回或次日后重试',
    qcloud_vod_cover_template_not_found: '截图模版不存在',
    contentdown: '显示更多...',
    contentrefresh: '正在加载...',
    noMoreData: '没有更多数据了',
    loading: '加载中...',
    sort: '排序',
    loadMore: '上拉加载更多',
    TheAmountCannotExceedOneMillion: '金额最高不能超过100万元',
    available: '暂无数据',
    userDeleted: '该用户已被删除',
    InvalidParameterValue: '腾讯云配置参数错误',
  },
  topic: {
    topicPageTitle: '内容详情页',
    commentPageTitle: '评论详情页',
    topictitle: '#话题#',
    topictitlelist: '话题列表',
    newTopic: '新话题',
    allTopics: '全部话题',
    contents: '内容数',
    topicList: '话题列表',
    persenUnit: '人',
    delete: '删除',
    management: '管理',
    reply: '回复',
    giveLike: '点赞',
    giveLikeAlready: '已赞',
    like: '赞',
    writeComment: '写评论',
    writeComments: '写评论...',
    share: '分享',
    reward: '打赏',
    pay: '支付',
    read: '阅读',
    collection: '收藏',
    collectionAlready: '已收藏',
    item: '条',
    comment: '评论',
    noComment: '暂无评论',
    noMoreData: '没有更多数据了',
    whole: '全部',
    paymentViewPicture: '查看图片',
    paymentViewRemainingContent: '查看剩余内容',
    paymentViewVideo: '查看视频',
    publishExamineTip: '您发布的内容正在审核中哦',
    examineTip: '内容正在审核中，审核通过后才能正常显示！',
    underReview: '内容正在审核中，审核通过后才能生成海报',
    commentTip: '当前评论正在审核中，审核通过后才能正常显示！',
    transcodingTip: '视频正在转码中，转码成功后才能正常显示！',
    transcodingFailedTip: '视频转码失败，转码成功才能正常显示！',
    powerTip: '没有权限，请联系站点管理员',
    inReview: '审核中',
    note: '450',
    canWrite: '还能输入',
    word: '个字',
    publish: '发布',
    replyContentCannotBeEmpty: '回复内容不能为空',
    supportTheAuthorToCreate: '支持作者继续创作',
    enterTheRewardPaymeAmount: '输入打赏付费金额',
    edit: '编辑',
    essence: '精华',
    cancelEssence: '取消精华',
    sticky: '置顶',
    cancelSticky: '取消置顶',
    deleteSuccessAndJumpToHome: '删除成功，跳转到首页',
    deleteSuccessAndJumpToBack: '删除成功，跳转到上一级',
    imageNumLimit: '评论只允许上传3张图片',
    noReplyPermission: '没有回复权限',
    noThreadLikePermission: '没有主题点赞权限',
    noReplyLikePermission: '没有评论点赞权限',
    noCommentLikePermission: '没有回复点赞权限',
    deleteSuccessAndJumpToTopic: '删除成功，跳转到主题详情页',
    deleteFailed: '删除失败',
    deleteSuccess: '删除成功',
    iCantRewardMyself: '自己不能打赏自己哦',
    searchTopic: '搜索话题',
    hot: '热度',
    sortTimeSequence: '评论时间正序',
    sortTimeReverse: '评论时间倒序',
    itsAlreadyWantedSort: '已经是你想要的顺序了哦',
  },
  pay: {
    passwordTip: '请输入支付密码',
    payNow: '立即支付',
    passwordSetting: '请设置钱包支付密码',
    balance: '余额',
    sumOfMoney: '金额',
    inputComplete: '输入完成',
    surplus: '剩余',
    contentHide: '内容已隐藏',
    payHave: '支付作者，获得',
    pay: '支付',
    rmb: '元',
    showMyHead: '支付记录显示我的头像',
    wxPay: '微信支付',
    walletPay: '钱包支付',
    walletBalance: '钱包余额',
    walletBalanceNo: '钱包余额不足，剩余',
    AmountCannotBeLessThan0: '自定义金额不能小于0',
    cancel: 'Cancle',
    payTo: 'Will pay to',
    ofAccount: 'account',
    surePay: 'Confirm the payment',
    paySuccess: 'Pay for success',
    payFail: 'Pay for failure',
    payType: 'Method of payment',
    payPassword: 'Pay the password',
    wechatIdentificationQRcode: 'WeChat identify the qr code',
  },
  auth: {
    userinfo: 'Gets the avatar and nickname',
  },
  // 首页
  home: {
    all: 'All',
    theme: 'Member',
    homecontent: 'Content',
    share: 'Share',
    confirmText: 'Filter',
    sticky: 'UP',
    cancel: 'Cancel',
    tabsCircle: 'Home',
    tabsNews: 'Message',
    tabsMy: 'My',
    tabTopic: 'Topic',
    filterPlate: 'Plate',
    filterType: 'Type',
    text: 'Text',
    post: 'Post',
    video: 'Video',
    picture: 'Picture',
    essence: 'Essence',
    followed: 'Fllowed',
    generatePoster: 'Generate Poster',
    wxShare: 'Wechat Share',
    word: 'Word',
    released: 'Released',
    noPostingPermission: 'No post permission is currently available',
    noPostingTopic: 'You do not currently have permission to view a topic',
    ioschoicetitle: 'Limited by iOS, the service is temporarily unavailable',
    ioschoicecontent:
      'Please use Android device to visit, please forgive me for the inconvenience!',
    siteName: 'Site Name',
    needRealname:
      'Publishing content requires real-name authentication, please do so in my profile page',
    needPhone:
      'The release content needs to be bound with the mobile phone number, please do so in my data page',
    record: 'Website registration Information:',
  },
  // 站点管理页面
  manage: {
    inviteMembers: 'Invite members',
    siteMembers: 'site of members',
    siteManagement: 'master of management',
    manageMembers: 'Manage members',
    searchMembers: 'Search members',
    nouse: 'nouse',
    used: 'used',
    invalid: 'invalid',
    overdue: 'overdue',
    setInvalid: 'Set invalid',
    generateInvitationUrl: 'Generate invitation url',
    notSelected: 'notSelected',
    selected: 'selected',
    total: 'there are {total} records',
    member: 'member',
    contents: 'contents',
    share: 'share',
    circleinfo: 'circleinfo',
    siteintroduction: 'siteintroduction',
    creationtime: 'creationtime',
    circlemode: 'circlemode',
    paymentmode: 'paymentmode',
    publicmode: 'publicmode',
    circlemaster: 'circlemaster',
    myRole: 'myRole',
    joinedTime: 'joinedTime',
    periodvalidity: 'periodvalidity',
    myauthority: 'myauthority',
    setting: 'setting',
    noContent: 'No Content',
    contentMaxLength: 'No more than 450 words',
    ui: 'UI system',
  },
  // 消息页面
  notice: {
    notice: 'notice',
    relate: '@ Me',
    relatedMe: ' @ me',
    reply: 'Reply Me',
    repliedMe: ' replied me',
    like: 'Like Me',
    likedMe: ' Liked me',
    reward: 'Reward Me',
    rewardedMe: ' Rewarded me',
    payedMe: ' Payed me',
    system: 'System notices',
    admin: 'Admin',
    delete: 'Delete',
    send: 'Send',
    emptycontent: 'the content can not be empty',
    approved: 'Your withdrawal has been approved, please note that check.',
    unapproved:
      'Your withdrawal review has been rejected, the reason for rejection: the review did not pass.',
  },
  // 我的和个人主页
  profile: {
    uploadFile: 'Upload file',
    filesizecannotexceed: 'File size cannot exceed',
    pleaseselect: 'Please select',
    fileformat: 'File format',
    downloadSuccess: 'Download success',
    downloadError: 'download error',
    thetemporarypathis: 'The temporary path is',
    attachment: 'Attachment',
    post: 'Post',
    notice: 'Notice',
    mine: 'Mine',
    backhomePage: 'Backhome page',
    myprofile: 'My profile',
    mywallet: 'My wallet',
    myfavorite: 'My favorite',
    circleinfo: 'Circle information',
    search: 'Search',
    privateMessage: 'Message',
    circlemanagement: 'Circle management',
    topic: 'Topic',
    following: 'Following',
    followed: 'Followed',
    mutualfollow: 'Mutual follow',
    followers: 'Followers',
    likes: 'Likes',
    username: 'Username',
    avatar: 'Avatar',
    mobile: 'Mobile',
    bindingmobile: 'Binding mobile',
    password: 'Password',
    modify: 'Modify',
    wechat: 'Wechat',
    certification: 'Certification',
    tocertification: 'To certification',
    signature: 'Signature',
    availableamount: 'Available amount',
    freezeamount: 'Freeze amount',
    withdrawalslist: 'Withdrawals list',
    walletlist: 'Walletlist',
    orderlist: 'Orderlist',
    walletpassword: 'Wallet password',
    setpassword: 'Set password',
    setpaypassword: 'Set pay password',
    total: 'Total',
    records: 'Records',
    amountinvolved: 'Amount involved',
    collection: 'Collection',
    item: 'Item',
    status: 'Status',
    time: 'Time',
    paid: 'Paid',
    tobepaid: 'To be paid',
    all: 'All',
    type: 'Type',
    register: 'Register',
    reward: 'Reward',
    paytheme: 'Pay theme',
    paygroup: 'Pay group',
    withdrawalfreeze: 'Withdrawal freeze',
    withdrawalsuccess: 'Withdrawal success',
    withdrawalunfreeze: 'Withdrawal unfreeze',
    registeredincome: 'Registered income',
    rewardincome: 'Reward income',
    laborincome: 'Labor income',
    laborexpenditure: 'Labor expenditure',
    tobereviewed: 'To be reviewed',
    approved: 'Approved',
    auditfailed: 'Audit failed',
    paymenttobemade: 'Payment to bemade',
    paymentsucceed: 'Payment succeed',
    paymentfailed: 'Payment failed',
    theme: 'Theme',
    freezingreason: 'Freezing reason',
    theuserwasdeleted: 'The user was deleted',
    thethemewasdeleted: 'The theme was deleted',
    givearewardforyourtheme: 'Give a reward for your theme',
    givearewardforthetheme: 'Give a reward for thetheme',
    paidtoseeyourtheme: 'Paid to see your theme',
    paidtoview: 'Paid to view',
    orderexpired: 'Order expired',
    payfail: 'Pay fail',
    cancelorder: 'Cancel order',
    permanent: 'Permanent',
    personalhomepage: 'Personal homepage',
    successfullyuploadedtheavatar: 'Successfully uploaded the Avatar',
    validationerror: 'Validation error',
    uploadtimenotup: 'Upload time not up',
    enableEnLang: 'Switch English',
  },
  site: {
    circleintroduction: 'Circle introduction',
    creationtime: 'Creation time',
    periodvalidity: 'Period of validity',
    day: 'Day',
    circlemaster: 'Circle master',
    paynow: 'Pay now',
    justonelaststepjoinnow: 'Just one last step ,join now',
    circlemode: 'Circle mode',
    paymentmode: 'Payment mode',
    publicmode: 'Public mode',
    validfromaccession: 'Valid from accession',
    myauthority: 'My authority',
    inviteyouas: 'Invite you as',
    join: 'Join',
    accepttheinvitationandbecome: 'Accept the invitation and become',
    continueResgister: 'Continue resgister',
  },
  // 搜索
  search: {
    filter: 'Filter',
    search: 'Search',
    searchusers: 'Search users',
    searchthemes: 'Search themes',
    searchkeywords: 'Search keywords',
    cancel: 'Cancel',
    users: 'Users',
    searchmoreusers: 'Search more users',
    norelatedusersfound: 'No related users found',
    themes: 'Themes',
    searchmorethemes: 'Search more themes',
    norelatedthemesfound: 'No related themes found',
  },
  // 登录注册
  user: {
    login: 'Login',
    register: 'Register',
    registerReason: 'Register reason',
    submit: 'Submit',
    username: 'Please input username',
    password: 'Please input password',
    reason: 'Please input reason',
    phoneNumber: 'Please input phoneNumber',
    pwd: 'Please input password',
    verificationCode: 'Please input verificationCode',
    exist: 'An existing account? Login',
    noexist: 'There is no account? Register',
    forgetPassword: 'forget password?',
    phoneNumberLogin: 'Phone number login',
    verificationCodeLogin: 'Verification code login',
    passwordLogin: 'Password to login',
    sendVerificationCode: 'Send verification code',
    registerBindId: 'Register and bind WeChat ID',
    registerBind: 'Register and bind WeChat',
    loginBindId: 'Login and bind WeChat ID',
    loginBind: 'Login and bind WeChat',
    logout: 'Login out',
  },
  ec: {
    tags: 'Tags',
    searchPlaceholder: 'Search for what you want to see...',
  },
};
