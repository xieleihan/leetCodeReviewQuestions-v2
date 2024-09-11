# Git命令

> 作者: @SouthAki
>
> license: [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.txt)

## 专业名词

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）
- Remote：远程仓库

## 基本命令详情

推荐软件:**Git and SourceTree**

查看版本

```bash
git --version
```



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

*撤销某一次的commit(未push到云端)*

```bash  
git reset --soft HEAD^
```

**注意，仅仅是撤回commit操作，您写的代码仍然保留。**

> HEAD^的意思是上一个版本，也可以写成HEAD~1
>
> 如果你进行了2次commit，想都撤回，可以使用HEAD~2
>
> > 还有几个参数
> >
> > - `--mixed`:不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
> >
> > 	这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
> >
> > - `--soft`:不删除工作空间改动代码，撤销commit，不撤销git add . 
> >
> > - `--hard`:删除工作空间改动代码，撤销commit，撤销git add . 
> >
> > 	注意完成这个操作后，就恢复到了上一次的commit状态。

首次需要配置信息

  ```bash
  git config --global user.email "your email"
  git config --global user.name "your name"
  ```

  检查

  ```bash
  git config --list
  ```

  修改某些`config`

1. 按`i`进入编辑模式,某些情况请搭配`shift`
2. 退出请按`esc`
3. 保存修改:`shift+:`+`wq!`
4. 不保存:`shift+:`+`q!`


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

## 进阶命令详情

### 1. 检查代码提交的历史

```bash
git log || git log --oneline --graph /* 两个都可以 */
```

### 2. 回滚版本

推荐步骤

- 先回滚回去

	```bash
	git reset --hard [hash id] // oldVersion
	```

- 再切换回新版本

	```bash
	git reset --hard [hash id] // newVersion
	```

	再提交,防止本地与远程产生冲突

具体参数在上面有更详细的介绍[^1]

### 3. 检查分支列表

```bash
git branch -l
```

```bash
git branch -a // 打印全部分支
```



创建并切换分支

```bash
git checkout -b ~[develop]
```

直接切换分支

```bash
git checkout ~[feature]
```

合并分支到主分支

- 先切换回主分支

	```bash
	git checkout master
	```

- 合并分支

	```bash
	git merge ~[branch]
	```

	记得`s + wq`

### 4. 删除分支

```bash
git branch -d ~[branch name]
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

![](https://www.gnu.org/graphics/gplv3-or-later-sm.png)

[^1]: 基本命令的第四部分
