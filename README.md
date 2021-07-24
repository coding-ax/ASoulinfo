# ASoulInfo
一个使用typescript开发的，用于快速查看A-Soul成员相关数据的CLI工具

## 1. npm包主页
https://www.npmjs.com/package/asoulinfo
## 2. 环境要求
node v12+  
npm v6+
## 3. 快速体验：
### 安装
```sh
npm install -g asoulinfo
```

### 查看A-Soul粉丝量
```sh
asoulinfo -c
```

### 查看A-Soul最近的一条动态
```SH
asoulinfo -s
```

## 开发
1. clone本项目  
2. npm install安装依赖  
3. 本项目基于ts开发，运行下面命令会自动进行ts编译和监听文件变化。
```sh
npm run watch-start
```
4. 如果你只需要立刻运行 请使用
```sh
npm start
```
