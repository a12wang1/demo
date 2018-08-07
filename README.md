DEMO
===========================

###########准备
1. node v0.10.28+
2. Ganache客户端，修改端口号为9545
3. 谷歌浏览器，安装MetaMask插件，连接到http://127.0.0.1:9545
4. 将Ganache提供的测试账户导入到MetaMask中


###########部署步骤

1. 将sql文件下的sql导入数据库中
2.  在modules/modelHead.js修改相关文件信息
3. npm install 安装相关环境变量
4. truffle compilete 
5. truffle migrate --reset （current block 不为0 ，部署成功）
6. npm start 启动项目


###########目录结构描述
│  .project
│  app.js  //对外接口
│  asyncSeries.js
│  package-lock.json
│  package.json
│  README.md
│  truffle-box.json
│  truffle-config.js
│  truffle.js  //可修改连接端口
│
├─bin  
│      www  //主路径
│
├─contracts  //合约
│      Coin.sol
│      Migrations.sol
│
├─migrations
│      1_initial_migration.js
│      2_deploy_contracts.js
│
├─modules  //数据库连接
│      modelHead.js
│
├─public
│  ├─images  // 图片
│  │      engine_1.jpg
│  │      engine_2.jpg
│  │      engine_3.jpg
│  │      engine_4.jpg
│  │      engine_5.jpg
│  │      LED大灯.jpg
│  │      power.jpg
│  │      tyer_1.jpg
│  │      tyer_2.jpg
│  │      tyer_3.jpg
│  │      前门.jpg
│  │      压缩机.jpg
│  │      变速箱_1.jpg
│  │      变速箱_2.jpg
│  │      方向盘.jpg
│  │      火花塞.jpg
│  │      蓄电池.jpg
│  │
│  ├─javascripts  //JS 
│  │      app.js
│  │      bootstrap.min.js
│  │      connect.js
│  │      iziModal.min.js
│  │      jquery-2.1.4.min.js
│  │      jquery.min.js
│  │      jquery.pagination.js
│  │      purchase.js
│  │      truffle-contract.js
│  │      web3.min.js
│  │
│  └─stylesheets  //CSS 
│          App.css
│          bootstrap.min.css
│          bootstrap.min.css.map
│          demo.css
│          iconfont.css
│          index.css
│          iziModal.css
│          open-sans.css
│          oswald.css
│          pure-min.css
│          style.css
│          style1.css
│
├─routes  //后台
│      users.js
│
├─sql      //数据库
│      shop_merchant.sql
│      shop_parts.sql
│      shop_routines.sql
│      shop_shops.sql
│
├─test
│      .gitkeep
│      TestAdoption.sol
│
└─views         //页面存放路径
    │  error.ejs
    │
    └─index
            details.ejs  // 详情页面
            index.ejs   // 首页
            purchase.ejs  //购买记录页面
            success.ejs 
