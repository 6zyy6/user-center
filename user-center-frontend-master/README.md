# 用户中心前端系统

基于 [Ant Design Pro](https://pro.ant.design) 构建的企业级用户管理系统前端。

## 项目介绍

- 基于 React、Ant Design Pro、Umi 的现代化用户中心系统
- 包含用户登录、注册、用户管理等功能
- 清晰的代码结构，易于二次开发和扩展
- 完整的权限管理系统

## 功能列表

- 用户注册
- 用户登录
- 用户管理
- 权限控制
- 响应式设计

## 技术栈

- React
- Ant Design Pro
- Umi
- TypeScript
- Less

## 开发环境准备

1. 确保已安装 Node.js 环境（推荐 v14 或以上）
2. 克隆本仓库到本地
3. 安装依赖:

```bash
npm install
```

或

```bash
yarn
```

## 常用命令

### 启动项目

```bash
npm start
```

### 构建项目

```bash
npm run build
```

### 代码风格检查

```bash
npm run lint
```

可以使用以下命令自动修复一些 lint 错误:

```bash
npm run lint:fix
```

### 测试代码

```bash
npm test
```

## 项目配置

如需修改后端 API 地址，请编辑 `src/plugins/globalRequest.ts` 文件中的 `prefix` 配置。

## 部署方式

1. 执行构建命令生成静态文件:

```bash
npm run build
```

2. 将 `dist` 目录下的文件部署到您的 Web 服务器

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 许可证

[MIT](LICENSE)

