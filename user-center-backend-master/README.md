# 用户中心系统

## 项目简介

用户中心系统是一个基础的用户管理系统，实现了用户注册、登录、查询等基本功能。这是企业中常用的基础系统。

![用户界面预览](./doc/img.png)

## 技术栈

### 后端

- Java 编程语言
- Spring + SpringMVC + SpringBoot 框架
- MyBatis + MyBatis Plus 数据访问框架
- MySQL 数据库
- jUnit 单元测试库

### 部署方式

- 单机部署
- Nginx
- 容器化部署

## 功能特点

- 用户注册
- 用户登录（基于Cookie和Session的身份验证）
- 用户查询和管理
- 用户注销

## 项目结构

项目采用标准分层架构：
- Controller：处理HTTP请求和响应
- Service：包含业务逻辑
- Mapper：数据访问层
- Model：数据模型和DTO
- Common：共享工具和常量
- Exception：自定义异常和处理器

## 快速开始

### 前提条件
- JDK 8+
- Maven 3.6+
- MySQL 5.7+

### 数据库设置
1. 创建新的MySQL数据库
2. 执行`/sql`目录中的SQL脚本

### 配置
1. 在`application.yml`中更新数据库配置
2. 根据需要设置应用属性

### 运行应用
```bash
# 克隆仓库
git clone https://github.com/yourusername/user-center-backend.git

# 导航到项目目录
cd user-center-backend

# 构建项目
mvn clean package

# 运行应用
java -jar target/user-center-0.0.1-SNAPSHOT.jar
```

## 部署选项

1. 传统部署（Nginx + SpringBoot）
2. Docker容器化
3. 云平台部署

## 未来改进计划

- 添加用户资料管理
- 实现基于角色的访问控制
- 增加更安全的认证方法
- 实现邮箱验证
- 添加活动日志和审计功能
