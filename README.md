## jsutils

javascript 里一些常用的工具库

使用
--------

文档地址：https://fktxjl.github.io/jsutils/index.html

自动化脚本
----------

| 命令 | 描述信息 |
|:-----|:---------|
| npm run lint            | eslint 检查 |
| npm run doc             | 更新本地文档 |
| npm run doc:server      | 启动本地文档服务器 |
| npm ~~run~~ test        | 运行单元测试 |
| npm run test:coverage   | 查看测试覆盖率报告 |
| npm run changelog       | 更新 CHANGELOG 文件 |


贡献指南
--------

**代码规范**

*   代码风格遵循该规范：[standard](https://github.com/standard/standard)
*   新增内容需要提供完善的文档（[关于 jsdoc](https://github.com/jsdoc3/jsdoc)）
*   新增内容需要编写单元测试，并且测试覆盖率至少达到 90% 以上

**提交规范**

*   git commit message 必须符合 [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit) 规范
*   安装 [Commitizen](https://github.com/commitizen/cz-cli) 工具：`npm install -g commitizen`
*   提交代码时使用 `git cz` 替代 `git commit`

License
-------

This repo is released under the [MIT License](http://www.opensource.org/licenses/MIT).