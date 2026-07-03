# Gitee Pages 静态展示页

这个目录是系统的公开展示版本，可以直接放到 Gitee Pages。它只包含固定示例、图表和说明，不包含后端服务、模型文件、训练数据和真实预测接口。

## 放到 Gitee 仓库

1. 在 Gitee 建一个仓库，例如 `chenyuxiang0425` 或现有个人主页仓库。
2. 把本目录复制到仓库的 `aroma-prediction/` 路径下。
3. 提交并推送到 Gitee。
4. 在仓库服务中开启 Gitee Pages。

如果这是个人主页仓库，访问路径通常是：

```text
https://你的用户名.gitee.io/aroma-prediction/
```

如果是普通项目仓库，访问路径通常是：

```text
https://你的用户名.gitee.io/仓库名/aroma-prediction/
```

## 注意

静态展示页不能进行真实预测。真正的预测系统仍需要部署 FastAPI 后端，并通过登录密码访问。
