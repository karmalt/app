#!/usr/bin/env sh
​
# 当发生错误时中止脚本
set -e
​
# 构建
npm run build
​
# cd 到构建输出的目录下
cd dist
​
# 部署到自定义域域名
# echo 'www.example.com' > CNAME
​
git init
git add -A
git commit -m 'deploy'
​
# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
​
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ProgrammerMao-001/myWebOnline.git master:gh-pages 
​
cd -
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/m0_74149462/article/details/13265297