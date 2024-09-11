# Git命令

> 作者: @SouthAki

## 命令详情

推荐软件:**Git and SourceTree**

### 1. 初始化仓库或者是克隆仓库

```bash
git clone "repo path"
```

```bash
git init
```

### 2. 添加到暂存区

```bash
git add .
```

```bash
git add 指定文件
```

### 3. 检查源文件的状态(新增/修改/删除)

```bash
git status
```

> 红色代表还没添加到暂存区
>
> 绿色代表已经添加进暂存区
>
> 没有颜色的话,就没有需要提交的文件

### 4. 添加到本地仓库

  ```bash
  git commit -m ""
  ```

  > **git commit规范**
  >
  > - `feat`： 新增 feature
  > - `fix`: 修复 bug
  > - `docs`: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
  > - `style`: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
  > - `refactor`: 代码重构，没有加新功能或者修复 bug
  > - `perf`: 优化相关，比如提升性能、体验
  > - `test`: 测试用例，包括单元测试、集成测试等
  > - `chore`: 改变构建流程、或者增加依赖库、工具等
  > - `revert`: 回滚到上一个版本

  首次需要配置信息

  ```bash
  git config --global user.email "your email"
  git config --global user.name "your name"
  ```

  检查

  ```bash
  git config --list
  ```

### 5. push到远程

可以在这里指定提交地址

```bash
git remote add origin "your repo website"
```
提交

```bash
git push
```
可以指定分支
```bash
git push -u origin master/dev/...
```

### 6. pull到本地

```bash
git pull
```



## ssh配置

> SSH登录安全性由非对称加密保证

创建ssh链接

```bash
ssh-keygen -t rsa -C "your email" // 后续一直执行就行
```

获取ssh key公钥内容(id_rsa.pub)

```bash
cd ~/.ssh
cat id_rsa.pub
```

验证是否成功

```bash
ssh -T git@github.com
```

