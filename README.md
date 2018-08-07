DEMO
===========================

###########准备
1. node v0.10.28+
2. Ganache客户端，修改端口号为9545
3. 谷歌浏览器，安装MetaMask插件，连接到http://127.0.0.1:9545
4. 将Ganache提供的测试账户导入到MetaMask中


###########部署步骤

1. 将sql文件下的sql导入MySQL数据库中
2. 在modules/modelHead.js修改相关文件信息
3. npm install 安装相关环境变量
4. truffle compilete 
5. truffle migrate --reset （current block 不为0 ，部署成功）
6. npm start 启动项目
