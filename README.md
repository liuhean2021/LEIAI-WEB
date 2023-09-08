# LeiAI-WEB

### 雷AI
 - 支持微软OpenAI/Azure GPT-3.5 GPT-4，百度文心一言，阿里通义千问，清华智谱ChatGLM，科大讯飞星火认知大模型V2版本。
 - 支持大模型自定义控制显示关闭
 - 支持Midjourney绘画

### Demo演示系统地址：https://demoai.leikeduntech.com
<ul>
<li>本站是Demo系统，仅提供功能演示作用</li>
<li>私有化部署价格详情<a href="http://demoai.leikeduntech.com/pay" style="color:#6c90e3;">点击跳转会员页面</a></li>
<li>用户端demo用户名：user 密码：123456 地址：<a href="http://demoai.leikeduntech.com" style="color:#6c90e3;" target="_blank">demoai.leikeduntech.com</a></li>
<li>管理端demo用户名：admin 密码：123456 地址：<a href="http://demoai.leikeduntech.com/leiai/admin" style="color:#6c90e3;" target="_blank">demoai.leikeduntech.com/leiai/admin</a></li>
</ul>

### 开放版本leiai-v2.9.0部署说明
 - 环境依赖：node v18.16.1、pm2、pnpm、Nginx或Apache
 - 拉取本仓库到服务器
 - 进入目录：leiai-v2.9.0
 - 复制.env.example为配置文件.env 并修改数据库和redis
 - 安装依赖：pnpm install
 - 启动项目：pnpm start
   - 初始化创建super用户成功、用户名为[super]、初始密码为[lei-super]
   - 初始化创建admin用户成功、用户名为[admin]、初始密码为[123456]
 - 访问浏览器：你的服务器IP:9520、后台 你的服务器IP:9520/leiai/admin
 - Nginx或Apache服务器用你的域名yourdomain.com配置反向代理指向127.0.0.1:9520，然后用域名访问

### ------------微信-------------------------QQ------------
<div style="height: 300px;">
<img style="height:300px;" alt="author" src="docs/img/author-wx-qq.png">
</div>

### 部分页面截图
<img style="height:300px;" alt="modelswitch" src="docs/img/modelswitch.png">
<img style="height:300px;" alt="chatmodel" src="docs/img/chatmodel.png">
<img style="height:300px;" alt="mjdraw" src="docs/img/mjdraw.png">
