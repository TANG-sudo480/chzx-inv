# 安全操作指南

## 快速开始

### 修改前备份
```bash
cd /workspace/projects
./scripts/safe-edit.sh backup
```

### 修改后提交
```bash
./scripts/safe-edit.sh commit
```

### 备份+提交（推荐）
```bash
./scripts/safe-edit.sh both
```

### 查看备份
```bash
./scripts/safe-edit.sh restore
```

## 工作流程

1. **修改前** - 运行 `./scripts/safe-edit.sh backup`
2. **修改中** - 编辑文件
3. **修改后** - 运行 `./scripts/safe-edit.sh commit`

## 备份存储

备份文件保存在 `backups/` 目录，自动保留最近10个备份。

## 恢复备份

```bash
# 查看备份
ls backups/

# 解压恢复（示例）
tar -xzf backups/backup_20240115_120000.tar.gz
```

## GitHub 自动部署

推送到 main 分支后，GitHub Actions 自动部署到 GitHub Pages。
