### GitHub

#### 配置用户名、邮箱和密码

```cmd
git config --global user.name ""
git config --global user.email ""
git config --global user.password ""
```

#### 回滚commit

```python
git log // 查询commit_id
git reset --hard commit_id // 使HEAD指向此次提交记录
git push origin HEAD --force // 强制推送
```



### proxy

```cmd
set HTTP_PROXY=http://127.0.0.1:2080
set HTTPS_PROXY=http://127.0.0.1:2080
```

### 解压文件名带日文的压缩包

```cmd
C:/Users/51406/AppData/Local/Microsoft/WindowsApps/NanaZipC.exe x "VOICEROIDEx_mod.zip" -mcp=932
```

### 打开垃圾箱

```win+r
shell:RecycleBinFolder
```

### 下载b站视频

```cmd
bbdown [视频url] -tv
```

