# git 本地常用命令（init/add/commit/log/show/checkout)

1. 初始化项目

   ```
   $ git init
   ```

2. 将文件提交至暂存区

   ```
   git add ./tofu/kung_pao_tofu.txt
   ```

   ```
   git add ..
   ```

3. 查看 git 中相关文件的状态

   ```
   $ git status
   ```

4. 将暂存区的文件提交至本地版本库

   ```
   $ git commit -m "added tofu recipes"
   ```

   `-m`可以给 commit 的内容添加备注

5. 查看提交记录

   ```
   $ git log
   ```

6. 查看某提交内容详情

   ```
   $ git show 9f955d85359fc8e4504d7220f13fad34f8f2c62b
   ```

   `9f955...2c62b`为提交的ID

7. 改变分支或恢复工作树

   ```
   $ git checkout 9f955d85359fc8e4504d7220f13fad34f8f2c62b ./recipes/tofu
   ```

   

   To summarize, using our photo analogy:

   总结，以照片做类比：

   - `git init`: Creates a box in which to permanently store panoramic pictures. 创建一个可永久储存全景图像的 box 。

   - `git add`: Takes a temporary photo of one thing that can be assembled into a panoramic photo later.拍一张某物的临时照片，稍后组合成全景图像。

   - `git commit`: Assembles all available temporary photos into a panoramic photo. Also destroys all temporary photos.  将所有可用的临时照片(git add过的)组装进全景图像。同时销毁所有临时照片。

   - `git log`: Lists all the panoramic photos we’ve ever taken.列出了我们拍过的所有全景照片(git commit 过的)。

   - `git show`: Looks at what is in a particular panoramic photo. 看在特定全景图像中有啥。

   - `git checkout`: Rearranges files back to how they looked in a given panoramic photo. Does not affect the panormiac photos in your box in any way. 重新安排文件，回到指定全景图像中看到的那样。对于你的 box 中的全景图像不会有任何影响。

     

   

   