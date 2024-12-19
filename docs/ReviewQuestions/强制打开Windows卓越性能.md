# 强制打开Windows卓越性能

## 步骤

在`powershell`中,输入以下的命令

```bash
powercfg -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61
```

1. 出现“电源方案GUID”字样，复制冒号后那一串代码（即GUID）
2. 输入 “`powercfg /S GUID`代码” 